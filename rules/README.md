# Rulebooks

> Every rule ProUI applies, sorted into rulebooks by subject. Each rulebook has its own folder with a readable `README.md` and the data file it is built from.

## How rules are named

Every rule has an ID made of a **prefix** and a **number**:

```text
SEO-05
│   └─ number: the rule's place in its rulebook. It never changes once given,
│      so prompts, reviews and commits can refer to it. It is not a priority.
└──── prefix: the rulebook (SEO = SEO Rulebook, ST = States Rulebook, SL = Anti-Slop)
```

Each rule is either a **Do** (positive: what to do) or a **Don't** (negative: what never ships). Some carry a label:

| Label | Meaning |
| --- | --- |
| SOFT | allowed only as a deliberate, sparing part of a brand or a chosen style |
| HARD RULE | can never be switched back on, whatever the prompt says |

## Design

| Rulebook | Prefix | Covers |
| --- | --- | --- |
| [Anti-Slop Rulebook](anti-slop/README.md) | `SL` | Patterns that make a website look AI-generated. Everything here is a don't; the positive counterparts live in the other rulebooks. |
| [Design Craft Rulebook](craft/README.md) | `DC` | Small decisions that separate a considered design from a template. |
| [Typography Rulebook](typography/README.md) | `TY` | Choosing faces, setting a scale, measure, leading and tracking, and loading fonts properly. |
| [Colour Rulebook](color/README.md) | `CL` | Colour strategy, roles, OKLCH, contrast and dark mode. |
| [Gradients and Backgrounds Rulebook](gradients/README.md) | `GR` | When a gradient or background pattern has a job, and how to make one that looks intentional. |
| [Effects and 3D Rulebook](effects/README.md) | `EF` | Modern effects, shaders and 3D from the effects library, used at the level the user chose and without hurting speed or access. |
| [Layout and Spacing Rulebook](layout/README.md) | `LY` | Hierarchy, spacing scale, rhythm, grid and adapting to every screen. |
| [Page Structure Rulebook](structure/README.md) | `PG` | Which pages a site needs, which sections a landing page has and in what order, and how pricing, contact and footers are built. |
| [Images and Media Rulebook](images/README.md) | `IM` | Photography, illustration, video and icons: what to use, how to prepare it, what never to ship. |

## Interaction

| Rulebook | Prefix | Covers |
| --- | --- | --- |
| [Navigation Rulebook](navigation/README.md) | `NV` | Menus, wayfinding, search, footers and URLs that let people find things and know where they are. |
| [Components and Interaction Rulebook](components/README.md) | `IX` | Controls, overlays, feedback and behaviour that feel familiar and trustworthy. |
| [Forms and Checkout Rulebook](forms/README.md) | `FO` | Forms people can finish: fields, labels, validation, errors and checkout. |
| [States Rulebook](states/README.md) | `ST` | Every situation the interface has to handle, not only the happy path. |
| [Motion Rulebook](motion/README.md) | `MO` | Timing, easing and choreography that make an interface feel fast and physical. |
| [Accessibility Rulebook](accessibility/README.md) | `AX` | Usable by everyone, designed in from the start. Target: WCAG 2.2 AA. |
| [Platform Conventions Rulebook](platform/README.md) | `PL` | Principles from Apple's Human Interface Guidelines and Microsoft Fluent 2, applied to the web. |

## Product

| Rulebook | Prefix | Covers |
| --- | --- | --- |
| [Dashboards and Product UI Rulebook](dashboards/README.md) | `DB` | Dashboards, admin panels, tools and settings: shell, data, charts, tables and states. |

## Content

| Rulebook | Prefix | Covers |
| --- | --- | --- |
| [Copy and UX Writing Rulebook](copy/README.md) | `CP` | Words that sound like the business and help people act: headlines, buttons, errors, claims. |
| [Localisation Rulebook](localization/README.md) | `LO` | Sites in more than one language or market: language, formats, currencies and switching. |

## Production

| Rulebook | Prefix | Covers |
| --- | --- | --- |
| [Launch Essentials Rulebook](launch/README.md) | `PE` | What every real, launched website has: system pages, legal pages, contact details, monitoring. |
| [SEO Rulebook](seo/README.md) | `SEO` | Being found: technical SEO, content signals, structured data and what search engines penalise. |
| [Performance Rulebook](performance/README.md) | `PF` | Fast loading, smooth interaction and stable layout, measured with Core Web Vitals. |
| [Security Rulebook](security/README.md) | `SEC` | Protecting visitors, data and the site itself, from headers to authentication. |
| [GitHub Workflow Rulebook](github/README.md) | `GH` | The repository, branches, commits, pull requests, CI, quality gates, deploys and releases. |

## Hard rules

| ID | Never |
| --- | --- |
| `SL-17` | Decorative counting |
| `SL-43` | Fake testimonials |
| `SL-44` | Placeholder business info |
| `SL-49` | Side-stripe accent borders |
| `MO-29` | One transition for filtering: fade out, swap, rise in |
| `CP-14` | Invented claims, numbers or customers |

## Which rulebooks lead in each mode

| Mode | Lead with | Then |
| --- | --- | --- |
| [Persuade](../modes/persuade.md) | Anti-Slop, Craft, Typography, Colour, Copy | everything else |
| [Operate](../modes/operate.md) | Dashboards, Components, Forms, States, Accessibility | everything else; Gradients rarely apply |
| [Read](../modes/read.md) | Typography, Layout, Navigation, Accessibility, SEO | everything else |
| [Experience](../modes/experience.md) | Anti-Slop, Effects, Motion, Images, Performance, Accessibility | everything else |

## Adding or changing a rule

```bash
# 1. edit the rulebook data
rules/<rulebook>/rulebook.json   # add an object to "rules" with the next free id

# 2. rebuild the READMEs
node scripts/build-rulebooks.mjs

# 3. validate (also runs in CI)
node scripts/build-rulebooks.mjs --check
```

A rule object:

```json
{
  "id": "SEO-30",
  "kind": "do",
  "title": "Short title",
  "text": "One or two sentences: what to do and why.",
  "level": "soft"
}
```

`kind` is `do` or `dont`; `level` is optional (`soft` or `hard`). IDs are never reused or renumbered.

---

<sub>Generated from the `rulebook.json` files by `scripts/build-rulebooks.mjs`. To change a rule, edit the JSON and run the script.</sub>
