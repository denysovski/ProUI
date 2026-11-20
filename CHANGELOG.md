# Changelog

## 4.1.0 (2026-11-21)

- Typography guide (`typography/`): how fonts play together, the four type systems seen on well-known sites,
  what 17 reference sites use with free alternatives, platform fonts, licences, and eight specimen images
  set in open-licence fonts.
- Site studies (`inspiration/site-studies/`): 17 live sites studied in the browser (type, colour, navigation,
  cookie banners, footers) with a build prompt per site in our own words; `animations.md` with the easing
  curves they use, a prompt per motion pattern, and what colour and motion say about a site.
- Legal and trust blueprint (`blueprints/legal-and-trust.md`): pages per site type, EU and Czech cookie
  consent, personal data, user uploads, European Accessibility Act, security.txt, status page, footer
  checklist. Observed palettes in `blueprints/colour-schemes.md`.
- Rules `TY-26`, `TY-27`, `CL-22`, `CL-23`, `PE-23` to `PE-26`, `PG-23` (585 rules). The workflow gains a
  legal intake question, pairing, licence and colour restraint checks, legal pages in the outline and
  consent, security.txt and upload tests at launch.

## 4.0.0 (2026-11-18)

- Licence: ProUI is a paid skill sold on Agensi ($9.99); no open licence on GitHub (`LICENSE.md`).

- Renamed from XSlop to ProUI: repository, skill name (`proui`), commands ("ProUI critique"), project folder (`proui/`), scanner (`scripts/proui-scan.mjs`, `proui-ignore` comments). "XSlop" still works as a trigger word.
- README and SKILL.md describe ProUI as a playbook for beautiful websites, not only a list of rules.

## 3.4.1 (2026-11-18)

- ProUI logo and banner (`assets/`); README shows the ProUI banner. The skill is published on Agensi as ProUI.

## 3.4.0 (2026-11-18)

- XSlop fx (`effects/fx/`): 11 effects written from scratch in plain HTML, CSS and JS, covering the useful
  ideas of the free Skiper UI set without a library or credit line, with a demo page.
- Motion briefs (`effects/briefs/`): 20 detailed briefs for signature motion components, written in our own
  words after studying the free Annnimate starter pack (no code from it included). Linked from the recipes.

## 3.3.0 (2026-11-18)

- Skiper UI catalogue: the 37 free components with install names and dependencies (attribution required,
  source not included).
- Motion recipes: 133 GSAP build prompts in our own words for studio-style motion (text, scroll sections,
  galleries, menus, buttons, UI components, shaders), studied from Annnimate. Shared build prompt with
  reduced-motion, accessibility and performance rules.
- Studio kit (GSAP) in `effects/kits.md`; rules `EF-23` (credit libraries) and `EF-24` (no copying paid
  components).

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
