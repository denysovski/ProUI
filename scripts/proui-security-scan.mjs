#!/usr/bin/env node
// ProUI security scan: finds code patterns behind the attacks in security/ATTACKS.md.
// Usage: node proui-security-scan.mjs [dir ...] [--json] [--ci] [--build <dir>]
//   --json         machine-readable output
//   --ci           exit with code 1 when a hard finding remains
//   --build <dir>  also search a build output folder (.next, dist, out) for leaked keys
// Suppress a finding on one line with the comment "proui-ignore <ID>" and a reason.
// It points at code to read; it cannot prove a site is safe. No dependencies; Node 18+.

import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, extname, relative, basename } from 'node:path';
import { execFileSync } from 'node:child_process';

const args = process.argv.slice(2);
const asJson = args.includes('--json');
const ci = args.includes('--ci');
const bi = args.indexOf('--build');
const buildDir = bi >= 0 ? args[bi + 1] : null;
const roots = args.filter((a, i) => !a.startsWith('--') && !(bi >= 0 && i === bi + 1));
if (roots.length === 0) roots.push('.');

const IGNORE_DIRS = new Set(['node_modules', '.git', 'dist', 'build', '.next', '.nuxt', '.astro', '.svelte-kit',
  '.vercel', '.netlify', 'coverage', 'vendor', '.cache', '.turbo', 'out', '.output', '__tests__', 'test', 'tests']);
const CODE = new Set(['.js', '.mjs', '.cjs', '.ts', '.mts', '.cts', '.jsx', '.tsx', '.vue', '.svelte', '.astro', '.php', '.py', '.rb']);
const CONFIG = new Set(['.json', '.yml', '.yaml', '.toml', '.env']);
const CLIENT_DIR = /(^|[\\/])(components|app[\\/](?!api[\\/])[^\\/]*\.(?:tsx|jsx)$|pages[\\/](?!api[\\/])|src[\\/](?:ui|client|views|hooks)|public)([\\/]|$)/;

// A key that is secret by name. Public build prefixes ship it to every visitor.
const PUBLIC_SECRET = /\b(?:NEXT_PUBLIC|VITE|PUBLIC|EXPO_PUBLIC|REACT_APP|NUXT_PUBLIC|GATSBY)_[A-Z0-9_]*(?:SECRET|PRIVATE|SERVICE_ROLE|OPENAI|ANTHROPIC|STRIPE_SECRET|DATABASE_URL|DB_PASS|PASSWORD|ADMIN|WEBHOOK_SECRET|SK_)[A-Z0-9_]*/;
const KEY_PATTERNS = /sk-(?:proj-|ant-)?[A-Za-z0-9_-]{20,}|sk_live_[0-9a-zA-Z]{10,}|rk_live_[0-9a-zA-Z]{10,}|AKIA[0-9A-Z]{16}|ghp_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}|xox[bp]-[0-9A-Za-z-]{10,}|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|eyJhbGciOi[A-Za-z0-9_-]{20,}\.eyJ[A-Za-z0-9_-]*cm9sZSI6InNlcnZpY2Vfcm9sZS/;

