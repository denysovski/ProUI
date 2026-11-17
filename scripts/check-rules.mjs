#!/usr/bin/env node
// Checks the XSlop repository itself: every rule ID is unique and sequential per group, and the ranges and
// totals written in rules/README.md, SKILL.md and README.md match the rule files. Run from the repo root.

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const errors = [];
const byGroup = new Map();
const seen = new Map();

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith('.md') && name !== 'README.md') {
      readFileSync(p, 'utf8').split('\n').forEach((line, i) => {
        const m = line.match(/^- \*\*([A-Z]+)-(\d+)\b/);
        if (!m) return;
        const id = `${m[1]}-${m[2]}`;
        if (seen.has(id)) errors.push(`duplicate ${id} in ${p}:${i + 1} (first in ${seen.get(id)})`);
        seen.set(id, `${p}:${i + 1}`);
        if (!byGroup.has(m[1])) byGroup.set(m[1], []);
        byGroup.get(m[1]).push(Number(m[2]));
      });
    }
  }
}
walk('rules');

let total = 0;
const ranges = {};
for (const [g, nums] of byGroup) {
  const sorted = [...nums].sort((a, b) => a - b);
  sorted.forEach((n, i) => { if (n !== i + 1) errors.push(`${g}: expected ${g}-${String(i + 1).padStart(2, '0')}, found ${g}-${String(n).padStart(2, '0')}`); });
  ranges[g] = sorted.length;
  total += sorted.length;
}

const index = readFileSync('rules/README.md', 'utf8');
for (const [g, n] of Object.entries(ranges)) {
  const want = `\`${g}-${String(n).padStart(2, '0')}\``;
  const row = index.split('\n').find((l) => l.includes(`\`${g}-01\` to`));
  if (!row) errors.push(`rules/README.md has no row for ${g}`);
  else if (!row.includes(want)) errors.push(`rules/README.md: ${g} range should end at ${want}`);
}
for (const f of ['rules/README.md', 'SKILL.md', 'README.md']) {
  const text = readFileSync(f, 'utf8');
  const m = text.match(/(\d{3}) rules/);
  if (!m) errors.push(`${f}: no "<n> rules" total found`);
  else if (Number(m[1]) !== total) errors.push(`${f}: says ${m[1]} rules, files have ${total}`);
}

// every rule ID referenced in docs must exist
const refs = new Set();
function collect(dir) {
  for (const name of readdirSync(dir)) {
    if (name === '.git' || name === 'node_modules') continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) collect(p);
    else if (name.endsWith('.md')) for (const m of readFileSync(p, 'utf8').matchAll(/`([A-Z]{2,3})-(\d{2})`/g)) refs.add(`${m[1]}-${m[2]}`);
  }
}
collect('.');
for (const r of refs) if (byGroup.has(r.split('-')[0]) && !seen.has(r)) errors.push(`reference to missing rule ${r}`);

console.log(`${total} rules in ${byGroup.size} groups: ${Object.entries(ranges).map(([g, n]) => `${g} ${n}`).join(', ')}`);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('All rule IDs unique, sequential and consistent with the docs.');
