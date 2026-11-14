# XSlop

![XSlop: a rulebook for building websites that look made by a person, not generated](assets/banner.jpg)

One big skill sheet (`SKILL.md`) for AI agents (Claude, ChatGPT, Cursor…) that tells them how to build websites
that don't look generated ("AI slop", "vibecoded"), but like a finished product made by a person.

Every rule has its own ID (for example `SL-14`, `MO-04`), so I can tell the agent exactly what to include and
what to leave out.

## How it fits into a project

XSlop is an add-on skillset. Load it next to a project's own instructions (brief, brand guidelines, design
system, README, CLAUDE.md / AGENTS.md) so the agent understands the project better and knows what quality bar
to aim for. The order of precedence is: my instructions in the chat first, then the project's own rules and
design system, then XSlop. If a project's brand deliberately uses something XSlop calls slop, the project wins.

## How to use it

Example prompts:

- `Build a website for a coffee shop using XSlop.` – applies every rule.
- `Use XSlop, but keep SL-25 (mono fonts).` – allows that pattern, used sparingly.
- `Use XSlop, skip PE-10.` – skips that rule.
- `XSlop, only SEO and PF.` – applies only those groups.
- `XSlop audit of this site.` – builds nothing, just reviews the site and lists what fails.

As a skill: put the folder with `SKILL.md` among the agent's skills (for example in Claude). It loads
automatically when you say "XSlop".

## What it contains

| Group | IDs | Contents |
| --- | --- | --- |
| Slop to avoid | `SL-01` to `SL-48` | visual and copy patterns that make a site look AI-generated |
| Design craft | `DC-01` to `DC-20` | small decisions that make a design feel considered |
| Motion | `MO-01` to `MO-20` | how to animate fast and naturally, without effects for their own sake |
| States | `ST-01` to `ST-10` | empty, loading, error, offline, slow network, zero results, permission denied, session expiry, validation, success |
| Production essentials | `PE-01` to `PE-14` | 404, CTA, favicon, OG image, thank-you page, legal pages, cookies, analytics, contact details, Git, accessibility |
| SEO | `SEO-01` to `SEO-16` | sitemap, robots.txt, canonical, titles, descriptions, H1, heading order, alt text, schema, links, URLs, HTTPS, Search Console, llms.txt |
| Performance | `PF-01` to `PF-21` | images, lazy loading, Core Web Vitals, code splitting, caching, database, Lighthouse, lightweight 3D and video |

At the end there is a checklist the agent goes through before saying the work is done.

Next to the core sheet there are packs the agent loads when it needs them:

| Pack | What it contains |
| --- | --- |
| `inspiration/INSPIRATION.md` | where to look for inspiration (Dark, Recent, Saved, Mobbin, Dribbble, Designeer), what each is good for, how to analyse a reference, and patterns worth learning |
| `toolkit/TOOLKIT.md` | libraries, assets and fonts to build with (GSAP, Made With GSAP, Lenis, React Bits, 21st.dev, Codrops, Spline, three.js, SVGL, SVG Doodles, Fontshare): when to use each, install code, licence notes, guardrails |
| `recipes/RECIPES.md` | ready patterns with code: smooth scroll, reveals, split text, pinned gallery, magnetic button, marquee, popovers, custom select, toasts, light 3D hero, countdown, tracking boxes |
| `style/MY-STYLE.md` | my personal style, applied on top of the rules (draft; the Pinterest part is still to be filled in) |
| `references/` | screenshots of reference sites and what to learn from each (to be captured) |

## What I want to avoid

These are the things I don't want on a site (the `SL` rules). Some are marked "soft": those are fine only when
they are a deliberate part of the style and not everywhere.

Colour and surfaces
- purple-to-blue gradients
- gradient backgrounds instead of real content (soft)
- glowing blurred orbs in the background
- frosted glass panels everywhere (soft)
- pointless strong shadows
- dark mode with unreadable grey text
- lots of shades and opacities instead of a simple palette
- grain / dither effects just because they are trendy (soft)

Layout and components
- three feature cards with icons in a row
- empty bento grids
- generic three-tier pricing
- everything in bordered boxes, boxes inside boxes
- dividers everywhere
- tags and pills everywhere
- "New" badges above headlines
- a small eyebrow above every heading (soft)
- section numbering that means nothing (soft)
- super-rounded squircles everywhere
- untouched component libraries (shadcn/ui)
- overloaded fake UI mockups
- needlessly complex diagrams

Type
- Instrument Serif and the "AI serif" look
- italics on random words
- tight letter-spacing in body text
- mono fonts everywhere (soft)
- ALL CAPS in every subtitle (soft)
- periods at the end of headlines (soft)
- headlines filled with a colour gradient

Icons and decoration
- Lucide icons on every line
- emojis in headings and buttons
- sparkles on everything "AI" or "new"
- decorative "code" elements on a site that isn't about code
- ASCII images and animations
- glows and beams that follow the cursor

Motion
- everything fading and sliding in on scroll
- bouncy, springy animations on everyday UI

Copy
- em dashes in every sentence
- "It's not X, it's Y" phrasing
- generic hero copy ("Supercharge your workflow")
- wordy, repetitive text
- vague buttons ("Get started", "Learn more")
- claims without proof

Trust
- fake testimonials
- leftover placeholder info (lorem ipsum, 123 Main Street)
- no real product demo
- broken embeds (maps, videos, chat)
- forms that ask for too much
- forms that can't be used with a keyboard

## Files

- `SKILL.md` – the core skill sheet.
- `inspiration/`, `toolkit/`, `recipes/`, `style/`, `references/` – the packs described above.
- `README.md` – this overview.
- `assets/banner.jpg` – the image above, a 3D scene rendered with three.js (`assets/banner.html` is its source).
