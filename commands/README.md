# Commands

> Short commands you can give the agent.

[Back to XSlop](../README.md)

Short commands the user can give. Each file says what the command does, what it reads, what it changes and
what it reports. Commands can be combined with overrides (`XSlop polish, keep SL-25`).

| Command | File | Does |
| --- | --- | --- |
| `XSlop workflow: <request>` | [WORKFLOW.md](../workflow/WORKFLOW.md) | builds a new site step by step with checkpoints |
| `XSlop continue` | [continue.md](continue.md) | resumes from `xslop/DECISIONS.md` |
| `XSlop init` | [init.md](init.md) | writes `PRODUCT.md`: who it is for, what it does, what must stay true |
| `XSlop document` | [document.md](document.md) | writes `DESIGN.md` from an existing site's code and look |
| `XSlop shape <surface>` | [shape.md](shape.md) | plans one page or feature before code: mode, content, states, direction |
| `XSlop critique` | [critique.md](critique.md) | design review with heuristic scores, personas and P0–P3 issues |
| `XSlop audit` | [audit.md](audit.md) | technical review: accessibility, performance, theming, responsive, rules scan |
| `XSlop scan` | [scan.md](scan.md) | runs `scripts/xslop-scan.mjs` and explains the findings |
| `XSlop polish` | [polish.md](polish.md) | refines an existing surface without redesigning it |
| `XSlop harden` | [harden.md](harden.md) | edge cases, long text, errors, i18n, slow network |
| `XSlop bolder` | [bolder.md](bolder.md) | more commitment when a design is safe and bland |
| `XSlop quieter` | [quieter.md](quieter.md) | less noise when a design is loud |
| `XSlop distill` | [distill.md](distill.md) | removes what does not earn its place |
| `XSlop typeset` | [typeset.md](typeset.md) | typography pass |
| `XSlop colorize` | [colorize.md](colorize.md) | colour system pass, gradients included |
| `XSlop layout` | [layout.md](layout.md) | spacing, grid and hierarchy pass |
| `XSlop animate` | [animate.md](animate.md) | motion plan and implementation |
| `XSlop clarify` | [clarify.md](clarify.md) | copy and UX writing pass |
| `XSlop dashboard` | [dashboard.md](dashboard.md) | builds or reviews product UI in operate mode |
| `XSlop ship` | [ship.md](ship.md) | production, SEO, performance, security and GitHub passes, then deploy |

Every command that changes files ends by updating `xslop/DECISIONS.md` and running the final checklist in
`SKILL.md` for the parts it touched.
