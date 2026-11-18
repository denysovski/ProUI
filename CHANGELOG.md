# Changelog

## 3.2.0 (2026-11-18)

- Blueprints (`blueprints/`): sitemaps per kind of site, the landing page order and what comes after it, a
  section catalogue with a component per effect level, tiered pricing for services and products, contact
  pages for companies and local businesses, slim, standard and fat footers, a colour-scheme method with
  contrast-checked starter palettes, and a type-pairing method with free starter pairings.
- Page Structure Rulebook (`PG`).
- Motion Primitives: all 33 components saved in `effects/kits/motion-primitives/` with their MIT licence, and a
  catalogue.
- Aceternity UI: catalogue of the 114 free components with registry install names (source not included).
- Effect kits (`effects/kits.md`): one family of components per site, and an effect budget ("a few" means two).
  New rules `EF-20` to `EF-22`.
- Workflow: the Design system stage uses the colour and type methods and picks a kit; the Structure stage
  builds from the blueprints; intake follow-ups for the number of effects, pricing model and contacts.

## 3.1.1 (2026-11-18)

- 21st.dev 3D catalogue rebuilt from the live collection page: all 169 components with author, licence,
  dependencies and rendering technology.
- React Bits catalogue checked against the live index: 217 components.

## 3.1.0 (2026-11-18)

- Effects library (`effects/`): effect levels, presets per style and request, install guide, a catalogue of
  every React Bits component and a catalogue of 3D components from 21st.dev, built from JSON by
  `scripts/build-effects.mjs`. Components are installed per project from their registries, not copied.
- Effects and 3D Rulebook (`EF`).
- Intake questions at the start of every workflow (`templates/workflow/INTAKE.md`): kind of site, feel,
  effect level, colours, action, technology, content, languages.
- `XSlop effects` command; workflow diagram and README updated.

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
