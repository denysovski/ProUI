# XSlop workflow

The order an agent follows when it builds a new website or a larger UI piece with XSlop. It turns a short
request into a finished site through fixed stages, and it **stops at four checkpoints** to let the user choose.
The agent never skips a checkpoint by guessing, unless the user explicitly says "decide yourself" or is not
available (see "When the user is not there").

```
Brief ──▶ Research ──▶ ◆ Direction ──▶ Design system ──▶ ◆ Type and colour ──▶ Structure ──▶ ◆ Outline
                                                                                                    │
     Build the rest ◀── ◆ First screen ◀── Build the first screen ◀────────────────────────────────┘
          │
          ▼
     Passes: Slop and craft ─▶ Type and colour ─▶ Layout ─▶ Components and copy ─▶ Product UI*
             ─▶ States ─▶ Motion ─▶ Accessibility ─▶ SEO ─▶ Performance ─▶ Security ─▶ Production and legal
          │
          ▼
     Quality check ──▶ GitHub and deploy ──▶ Handoff

* only for operate surfaces (dashboards, tools, settings)

◆ = checkpoint: the agent shows options, asks, and waits for the user's choice
```

The passes run one after another on the finished pages. Each pass goes through its group of XSlop rules,
fixes what fails, verifies it, and ticks it off in `DECISIONS.md`. A pass is done only when every rule in it
is either met or recorded as not applicable with a reason.

Everything decided along the way is written into a decisions file in the project
(`xslop/DECISIONS.md`, template in `templates/workflow/DECISIONS.md`), so any later session or agent can continue
exactly where the last one stopped.

---

## Stage: Brief

Goal: know what to build before looking at anything.

1. Read the request, the project's own files (README, CLAUDE.md / AGENTS.md, existing code, brand
   guidelines) and `style/MY-STYLE.md` when building for the repository owner.
2. Fill in the brief (`templates/workflow/BRIEF.md`): what the site is, for whom, the one primary action, pages,
   content that exists, content that is missing, constraints (stack, hosting, deadline, languages), and any
   style keyword the user already named (`style/STYLES.md`).
3. Decide the **mode** of each surface (`modes/`): persuade, operate, read or experience. It changes which
   rules weigh most and how far the style may lead.
4. If the project has no `PRODUCT.md`, write one (`commands/init.md`); if it has one, read it and respect its
   "Must stay true" list.
5. If something essential is missing (what it is, who it is for, the primary action), ask **one short
   message** with at most three questions. Everything else gets a sensible default, written into the brief
   as an assumption.

Output: `xslop/BRIEF.md` in the project.

---

## Stage: Research

Goal: find real, current designs that match the brief, so the choice is made on examples, not adjectives.

### Where to look

Search the sources that fit the brief. Always use at least four, mixing galleries and the user's own board.

