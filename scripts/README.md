# Scripts

> Small Node scripts with no dependencies (Node 18+).

[Back to ProUI](../README.md)

| Script | What it does |
| --- | --- |
| [proui-scan.mjs](proui-scan.mjs) | scans a website project for slop patterns and hard-rule violations |
| [build-effects.mjs](build-effects.mjs) | builds the effect catalogues in `effects/catalog/` from their JSON; `--check` fails if out of date |
| [build-rulebooks.mjs](build-rulebooks.mjs) | builds every rulebook README from its `rulebook.json`; `--check` validates IDs, references and freshness |
| [build-package.mjs](build-package.mjs) | builds the marketplace ZIP in `dist/` without the owner's personal files and with every reference to them removed; fails if one is left |

```bash
# scan a project; --ci exits with 1 when a hard rule is found
node scripts/proui-scan.mjs ./src
node scripts/proui-scan.mjs ./src --json

# after editing a rulebook.json
node scripts/build-rulebooks.mjs
node scripts/build-rulebooks.mjs --check

# marketplace package
node scripts/build-package.mjs 4.1.0
```

Silence a false positive in a project with a comment on the same line:

```css
.timeline__marker { border-left: 4px solid var(--accent); } /* proui-ignore SL-49 */
```
