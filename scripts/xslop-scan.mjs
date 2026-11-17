#!/usr/bin/env node
// XSlop scan: finds common AI-slop and production problems in a web project's source files.
// Usage: node xslop-scan.mjs [dir ...] [--json] [--ci]
//   --json  machine-readable output
//   --ci    exit with code 1 when a hard rule is found
// Suppress a finding on one line by adding the comment "xslop-ignore" (optionally with a rule id) to it.
// Findings are evidence to check in context, not verdicts. No dependencies; Node 18+.

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname, relative } from 'node:path';

const args = process.argv.slice(2);
const asJson = args.includes('--json');
const ci = args.includes('--ci');
const roots = args.filter((a) => !a.startsWith('--'));
if (roots.length === 0) roots.push('.');

const IGNORE_DIRS = new Set(['node_modules', '.git', 'dist', 'build', '.next', '.nuxt', '.astro', '.svelte-kit',
  '.vercel', '.netlify', 'coverage', 'vendor', '.cache', '.turbo', 'out', '.output']);
const MARKUP = new Set(['.html', '.htm', '.jsx', '.tsx', '.vue', '.svelte', '.astro', '.njk', '.liquid', '.hbs', '.php', '.erb']);
const STYLE = new Set(['.css', '.scss', '.sass', '.less', '.pcss']);
const SCRIPT = new Set(['.js', '.mjs', '.cjs', '.ts', '.jsx', '.tsx']);
const PROSE = new Set(['.md', '.mdx']);
const ALL = new Set([...MARKUP, ...STYLE, ...SCRIPT, ...PROSE, '.json', '.env', '.yml', '.yaml', '.toml']);

