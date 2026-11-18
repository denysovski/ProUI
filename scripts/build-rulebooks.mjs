#!/usr/bin/env node
// Builds the rulebook READMEs from their data files.
//
//   rules/<rulebook>/rulebook.json   the source of truth for one rulebook (edit this)
//   rules/<rulebook>/README.md       generated: the readable rulebook with Do and Don't tables
//   rules/README.md                  generated: the index of every rulebook
//
// Usage:
//   node scripts/build-rulebooks.mjs           write the READMEs
//   node scripts/build-rulebooks.mjs --check   fail if a README is out of date or the data is invalid
//
// No dependencies; Node 18+. Run from the repository root.

import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const CHECK = process.argv.includes('--check');
const ROOT = 'rules';
const errors = [];

const books = readdirSync(ROOT)
  .filter((d) => existsSync(join(ROOT, d, 'rulebook.json')))
  .map((d) => JSON.parse(readFileSync(join(ROOT, d, 'rulebook.json'), 'utf8')))
  .sort((a, b) => a.order - b.order);

// ---------- validation ----------
const allIds = new Map();
for (const b of books) {
  if (!/^[A-Z]{2,3}$/.test(b.prefix)) errors.push(`${b.folder}: bad prefix ${b.prefix}`);
  b.rules.forEach((r, i) => {
    const want = `${b.prefix}-${String(i + 1).padStart(2, '0')}`;
    if (r.id !== want) errors.push(`${b.folder}: expected ${want}, found ${r.id}`);
    if (!['do', 'dont'].includes(r.kind)) errors.push(`${r.id}: kind must be "do" or "dont"`);
    if (r.level && !['soft', 'hard'].includes(r.level)) errors.push(`${r.id}: level must be "soft" or "hard"`);
    if (!r.title || !r.text) errors.push(`${r.id}: title and text are required`);
    if (allIds.has(r.id)) errors.push(`duplicate id ${r.id}`);
    allIds.set(r.id, r);
  });
}
for (const b of books) for (const id of b.related || []) if (!allIds.has(id)) errors.push(`${b.folder}: related ${id} does not exist`);

// every `XX-00` reference in Markdown and JSON text must exist
function scanRefs(dir) {
  for (const name of readdirSync(dir)) {
    if (['.git', 'node_modules'].includes(name)) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) scanRefs(p);
    else if (/\.(md|json)$/.test(name)) {
      for (const m of readFileSync(p, 'utf8').matchAll(/`([A-Z]{2,3})-(\d{2})`/g)) {
        const id = `${m[1]}-${m[2]}`;
        if (books.some((b) => b.prefix === m[1]) && !allIds.has(id)) errors.push(`${p}: reference to missing rule ${id}`);
      }
    }
  }
}
scanRefs('.');

// ---------- rendering ----------
const esc = (s) => s.replace(/\|/g, '\\|');
const label = (r) => (r.level === 'hard' ? ' <sub>HARD RULE</sub>' : r.level === 'soft' ? ' <sub>SOFT</sub>' : '');
const row = (r) => `| \`${r.id}\` | **${esc(r.title)}**${label(r)} | ${esc(r.text)} |`;
const NOTE = '<sub>Generated from `rulebook.json` by `scripts/build-rulebooks.mjs`. To change a rule, edit the JSON and run the script.</sub>';

function renderBook(b) {
  const dos = b.rules.filter((r) => r.kind === 'do');
  const donts = b.rules.filter((r) => r.kind === 'dont');
  const out = [];
  out.push(`# ${b.name}`, '', `> ${b.summary}`, '');
  out.push(`[All rulebooks](../README.md) · Prefix \`${b.prefix}\` · ${b.category}`, '');
  if (b.prefix === 'SL') {
    out.push('> [!IMPORTANT]', '> Every rule here is a **don\'t**. Rules marked SOFT are allowed only as a deliberate, sparing part of a brand or a chosen style. Rules marked HARD RULE can never be switched back on.', '');
  }
  if (dos.length) {
    out.push('## Do', '', 'Positive rules: what a finished, professional site does.', '', '| ID | Rule | Details |', '| --- | --- | --- |', ...dos.map(row), '');
  }
  if (donts.length) {
    out.push('## Don\'t', '', 'Negative rules: what never ships.', '', '| ID | Avoid | Details |', '| --- | --- | --- |', ...donts.map(row), '');
  }
  if (b.related?.length) {
    out.push('## Related anti-slop rules', '', 'Don\'ts from the [Anti-Slop Rulebook](../anti-slop/README.md) that belong to this subject.', '',
      '| ID | Avoid |', '| --- | --- |', ...b.related.map((id) => `| \`${id}\` | ${esc(allIds.get(id)?.title || '')} |`), '');
  }
  if (b.check?.length) out.push('## How to check', '', ...b.check.map((c) => `- ${c}`), '');
  if (b.sources?.length) out.push('## Sources', '', ...b.sources.map((s) => `- [${s.title}](${s.url})`), '');
  out.push('---', '', NOTE, '');
  return out.join('\n');
}

