# ProUI scan

Run the bundled pattern scanner over a project and explain the results.

```bash
node path/to/proui/scripts/proui-scan.mjs ./src           # human-readable report
node path/to/proui/scripts/proui-scan.mjs ./src --json    # for CI
```

- The scanner reads HTML, CSS, JS/TS, JSX/TSX, Vue, Svelte, Astro and Markdown files and reports rule IDs with
  file and line.
- Its findings are evidence, not verdicts. Open each one in context: a numbered list in a legal document is not
  `SL-17`; a client's brand gradient is not `SL-01`.
- Fix the mechanical ones directly (em dashes in copy, `outline: none`, missing `alt`), group the rest by rule
  and pass them to `polish` or `critique`.
- In CI it exits with code 1 when hard rules fail (`SL-17`, `SL-44`, `SL-49`), so a pull request cannot ship
  them.