const REQ = String.raw`(?:req|request|ctx\.request|event|input|body|params|searchParams|query|formData)`;
const CHECKS = [
  // ---------- hard ----------
  { id: 'SEC-04', at: 'AT-60', level: 'hard', kind: 'any', msg: 'secret key in the source (value hidden): move it to the server and rotate it',
    re: KEY_PATTERNS, hide: true },
  { id: 'SEC-04', at: 'AT-60', level: 'hard', kind: 'any', msg: 'secret-named variable with a public build prefix: it ships to every visitor',
    re: PUBLIC_SECRET },
  { id: 'SEC-07', at: 'AT-01', level: 'hard', kind: 'code', msg: 'SQL built from a template string with ${...}: use parameters',
    re: /\b(?:query|execute|exec|raw|sql|prepare|run|all|get)\s*\(\s*`\s*(?:SELECT|INSERT|UPDATE|DELETE|WITH|REPLACE)\b[^`]*\$\{/i },
  { id: 'SEC-07', at: 'AT-01', level: 'hard', kind: 'code', msg: 'SQL built by string concatenation: use parameters',
    re: /["'`]\s*(?:SELECT\s[^"'`]*\sFROM|INSERT\s+INTO|UPDATE\s+\w+\s+SET|DELETE\s+FROM)\b[^"'`]*["'`]\s*\+\s*\w/i },
  { id: 'SEC-07', at: 'AT-01', level: 'hard', kind: 'code', msg: 'unsafe raw-query helper',
    re: /\$queryRawUnsafe|\$executeRawUnsafe|sequelize\.literal\(\s*`[^`]*\$\{|knex\.raw\(\s*`[^`]*\$\{/ },
  { id: 'SEC-05', at: 'AT-04', level: 'hard', kind: 'code', msg: 'shell command built from a string with variables: use execFile/spawn with an argument array',
    re: /\b(?:exec|execSync)\s*\(\s*(?:`[^`]*\$\{|["'][^"']*["']\s*\+)/ },
  { id: 'SEC-05', at: 'AT-04', level: 'hard', kind: 'code', msg: 'eval or new Function on dynamic input',
    re: /\beval\s*\(\s*(?!["'`])|new\s+Function\s*\(/ },
  { id: 'SEC-29', at: 'AT-12', level: 'hard', kind: 'code', msg: 'whole request body saved to the database (mass assignment): pick allowed fields',
    re: new RegExp(String.raw`\.(?:create|update|upsert|insert|insertOne|updateOne|findOneAndUpdate|save)\s*\(\s*\{?\s*(?:data\s*:\s*)?(?:\.\.\.\s*)?${REQ}\.body\b|\.(?:create|update|insert)\s*\(\s*(?:\{\s*data\s*:\s*)?(?:await\s+)?req\.json\(\)`) },
  { id: 'SEC-30', at: 'AT-30', level: 'hard', kind: 'code', msg: 'price, total or discount read from the request: compute it on the server',
    re: new RegExp(String.raw`${REQ}\.(?:body|query)?\.?(?:price|unitPrice|unit_amount|amount|total|subtotal|discount|shipping)\b|(?:const|let)\s*\{[^}]*\b(?:price|amount|total|discount)\b[^}]*\}\s*=\s*(?:await\s+)?(?:req\.body|req\.json\(\)|body)`) },
  { id: 'SEC-28', at: 'AT-12', level: 'hard', kind: 'code', msg: 'role or admin flag read from the request',
    re: new RegExp(String.raw`${REQ}\.(?:body|query)?\.?(?:role|isAdmin|is_admin|admin|permissions|plan|credits)\b`) },
  { id: 'SEC-32', at: 'AT-83', level: 'hard', kind: 'code', msg: 'AI model or token limit taken from the request: fix them on the server',
    re: new RegExp(String.raw`model\s*:\s*${REQ}\.(?:body\.)?model\b|max_?tokens\s*:\s*${REQ}\.|(?:const|let)\s*\{[^}]*\bmodel\b[^}]*\}\s*=\s*(?:await\s+)?(?:req\.body|req\.json\(\)|body)`) },
  { id: 'SEC-09', at: 'AT-13', level: 'hard', kind: 'code', msg: 'JWT decoded without verifying the signature',
    re: /\bjwt\.decode\s*\(|algorithms\s*:\s*\[[^\]]*["']none["']/ },
  { id: 'SEC-12', at: 'AT-44', level: 'hard', kind: 'any', msg: 'CORS reflects any origin or allows * with credentials',
    re: /origin\s*:\s*(?:true|["']\*["'])\s*,\s*credentials\s*:\s*true|credentials\s*:\s*true\s*,\s*origin\s*:\s*(?:true|["']\*["'])|Access-Control-Allow-Origin["']?\s*[:,]\s*(?:req\.headers\.origin|request\.headers\.get\(["']origin)/i },

  // ---------- warnings ----------
  { id: 'SEC-06', at: 'AT-03', level: 'warn', kind: 'code', msg: 'raw HTML injection: sanitise with DOMPurify or render as text',
    re: /dangerouslySetInnerHTML|\.innerHTML\s*=|\.outerHTML\s*=|insertAdjacentHTML|v-html=|\{@html\s|document\.write\(/ },
  { id: 'SEC-36', at: 'AT-42', level: 'warn', kind: 'code', msg: 'redirect to a URL from the request: allow only own relative paths',
    re: new RegExp(String.raw`(?:redirect|res\.redirect|NextResponse\.redirect|location\.href\s*=|location\.assign|location\.replace)\s*\(?\s*(?:new URL\()?\s*${REQ}\.|redirect\(\s*(?:next|returnTo|redirectTo|callbackUrl|returnUrl)\b`) },
  { id: 'SEC-35', at: 'AT-52', level: 'warn', kind: 'code', msg: 'server fetch of a URL from the request (SSRF): allow-list hosts',
    re: new RegExp(String.raw`\b(?:fetch|axios(?:\.get|\.post)?|got|request|ky)\s*\(\s*${REQ}\.(?:body|query|params)?\.?(?:url|href|link|target|src|image|webhook)\b`) },
  { id: 'SEC-37', at: 'AT-51', level: 'warn', kind: 'code', msg: 'file path built from request input (path traversal)',
    re: new RegExp(String.raw`(?:readFile|readFileSync|createReadStream|sendFile|unlink|writeFile|path\.join|path\.resolve)\s*\([^)]*${REQ}\.(?:body|query|params)?\.?\w+`) },
  { id: 'SEC-20', at: 'AT-32', level: 'warn', kind: 'code', msg: 'webhook handler without a visible signature check',
    special: 'webhook' },
  { id: 'SEC-31', at: 'AT-33', level: 'warn', kind: 'code', msg: 'coupon or gift-card check and use may not be atomic: check in one UPDATE ... WHERE used_at IS NULL or a transaction',
    special: 'coupon' },
  { id: 'SEC-25', at: 'AT-35', level: 'warn', kind: 'code', msg: 'Math.random() used for a token, code or ID: use crypto.randomUUID() or crypto.getRandomValues()',
    re: /(?:token|code|otp|secret|password|coupon|voucher|invite|reset|key|id)\w*\s*[:=][^;\n]*Math\.random\(\)/i },
  { id: 'SEC-09', at: 'AT-24', level: 'warn', kind: 'code', msg: 'cookie set without httpOnly or secure',
    special: 'cookie' },
  { id: 'SEC-16', at: 'AT-43', level: 'warn', kind: 'code', msg: 'target="_blank" without rel="noopener"',
    re: /<a\b(?=[^>]*target=["']_blank["'])(?![^>]*rel=["'][^"']*noopener)[^>]*>/ },
  { id: 'SEC-15', at: 'AT-54', level: 'warn', kind: 'code', msg: 'error details or stack sent to the client',
    re: /res\.(?:status\(\s*5\d\d\s*\)\.)?(?:json|send)\(\s*(?:\{[^}]*)?(?:err|error|e)\.(?:stack|message)\b|NextResponse\.json\(\s*\{[^}]*(?:err|error|e)\.stack/ },
  { id: 'SEC-33', at: 'AT-82', level: 'warn', kind: 'code', msg: 'AI output rendered as HTML or markdown with raw HTML: sanitise it',
    re: /(?:dangerouslySetInnerHTML\s*=\s*\{\{\s*__html\s*:\s*(?:completion|message|answer|response|output|reply|content))|rehypeRaw|allowDangerousHtml\s*:\s*true/ },
  { id: 'SEC-03', at: 'AT-41', level: 'info', kind: 'code', msg: 'iframe allowed from anywhere: set frame-ancestors',
    re: /frame-ancestors\s+\*|X-Frame-Options["']?\s*[:,]\s*["']ALLOWALL/i },
];

const findings = [];
const add = (f) => findings.push(f);
let files = 0;

function walk(dir) {
  let entries;
  try { entries = readdirSync(dir); } catch { return; }
  for (const name of entries) {
    if (IGNORE_DIRS.has(name)) continue;
    const p = join(dir, name);
    let st;
    try { st = statSync(p); } catch { continue; }
    if (st.isDirectory()) walk(p);
    else if (st.isFile() && st.size < 1_500_000 && !/\.min\.|\.map$|lock|\.d\.ts$/.test(name)) {
      const ext = name.startsWith('.env') ? '.env' : extname(name).toLowerCase();
      if (CODE.has(ext) || CONFIG.has(ext)) scanFile(p, ext, name);
    }
  }
}

function applies(kind, ext) {
  if (kind === 'any') return true;
  if (kind === 'code') return CODE.has(ext);
  return false;
}

function ignored(line, id) {
  return /proui-ignore/.test(line) && (!/proui-ignore\s+[A-Z]/.test(line) || line.includes(`proui-ignore ${id}`));
}

function scanFile(path, ext, name) {
  files++;
  const text = readFileSync(path, 'utf8');
  const rel = relative(process.cwd(), path) || path;
  const isExample = /\.example$|\.sample$|\.template$/.test(name);
  const lines = text.split(/\r?\n/);
  lines.forEach((line, i) => {
    if (line.length > 2000) return;
    for (const c of CHECKS) {
      if (c.special || !applies(c.kind, ext) || ignored(line, c.id)) continue;
      if (isExample && c.id === 'SEC-04') continue;
      const m = line.match(c.re);
      if (m) add({ id: c.id, at: c.at, level: c.level, file: rel, line: i + 1, msg: c.msg,
        match: c.hide ? '[hidden]' : m[0].trim().slice(0, 90) });
    }
  });
  if (!CODE.has(ext)) return;

  // whole-file checks
  if (/webhook/i.test(rel) && /(?:export\s+(?:async\s+)?function\s+POST|\.post\s*\(|app\.post|router\.post)/.test(text)
      && !/constructEvent|verifySignature|verifyWebhook|webhooks\.verify|validateWebhook|createHmac|timingSafeEqual|svix|Webhook\s*\(\s*.*\)\.verify|unwrap\(/i.test(text)) {
    add({ id: 'SEC-20', at: 'AT-32', level: 'warn', file: rel, line: 0, msg: CHECKS.find((c) => c.special === 'webhook').msg, match: '' });
  }
  if (/\b(?:coupon|voucher|promo|giftcard|gift_card|redeem)\w*/i.test(text) && /\b(?:used|redeemed|usedAt|used_at|uses|remaining)\b/.test(text)
      && /\b(?:findUnique|findFirst|findOne|select)\b/.test(text) && /\b(?:update|save)\b/.test(text)
      && !/\$transaction|transaction\(|FOR UPDATE|WHERE[^;]*(?:used_at|usedAt)\s+IS\s+NULL|used_at:\s*null|usedAt:\s*null|@@unique|ON CONFLICT|idempotency/i.test(text)) {
    add({ id: 'SEC-31', at: 'AT-33', level: 'warn', file: rel, line: 0, msg: CHECKS.find((c) => c.special === 'coupon').msg, match: '' });
  }
  lines.forEach((line, i) => {
    if (/\b(?:cookies\(\)\.set|res\.cookie|setCookie|serialize)\s*\(/.test(line) && !ignored(line, 'SEC-09')) {
      const win = lines.slice(i, i + 6).join(' ');
      if (/session|token|auth|sid/i.test(win) && !(/httpOnly\s*:\s*true/i.test(win) && /secure\s*:\s*(?:true|process\.env)/i.test(win))) {
        add({ id: 'SEC-09', at: 'AT-24', level: 'warn', file: rel, line: i + 1, msg: CHECKS.find((c) => c.special === 'cookie').msg, match: line.trim().slice(0, 90) });
      }
    }
  });
}

function gitChecks(root) {
  if (!existsSync(join(root, '.git'))) return;
  const git = (...a) => { try { return execFileSync('git', ['-C', root, ...a], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }); } catch { return ''; } };
  const tracked = git('ls-files').split('\n').filter((f) => /(^|\/)\.env(\.[\w-]+)?$/.test(f) && !/\.(example|sample|template)$/.test(f));
  for (const f of tracked) add({ id: 'SEC-34', at: 'AT-61', level: 'hard', file: f, line: 0, msg: 'env file tracked by Git: remove it, ignore it and rotate every key in it', match: '' });
  const hist = git('log', '--all', '--name-only', '--format=', '--diff-filter=A').split('\n')
    .filter((f) => /(^|\/)\.env(\.[\w-]+)?$/.test(f) && !/\.(example|sample|template)$/.test(f) && !tracked.includes(f));
  for (const f of [...new Set(hist)]) add({ id: 'SEC-34', at: 'AT-61', level: 'hard', file: f, line: 0, msg: 'env file is in the Git history: rotate its keys, then clean the history', match: '' });
  const gi = existsSync(join(root, '.gitignore')) ? readFileSync(join(root, '.gitignore'), 'utf8') : '';
  if (!/^\s*\.env/m.test(gi)) add({ id: 'SEC-34', at: 'AT-61', level: 'warn', file: '.gitignore', line: 0, msg: '.env files are not ignored', match: '' });
  if (!['package-lock.json', 'pnpm-lock.yaml', 'yarn.lock', 'bun.lockb', 'bun.lock'].some((l) => existsSync(join(root, l))) && existsSync(join(root, 'package.json'))) {
    add({ id: 'SEC-14', at: 'AT-62', level: 'warn', file: 'package.json', line: 0, msg: 'no lockfile committed', match: '' });
  }
}

function buildScan(dir) {
  const walkB = (d) => {
    let entries; try { entries = readdirSync(d); } catch { return; }
    for (const n of entries) {
      const p = join(d, n); let st; try { st = statSync(p); } catch { continue; }
      if (st.isDirectory()) { if (n !== 'cache') walkB(p); }
      else if (/\.(js|mjs|html|json|txt)$/.test(n) && st.size < 8_000_000) {
        const t = readFileSync(p, 'utf8');
        if (KEY_PATTERNS.test(t) || /service_role/.test(t)) add({ id: 'SEC-04', at: 'AT-60', level: 'hard', file: relative(process.cwd(), p), line: 0, msg: 'secret key found in the build output (value hidden)', match: '[hidden]' });
      }
    }
  };
  walkB(dir);
}

for (const r of roots) { walk(r); gitChecks(r); }
if (buildDir) buildScan(buildDir);

const order = { hard: 0, warn: 1, info: 2 };
findings.sort((a, b) => order[a.level] - order[b.level] || a.id.localeCompare(b.id) || a.file.localeCompare(b.file) || a.line - b.line);
const hard = findings.filter((f) => f.level === 'hard').length;

if (asJson) {
  console.log(JSON.stringify({ files, hard, total: findings.length, findings }, null, 2));
} else {
  console.log(`ProUI security scan: ${files} files, ${findings.length} findings (${hard} hard)\n`);
  let last = '';
  for (const f of findings) {
    if (f.level !== last) { console.log(`\n${f.level.toUpperCase()}`); last = f.level; }
    const where = f.line ? `${f.file}:${f.line}` : f.file;
    console.log(`  ${f.id.padEnd(7)} ${f.at.padEnd(6)} ${where}  ${f.msg}${f.match ? `  [${f.match}]` : ''}`);
  }
  if (findings.length === 0) console.log('No findings. Now run the checklist and the self-tests: security/CHECKLIST.md, security/PROBES.md.');
  else console.log('\nRead each finding in context (security/ATTACKS.md has the fix for every AT id).\nSuppress a false positive with "proui-ignore <ID> <reason>" on that line.');
}

if (ci && hard > 0) process.exit(1);
