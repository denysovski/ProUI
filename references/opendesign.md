# OpenDesign

Source: https://open-design.ai (Apache-2.0, local-first desktop app). An agent-native design workspace that
connects coding agents such as Claude Code or Codex to curated design systems, and produces sites, prototypes,
slides, dashboards and HTML video.

## What ProUI learns from it

- **A design system as one Markdown file** (`DESIGN.md`) that every output reads, so a brand stays consistent
  across a site, a deck and social images. ProUI: `templates/context/DESIGN.md`.
- **Design systems as references.** OpenDesign ships many reference systems (Fluent, Material and others) the
  agent can study before building. ProUI does the same with `references/` and `style/STYLES.md`.
- **Design is code.** Outputs are real HTML, so the design goes straight to production; ProUI's workflow ends
  in a repository and a deploy (`workflow/GITHUB.md`).

## How to use it with ProUI

Optional. If the user has OpenDesign installed, ProUI's rules, modes and `DESIGN.md` can be loaded into it as
a skill, and its gallery can serve as one more research source in the workflow.
