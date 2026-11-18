---
name: xslop
description: Add-on rulebooks, workflow, site blueprints and effects library for building websites, landing pages and dashboards that look designed by a careful person, not generated. Use alongside a project's own brief when building, redesigning, critiquing or auditing a website or web app, or when the user says "XSlop", "no slop", "make it not look vibecoded", names an XSlop command (critique, audit, polish, ship…), names rule IDs to include or skip, or asks for a "modern web", a "website with 3D effects", gradients or animations.
---

# XSlop

XSlop is a set of rulebooks, a workflow and short commands for making websites and web apps that look and
behave like a finished product made by a careful person. Every rule has an ID (`SEO-05`: the SEO Rulebook's
rule 05). Each rule is a **Do** (what to do) or a **Don't** (what never ships); some are SOFT (allowed
deliberately and sparingly) or HARD RULE (never switched back on).

## XSlop is an add-on layer

Load it next to the project's own context: its brief, `PRODUCT.md`, `DESIGN.md`, brand guidelines, README,
CLAUDE.md / AGENTS.md and existing code. Order of precedence:

- The user's explicit instructions in the conversation.
- The project's own rules and existing design system.
- XSlop.

If a project's brand deliberately uses something XSlop lists as a don't, keep it, use it consistently, and
apply XSlop everywhere else, except for hard rules. When joining an existing project, read its code and docs
first, then use XSlop to judge and improve, not to restyle it on your own initiative.

## Map

| Need | Read |
| --- | --- |
| The list of rulebooks and how IDs work | `rules/README.md` |
| One rulebook (Do and Don't tables, how to check, sources) | `rules/<rulebook>/README.md` |
| The questions to ask before anything else | `templates/workflow/INTAKE.md` |
| Modern effects, 3D, shaders, animated components | `effects/` (levels, kits and budget, presets, install, catalogues for Motion Primitives, Aceternity, React Bits, 21st.dev) |
| Sitemaps, landing page order, sections, pricing, contact, footers | `blueprints/` |
| Choosing colours and typefaces | `blueprints/colour-schemes.md`, `blueprints/type-pairing.md` |
| What the visitor came to do | `modes/` (persuade, operate, read, experience) |
| A short command (critique, audit, polish, ship…) | `commands/README.md` and the command's file |
| Building a new site step by step | `workflow/WORKFLOW.md` |
| Putting it on GitHub and deploying | `workflow/GITHUB.md`, `templates/github/` |
| Project context files | `templates/context/PRODUCT.md`, `templates/context/DESIGN.md` |
| Brief, direction board, decisions record | `templates/workflow/` |
| Critique and audit report formats | `templates/reports/`, `references/critique-rubric.md` |
| Inspiration sources and how to analyse them | `inspiration/` |
| Libraries, gradients, shapes, design tools | `toolkit/` |
| Code for motion, components, gradients, dashboards | `recipes/` |
| Style keywords and modifiers named in a prompt | `style/STYLES.md` |
| Building for the repository owner (denysovski) | `style/MY-STYLE.md`, `style/PINS.md` |
| Apple HIG, Fluent 2, Impeccable, OpenDesign | `references/` |
| A mechanical scan of a project | `node scripts/xslop-scan.mjs <dir>` (`commands/scan.md`) |

## Rulebooks

| Rulebook | Prefix | File |
| --- | --- | --- |
| Anti-Slop Rulebook | `SL` | `rules/anti-slop/README.md` |
| Design Craft Rulebook | `DC` | `rules/craft/README.md` |
| Typography Rulebook | `TY` | `rules/typography/README.md` |
| Colour Rulebook | `CL` | `rules/color/README.md` |
| Gradients and Backgrounds Rulebook | `GR` | `rules/gradients/README.md` |
| Effects and 3D Rulebook | `EF` | `rules/effects/README.md` |
| Layout and Spacing Rulebook | `LY` | `rules/layout/README.md` |
| Page Structure Rulebook | `PG` | `rules/structure/README.md` |
| Images and Media Rulebook | `IM` | `rules/images/README.md` |
| Navigation Rulebook | `NV` | `rules/navigation/README.md` |
| Components and Interaction Rulebook | `IX` | `rules/components/README.md` |
| Forms and Checkout Rulebook | `FO` | `rules/forms/README.md` |
| States Rulebook | `ST` | `rules/states/README.md` |
| Motion Rulebook | `MO` | `rules/motion/README.md` |
| Accessibility Rulebook | `AX` | `rules/accessibility/README.md` |
| Platform Conventions Rulebook | `PL` | `rules/platform/README.md` |
| Dashboards and Product UI Rulebook | `DB` | `rules/dashboards/README.md` |
| Copy and UX Writing Rulebook | `CP` | `rules/copy/README.md` |
| Localisation Rulebook | `LO` | `rules/localization/README.md` |
| Launch Essentials Rulebook | `PE` | `rules/launch/README.md` |
| SEO Rulebook | `SEO` | `rules/seo/README.md` |
| Performance Rulebook | `PF` | `rules/performance/README.md` |
| Security Rulebook | `SEC` | `rules/security/README.md` |
| GitHub Workflow Rulebook | `GH` | `rules/github/README.md` |

## Default behaviour

When the user asks for a website (or says "use XSlop") without further instructions:

- Ask the intake questions first (`templates/workflow/INTAKE.md`): kind of site, feel (modern, classic,
  old-school…), effect level (none, subtle, modern, immersive 3D), colours, main action, technology, content.
  Skip only what the request already answers, or everything if the user says "decide yourself".
- "Modern web" or "3D effects" means: ask the effect level, pick one kit from `effects/kits.md` and take
  every effect from it, never more than the level and the effect budget allow (`EF-01`, `EF-20`, `EF-21`).
  "A few" or "a couple" of effects or 3D models means two at most on the whole site.
- Build the structure from `blueprints/`: the sitemap for the kind of site, the landing page order, then
  pricing (packages for services), contact and the footer size that fits the amount of information (`PG`).
- Choose colours and type with the methods in `blueprints/colour-schemes.md` and `blueprints/type-pairing.md`.
- Decide the mode of each surface (`modes/README.md`) and lead with the rulebooks that matter most for it
  (table in `rules/README.md`).
- Apply every rulebook that applies: do every Do, avoid every Don't.
- For a new site, follow `workflow/WORKFLOW.md`, which starts with the intake questions and stops at four checkpoints for the user's choices.

## Overrides

- `XSlop, but keep SL-25` or `keep mono fonts`: that soft pattern is allowed, used deliberately, not everywhere.
- `XSlop, skip PE-10` or `no cookie banner`: do not do that rule.
- `XSlop only SEO and PF`: apply only those rulebooks.
- `XSlop <command>`: run a command from `commands/`.

The user's explicit words win, with two limits. Hard rules cannot be switched back on (listed in
`rules/README.md`: decorative counting, fake testimonials, placeholder business info, side-stripe borders,
invented claims). And if an override conflicts with a law or basic accessibility, do what was asked and
mention the risk in one line.

