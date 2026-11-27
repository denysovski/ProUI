# Inspiration pack

Where to look before designing, what each source is good for, and what to take away from it. Load this file
when starting a new website or component, or when the user asks for "something like the sites on Dark /
Recent / Saved".

Use inspiration to learn **principles** (layout rhythm, type scale, how motion supports content). Do not copy a
specific site, its logo, copy, photos or brand 1:1.

---

## How to research a reference

For every reference site or shot, write down the same eight things. This turns "it looks nice" into rules you
can reuse.

1. **Idea**: the one concept the page is built around (a product, a mood, a material, a metaphor).
2. **Type**: families, the size ratio between display and body, weights, tracking, case.
3. **Colour**: background, ink, one accent, how many greys, light or dark, where colour appears.
4. **Grid and spacing**: columns, max width, gutter, the vertical rhythm between sections.
5. **Hero**: what fills the first screen and how the primary action is presented.
6. **Signature moment**: the one thing people remember (a 3D object, a scroll transition, a cursor effect).
7. **Motion**: what moves, when, how fast, and what stays still.
8. **Details**: buttons, links, hover states, cursor, footer, 404, small labels.

Then note what you would take (principle) and what you would not (anything that is the brand itself).

---

## Galleries

### Dark — dark.design

- **What it is:** a hand-picked gallery of dark-themed websites, "from designers for designers".
- **Organised by:** All, Agency, AI, Culture, Education, Hardware, Personal, Software, Web3; sorted New or
  Popular. Each entry has a screenshot, a category tag, a detail page and a link to the live site. Also has
  free templates.
- **Typical content:** studio and agency portfolios, personal designer sites, software and SaaS product pages,
  some AI, Web3 and hardware.
- **Use it for:** dark UI done well. How studios use black, one accent, big type and real work instead of
  decoration.
