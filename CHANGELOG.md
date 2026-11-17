# Changelog

## 3.0.0 (2026-11-17)

- Rulebooks: every subject has its own folder in `rules/` with a `README.md` (Do and Don't tables, how to
  check, sources) built from a `rulebook.json` data file by `scripts/build-rulebooks.mjs`.
- Rules are split into positive (Do) and negative (Don't), with SOFT and HARD RULE labels.
- New rulebooks: Images and Media (`IM`), Navigation (`NV`), Forms and Checkout (`FO`), Localisation (`LO`).
- Many new rules from research: WCAG 2.2 criteria, the European Accessibility Act, Baymard checkout research,
  NN/g navigation and carousel findings, Google Search Essentials and spam policies, Core Web Vitals.
- Rulebooks are named by subject (SEO Rulebook, Performance Rulebook) instead of by rule count.
- Simpler main README with contents, ID explanation, rulebook table, workflow diagram, websites and tools.
- A README in every folder; source checklists moved to `references/source-checklists.md`.
- `scripts/check-rules.mjs` replaced by `scripts/build-rulebooks.mjs --check`.

## 2.0.0 (2026-11-17)

- Restructured into folders: `rules/` (design, interaction, product, production), `modes/`, `commands/`,
  `workflow/`, `templates/` (context, workflow, reports, github), `references/`, `scripts/`.
- 351 rules in 18 groups, up from 167 in 8. New groups: Typography (`TY`), Colour (`CL`), Gradients and
  backgrounds (`GR`), Layout and spacing (`LY`), Components and interaction (`IX`), Accessibility (`AX`),
  Platform conventions (`PL`), Dashboards and product UI (`DB`), Copy and UX writing (`CP`), GitHub workflow
  (`GH`). New slop rules `SL-49` to `SL-72`.
- New hard rules: `SL-43`, `SL-44`, `SL-49`, `CP-14` join `SL-17`.
- Visitor modes: persuade, operate, read, experience.
- Twenty commands, including critique (heuristics, personas, P0–P3) and audit (five scored dimensions).
- `PRODUCT.md` and `DESIGN.md` context templates.
- End-to-end GitHub workflow with CI, Lighthouse CI, axe, link check, Pages deploy, Dependabot and templates.
- `scripts/xslop-scan.mjs` pattern scanner and `scripts/check-rules.mjs` repository check.
- References: Apple HIG, Fluent 2, Impeccable, OpenDesign, critique rubric.
- Toolkit: gradient tools, shapes and backgrounds, design tools by stage (minitools.design and more).
- Recipes: OKLCH gradients, dashboard shell, metrics, tables, skeletons.
- Recipes no longer use numbered headings (`SL-17`).

## 1.x

- Core rulebook (`SL`, `DC`, `MO`, `ST`, `PE`, `SEO`, `PF`, `SEC`), workflow with checkpoints, style keywords,
  personal style, inspiration, toolkit and recipes packs.