## Working order

- Read the brief and the project context. Decide what it is, who it is for, the mode, and the one action a
  visitor should take.
- Settle the design system first: colour strategy and roles, type scale, spacing, radii, elevation, motion.
- Build with real content. Missing content is asked for or clearly marked as a placeholder, never presented
  as real.
- Build every state, not only the filled, fast, logged-in version.
- Run the passes from `workflow/WORKFLOW.md`: design, behaviour, production.
- Put it on GitHub with CI and quality gates and deploy (`workflow/GITHUB.md`).
- Run the final checklist below before saying it is done.

## How to present options

Show pictures first. Name options by what they are ("BLACK COAL", "Satoshi + Boska"), never by position or
number. Three or four options at most, with a one-line recommendation.

## Final checklist

- No don'ts unless the user kept a soft one; no hard-rule violations. `node scripts/xslop-scan.mjs <src>`
  reports no hard findings, and every warning was checked in context.
- One clear primary action per page and a first screen that says what this is and for whom (`DC-10`, `PE-02`).
- Tokens exist and are used; nothing off-scale (`DC-05`, `TY-05`, `LY-05`, `CL-04`).
- Type: body at least 16 px, measure 45–75 characters, real hierarchy, faces chosen for the subject.
- Colour: strategy named, contrast passes in both themes, never colour alone (`CL-09`, `CL-10`).
- Real images with alt text and dimensions; visible navigation; forms people can finish (`IM`, `NV`, `FO`).
- Every state that applies exists (`ST`).
- Keyboard works end to end, focus visible and not obscured, reduced motion respected, 200 % zoom works (`AX`).
- Tested at 360, 390, 768, 1024, 1440 and 1920 px (`PE-04`).
- 404, legal pages, cookie consent, favicon, OG image, analytics, real contact details (`PE`).
- Titles, descriptions, H1s, sitemap, robots, canonical, schema, llms.txt (`SEO`).
- Lighthouse run; Core Web Vitals green: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 (`PF-03`).
- Security headers, CSP, HTTPS, no secrets, dependency audit clean (`SEC`).
- In a GitHub repository with README, CI, quality gates and an automated deploy (`GH`).
- No placeholder content: search the build for "lorem", "example.com", "123 Main", "TODO".

Report what was done, what was skipped on request, and anything that still needs real content from the user.