- **What dark sites that work tend to do:**
  - Near-black backgrounds (not pure #000 everywhere) with 2–3 surface steps for depth.
  - Off-white text, not pure white, for long reading; muted text still passes contrast (see ProUI `DC-15`).
  - One saturated accent used rarely: a link colour, a live dot, a button.
  - Product UI or work shown at large size as the main visual, on dark it reads like a gallery wall.
  - Hairline borders (1 px, low-contrast) rather than shadows, which do not show on black.
  - Imagery and video carry the colour; the chrome stays neutral.
- **Watch out for:** low-contrast grey on black (`SL-06`), glow orbs (`SL-03`), purple gradients (`SL-01`).

### Recent — recent.design

- **What it is:** a curated feed of design inspiration plus a design jobs board.
- **Sections:** Design (main feed), Launch Videos, Websites, OG Images, App Screenshots, App Icons; resources
  for Tools, Skills and Jobs. The design feed filters by Web, Interface, Branding, Motion, Illustration,
  Posters, Print.
- **Typical content:** brand identities, motion and interaction studies, typefaces, logo marks, app screens,
  pitch pages, concept work, often as multi-slide carousels.
- **Use it for:** current taste. Kinetic type, brand worlds, interaction studies (steppers, sliders,
  toggles), launch videos and OG images to see how products present themselves.
- **Takeaways that recur in the feed:**
  - Brand systems are shown as a world: logo, type, colour, motion and applications together.
  - Micro-interactions are designed as standalone pieces (a liquid stepper, a kinetic token) and then reused.
  - Custom or carefully chosen type carries most of the identity.
  - Motion studies of type and logos: a mark that animates is a brand asset, not decoration.

### Saved — saved.design

- **What it is:** a daily collection of design from across the internet (in beta).
- **Filters:** All, Web, Interface, Branding, Motion, 3D, Illustration, Typography, Posters.
- **Typical content:** AI product interfaces and brand identities, dashboards, volume sliders and overlay
  patterns, node-based tools, editorial typefaces, shader visuals, interactive 3D cards and buttons,
  isometric illustration, SaaS templates. Every tile credits its creator.
- **Use it for:** the newest interface patterns, especially AI product UI, 3D UI elements and shader
  visuals, and to find designers worth following.

### Mobbin — mobbin.com

- **What it is:** a searchable reference library of real, shipped mobile apps, web apps and websites:
  screens, multi-step flows, UI elements, website sections, with app history over time.
- **Access:** a limited free plan; paid plans unlock the full library, flows and collections. It also offers
  an MCP server, REST API and design skills for AI agents (search screens, flows and sections).
- **Use it for:** how real products solve a specific problem: onboarding, paywalls, checkout, settings,
  empty states, search, sign-up. Prefer it over Dribbble when you need something that actually shipped.
- **How to use with ProUI:** when building a flow, look up 3–5 shipped examples of that exact flow, list the
  steps and states they all share, and make sure your version covers the same states (`ST-01`–`ST-10`).

### Dribbble — "3D scroll" search

- **What it is:** a community of designers sharing shots (concepts, not necessarily shipped).
- **Use it for:** visual ideas for 3D, scroll storytelling and product reveals. Treat it as concept art:
  great for direction, risky as a spec. Check that an idea is buildable, performant and accessible before
  committing to it.

### Designeer — designeer.xyz

- **What it is:** a curated directory for designers, developers and design engineers. Categories include
  Inspiration, Components, Build, Visuals, Utilities, Design Engineers and Sections. Creators can submit
  their own projects.
- **Use it for:** finding the right tool, component source or design engineer portfolio quickly.

### Curated — curated.design

- **What it is:** a gallery of almost 3 000 live websites and landing pages, each reviewed by hand, linking
  straight to the real sites, with sections and components taken from them.
- **Organised by:** industry shelves (Agency, E-commerce, Education, Finance and more), then filters for
  style, visuals, attributes, tags, media type and date. Advanced filters are paid.
- **Use it for:** the Research stage when you need several real sites of the same industry and style side by
  side, for example "e-commerce, editorial, photography-led".

### Details — details.so

- **What it is:** a library of single moments captured from live production sites and tagged by hand: hero
  sections, footers, preloaders, page transitions, scroll and hover animations. New examples weekly.
- **Organised by:** UI elements, structure, transitions and loading, scroll, pointer and hover, industries,
  styles; filters combine.
- **Use it for:** the one signature interaction (`EF-02`) and for loaders and page transitions
  (`MO-30`–`MO-32`, `MO-21`): look at how real sites time and stage them before writing your own.

### Saaspo — saaspo.com

- **What it is:** a curated collection of SaaS landing pages, submitted by users, with pages, single sections
  and Open Graph images.
- **Organised by:** page type (Landing, Pricing, Product, About, Blog, Customers, Careers, Contact,
  Integrations, Partners), industry (AI, agents, calendar, developer tools, finance, security, legal,
  automation, infrastructure), stack (Next.js, Framer, Webflow) and style (dark mode).
- **Use it for:** product sites: how real SaaS pages order the hero, proof, features, pricing and the final
  call to action, how they show the product itself instead of fake dashboards (`SL-20`, `SL-45`), and the
  inner pages that are easy to forget (customers, integrations, careers, contact).
- **Watch out for:** the SaaS default look this gallery is full of (`SL-01`, `SL-15`, `SL-09`): collect the
  structure, not the purple gradient.

### Unsection — unsection.com

- **What it is:** section-first inspiration: single sections from real sites rather than whole pages, plus
  collections, website types, industries, fonts in use and templates.
- **Organised by:** 13 section types (Hero, Testimonials, Feature, CTA, Footer, Blog, Navbar, Pricing, Logo,
  FAQs, Team, Contact, Portfolio), then filters for style, layout and elements.
- **Use it for:** the Structure stage, when one section needs better options than the usual three cards. Pick
  by what the section has to answer (`blueprints/sections.md`), and check its Contact examples against
  `FO-19`.

### Bencho — bencho.dev

- **What it is:** a library of more than 150 live React components and micro-interactions you can try and copy,
  each tagged by its trigger (press, drag, hover, loading, type, swipe, select): a thinking orb, a liquid
  tooltip, a genie effect, a dynamic island, a seat map, a signature pad, loader variants. It also has
  interface sounds and an MCP server.
- **Use it for:** the one interaction that makes a product feel made (a seat map for a venue, a signature pad
  for a contract, a loader that fits the brand, `MO-31`); browse by trigger to find what fits the action.
- **Watch out for:** one signature interaction per page (`EF-02`); restyle to the brand (`SL-19`); sounds stay
  off by default (`sounds/`).

### Awwwards — awwwards.com

- **What it is:** the long-running awards site; every Site of the Day is scored for design, usability,
  creativity and content, with a developer score for performance, responsiveness, semantics, animations and
  accessibility.
- **Use it for:** ambitious, experimental work (3D, WebGL, motion, editorial layouts) and its Collections and
  Elements pages for single parts (menus, footers, about pages).
- **Watch out for:** award sites often trade usability and speed for effect. Check the developer score and
  the accessibility score before copying an idea, and keep `MO-24` (no scroll hijacking) and `MO-26`.

### Spell UI — spell.sh

- **What it is:** a small open-source (MIT) library of refined, motion-first React and Tailwind components
  by a design engineer, installable through the shadcn CLI and listed on 21st.dev: text reveals, shimmer,
  tilt cards, animated checkboxes, copy buttons, light rays, marquees.
- **Use it for:** one polished micro-interaction (a copy button, an animated checkbox, a text reveal) at the
  Modern effect level, restyled to the brand (`SL-19`).
- **Watch out for:** shimmer, light rays, gradient text and marquees are on the slop list when used as filler
  (`SL-28`, `SL-55`, `SL-68`).

---

## Patterns worth learning from these galleries

These patterns recur across the featured work. They are good when they fit the content.

- **Oversized type as the hero.** One or two words at 12–20vw, the rest of the page quiet.
- **Work-first grids.** Large thumbnails, minimal chrome, captions in small type. The content is the design.
- **One signature interaction.** A single memorable thing (a 3D object you can turn, a liquid toggle, a
  cursor-reactive image) rather than effects everywhere.
- **Brand motion.** The logo or wordmark animates once, with intent, at load or on hover.
- **Editorial rhythm.** Alternating full-bleed media and narrow text columns; generous section spacing.
- **Real UI as illustration.** Product screenshots cropped and scaled as hero art, instead of fake dashboards.
- **Tactile 3D UI elements.** Buttons, cards and sliders with depth, light and physical response on press.
- **Shader backgrounds with purpose.** Subtle, slow, and tied to the brand (a material, weather, light),
  never generic glowing blobs.

---

## Reference screenshots

Screenshots of these galleries and tools live in `references/screens/` (for example `dark-home.jpg`,
`recent-feed.jpg`, `saved-grid.jpg`, `21st-3d.jpg`). `references/README.md` lists each file and what to learn
from it.
