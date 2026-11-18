# Scripts

> Small Node scripts with no dependencies (Node 18+).

[Back to XSlop](../README.md)

| Script | What it does |
| --- | --- |
| [xslop-scan.mjs](xslop-scan.mjs) | scans a website project for slop patterns and hard-rule violations |
| [build-effects.mjs](build-effects.mjs) | builds the effect catalogues in `effects/catalog/` from their JSON; `--check` fails if out of date |
| [build-rulebooks.mjs](build-rulebooks.mjs) | builds every rulebook README from its `rulebook.json`; `--check` validates IDs, references and freshness |

```bash
# scan a project; --ci exits with 1 when a hard rule is found
node scripts/xslop-scan.mjs ./src
node scripts/xslop-scan.mjs ./src --json

# after editing a rulebook.json
node scripts/build-rulebooks.mjs
node scripts/build-rulebooks.mjs --check
```

Silence a false positive in a project with a comment on the same line:

```css
.timeline__marker { border-left: 4px solid var(--accent); } /* xslop-ignore SL-49 */
```
