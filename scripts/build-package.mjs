#!/usr/bin/env node
// Builds the marketplace package (dist/proui-<version>.zip) from the tracked files.
// The owner's personal files (style/MY-STYLE.md, style/PINS.md) stay out of the package,
// and every reference to them is removed so an agent never looks for a file that is not there.
// Usage: node scripts/build-package.mjs [version]
import { execSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync, rmSync, copyFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const version = process.argv[2] || 'local';
const out = join(root, 'dist', `proui-${version}`);
const zip = join(root, 'dist', `proui-${version}.zip`);

const PRIVATE = ['style/MY-STYLE.md', 'style/PINS.md'];
const SKIP = /^(\.github\/|dist\/|scripts\/build-package\.mjs$)|\.(png|jpe?g|gif|webp|mp4|woff2?)$/;

// [file, exact text, replacement]; every edit must apply, so a changed source file fails loudly.
const EDITS = [
  ['SKILL.md', "| Building for the repository owner (denysovski) | `style/MY-STYLE.md`, `style/PINS.md` |\n", ''],
  ['style/README.md', '| [MY-STYLE.md](MY-STYLE.md) | personal: my taste, measured from my Pinterest board |\n', ''],
  ['style/README.md', '| [PINS.md](PINS.md) | personal: links to my pins, sorted by theme |\n', ''],
  ['style/STYLES.md', 'built from my Pinterest board (`PINS.md`) and my own projects.', 'built from studied references and real projects.'],
  ['workflow/WORKFLOW.md', 'guidelines) and `style/MY-STYLE.md` when building for the repository owner.', 'guidelines).'],
  ['workflow/WORKFLOW.md', "Always use at least four, mixing galleries and the user's own board.", 'Always use at least four.'],
  ['workflow/WORKFLOW.md', "| `style/PINS.md` (the user's Pinterest board) | the user's own taste; always included | pick the themes that match the brief, open 5–10 pins |\n", ''],
  ['workflow/WORKFLOW.md', 'the brief **and** `style/MY-STYLE.md`,', 'the brief,'],
  ['workflow/WORKFLOW.md', "different moods, at least one from the user's own board, at least one light", 'different moods, at least one light'],
  ['style/README.md', " and the repository owner's personal taste.", '.'],
  ['assets/src/workflow.html', ', Mobbin, Dribbble and the Pinterest board.', ', Mobbin and Dribbble.'],
  ['references/README.md', "- Pinterest board `web-design`: all 878 loadable pins viewed and measured (see `style/MY-STYLE.md`, with links\n  to example pins by theme). The pin images are not copied here because most were made by other designers.\n", ''],
  ['NOTICE', '\nPinterest pins listed in style/PINS.md belong to their authors and are linked only.\n', ''],
];

const files = execSync('git ls-files', { cwd: root, encoding: 'utf8' })
  .split('\n').filter(Boolean)
  .filter((f) => !PRIVATE.includes(f) && !SKIP.test(f));

rmSync(out, { recursive: true, force: true });
rmSync(zip, { force: true });
for (const f of files) {
  mkdirSync(dirname(join(out, f)), { recursive: true });
  copyFileSync(join(root, f), join(out, f));
}

for (const [file, from, to] of EDITS) {
  const p = join(out, file);
  const text = readFileSync(p, 'utf8');
  if (!text.includes(from)) throw new Error(`Package edit did not apply in ${file}: ${from.slice(0, 60)}`);
  writeFileSync(p, text.replace(from, to));
}

const left = execSync(`grep -rnI -e "MY-STYLE" -e "PINS\\.md" -e "own board" -e "Pinterest board" . || true`, { cwd: out, encoding: 'utf8' }).trim();
if (left) throw new Error(`Private files are still referenced in the package:\n${left}`);
if (!existsSync(join(out, 'SKILL.md'))) throw new Error('SKILL.md missing from package');

execSync(`zip -qr "${zip}" .`, { cwd: out });
console.log(`${files.length} files packaged, private references removed: ${zip}`);
