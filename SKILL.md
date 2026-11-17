---
name: xslop
description: Add-on rulebook and workflow for building websites, landing pages and dashboards that look designed by a careful person, not generated. Use alongside a project's own brief when building, redesigning, critiquing or auditing a website or web app, or when the user says "XSlop", "no slop", "make it not look vibecoded", names an XSlop command (critique, audit, polish, ship…) or names rule IDs to include or skip.
---

# XSlop

XSlop is a rulebook, a workflow and a set of commands for making websites and web apps that look and behave
like a finished product made by a careful person. It has 351 rules in 18 groups, each with an ID the user can
switch on or off, four visitor modes, twenty commands, and a path from the first brief to a live site in a
GitHub repository.

## XSlop is an add-on layer

Load it next to the project's own context: its brief, `PRODUCT.md`, `DESIGN.md`, brand guidelines, README,
CLAUDE.md / AGENTS.md and existing code. Order of precedence:

- The user's explicit instructions in the conversation.
- The project's own rules and existing design system (brand colours, fonts, components, conventions).
- XSlop.

If a project's brand deliberately uses something XSlop lists as slop, keep it, use it consistently, and apply
XSlop everywhere else. When joining an existing project, read its code and docs first, then use XSlop to judge
and improve, not to restyle the project on your own initiative.

## Map

| Need | Read |
| --- | --- |
| All rules, by group | `rules/README.md`, then the group files in `rules/design/`, `rules/interaction/`, `rules/product/`, `rules/production/` |
| What the visitor came to do | `modes/` (persuade, operate, read, experience) |
| A short command (critique, audit, polish, ship…) | `commands/README.md` and the command's file |
| Building a new site step by step | `workflow/WORKFLOW.md` |
| Putting it on GitHub and deploying | `workflow/GITHUB.md`, `templates/github/` |
| Project context files | `templates/context/PRODUCT.md`, `templates/context/DESIGN.md` |
| Brief, direction board, decisions record | `templates/workflow/` |
| Critique and audit report formats | `templates/reports/`, `references/critique-rubric.md` |
| Inspiration sources and how to analyse them | `inspiration/INSPIRATION.md`, `inspiration/dashboards.md` |
| Libraries, assets, fonts | `toolkit/TOOLKIT.md` |
| Gradients, shapes, backgrounds, design tools | `toolkit/gradients.md`, `toolkit/shapes-and-backgrounds.md`, `toolkit/design-tools.md` |
| Code for motion, components, gradients, dashboards | `recipes/RECIPES.md`, `recipes/gradients.md`, `recipes/dashboard.md` |
| Style keywords and modifiers named in a prompt | `style/STYLES.md` |
| Building for the repository owner (denysovski) | `style/MY-STYLE.md`, `style/PINS.md` |
| Apple, Microsoft, Impeccable, OpenDesign | `references/` |
| A mechanical scan of a project | `node scripts/xslop-scan.mjs <dir>` (`commands/scan.md`) |

## Rule groups

| Group | IDs | File |
| --- | --- | --- |
| Slop to avoid | `SL-01` to `SL-72` | `rules/design/slop.md` |
| Design craft | `DC-01` to `DC-20` | `rules/design/craft.md` |
| Typography | `TY-01` to `TY-20` | `rules/design/typography.md` |
| Colour | `CL-01` to `CL-16` | `rules/design/color.md` |
| Gradients and backgrounds | `GR-01` to `GR-14` | `rules/design/gradients.md` |
| Layout and spacing | `LY-01` to `LY-16` | `rules/design/layout.md` |
| Motion | `MO-01` to `MO-20` | `rules/interaction/motion.md` |
| States | `ST-01` to `ST-10` | `rules/interaction/states.md` |
| Components and interaction | `IX-01` to `IX-18` | `rules/interaction/components.md` |
| Accessibility | `AX-01` to `AX-16` | `rules/interaction/accessibility.md` |
| Platform conventions | `PL-01` to `PL-12` | `rules/interaction/platform.md` |
| Dashboards and product UI | `DB-01` to `DB-18` | `rules/product/dashboards.md` |
| Copy and UX writing | `CP-01` to `CP-14` | `rules/product/copy.md` |
| Production essentials | `PE-01` to `PE-14` | `rules/production/essentials.md` |
| SEO | `SEO-01` to `SEO-16` | `rules/production/seo.md` |
| Performance | `PF-01` to `PF-21` | `rules/production/performance.md` |
| Security | `SEC-01` to `SEC-18` | `rules/production/security.md` |
| GitHub workflow | `GH-01` to `GH-16` | `rules/production/github.md` |

