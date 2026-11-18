# Commands

> Short commands you can give the agent.

[Back to ProUI](../README.md)

Short commands the user can give. Each file says what the command does, what it reads, what it changes and
what it reports. Commands can be combined with overrides (`ProUI polish, keep SL-25`).

| Command | File | Does |
| --- | --- | --- |
| `ProUI workflow: <request>` | [WORKFLOW.md](../workflow/WORKFLOW.md) | builds a new site step by step with checkpoints |
| `ProUI continue` | [continue.md](continue.md) | resumes from `proui/DECISIONS.md` |
| `ProUI init` | [init.md](init.md) | writes `PRODUCT.md`: who it is for, what it does, what must stay true |
| `ProUI document` | [document.md](document.md) | writes `DESIGN.md` from an existing site's code and look |
| `ProUI shape <surface>` | [shape.md](shape.md) | plans one page or feature before code: mode, content, states, direction |
| `ProUI critique` | [critique.md](critique.md) | design review with heuristic scores, personas and P0–P3 issues |
| `ProUI audit` | [audit.md](audit.md) | technical review: accessibility, performance, theming, responsive, rules scan |
| `ProUI scan` | [scan.md](scan.md) | runs `scripts/proui-scan.mjs` and explains the findings |
| `ProUI polish` | [polish.md](polish.md) | refines an existing surface without redesigning it |
| `ProUI harden` | [harden.md](harden.md) | edge cases, long text, errors, i18n, slow network |
| `ProUI bolder` | [bolder.md](bolder.md) | more commitment when a design is safe and bland |
| `ProUI quieter` | [quieter.md](quieter.md) | less noise when a design is loud |
| `ProUI distill` | [distill.md](distill.md) | removes what does not earn its place |
| `ProUI typeset` | [typeset.md](typeset.md) | typography pass |
| `ProUI colorize` | [colorize.md](colorize.md) | colour system pass, gradients included |
| `ProUI layout` | [layout.md](layout.md) | spacing, grid and hierarchy pass |
| `ProUI effects` | [effects.md](effects.md) | picks and installs effects from the effects library at the chosen level |
| `ProUI animate` | [animate.md](animate.md) | motion plan and implementation |
| `ProUI clarify` | [clarify.md](clarify.md) | copy and UX writing pass |
| `ProUI dashboard` | [dashboard.md](dashboard.md) | builds or reviews product UI in operate mode |
| `ProUI ship` | [ship.md](ship.md) | production, SEO, performance, security and GitHub passes, then deploy |

Every command that changes files ends by updating `proui/DECISIONS.md` and running the final checklist in
`SKILL.md` for the parts it touched.