// kind: where a check applies. markup = templates/components, style = CSS and inline styles/classes,
// text = user-facing copy (markup + prose), any = every scanned file.
const CHECKS = [
  // Hard rules
  { id: 'SL-17', level: 'hard', kind: 'markup', msg: 'decorative counting label (01, (02), 03 /, No. 4)',
    re: />\s*(?:\(\s*)?0[1-9](?:\s*\))?\s*(?:[\/—–.]\s*(?:0?[0-9]+)?)?\s*</ },
  { id: 'SL-17', level: 'hard', kind: 'text', msg: 'decorative counting label ("No. 3")',
    re: /(?:^|[>\s"'])No\.\s?\d{1,3}\b/ },
  { id: 'SL-17', level: 'hard', kind: 'style', msg: 'zero-padded CSS counter used as decoration',
    re: /counter\([^)]*decimal-leading-zero/ },
  { id: 'SL-44', level: 'hard', kind: 'text', msg: 'placeholder content left in the build',
    re: /lorem ipsum|dolor sit amet|123 Main St|John Doe|Jane Doe|info@company\.com|your-?company\.com|\(555\) ?\d{3}/i },
  { id: 'SL-49', level: 'hard', kind: 'style', msg: 'side-stripe accent border',
    re: /border-(?:left|right|inline-start|inline-end)(?:-width)?\s*:\s*(?:[3-9]|1\d)px|\bborder-[lrse]-(?:4|8|\[[3-9]px\])\b/ },
  { id: 'SEC-04', level: 'hard', kind: 'any', msg: 'possible secret committed (value hidden)',
    re: /sk_live_[0-9a-zA-Z]{10,}|AKIA[0-9A-Z]{16}|ghp_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}|-----BEGIN (?:RSA |EC )?PRIVATE KEY-----|xox[bp]-[0-9A-Za-z-]{10,}/, hideMatch: true },

  // Slop patterns (warnings)
  { id: 'SL-01', level: 'warn', kind: 'style', msg: 'purple-to-blue gradient',
    re: /from-(?:purple|violet|indigo|fuchsia)-\d{3}[^"'`]*to-(?:blue|cyan|sky|indigo)-\d{3}|gradient\([^)]*(?:#8b5cf6|#7c3aed|#a855f7|#6366f1|#9333ea)[^)]*(?:#3b82f6|#2563eb|#06b6d4|#0ea5e9)/i },
  { id: 'SL-28', level: 'warn', kind: 'style', msg: 'gradient-filled text',
    re: /background-clip\s*:\s*text|\bbg-clip-text\b/ },
  { id: 'SL-03', level: 'warn', kind: 'style', msg: 'large blur, possibly a glowing background orb',
    re: /filter\s*:\s*blur\(\s*(?:[4-9]\d|\d{3,})px|\bblur-(?:3xl|\[\d{2,}px\])\b/ },
  { id: 'SL-54', level: 'warn', kind: 'style', msg: 'zero-offset glow shadow',
    re: /box-shadow\s*:[^;]*\b0(?:px)?\s+0(?:px)?\s+(?:[2-9]\d|\d{3,})px|shadow-\[0_0_\d{2,}px/ },
  { id: 'SL-52', level: 'info', kind: 'style', msg: 'hard offset shadow (fine only if the style asks for it)',
    re: /box-shadow\s*:\s*-?[2-9]px\s+-?[2-9]px\s+0(?:px)?\s/ },
  { id: 'SL-56', level: 'info', kind: 'style', msg: 'grid or stripe background pattern',
    re: /repeating-linear-gradient|linear-gradient\([^)]*1px[^)]*\)\s*,\s*linear-gradient\([^)]*1px/ },
  { id: 'SL-36', level: 'warn', kind: 'style', msg: 'bouncy easing (MO-13)',
    re: /cubic-bezier\([^)]*,\s*(?:1\.\d*[1-9]|[2-9](?:\.\d+)?)\s*[,)]|easeOutBack|easeOutElastic|back\.out|elastic\.out|bounce\.out/ },
  { id: 'SL-62', level: 'warn', kind: 'style', msg: 'extreme negative letter-spacing',
    re: /letter-spacing\s*:\s*-0?\.(?:0[5-9]|[1-9])\d*em|tracking-\[-0?\.(?:0[5-9]|[1-9])/ },
  { id: 'SL-72', level: 'warn', kind: 'markup', msg: 'scroll-reveal library hiding content at rest',
    re: /\bdata-aos=|\bdata-sal=|\bclass(?:Name)?=["'][^"']*\bwow\b/ },
  { id: 'SL-30', level: 'warn', kind: 'markup', msg: 'emoji in a heading or button',
    re: /<(?:h[1-6]|button)[^>]*>[^<]*[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u },
  { id: 'SL-31', level: 'warn', kind: 'text', msg: 'sparkle decoration', re: /✨|✦|\bSparkles\b/ },
  { id: 'SL-39', level: 'warn', kind: 'text', msg: 'generic hero copy',
    re: /supercharge your|the future of [a-z]+|unlock the power|take your [a-z]+ to the next level|built for the modern/i },
  { id: 'SL-41', level: 'warn', kind: 'markup', msg: 'vague button or link label',
    re: />\s*(?:Get started|Learn more|Submit|Click here|Read more)\s*</i },
  { id: 'SL-71', level: 'warn', kind: 'text', msg: 'buzzword (CP-03)',
    re: /\b(?:seamless(?:ly)?|unlock|elevate|empower(?:s|ing)?|revolutioni[sz]e|next-level|cutting-edge|game-?changing|effortless(?:ly)?|leverage|in today's fast-paced)\b/i },

  // Typography, accessibility, security
  { id: 'TY-14', level: 'warn', kind: 'style', msg: 'justified text', re: /text-align\s*:\s*justify|\btext-justify\b/ },
  { id: 'TY-06', level: 'warn', kind: 'style', msg: 'text smaller than 12px',
    re: /font-size\s*:\s*(?:[0-9]|1[01])(?:\.\d+)?px|\btext-\[(?:[0-9]|1[01])px\]/ },
  { id: 'AX-06', level: 'warn', kind: 'style', msg: 'focus outline removed (check a :focus-visible replacement exists)',
    re: /outline\s*:\s*(?:none|0)\b|\boutline-none\b/ },
  { id: 'AX-07', level: 'warn', kind: 'markup', msg: 'image without alt attribute',
    re: /<img\b(?![^>]*\balt\s*=)[^>]*>/ },
  { id: 'SEC-16', level: 'warn', kind: 'markup', msg: 'target="_blank" without rel="noopener"',
    re: /<a\b(?=[^>]*target=["']_blank["'])(?![^>]*rel=["'][^"']*noopener)[^>]*>/ },
  { id: 'SEC-06', level: 'warn', kind: 'script', msg: 'raw HTML injection (sanitise or use text)',
    re: /dangerouslySetInnerHTML|\.innerHTML\s*=|v-html=/ },
];

const findings = [];
const stats = { files: 0, emDash: new Map(), backdrop: 0, lucide: 0, motion: false, reducedMotion: false };

function walk(dir) {
  let entries;
  try { entries = readdirSync(dir); } catch { return; }
  for (const name of entries) {
    if (IGNORE_DIRS.has(name)) continue;
    const p = join(dir, name);
    let st;
    try { st = statSync(p); } catch { continue; }
    if (st.isDirectory()) walk(p);
    else if (st.isFile() && st.size < 1_500_000 && !/\.min\.|\.map$|lock/.test(name)) {
      const ext = name.startsWith('.env') ? '.env' : extname(name).toLowerCase();
      if (ALL.has(ext)) scanFile(p, ext);
    }
  }
}

function applies(kind, ext) {
  if (kind === 'any') return true;
  if (kind === 'markup') return MARKUP.has(ext);
  if (kind === 'style') return STYLE.has(ext) || MARKUP.has(ext);
  if (kind === 'script') return SCRIPT.has(ext) || MARKUP.has(ext);
  if (kind === 'text') return MARKUP.has(ext) || PROSE.has(ext);
  return false;
}

function scanFile(path, ext) {
  stats.files++;
  const text = readFileSync(path, 'utf8');
  const rel = relative(process.cwd(), path) || path;
  if (/@keyframes|transition\s*:|gsap\.|animate\(/.test(text)) stats.motion = true;
  if (/prefers-reduced-motion|useReducedMotion|motion-reduce/.test(text)) stats.reducedMotion = true;
  stats.backdrop += (text.match(/backdrop-filter\s*:\s*blur|\bbackdrop-blur/g) || []).length;
  if (/from ['"]lucide-react['"]|lucide/.test(text)) stats.lucide++;
  if (MARKUP.has(ext) || PROSE.has(ext)) {
    const n = (text.match(/—/g) || []).length;
    if (n > 2) stats.emDash.set(rel, n);
  }
  const lines = text.split(/\r?\n/);
  lines.forEach((line, i) => {
    if (line.length > 2000) return; // minified or data line
    for (const c of CHECKS) {
      if (!applies(c.kind, ext)) continue;
      if (/xslop-ignore/.test(line) && (!/xslop-ignore\s+[A-Z]/.test(line) || line.includes(`xslop-ignore ${c.id}`))) continue;
      const m = line.match(c.re);
      if (m) {
        findings.push({ id: c.id, level: c.level, file: rel, line: i + 1, msg: c.msg,
          match: c.hideMatch ? '[hidden]' : m[0].trim().slice(0, 80) });
      }
    }
  });
}

for (const r of roots) walk(r);

for (const [file, n] of stats.emDash) {
  findings.push({ id: 'SL-37', level: 'warn', file, line: 0, msg: `${n} em dashes in copy`, match: '—' });
}
if (stats.backdrop > 4) findings.push({ id: 'SL-04', level: 'info', file: '(project)', line: 0,
  msg: `${stats.backdrop} backdrop blurs: glass may be everywhere`, match: '' });
if (stats.lucide > 10) findings.push({ id: 'SL-29', level: 'info', file: '(project)', line: 0,
  msg: `Lucide used in ${stats.lucide} files: check icons have a job`, match: '' });
if (stats.motion && !stats.reducedMotion) findings.push({ id: 'AX-12', level: 'warn', file: '(project)', line: 0,
  msg: 'animations found but no prefers-reduced-motion handling', match: '' });

const order = { hard: 0, warn: 1, info: 2 };
findings.sort((a, b) => order[a.level] - order[b.level] || a.id.localeCompare(b.id) || a.file.localeCompare(b.file) || a.line - b.line);
const hard = findings.filter((f) => f.level === 'hard').length;

if (asJson) {
  console.log(JSON.stringify({ files: stats.files, hard, total: findings.length, findings }, null, 2));
} else {
  console.log(`XSlop scan: ${stats.files} files, ${findings.length} findings (${hard} hard)\n`);
  let last = '';
  for (const f of findings) {
    if (f.level !== last) { console.log(`\n${f.level.toUpperCase()}`); last = f.level; }
    const where = f.line ? `${f.file}:${f.line}` : f.file;
    console.log(`  ${f.id.padEnd(7)} ${where}  ${f.msg}${f.match ? `  [${f.match}]` : ''}`);
  }
  if (findings.length === 0) console.log('No findings. Still review the rendered pages: a scanner cannot judge design.');
  else console.log('\nCheck each finding in context. Suppress a false positive with an "xslop-ignore <ID>" comment on that line.');
}

if (ci && hard > 0) process.exit(1);
