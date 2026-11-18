# Toolkit pack

The libraries, asset sources and tools to reach for when building, with when to use each, how to install it,
licence notes and XSlop guardrails. Load this file when building a site or component.

General rules for every resource here:

- **Check the licence** of the specific item before shipping. Summaries below were accurate when written;
  the source's own licence page wins.
- **Restyle everything** to the project's design system (`SL-19`). A library component in its demo colours is
  slop.
- **One signature effect per page**, plus quiet supporting motion. Do not stack five showcase effects.
- **Performance budget** for every visual effect: render only while visible, respect
  `prefers-reduced-motion`, give weak devices a static fallback (`PF-21`).

---

## Motion and scroll

### GSAP (+ ScrollTrigger) — the motion engine

- **Use for:** timelines, scroll-linked animation, pinning, staggered reveals, text splitting, SVG motion.
- **Notes:** pair with Lenis for smooth scroll (below). Use `gsap.matchMedia()` to give mobile and
  reduced-motion users simpler timelines. Kill timelines and ScrollTriggers on route change.

### Made With GSAP — madewithgsap.com

- **What it is:** a growing collection (126+ at the time of writing, one new each week) of GSAP effects:
  scroll animations, mouse interactions, drag, infinite loops. Built with JavaScript and GSAP, without Canvas
  or WebGL, mobile and touch friendly.
- **Access:** a free set without an account; paid membership (about €20–25 a month) unlocks all effects, with
  a Webflow component, HTML/JS download, an AI prompt and a tutorial for each. Read their Permissions & Terms
  before reusing code.
- **Use it for:** proven recipes for draggable galleries, infinite sliders, cursor-follow media, scroll
  scenes. Study how they structure timelines; adapt rather than paste.

### Lenis — lenis.dev

- **What it is:** a lightweight (under 5 kB) smooth-scroll library by darkroom.engineering, MIT licensed. Works
  with plain JS, React and Vue; supports horizontal, nested and infinite scroll, and snapping via
  `lenis/snap`.
- **Install:** `npm i lenis`, then import the recommended CSS `lenis/dist/lenis.css`.
- **Basic setup:**

  ```js
  import Lenis from 'lenis'
  import 'lenis/dist/lenis.css'

  const lenis = new Lenis({ autoRaf: true, lerp: 0.1 })
  ```

- **With GSAP ScrollTrigger** (one shared loop, so they never drift):

  ```js
  import Lenis from 'lenis'
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)

  const lenis = new Lenis()               // no autoRaf: GSAP drives the loop
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)
  ```

- **React:** `import { ReactLenis, useLenis } from 'lenis/react'` and wrap the app in
  `<ReactLenis root options={{ lerp: 0.1 }}>`. With GSAP, pass `autoRaf: false` and drive it from the ticker.
- **Key options:** `lerp` (0.05–0.2 feels good; overrides `duration`/`easing`), `duration`, `easing`,
  `orientation`, `gestureOrientation`, `smoothWheel`, `wheelMultiplier`, `touchMultiplier`, `infinite`,
  `autoRaf`, `anchors`.
- **Methods:** `scrollTo(target, { offset, duration, immediate, lock })`, `stop()` / `start()` (use for open
  modals), `destroy()` (on unmount).
- **Nested scroll areas** (modals, dropdown lists, chat panels): add `data-lenis-prevent` to the element.
- **Guardrails:** keep native behaviour for keyboard, find-in-page and anchors; skip smooth scroll entirely
  for `prefers-reduced-motion` users.

### React Bits — reactbits.dev

- **What it is:** an open-source collection of 110+ animated React components: text animations, animations,
  components, backgrounds and micro-interactions. Every component comes in JS or TS and CSS or Tailwind.
- **Licence:** MIT + Commons Clause according to the repository README (free for personal and commercial
  use; you may not sell the components themselves). A separate paid library, React Bits Pro, has page blocks,
  templates and a commercial licence.
- **Install:** each component page shows a CLI command, via shadcn or jsrepo, for example:

  ```bash
  npx shadcn@latest add @react-bits/BlurText-TS-TW
  npx jsrepo add https://reactbits.dev/r/ComponentName-JS-TW
  ```

- **Dependencies:** vary per component (for example gsap, motion, three, ogl). Check before installing.
- **Use it for:** text reveals (split, blur, scramble), magnetic or tilted cards, infinite marquees,
  backgrounds for a single hero. Pick one or two per site.
- **Guardrails:** many backgrounds are exactly the "glowing blob / beams / aurora" look XSlop warns about
  (`SL-03`, `SL-34`). Use a background only when it expresses the brand, tune its colours to the palette, and
  pause it off-screen.

### 21st.dev — community components

- **What it is:** a community marketplace of React + Tailwind components: marketing blocks (heroes,
  features, pricing, testimonials) and UI components (buttons, cards, forms, dropdowns), with themed
  categories such as 3D (carousels, curved galleries, 3D calendars, wheel pickers).
- **Install:** copy the TSX, run `npx shadcn@latest add <component registry URL>`, or pull components through
  the 21st Magic MCP in an AI editor.
- **Licence:** set per component by its author. Check the component page before reuse.
- **Use it for:** a starting point for a specific interaction. Then restyle it fully (`SL-19`). Be careful
  with marketing blocks: they are where the generic three-cards / three-tier-pricing / fake-testimonial
  patterns live (`SL-09`, `SL-11`, `SL-43`).

### Codrops — tympanus.net/codrops

- **What it is:** tutorials, case studies and a demos hub of 500+ experimental demos: WebGL and three.js image
  transitions, shaders, on-scroll layouts, text effects, 3D carousels, GSAP techniques, R3F, OGL, WebGPU.
