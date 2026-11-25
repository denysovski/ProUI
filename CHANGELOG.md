# Changelog

## 4.5.0 (2026-11-25)

- New blueprint `blueprints/cart.md`: a shop's cart drawer that raises the order value honestly (layout,
  free-gift ladder, one-click add-ons, paid extras done legally, what to measure), after the cart
  Shovel Studio built for Hours.
- New rules: `PG-24` (hard) the cart is a drawer that sells, `PG-25` a free-gift ladder instead of discount
  codes, `PG-26` one-click add-ons that need no choice, `PG-27` (hard, don't) a paid extra hidden in the
  checkout button, `PG-28` test cart changes on order value. 602 rules.
- Typography: "Paid display faces worth buying", ten new sans faces (Magnuvo, Xipta Sans, Hook, Forten
  Crush, GC Skywrath, Artocle, Zunero Club, Oklean, Nuvorqa, Vyreliq) with price, character, use, style
  keyword and a free stand-in for drafts.

## 4.5.0 (2026-11-25)

- Full study of unanim.studio (`inspiration/site-studies/unanim.md`): Saans in two weights, the measured type
  scale, colour, grid, the dock menu that opens upward while the page recedes, the hero that sinks under a black
  shade, blur line reveals, micro-interactions, and the studio's identity on Dribbble.
- Seven more reference sites and a pitch-deck reel (`reference-sites.md`): Journalist House, Apekon, Jeppesen,
  Motive, Blurred, InterNest, Focus Industries.
- New style `FRAMER` (`style/framer/`): the look, a motion system, 80 sections `F-01`…`F-80` with prompts,
  Framer Motion recipes and a live gallery of all 80 in plain HTML, CSS and JS.
- Twelve new plain-JS effects (`effects/fx/`): dock menu, recede hero, blur lines, hover members (after Skiper UI
  skiper6), section stack, word split, scroll fill, card expand, focus words, focus pull, underline swap, hide
  header; demo in `effects/fx/motion-demo.html`.
- Annnimate catalogue: all 168 animations described in our own words (`effects/catalog/annnimate.md`).
- Typography: Saans and the Unanim type system with free matches and a specimen.
- Optional interface sounds (`sounds/`): nine synthesised sounds and WAV files, off by default, never part of
  the workflow.

## 4.4.0 (2026-11-22)

- Study of HMOTA, a site built with ProUI, written from its source: tokens, spacing, pages, the motion
  system, the scroll-driven 3D first screen, the intro loader, 3D performance, light and shadow, and the
  bugs hit along the way (`inspiration/site-studies/hmota.md`).
- Style keyword `CONCRETE LIME`: architectural brutalism with maximal type.
- New effect `effects/fx/petal-loader/`: a brand-shaped intro loader that fills clockwise.
- New rules: `MO-30` (hard) intro loader only for a heavy first screen, `MO-31` loader shaped like the
  brand, `MO-32` (hard) warm up the scene behind the loader, `MO-33` no moving fills clipped by SVG
  `clipPath`, `NV-15` (hard) every new page opens at its top, `NV-16` hide-on-scroll by distance,
  `PF-34` (hard) render 3D on demand, `DC-26` shadows only on open ground. 597 rules.
- Main README ends with a "Built with ProUI" section showing HMOTA.

## 4.3.0 (2026-11-22)

- `LY-23` (hard): every page works on a phone, checked at 320, 360, 390 and 430 px: no sideways overflow,
  text that fits and is start-aligned, images cropped for the narrow frame, 44 px controls, reachable navigation.
- `LY-24` (hard): phones get their own spacing, about 64–96 px between sections, 32–48 px between blocks and
  16–24 px side padding; add space before shrinking text.
- `AX-16` is now hard: accessibility is tested before every release (audit, keyboard, screen reader on desktop
  and phone, contrast, 200 % zoom). 589 rules.

## 4.3.1 (2026-11-21)

- New rule `SL-73`: no decorative icons, emojis or clip-art on content cards on professional sites (587 rules).

## 4.3.0 (2026-11-21)

- Every README rewritten and given a cover image: the same dark canvas as the banner with a wireframe
  sketch of what the folder holds. Rulebook covers are generated from each `rulebook.json` and show its
  own rules (`assets/src/covers/build.py`).
- Main README shorter: a board of the main folders, the workflow in five steps, rulebooks by area, and the
  long lists of websites and tools moved to `toolkit/README.md`.
- Rulebook pages show the rule count, example prompts with their IDs, and links to the previous and next
  rulebook. The rulebook index lists the number of rules per rulebook.

## 4.2.0 (2026-11-21)

- Typography rewritten as a short visual guide: ten specimen sheets (grotesk statements with pixel labels,
  24 grotesks, 12 pixel fonts, 12 monos, 16 serifs, 12 condensed and display faces, six pairings by kind of
  site, and what 31 tech, e-shop and fashion brands use with free matches). Detailed tables moved to
  `typography/reference.md`, now with the measured fonts of 32 brand sites.
- Marketplace package builder (`scripts/build-package.mjs`) that leaves out the owner's personal style files
  and every reference to them.

## 4.2.0 (2026-11-21)

- Filter swap (`effects/fx/filter-swap/`): the one transition for filtering a grid or list. Shown items fade
  out and drop 14 px, the set swaps after 260 ms, new items fade in rising 14 px, 45 ms apart. Plain CSS and
  JS, reduced-motion version included. Pattern from the machacekdesign.cz portfolio.
- Rule `MO-29` (hard): filtering uses this transition and nothing else, no growing cards, clip reveals,
  scaling or shuffling (586 rules).

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