## Default behaviour

When the user asks for a website (or says "use XSlop") without further instructions:

- Decide the mode of each surface (`modes/README.md`) and load the rules that weigh most for it.
- Apply every rule. `SL` rules are things to avoid; every other group is things to do.
- Rules marked **(soft)** are allowed only as a deliberate, sparing part of a brand or a chosen style.
- For a new site, follow `workflow/WORKFLOW.md`, which stops at four checkpoints for the user's choices.

## Overrides

- `XSlop, but keep SL-25` or `keep mono fonts`: that pattern is allowed, used deliberately, not everywhere.
- `XSlop, skip PE-10` or `no cookie banner`: do not do that rule.
- `XSlop only SEO and PF`: apply only those groups.
- `XSlop <command>`: run a command from `commands/`.

The user's explicit words win, with two limits. Hard rules cannot be switched back on: `SL-17` decorative
counting, `SL-43` fake testimonials, `SL-44` placeholder business info in a shipped build, `SL-49` side-stripe
borders, `CP-14` invented claims. And if an override conflicts with a law or basic accessibility, do what was
asked and mention the risk in one line.

## Working order

- Read the brief and the project context. Decide what it is, who it is for, the mode, and the one action a
  visitor should take.
- Settle the design system first: colour strategy and roles, type scale, spacing, radii, elevation, motion
  (`DC-05`, `CL-01`, `TY-05`, `LY-05`).
- Build with real content. Missing content is asked for or clearly marked as a placeholder to replace, never
  presented as real (`SL-43`, `SL-44`, `CP-14`).
- Build every state (`ST`, `IX-01`), not only the filled, fast, logged-in version.
- Run the passes: slop and craft, type and colour, layout, components and copy, product UI, states, motion,
  accessibility, SEO, performance, security, production and legal.
- Put it on GitHub with CI and quality gates and deploy (`GH`, `workflow/GITHUB.md`).
- Run the final checklist below before saying it is done.

## How to present options

Show pictures first. Name options by what they are ("BLACK COAL", "Satoshi + Boska"), never by position or
number. Three or four options at most, with a one-line recommendation.

## Final checklist

Check and report briefly:

- No `SL` pattern unless the user kept a soft one; hard rules absent. `node scripts/xslop-scan.mjs <src>`
  reports no hard findings, and every warning was checked in context.
- One clear primary action per page (`DC-10`, `PE-02`) and a first screen that says what this is, for whom.
- Tokens exist and are used; nothing off-scale (`DC-05`, `TY-05`, `LY-05`, `CL-04`).
- Type: body at least 16 px, measure 45–75 characters, real hierarchy, faces chosen for the subject (`TY`).
- Colour: strategy named, contrast table passes in both themes, never colour alone (`CL-09`, `CL-10`).
- Every state that applies exists (`ST-01` to `ST-10`, `DB-11` to `DB-13`).
- Keyboard works end to end, focus visible, reduced motion respected, 200 % zoom works (`AX`).
- Tested at 360, 390, 768, 1024, 1440 and 1920 px (`PE-04`, `LY-14`).
- 404, legal pages, cookie consent, favicon, OG image, analytics, real contact details (`PE`).
- Titles, descriptions, H1s, alt text, sitemap, robots, canonical, schema, llms.txt (`SEO`).
- Lighthouse run; Core Web Vitals green (`PF-03`, `PF-20`).
- Security headers, CSP, HTTPS, no secrets, dependency audit clean (`SEC`); not-applicable items named.
- In a GitHub repository with README, CI, quality gates and an automated deploy (`GH`).
- No placeholder content: search the build for "lorem", "example.com", "123 Main", "TODO".

Report what was done, what was skipped on request, and anything that still needs real content from the user.
