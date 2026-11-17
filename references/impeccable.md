# Impeccable

Source: https://github.com/pbakaus/impeccable (Apache-2.0). A design skill for AI coding agents by Paul
Bakaus. XSlop takes strong inspiration from its structure and ideas; nothing is copied verbatim. See `NOTICE`.

## What XSlop adopted, in its own form

| Impeccable idea | In XSlop |
| --- | --- |
| Visitor modes: Persuade, Operate, Read, Experience | `modes/` |
| `PRODUCT.md` (product truth) and `DESIGN.md` (visual system) as context files | `commands/init.md`, `commands/document.md`, `templates/context/` |
| A command set (shape, critique, audit, polish, harden, bolder, quieter, distill, typeset, colorize, layout, animate, clarify) | `commands/` |
| Critique with heuristic scores, cognitive load, personas and P0–P3 severity | `commands/critique.md`, `references/critique-rubric.md` |
| Technical audit in five scored dimensions | `commands/audit.md` |
| A deterministic detector for slop patterns | `scripts/xslop-scan.mjs`, rules `SL-49` to `SL-72` |
| The "craft floor": verify and refuse lists | the final checklist in `SKILL.md`, hard rules in `rules/README.md` |
| Colour strategies (Restrained, Committed, Full palette, Drenched), OKLCH, roles | `CL-01`, `CL-04`, `CL-05` |
| The four saturated "AI looks" and overused fonts | `SL-59`, `SL-64` to `SL-67` |
| Operate-mode product rules | `rules/product/dashboards.md`, `modes/operate.md` |
| Foundations every shipped project needs (404, icons, social previews, legal, CI, tokens, reduced motion, Dependabot) | `PE`, `GH` |

## What XSlop does differently

- Every rule has an ID the user can switch on or off.
- Checkpoints where the user chooses the direction from real references (`workflow/WORKFLOW.md`).
- Style keywords from the owner's own taste (`style/`).
- Production, SEO, performance, security and GitHub rules in the same sheet.
