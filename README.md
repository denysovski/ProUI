<div align="center">

<img src="assets/xslop-banner-v3.jpg" alt="XSlop: a rulebook for building websites that look made by a person, not generated" width="100%">

### Rulebooks and a workflow that teach AI agents to build websites that don't look AI-generated

[What it is](#what-xslop-is) · [Contents](#contents) · [How rules work](#how-the-rules-work) · [Rulebooks](#rulebooks) · [Workflow](#how-the-workflow-works) · [Effects](#effects-library) · [Commands](#commands) · [Websites](#websites-used-in-the-workflow) · [Tools](#design-tools) · [Quick start](#quick-start)

</div>

---

## What XSlop is

XSlop is a skill for AI coding agents such as Claude Code, Codex or Cursor. It tells the agent what a
professional website needs and what makes a site look "vibecoded", and gives it a step-by-step workflow from
the first brief to a live site on GitHub.

> [!NOTE]
> XSlop is an **add-on**. It is loaded next to your project's own brief, brand and code. Your instructions come
> first, then the project's own rules, then XSlop.

## Contents

| Folder | What's inside |
| --- | --- |
| [`rules/`](rules/README.md) | the rulebooks, one folder per subject, each with Do and Don't tables |
| [`workflow/`](workflow/README.md) | the step-by-step process and the GitHub guide |
| [`effects/`](effects/README.md) | the effects library: 3D, shaders, animated text and components from React Bits and 21st.dev |
| [`modes/`](modes/README.md) | four kinds of pages: persuade, operate, read, experience |
| [`commands/`](commands/README.md) | short commands like `XSlop critique` or `XSlop ship` |
| [`templates/`](templates/README.md) | files the agent fills in: brief, decisions, reports, GitHub setup |
| [`inspiration/`](inspiration/README.md) | galleries to research and what good sites have in common |
| [`toolkit/`](toolkit/README.md) | libraries, gradient and shape tools, design tools by stage |
| [`recipes/`](recipes/README.md) | ready code for motion, components, gradients and dashboards |
| [`style/`](style/README.md) | named styles to use in prompts, and my personal taste |
| [`references/`](references/README.md) | Apple and Microsoft guidelines, Impeccable, OpenDesign, source checklists |
| [`scripts/`](scripts/README.md) | the slop scanner and the rulebook and catalogue builders |
| [`SKILL.md`](SKILL.md) | the entry point the agent reads first |

## How the rules work

Every rule has an ID. The letters say which rulebook it belongs to; the number is its fixed place in that
rulebook. You use IDs in prompts to switch rules on or off.

```text
ST-02
│  └── number: the rule's fixed place in its rulebook (not a priority, never reused)
└───── prefix: the rulebook (ST = States Rulebook)
```

| Type | Meaning | Example |
| --- | --- | --- |
| Do | a positive rule: what a finished site does | `ST-02` Loading state: skeletons that match the final layout |
| Don't | a negative rule: what never ships | `SL-01` Purple-to-blue gradients |
| SOFT | a don't that is allowed when it is a deliberate part of the style | `SL-25` Excessive mono fonts |
| HARD RULE | a don't that can never be switched back on | `SL-17` Decorative counting (01 / 02 / 03) |

## Rulebooks

| Area | Rulebook | Prefix | Covers |
| --- | --- | --- | --- |
| Design | [Anti-Slop Rulebook](rules/anti-slop/README.md) | `SL` | patterns that make a site look AI-generated |
| Design | [Design Craft Rulebook](rules/craft/README.md) | `DC` | small decisions that make a design feel considered |
| Design | [Typography Rulebook](rules/typography/README.md) | `TY` | fonts, scale, line length, spacing, loading |
| Design | [Colour Rulebook](rules/color/README.md) | `CL` | colour strategy, roles, contrast, dark mode |
| Design | [Gradients and Backgrounds Rulebook](rules/gradients/README.md) | `GR` | gradients and background patterns that look intentional |
| Design | [Effects and 3D Rulebook](rules/effects/README.md) | `EF` | modern effects, shaders and 3D at the level the user chose |
| Design | [Layout and Spacing Rulebook](rules/layout/README.md) | `LY` | hierarchy, spacing, grid, responsive structure |
| Design | [Images and Media Rulebook](rules/images/README.md) | `IM` | photos, video, icons and how to prepare them |
| Interaction | [Navigation Rulebook](rules/navigation/README.md) | `NV` | menus, wayfinding, search, footer, URLs |
| Interaction | [Components and Interaction Rulebook](rules/components/README.md) | `IX` | controls, overlays, feedback, behaviour |
| Interaction | [Forms and Checkout Rulebook](rules/forms/README.md) | `FO` | forms, validation, errors, checkout |
| Interaction | [States Rulebook](rules/states/README.md) | `ST` | empty, loading, error, offline and other states |
| Interaction | [Motion Rulebook](rules/motion/README.md) | `MO` | timing, easing, transitions, reduced motion |
| Interaction | [Accessibility Rulebook](rules/accessibility/README.md) | `AX` | WCAG 2.2 AA, keyboard, screen readers, the EU Accessibility Act |
| Interaction | [Platform Conventions Rulebook](rules/platform/README.md) | `PL` | Apple HIG and Microsoft Fluent principles for the web |
| Product | [Dashboards and Product UI Rulebook](rules/dashboards/README.md) | `DB` | dashboards, admin panels, tables and charts |
| Content | [Copy and UX Writing Rulebook](rules/copy/README.md) | `CP` | headlines, buttons, errors, honest claims |
| Content | [Localisation Rulebook](rules/localization/README.md) | `LO` | languages, formats, currencies |
| Production | [Launch Essentials Rulebook](rules/launch/README.md) | `PE` | system pages, legal pages, contact, monitoring |
| Production | [SEO Rulebook](rules/seo/README.md) | `SEO` | technical SEO, structured data, search penalties |
| Production | [Performance Rulebook](rules/performance/README.md) | `PF` | Core Web Vitals, images, scripts, caching |
| Production | [Security Rulebook](rules/security/README.md) | `SEC` | headers, secrets, validation, authentication |
| Production | [GitHub Workflow Rulebook](rules/github/README.md) | `GH` | repository, CI, quality gates, deploys |

Every rulebook folder has a `README.md` you can read on GitHub and a `rulebook.json` it is built from.
See [how to add a rule](rules/README.md#adding-or-changing-a-rule).

## How the workflow works

![XSlop workflow: brief, research, direction, design system, type and colour, structure, outline, first screen, approve, build, passes, quality and GitHub, handoff](assets/workflow-v2.jpg)

| Step | What happens | You decide |
| --- | --- | --- |
| Intake questions | the agent asks what kind of site you imagine | type of site, feel (modern, classic, old-school…), effect level, colours, action, tech, content |
| Brief | what the site is, for whom, the one main action | answer what is still missing |
| Research | the agent collects real designs from the websites below | |
| Direction | three or four directions with screenshots | pick one or combine |
| Design system | fonts, colours, gradient, spacing, effects from the library | pick type, colour and effects |
| Structure | pages and sections | confirm the outline |
| First screen | the hero built for real | approve the look |
| Build | every page, with real content | |
| Passes | design, behaviour and production rulebooks, one by one | |
| Quality and GitHub | scored review, CI checks, deploy | approve publishing |
| Handoff | live link and what still needs your content | |

Every decision is saved in `xslop/DECISIONS.md`, so a new session continues with `XSlop continue`.
Full details: [workflow/WORKFLOW.md](workflow/WORKFLOW.md).

## Effects library

When you ask for a **modern web** or a **website with 3D effects**, XSlop asks how much effect you want and
then picks ready components that fit the chosen style.

| Effect level | You get |
| --- | --- |
| None | a calm, fast site with hover and focus feedback only |
| Subtle | gentle motion, tilt and spotlight cards |
| Modern | an animated headline, gradients or one shader background, one interactive section |
| Immersive 3D | a 3D hero scene, 3D galleries, scroll-driven sequences |

| Catalogue | What's in it |
| --- | --- |
| [React Bits](effects/catalog/react-bits.md) | every component of [reactbits.dev](https://reactbits.dev/get-started/index): shader backgrounds, cursor and reveal animations, animated text, galleries, cards, micro-interactions |
| [21st.dev 3D](effects/catalog/21st-3d.md) | 3D heroes, shader backgrounds, globes, orbs, tilt cards, 3D carousels and scroll effects from [21st.dev](https://21st.dev/community/components/s/3d) |

Components are installed into your project from their official registries with one command, then restyled to
your colours and fonts. See [presets](effects/presets.md) and the [install guide](effects/install.md).

## Modes

| Mode | The visitor came to | Examples |
| --- | --- | --- |
| Persuade | decide and act | landing page, shop, service business |
| Operate | get a job done | dashboard, admin, tool, settings |
| Read | understand | docs, blog, case study |
| Experience | explore | portfolio, campaign, gallery |

## Commands

| Command | What it does |
| --- | --- |
| `XSlop workflow: <request>` | builds a new site with checkpoints |
| `XSlop critique` | design review with scores and prioritised issues |
| `XSlop audit` | technical review: accessibility, performance, theming, responsive |
| `XSlop effects` | picks and installs effects at the chosen level |
| `XSlop polish` | refines an existing page without redesigning it |
| `XSlop dashboard` | builds or reviews product UI |
| `XSlop ship` | production checks, GitHub, deploy |
| `XSlop continue` | resumes a project from its decisions file |

All commands: [commands/README.md](commands/README.md).

## Websites used in the workflow

### Guidelines

| Website | Good for |
| --- | --- |
| [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines) | design principles, typography, colour, layout, accessibility |
| [Microsoft Fluent 2](https://fluent2.microsoft.design) | spacing system, type ramp, tokens, elevation for product UI |
| [Impeccable](https://github.com/pbakaus/impeccable) | the open-source design skill XSlop takes the most inspiration from |
| [OpenDesign](https://open-design.ai) | one design-system file per brand, design as code |

### Inspiration (research step)

| Website | Good for |
| --- | --- |
| [Mobbin](https://mobbin.com) | real app and website screens, flows, dashboards (paid login) |
| [Dribbble](https://dribbble.com) | concepts for 3D, scroll and product reveals |
| [Dark](https://dark.design) | dark websites by category |
| [Recent](https://recent.design) | current brand, web and motion work |
| [Saved](https://saved.design) | interface, 3D and typography details |
| [Designeer](https://designeer.xyz) | components, motion, 3D |
| [Godly](https://godly.website), [Awwwards](https://www.awwwards.com), [Land-book](https://land-book.com), [SiteInspire](https://www.siteinspire.com), [Lapa Ninja](https://www.lapa.ninja), [httpster](https://httpster.net) | extra galleries when the main ones are thin |

### Building (design system and build steps)

| Website | Good for |
| --- | --- |
| [Fontshare](https://fontshare.com) | free quality fonts |
| [Made With GSAP](https://madewithgsap.com), [GSAP](https://gsap.com), [Lenis](https://lenis.dev) | animation and smooth scroll |
| [React Bits](https://reactbits.dev/get-started/index) | animated React components (full catalogue in the effects library) |
| [21st.dev 3D components](https://21st.dev/community/components/s/3d) | community 3D components (catalogue in the effects library) |
| [Codrops](https://tympanus.net/codrops) | creative effect tutorials |
| [Spline](https://spline.design), [three.js](https://threejs.org) | 3D |
| [SVGL](https://svgl.app), [SVG Doodles](https://svgdoodles.com) | brand logos and hand-drawn accents |
| [Balsa UI Gradient Studio](https://balsa-ui.com/tools/gradient-studio) | signature gradients |
| [Balsa UI Design Studio](https://balsa-ui.com/tools/design-studio) | tokens and components for dashboards |
| [Pryzm Studio](https://pryzm.design/studio) | backgrounds from a gradient, photo and pattern |
| [Book of Shapes](https://bookofshapes.com) | generative SVG patterns |
| [minitools.design](https://minitools.design) | directory of small design tools |

## Design tools

<details>
<summary><b>Brand, typography, colour</b></summary>

| Tool | Use it for |
| --- | --- |
| GeoLogo, Logo Lattice | geometric logo sketches (never an invented brand mark without asking) |
| Symbl | testing a logo at every size before making favicons |
| [Google Fonts](https://fonts.google.com) | free font families |
| [Typewolf](https://www.typewolf.com) | what real sites use, alternatives to overused fonts |
| [Type Scale](https://typescale.com) | modular type scales |
| [Fontjoy](https://fontjoy.com) | font pairing ideas |
| [Wakamai Fondue](https://wakamaifondue.com) | what a font file supports |
| [OKLCH](https://oklch.com) | picking colours in OKLCH |
| [Realtime Colors](https://www.realtimecolors.com) | palettes previewed on a page |
| [Huemint](https://huemint.com), [Coolors](https://coolors.co), [Color Hunt](https://colorhunt.co) | palette ideas |
| [Who Can Use](https://www.whocanuse.com) | contrast for real people |

</details>

<details>
<summary><b>Gradients, shapes, icons, 3D</b></summary>

| Tool | Use it for |
| --- | --- |
| [ShaderGradient](https://shadergradient.co) | animated 3D mesh gradients |
| Gradlab, Gradientool, Background Studio, mmeshy | mesh and multi-stop gradients |
| [Hero Patterns](https://heropatterns.com), [Get Waves](https://getwaves.io), [Blobmaker](https://www.blobmaker.app) | patterns, dividers, organic shapes |
| [Phosphor](https://phosphoricons.com), [Tabler Icons](https://tabler.io/icons), [Iconoir](https://iconoir.com) | icon sets beyond the default |
| Morflax Studio, Valessa | 3D product and device shots |
| [Poly Haven](https://polyhaven.com) | free HDRIs, textures and models |
| [glTF Report](https://gltf.report) | compressing 3D models |

</details>

<details>
<summary><b>Mockups and utilities for the final stage</b></summary>

| Tool | Use it for |
| --- | --- |
| [shots.so](https://shots.so), Presenta, Ultramock, Sliick | real screenshots in device frames |
| Frametic | a mockup video of the site for launch posts |
| [ray.so](https://ray.so) | code snippets as images |
| [Squoosh](https://squoosh.app) | image compression |
| [SVGOMG](https://jakearchibald.github.io/svgomg/) | SVG optimisation |
| [tldraw](https://tldraw.com) | quick wireframes |

Tools without a link are listed on [minitools.design](https://minitools.design). More: [toolkit/design-tools.md](toolkit/design-tools.md).

</details>

## Quick start

```bash
# install as a Claude Code skill (personal or per project)
git clone https://github.com/denysovski/XSlop ~/.claude/skills/xslop
```

```text
Build a website for a coffee shop using XSlop.
Make me a modern web with 3D effects for my design studio.
XSlop workflow, direction BLACK COAL: portfolio for a photographer.
XSlop dashboard: analytics for a small e-shop.
Use XSlop, but keep SL-25. Skip PE-10.
XSlop critique
```

```bash
# scan any project for slop and hard-rule violations
node ~/.claude/skills/xslop/scripts/xslop-scan.mjs ./src
```

## Credits

Strongly inspired by [Impeccable](https://github.com/pbakaus/impeccable) by Paul Bakaus (Apache-2.0), see
[NOTICE](NOTICE). Apple HIG and Microsoft Fluent 2 are summarised in my own words with links. Pinterest pins
belong to their authors and are linked, not copied. Started from a set of
[screenshot checklists](references/source-checklists.md).