- **Licence:** downloadable demos are MIT unless stated otherwise; design freebies can be used in personal
  and commercial projects but not redistributed or sold as such.
- **Use it for:** learning how an advanced effect is actually built (the case studies explain the thinking),
  and for tested starting code for one signature moment.

---

## 3D

### Spline — spline.design

- **What it is:** a browser-based 3D design tool ("Figma for 3D"): objects, materials, states, events,
  physics, export to the web.
- **Embed options:**
  - React / Next.js: `npm i @splinetool/react-spline @splinetool/runtime`, then
    `<Spline scene="https://prod.spline.design/<id>/scene.splinecode" />`.
  - Vanilla: `@splinetool/runtime` or the `<spline-viewer>` web component.
  - No-code: an iframe of the public scene URL.
- **Performance:** the runtime is heavy (roughly 500 kB+). Lazy-load it, give the container an explicit
  height, show a static poster image until it is ready, keep scenes lean (well under 150k polygons, no hidden
  objects), and fall back to the image on weak devices and for reduced motion. Watch for scroll hijacking
  inside the canvas.
- **Use it for:** one hero object or one interactive product moment designed by hand. For many objects or
  shader work, use three.js / R3F instead.

### three.js / React Three Fiber

- **Use for:** custom 3D, shader materials, scroll-driven scenes, product configurators.
- **Guardrails:** cap pixel ratio (1–1.5), cap frame rate where motion is slow, render only while visible,
  dispose geometry and materials, and share one WebGL context where possible.

---

## Icons, logos and illustration

### SVGL — svgl.app

- **What it is:** a library of 600+ brand and tech logos as SVG, many with light/dark and wordmark variants,
  MIT-licensed code. Logos stay the trademarks of their owners.
- **API (free, no auth):** `https://api.svgl.app`, `?search=stripe`, `?limit=10`,
  `/category/software`, `/categories`, raw SVG at `/svg/<name>.svg`.
- **shadcn registry:** add `"@svgl": "https://svgl.app/r/{name}.json"` to `components.json` registries, then
  `npx shadcn@latest add @svgl/github`.
- **Use it for:** "works with" rows, integration lists, tech stack sections, footers, OAuth buttons.
- **Guardrails:** use logos only to name real integrations or partners, follow each brand's guidelines, and
  never imply an endorsement that does not exist (`SL-42`).

### SVG Doodles — svgdoodles.com

- **What it is:** hand-made, editable SVG doodles and shapes (lines, arrows, circles, blobs, highlights, 3D
  shapes such as the striped 3D bar, striped sphere, warped torus, twisted donut) by Michael Andreuzza.
  Copy as SVG, React, Vue, Svelte, Astro, React Native, base64 or CSS; recolour and resize.
- **Licence:** described as free; earlier versions were released under CC Attribution 3.0. Check the current
  terms and credit the author when required.
- **Use it for:** a human, hand-drawn accent: underlining a key word, an arrow to a CTA, one decorative shape
  per section. Recolour to the palette.
- **Guardrails:** one or two doodles per view. Doodles everywhere become their own kind of slop.

---

## Type

### Fontshare — fontshare.com

- **What it is:** a free font service by the Indian Type Foundry with 100+ families, many of them variable.
- **Licence:** ITF Free Font License: free for personal and commercial use, no attribution required. Do not
  redistribute or re-host the font files publicly as a font resource; serve them via the Fontshare CSS API or
  self-host them inside your own site build.
- **Embed:** the CSS API works like Google Fonts, for example
  `https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap`.
- **Families worth knowing and what they suit:**

  | Family | Style | Good for |
  | --- | --- | --- |
  | Satoshi | geometric-modernist sans | product UI, SaaS, clean body text |
  | General Sans | neutral neo-grotesk, variable | body and UI, a free alternative to premium grotesks |
  | Switzer | Swiss-style grotesk | editorial, corporate, long reading |
  | Cabinet Grotesk | characterful display grotesk | headlines with personality |
  | Clash Display / Clash Grotesk | sharp display | big fashion or tech headlines |
  | Chillax | soft, rounded display | friendly brands |
  | Boska | high-contrast serif | editorial, luxury |
  | Gambetta | text serif | articles, long-form |
  | Sentient | warm serif | editorial body text |
  | Erode | sturdy serif | headlines and reading |

- **Pairing rule:** one characterful display face over one neutral body face, at most two families plus a
  mono for data (`DC-04`). Avoid the default "AI serif" look (`SL-22`).

---

## How to choose quickly

| Need | First choice | Alternative |
| --- | --- | --- |
| Smooth scroll | Lenis | native scroll with CSS `scroll-behavior` |
| Scroll scenes, pinning, timelines | GSAP ScrollTrigger | Motion (Framer Motion) for React-only UI |
| One animated text or card component | React Bits | Made With GSAP recipe |
| Advanced WebGL / shader effect | Codrops demo + three.js | React Bits background (restyled) |
| Designed 3D hero object | Spline | three.js with a modelled GLB |
| Brand / tech logos | SVGL | the brand's own press kit |
| Hand-drawn accents | SVG Doodles | custom SVG |
| Free professional fonts | Fontshare | Google Fonts |
| Real product patterns and flows | Mobbin | Refero, Page Flows |
| Visual direction | Dark, Recent, Saved | Dribbble (concepts) |

## Effects library

Full catalogues of React Bits and 21st.dev 3D components, with effect levels, presets and install steps, live in [`effects/`](../effects/README.md).