function renderIndex() {
  const cats = [...new Set(books.map((b) => b.category))];
  const out = [];
  out.push('# Rulebooks', '', '> Every rule ProUI applies, sorted into rulebooks by subject. Each rulebook has its own folder with a readable `README.md` and the data file it is built from.', '');
  out.push('## How rules are named', '', 'Every rule has an ID made of a **prefix** and a **number**:', '', '```text',
    'SEO-05',
    '│   └─ number: the rule\'s place in its rulebook. It never changes once given,',
    '│      so prompts, reviews and commits can refer to it. It is not a priority.',
    '└──── prefix: the rulebook (SEO = SEO Rulebook, ST = States Rulebook, SL = Anti-Slop)',
    '```', '');
  out.push('Each rule is either a **Do** (positive: what to do) or a **Don\'t** (negative: what never ships). Some carry a label:', '',
    '| Label | Meaning |', '| --- | --- |',
    '| SOFT | allowed only as a deliberate, sparing part of a brand or a chosen style |',
    '| HARD RULE | can never be switched back on, whatever the prompt says |', '');
  for (const c of cats) {
    out.push(`## ${c}`, '', '| Rulebook | Prefix | Covers |', '| --- | --- | --- |');
    for (const b of books.filter((x) => x.category === c)) out.push(`| [${b.name}](${b.folder}/README.md) | \`${b.prefix}\` | ${esc(b.summary)} |`);
    out.push('');
  }
  const hard = [...allIds.values()].filter((r) => r.level === 'hard');
  out.push('## Hard rules', '', '| ID | Never |', '| --- | --- |', ...hard.map((r) => `| \`${r.id}\` | ${esc(r.title)} |`), '');
  out.push('## Which rulebooks lead in each mode', '', '| Mode | Lead with | Then |', '| --- | --- | --- |',
    '| [Persuade](../modes/persuade.md) | Anti-Slop, Craft, Typography, Colour, Copy | everything else |',
    '| [Operate](../modes/operate.md) | Dashboards, Components, Forms, States, Accessibility | everything else; Gradients rarely apply |',
    '| [Read](../modes/read.md) | Typography, Layout, Navigation, Accessibility, SEO | everything else |',
    '| [Experience](../modes/experience.md) | Anti-Slop, Effects, Motion, Images, Performance, Accessibility | everything else |', '');
  out.push('## Adding or changing a rule', '', '```bash',
    '# 1. edit the rulebook data',
    'rules/<rulebook>/rulebook.json   # add an object to "rules" with the next free id',
    '',
    '# 2. rebuild the READMEs',
    'node scripts/build-rulebooks.mjs',
    '',
    '# 3. validate (also runs in CI)',
    'node scripts/build-rulebooks.mjs --check', '```', '');
  out.push('A rule object:', '', '```json', JSON.stringify({ id: 'SEO-30', kind: 'do', title: 'Short title', text: 'One or two sentences: what to do and why.', level: 'soft' }, null, 2), '```', '');
  out.push('`kind` is `do` or `dont`; `level` is optional (`soft` or `hard`). IDs are never reused or renumbered.', '');
  out.push('---', '', NOTE.replace('`rulebook.json`', 'the `rulebook.json` files'), '');
  return out.join('\n');
}

const outputs = new Map();
for (const b of books) outputs.set(join(ROOT, b.folder, 'README.md'), renderBook(b));
outputs.set(join(ROOT, 'README.md'), renderIndex());

if (CHECK) {
  for (const [p, content] of outputs) {
    if (!existsSync(p) || readFileSync(p, 'utf8') !== content) errors.push(`${p} is out of date: run node scripts/build-rulebooks.mjs`);
  }
} else {
  for (const [p, content] of outputs) writeFileSync(p, content);
}

const dos = [...allIds.values()].filter((r) => r.kind === 'do').length;
console.log(`${books.length} rulebooks, ${allIds.size} rules (${dos} do, ${allIds.size - dos} don't)`);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(CHECK ? 'Rulebooks valid and up to date.' : 'Rulebook READMEs written.');
