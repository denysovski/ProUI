# Rules

351 rules in 18 groups. Every rule has an ID the user can name to switch it on or off. `SL` rules are things
to avoid; every other group is things to do.

| Folder | File | Group | IDs | Covers |
| --- | --- | --- | --- | --- |
| `design/` | `slop.md` | Slop to avoid | `SL-01` to `SL-72` | patterns that make a site look generated, including detector patterns and the four default "AI looks" |
| `design/` | `craft.md` | Design craft | `DC-01` to `DC-20` | small decisions that make a design feel considered |
| `design/` | `typography.md` | Typography | `TY-01` to `TY-20` | choosing faces, scale, measure, leading, tracking, loading, languages |
| `design/` | `color.md` | Colour | `CL-01` to `CL-16` | strategy, roles, OKLCH, contrast, dark mode |
| `design/` | `gradients.md` | Gradients and backgrounds | `GR-01` to `GR-14` | when and how to use gradients, mesh, banding, patterns, shapes |
| `design/` | `layout.md` | Layout and spacing | `LY-01` to `LY-16` | hierarchy, spacing scale, rhythm, grid, adaptation, safe areas |
| `interaction/` | `motion.md` | Motion | `MO-01` to `MO-20` | timing, easing, popovers, gestures, reduced motion |
| `interaction/` | `states.md` | States | `ST-01` to `ST-10` | empty, loading, error, offline, slow, zero results, permission, session, validation, success |
| `interaction/` | `components.md` | Components and interaction | `IX-01` to `IX-18` | control states, standard controls, overlays, forms, undo, feedback |
| `interaction/` | `accessibility.md` | Accessibility | `AX-01` to `AX-16` | semantics, contrast, focus, keyboard, zoom, motion, announcements, testing |
| `interaction/` | `platform.md` | Platform conventions | `PL-01` to `PL-12` | Apple HIG and Fluent 2 principles applied to the web |
| `product/` | `dashboards.md` | Dashboards and product UI | `DB-01` to `DB-18` | shell, data, charts, tables, filters, states for tools and admin panels |
| `product/` | `copy.md` | Copy and UX writing | `CP-01` to `CP-14` | voice, clarity, buttons, errors, honest claims |
| `production/` | `essentials.md` | Production essentials | `PE-01` to `PE-14` | 404, CTA, favicon, OG, legal pages, cookies, analytics, contact, Git |
| `production/` | `seo.md` | SEO | `SEO-01` to `SEO-16` | sitemap, robots, canonical, meta, headings, schema, links, llms.txt |
| `production/` | `performance.md` | Performance | `PF-01` to `PF-21` | images, loading, Core Web Vitals, caching, database, Lighthouse, heavy visuals |
| `production/` | `security.md` | Security | `SEC-01` to `SEC-18` | HTTPS, CSP, headers, secrets, validation, auth, uploads, dependencies |
| `production/` | `github.md` | GitHub workflow | `GH-01` to `GH-16` | repository, branches, commits, PRs, CI, quality gates, deploys, releases |

## Hard rules

These can never be switched back on, whatever the override:

- `SL-17` decorative counting (01 / 02 / 03 on anything)
- `SL-43` fake testimonials presented as real
- `SL-44` placeholder business info left in a shipped build
- `SL-49` side-stripe accent borders
- `CP-14` invented claims, numbers or customers

## Which rules load when

| Task | Load |
| --- | --- |
| Marketing site, landing page, portfolio (`modes/persuade.md`) | `design/` all, `interaction/` all, `product/copy.md`, `production/` all |
| Dashboard, admin, tool, settings (`modes/operate.md`) | `product/dashboards.md` first, then everything else; `GR` mostly does not apply |
| Docs, blog, long-form (`modes/read.md`) | `design/typography.md` first, `layout.md`, `accessibility.md`, `seo.md` |
| Immersive, portfolio, campaign (`modes/experience.md`) | `design/` all, `motion.md`, `performance.md` (`PF-21`), `accessibility.md` |
| Review only | the command file (`commands/critique.md` or `commands/audit.md`) plus all rules |

`scripts/check-rules.mjs` verifies that IDs are unique and that the counts in this table match the files.