| Source | Use it for | How to search |
| --- | --- | --- |
| `style/PINS.md` (the user's Pinterest board) | the user's own taste; always included | pick the themes that match the brief, open 5–10 pins |
| dark.design | dark sites by category (Agency, AI, Software, Personal…) | category filter, sort by Popular |
| recent.design | current brand, web and motion work | Design feed with the Web, Branding or Motion filter |
| saved.design | newest interface, 3D and typography work | filter by Web, Interface, 3D or Typography |
| designeer.xyz | interface craft, motion, 3D, components | category and colour filters |
| dribbble.com | concepts for 3D, scroll and product reveals | search by the brief's topic plus "website" or "3d scroll" |
| mobbin.com | how shipped apps and sites solve a specific flow, dashboards, business site sections | search the flow or section (onboarding, checkout, analytics dashboard, pricing section); needs the user's paid login, in the browser or through the Mobbin connector |
| `inspiration/dashboards.md` | what well-made dashboards and business sites share | read before any operate surface |
| 21st.dev, reactbits.dev, madewithgsap.com, tympanus.net/codrops | the one signature interaction | search the effect, not the industry |

Optional extra galleries when the above are thin: godly.website, awwwards.com, land-book.com, siteinspire.com,
lapa.ninja, httpster.net.

### How to collect

1. Use the browser (the built-in browser when available) to open each source, apply the filters that fit,
   and look at results visually, not only as text.
2. Keep **8 to 15 candidates**. For each one save: a screenshot of the first screen (and one more section if
   it matters), the link, and the eight-point analysis from `inspiration/INSPIRATION.md` (idea, type, colour,
   grid, hero, signature moment, motion, details).
3. Prefer a spread: different moods, at least one from the user's own board, at least one light and one
   dark option unless the brief rules one out.
4. Screenshots go into the project's `xslop/research/` folder for the user to see. Do not commit other
   people's work to a public repository; keep research local or in the conversation.

Output: `xslop/research/` with screenshots and `xslop/RESEARCH.md` (one block per candidate).

---

## ◆ Checkpoint: Direction

Goal: the user picks the visual direction.

Group the candidates into **three or four directions** (`templates/workflow/DIRECTIONS.md`). Each direction is named
after a style keyword or a combination from `style/STYLES.md` and shows:

- two or three reference screenshots with links,
- one line on the idea, one line on why it fits the brief,
- the palette (hex swatches), the type mood (grotesk or serif, which Fontshare candidates),
- the signature moment (the one thing people will remember),
- what XSlop rules it relies on or switches on (soft rules only; hard rules such as `SL-17` stay off).

Send the screenshots as files or a page the user can open, then ask in one message:

> Which direction should the site take? Pick one, or combine parts ("the type of BLACK COAL with the layout
> of EDITORIAL CREAM"). You can also send your own link or image.

**Wait for the answer.** Record it in `DECISIONS.md`.

---

## Stage: Design system

Goal: turn the chosen direction into concrete tokens.

1. **Type:** propose two or three pairings that fit the direction and the mode (display + text, optional mono
   for data), mostly from Fontshare (`toolkit/TOOLKIT.md`, `toolkit/design-tools.md`). Check `SL-59` and
   `TY-01` to `TY-04`. Render a specimen for each: the real headline, a paragraph of real copy, a button, a
   price or number.
2. **Colour:** name the strategy (`CL-01`) and the light/dark reason (`CL-02`), then define roles in OKLCH
   (`CL-04`, `CL-05`) and a contrast table for both themes (`CL-09`).
3. **Gradient and background**, if the direction uses one: one signature gradient from the palette
   (`GR-01` to `GR-10`), built in CSS (`recipes/gradients.md`) or with a tool the user exports from
   (`toolkit/gradients.md`: Balsa UI Gradient Studio, Pryzm, ShaderGradient); patterns from Book of Shapes
   (`toolkit/shapes-and-backgrounds.md`).
4. **Scale:** type scale (`TY-05`), spacing scale on 4 px (`LY-05`), radii and elevation ramps (`PL-08`,
   `PL-09`), motion durations and easings (`DC-05`, `MO`).

Output: a specimen page or image with the pairings side by side and the palette.

---

## ◆ Checkpoint: Type and colour

Show the specimens and ask:

> Which type pairing and palette? Pick one, or tell me what to change (heavier headline, warmer background,
> different accent).

**Wait for the answer.** Write the final tokens into `DECISIONS.md` and into the project's CSS variables
or theme file.

---

## Stage: Structure

Goal: agree on what goes where before building it.

1. Sitemap: every page and its purpose.
2. For each page, the sections in order, each with: its job, the content it needs, the component or recipe it
   uses (`recipes/RECIPES.md`), and which states apply (`ST`).
3. Mark the **one signature moment** per page and the primary action of every page (`DC-10`, `PE-02`).
4. List content that is still missing (copy, photos, legal details) and propose how to fill it honestly.

---

## ◆ Checkpoint: Outline

Send the outline as a short list and ask:

> Does this structure work? Anything to add, remove or reorder?

**Wait for the answer.** Record changes.

---

## Stage: Build the first screen

Goal: get the look right on the most important view before building everything.

1. Set up the project (stack from the brief), tokens, fonts, smooth scroll and motion base if the direction
   needs them (`toolkit/TOOLKIT.md`).
2. Build the home page hero and the next section completely: real copy, real or clearly marked placeholder
   images, final type and colour, responsive, with motion.
3. Take screenshots at desktop (1440 or 1920 wide) and mobile (390 wide), and a short recording if motion
   matters.

---

## ◆ Checkpoint: First screen

Show the screenshots (and a live preview link if the project is deployed) and ask:

> This is the first screen. Keep going in this direction, or adjust something first?

**Wait for the answer.** Apply changes, then continue.

---

## Stage: Build the rest

Build page by page in the outline's order with the chosen style, the recipes (`recipes/RECIPES.md`) and the
toolkit (`toolkit/TOOLKIT.md`). Get every page working and looking right first; the passes below then go
through the whole site systematically. Send a short progress note with screenshots when a page is done.
Questions here only when something is genuinely the user's call (missing content, legal details, a real
trade-off); otherwise decide and note it.

---

## Passes

Run them in this order. For each pass: go through every rule of its group in `rules/`, fix the site,
verify with the method given, and tick the pass in `DECISIONS.md` (with any rule marked not applicable and
why). Send the user one short line per finished pass.

### Pass: Slop and craft (`SL`, `DC`)

- Run `node scripts/xslop-scan.mjs <src>` (`commands/scan.md`) and open every finding in context.
- Check every page against `SL-01`–`SL-72` and `DC-01`–`DC-20`.
- Hard rules are absolute: `SL-17` (search for `01`, `02`, `/ 05`, `No.`), `SL-43`, `SL-44`, `SL-49`, `CP-14`.
- Verify: screenshots of every page at desktop and mobile, compared side by side with the chosen direction.

### Pass: Type and colour (`TY`, `CL`, `GR`)

- Run `commands/typeset.md` and `commands/colorize.md` over the whole site.
- Verify: contrast table for every pair in both themes; 200 % zoom; every shipped language renders.

### Pass: Layout (`LY`, `PL`)

- Run `commands/layout.md`: squint test, spacing scale, rhythm, grid, container queries, safe areas.
- Verify: screenshots at 360, 768, 1024, 1440, 1920 with a blurred copy for the squint test.

### Pass: Components and copy (`IX`, `CP`)

- Every control with every state; standard controls; overlays and forms by the rules; undo over confirm.
- Run `commands/clarify.md` over all text, errors and buttons.
- Verify: tab through every control; trigger every overlay; read every button out of context.

### Pass: Product UI (`DB`, operate surfaces only)

- Run `commands/dashboard.md` review: shell, answer-first, charts, tables, filters, widget states.
- Verify: realistic data at small, normal and huge volumes; one widget forced to fail.

### Pass: States (`ST`)

- Empty, loading, error, offline, slow network, zero results, permission denied, session expiry, validation,
  success: build every one that applies to each page and component.
- Verify: trigger each state on purpose (throttled network, offline mode, empty data, bad input) and take a
  screenshot of it.

### Pass: Motion (`MO`, motion recipes, `PF-21`)

- Durations and easings from the tokens; entrances ease-out, moves ease-in-out, exits about 20 % shorter;
  dropdowns 150–250 ms; no bounce on everyday UI; nothing replays when the user only changes an option.
- Animate only transform and opacity; no layout-triggering properties in loops; scroll effects driven by one
  loop (GSAP ticker with Lenis).
- Heavy visuals (WebGL, video, particles) render only while visible, cap pixel ratio and frame rate, and have a
  static fallback.
- `prefers-reduced-motion`: every animation has a calm alternative.
- Verify: scroll every page with the performance panel open; no long frames during scroll; record a short clip
  of the signature moment.

### Pass: Accessibility (`AX`, `DC-15`, `PE-14`, `ST-09`, `SL-48`)

- Semantic HTML, one H1, labelled controls, visible focus, logical tab order, Escape closes overlays, focus
  returns to the trigger, `lang` set, alt text, contrast AA, touch targets at least 44 px.
- Verify: full keyboard walk-through of every page and form; automated check (axe or Lighthouse
  accessibility); zoom to 200 % without broken layout.

### Pass: SEO (`SEO`, `PE-05`, `PE-06`)

- Unique titles and descriptions, canonical URLs, heading order, alt text, structured data, sitemap.xml,
  robots.txt, no stray `noindex`, clean slugs, internal links, Open Graph and favicons, llms.txt.
- Verify: view source of every page for the head tags; validate the structured data; Lighthouse SEO score;
  check the sitemap lists every public page.

### Pass: Performance (`PF`)

- Images in modern formats with sizes and dimensions, lazy loading below the fold, code splitting, deferred
  third-party scripts, fonts preloaded and subset, unused dependencies removed, caching and compression on the
  host, database and API work where the site has a back end.
- Verify: Lighthouse on mobile for every page type; Core Web Vitals in the green (LCP under 2.5 s, INP under
  200 ms, CLS under 0.1); bundle size noted in `DECISIONS.md`.

### Pass: Security (`SEC`)

- HTTPS and HSTS, Content Security Policy, security headers, no secrets in client code or the repository,
  server-side validation, escaped output, safe data access, protected forms, safe cookies, proper
  authentication and uploads where they exist, restricted CORS, pinned third-party code with integrity,
  dependency audit, errors without leaks, safe external links, minimal data, security.txt.
- Verify: check response headers (for example with `curl -I`), run `npm audit`, search the repository and
  build output for keys and tokens, submit forms with bad and oversized input, and confirm error pages show no
  internals.

### Pass: Production and legal (`PE`)

- Custom 404, primary action above the fold and sticky on mobile where it helps, breakpoints, favicon set,
  Open Graph, thank-you states, privacy policy, terms, cookie consent that loads non-essential scripts only
  after consent, analytics, real contact details, code in Git.
- Verify: open every legal and system page; test cookie consent in a fresh browser (reject must work as
  easily as accept); confirm no placeholder business data remains.

---

## Stage: Quality check

A final look at the whole site after all passes:

- the final checklist in `SKILL.md`, item by item,
- `commands/critique.md` (scored heuristics, personas, P0–P3) and `commands/audit.md` (five scored
  dimensions); fix every P0 and P1,
- screenshots of every page at 390, 768, 1440 and 1920 widths,
- a search of the build for leftovers: `lorem`, `example.com`, `TODO`, `console.log`, counting labels,
- for high-stakes work, a separate agent that did not build the site reviews it against XSlop and reports
  anything missed.

---

## Stage: GitHub and deploy

Follow `workflow/GITHUB.md` (rules `GH`): repository, README, `.gitignore`, `.env.example`, CI, quality gates
(Lighthouse CI, axe, link check, XSlop scan), deploy from `main`, Dependabot, release tag. Ask before creating
repositories, changing settings or publishing.

---

## Stage: Handoff

1. Write `DESIGN.md` from the finished build (`commands/document.md`).
2. Update the project README: what the site is, the live link, how to run it, the design decisions (link
   `DECISIONS.md`).
3. Report to the user: what was built, the link, what was skipped on request, what still needs real content.

---

## When the user is not there

If the user said "decide yourself", or a checkpoint question has gone unanswered and the session runs
unattended:

- choose the option that best matches the brief **and** `style/MY-STYLE.md`,
- write the choice and the reason at the top of `DECISIONS.md`,
- continue, but still send the options so the user can change course later.

Irreversible actions (publishing, deleting, paying, sending messages) always wait for the user.

## How to present options

- Show pictures first. Every option has a screenshot or a rendered specimen and a link.
- Name options by what they are ("BLACK COAL", "Satoshi + Boska"), not by position. No "Option 1 / 2 / 3"
  counting labels in what the user sees (`SL-17` applies to the agent's own presentations too).
- Three or four options, never ten. Mark the agent's recommendation and say why in one line.
- Keep each question to one message the user can answer in a few words.

## Short commands the user can give

| Command | What happens |
| --- | --- |
| `XSlop workflow: <request>` | runs this whole workflow |
| `XSlop workflow, direction <STYLE KEYWORD>` | skips the Direction checkpoint and uses that style (research still runs to find references for it) |
| `XSlop workflow, fast` | runs the stages but merges checkpoints into one: direction, type and outline in a single question |
| `XSlop workflow, decide yourself` | runs without stopping; every choice is recorded in `DECISIONS.md` |
| `XSlop workflow, research only` | stops after the Direction checkpoint with the direction board |
| `XSlop continue` | reads `xslop/DECISIONS.md` and continues from the last recorded stage |
| `XSlop passes` | runs only the passes and the quality check on an existing site |
| `XSlop pass <name>` | runs one pass, for example `XSlop pass security` or `XSlop pass SEO` |
