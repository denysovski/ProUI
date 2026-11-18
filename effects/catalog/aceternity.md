# Aceternity UI catalogue

> The 114 free components of [Aceternity UI](https://ui.aceternity.com/components), read from the component pages, with their registry names. Bolder than Motion Primitives: beams, spotlights, 3D cards, globes, parallax heroes.

[Effects library](../README.md) · [Kits](../kits.md) · [Motion Primitives catalogue](motion-primitives.md) · [Install guide](../install.md)

> [!IMPORTANT]
> Aceternity components are free to use in your own projects, but the licence does not allow redistributing their source. XSlop keeps this index and installs each component into the project from the official registry. Pro blocks and templates are not included.

## Install

```bash
npm i motion clsx tailwind-merge
npx shadcn@latest add @aceternity/<registry-name>
```

The registry name is in the Install column. "Copy from page" means the component has no registry entry; copy its code from the linked page.

**Renders with:** `CSS` and `Motion` are light, `SVG filter`, `Canvas` and `tsParticles` are medium, `WebGL` and `Three.js` are heavy (lazy-load them).

## Contents

- [Backgrounds](#backgrounds)
- [Spotlights and reveals](#spotlights-and-reveals)
- [Cards](#cards)
- [Scroll](#scroll)
- [Text](#text)
- [Buttons](#buttons)
- [Loaders](#loaders)
- [Navigation](#navigation)
- [Forms and inputs](#forms-and-inputs)
- [Overlays](#overlays)
- [Carousels and galleries](#carousels-and-galleries)
- [Layout and sections](#layout-and-sections)
- [Product and code](#product-and-code)
- [3D and globes](#3d-and-globes)

## Backgrounds

| Component | Use it for | Renders with | Install |
| --- | --- | --- | --- |
| [Webcam Pixel Grid](https://ui.aceternity.com/components/webcam-pixel-grid) | Real-time webcam pixel grid for retro aesthetics | Canvas | `@aceternity/webcam-pixel-grid` |
| [Scales](https://ui.aceternity.com/components/scales) | Repeating diagonal, horizontal or vertical line pattern background | CSS | `@aceternity/scales` |
| [Dotted Glow Background](https://ui.aceternity.com/components/dotted-glow-background) | Dots with opacity animation and glow | Motion | `@aceternity/dotted-glow-background` |
| [Background Ripple Effect](https://ui.aceternity.com/components/background-ripple-effect) | Grid of cells that ripple when clicked | Motion | `@aceternity/background-ripple-effect` |
| [Sparkles](https://ui.aceternity.com/components/sparkles) | Configurable sparkles, as background or standalone | tsParticles | `@aceternity/sparkles` |
| [Background Gradient](https://ui.aceternity.com/components/background-gradient) | Animated gradient behind a card or button | Motion | `@aceternity/background-gradient` |
| [Background Gradient Animation](https://ui.aceternity.com/components/background-gradient-animation) | Smooth gradient that shifts position over time | Motion | `@aceternity/background-gradient-animation` |
| [Wavy Background](https://ui.aceternity.com/components/wavy-background) | Moving wave background | Canvas | `@aceternity/wavy-background` |
| [Background Boxes](https://ui.aceternity.com/components/background-boxes) | Full-width box grid that highlights on hover | Motion | `@aceternity/background-boxes` |
| [Background Beams](https://ui.aceternity.com/components/background-beams) | Beams following SVG paths behind a hero | Motion | `@aceternity/background-beams` |
| [Background Beams With Collision](https://ui.aceternity.com/components/background-beams-with-collision) | Beams that explode on collision | Motion | `@aceternity/background-beams-with-collision` |
| [Background Lines](https://ui.aceternity.com/components/background-lines) | SVG paths animating in waves behind a hero | Motion | `@aceternity/background-lines` |
| [Aurora Background](https://ui.aceternity.com/components/aurora-background) | Subtle aurora light background | Motion | `@aceternity/aurora-background` |
| [Meteor Effect](https://ui.aceternity.com/components/meteors) | Meteor beams inside a container | Motion | `@aceternity/meteors` |
| [Shooting Stars and Stars Background](https://ui.aceternity.com/components/shooting-stars-and-stars-background) | Shooting stars over a starry sky | Motion | `@aceternity/shooting-stars` |
| [Vortex Background](https://ui.aceternity.com/components/vortex) | Swirling vortex background for CTAs | Canvas | `@aceternity/vortex` |
| [Background Cubes Grid](https://ui.aceternity.com/components/background-cubes-grid) | Grid of 3D cubes rippling under the cursor | Three.js | `@aceternity/background-cubes-grid` |
| [Liquid Glass](https://ui.aceternity.com/components/liquid-glass) | Glass surface that refracts what is behind it, with a fallback | SVG filter | `@aceternity/liquid-glass` |
| [Cloud Shader](https://ui.aceternity.com/components/cloud-shader) | Procedural drifting clouds | WebGL | `@aceternity/cloud-shader` |
| [Noise Background](https://ui.aceternity.com/components/noise-background) | Animated gradients with noise texture | Motion | `@aceternity/noise-background` |
| [Grid and Dot Backgrounds](https://ui.aceternity.com/components/grid-and-dot-backgrounds) | Simple grid and dot section backgrounds (copy from page) | Motion | copy from page |

## Spotlights and reveals

| Component | Use it for | Renders with | Install |
| --- | --- | --- | --- |
| [Spotlight](https://ui.aceternity.com/components/spotlight) | Spotlight drawing attention to an element | Motion | `@aceternity/spotlight` |
| [Spotlight New](https://ui.aceternity.com/components/spotlight-new) | Configurable left and right spotlights | Motion | `@aceternity/spotlight-new` |
| [Canvas Reveal Effect](https://ui.aceternity.com/components/canvas-reveal-effect) | Dot background expanding on hover, Clerk-style | Three.js (R3F) | `@aceternity/canvas-reveal-effect` |
| [SVG Mask Effect](https://ui.aceternity.com/components/svg-mask-effect) | Cursor reveals what is underneath | Motion | `@aceternity/svg-mask-effect` |
| [Lamp Section Header](https://ui.aceternity.com/components/lamp-effect) | Lamp glow for section headers, Linear-style | Motion | `@aceternity/lamp` |
| [Glowing Effect](https://ui.aceternity.com/components/glowing-effect) | Border glow that adapts to any card, Cursor-style | Motion | `@aceternity/glowing-effect` |
| [Google Gemini Effect](https://ui.aceternity.com/components/google-gemini-effect) | SVG lines animating on scroll | Motion | `@aceternity/google-gemini-effect` |
| [Chromatic Image](https://ui.aceternity.com/components/chromatic-image) | Image with color separation, displacement and tilt | WebGL | `@aceternity/chromatic-image` |
| [ASCII Art](https://ui.aceternity.com/components/ascii-art) | Image converted to animated ASCII | Canvas | `@aceternity/ascii-art` |
| [Pixelated Canvas](https://ui.aceternity.com/components/pixelated-canvas) | Pixelated image with mouse distortion | Canvas | `@aceternity/pixelated-canvas` |
| [Dither Shader](https://ui.aceternity.com/components/dither-shader) | Real-time ordered dithering of images | WebGL | `@aceternity/dither-shader` |

## Cards

| Component | Use it for | Renders with | Install |
| --- | --- | --- | --- |
| [3D Card Effect](https://ui.aceternity.com/components/3d-card-effect) | Card whose elements lift in perspective on hover | Motion | `@aceternity/3d-card` |
| [Evervault Card](https://ui.aceternity.com/components/evervault-card) | Hover reveals encrypted text and a gradient | Motion | `@aceternity/evervault-card` |
| [Card Stack](https://ui.aceternity.com/components/card-stack) | Cards cycling on a stack, for testimonials | Motion | `@aceternity/card-stack` |
| [Card Hover Effect](https://ui.aceternity.com/components/card-hover-effect) | Highlight slides to the hovered card | Motion | `@aceternity/card-hover-effect` |
| [Wobble Card](https://ui.aceternity.com/components/wobble-card) | Card that shifts and scales with the mouse, for features | Motion | `@aceternity/wobble-card` |
| [Expandable Cards](https://ui.aceternity.com/components/expandable-card) | Cards that expand to show more (copy from page) | Motion | copy from page |
| [Card Spotlight](https://ui.aceternity.com/components/card-spotlight) | Card with a radial spotlight reveal | Three.js (R3F) | `@aceternity/card-spotlight` |
| [Focus Cards](https://ui.aceternity.com/components/focus-cards) | Hovered card in focus, others blurred | Motion | `@aceternity/focus-cards` |
| [Draggable Card](https://ui.aceternity.com/components/draggable-card) | Tiltable card you can drag and throw | Motion | `@aceternity/draggable-card` |
| [Comet Card](https://ui.aceternity.com/components/comet-card) | 3D tilt card, Perplexity Comet-style | Motion | `@aceternity/comet-card` |
| [Glare Card](https://ui.aceternity.com/components/glare-card) | Glare on hover, Linear-style | Motion | `@aceternity/glare-card` |
| [Direction Aware Hover](https://ui.aceternity.com/components/direction-aware-hover) | Overlay entering from the hover direction | Motion | `@aceternity/direction-aware-hover` |
| [Glowing Stars Card](https://ui.aceternity.com/components/glowing-stars-effect) | Card background stars | Motion | `@aceternity/glowing-stars` |
| [Tooltip Card](https://ui.aceternity.com/components/tooltip-card) | Tooltip card following the pointer | Motion | `@aceternity/tooltip-card` |
| [Text Reveal Card](https://ui.aceternity.com/components/text-reveal-card) | Mouse reveals hidden text in a card | Motion | `@aceternity/text-reveal-card` |

## Scroll

| Component | Use it for | Renders with | Install |
| --- | --- | --- | --- |
| [Tracing Beam](https://ui.aceternity.com/components/tracing-beam) | Beam following content as you scroll, for articles | Motion | `@aceternity/tracing-beam` |
| [Parallax Grid Scroll](https://ui.aceternity.com/components/parallax-scroll) | Two columns scrolling in opposite directions | Motion | `@aceternity/parallax-scroll` |
| [Sticky Scroll Reveal](https://ui.aceternity.com/components/sticky-scroll-reveal) | Sticky panel while text reveals, for feature tours | Motion | `@aceternity/sticky-scroll-reveal` |
| [Macbook Scroll](https://ui.aceternity.com/components/macbook-scroll) | Image rising out of a laptop screen, Fey-style | Motion | `@aceternity/macbook-scroll` |
| [Container Scroll Animation](https://ui.aceternity.com/components/container-scroll-animation) | Panel rotating into place in 3D on scroll | Motion | `@aceternity/container-scroll-animation` |
| [Hero Parallax](https://ui.aceternity.com/components/hero-parallax) | Rows of product shots with rotation and parallax | Motion | `@aceternity/hero-parallax` |
| [Timeline](https://ui.aceternity.com/components/timeline) | Timeline with sticky headers and scroll beam | Motion | `@aceternity/timeline` |

## Text

| Component | Use it for | Renders with | Install |
| --- | --- | --- | --- |
| [Canvas Text](https://ui.aceternity.com/components/canvas-text) | Coloured curved lines clipped to text | Canvas | `@aceternity/canvas-text` |
| [Encrypted Text](https://ui.aceternity.com/components/encrypted-text) | Text revealing from gibberish | Motion | `@aceternity/encrypted-text` |
| [Layout Text Flip](https://ui.aceternity.com/components/layout-text-flip) | Word flip that reflows surrounding text | Motion | `@aceternity/layout-text-flip` |
| [Colourful Text](https://ui.aceternity.com/components/colourful-text) | Text with colour, filter and scale effects | Motion | `@aceternity/colourful-text` |
| [Squiggly Text](https://ui.aceternity.com/components/squiggly-text) | SVG turbulence on text | Motion | `@aceternity/squiggly-text` |
| [Text Generate Effect](https://ui.aceternity.com/components/text-generate-effect) | Words fading in one by one | Motion | `@aceternity/text-generate-effect` |
| [Typewriter Effect](https://ui.aceternity.com/components/typewriter-effect) | Typed-out text | Motion | `@aceternity/typewriter-effect` |
| [Flip Words](https://ui.aceternity.com/components/flip-words) | Cycles through a list of words | Motion | `@aceternity/flip-words` |
| [Text Hover Effect](https://ui.aceternity.com/components/text-hover-effect) | Outlined gradient text on hover, x.ai-style | Motion | `@aceternity/text-hover-effect` |
| [Container Text Flip](https://ui.aceternity.com/components/container-text-flip) | Words flipping with animated width | Motion | `@aceternity/container-text-flip` |
| [Hero Highlight](https://ui.aceternity.com/components/hero-highlight) | Background effect with highlighted words | Motion | `@aceternity/hero-highlight` |
| [Text Flipping Board](https://ui.aceternity.com/components/text-flipping-board) | Split-flap display text | Motion | `@aceternity/text-flipping-board` |
| [Pointer Highlight](https://ui.aceternity.com/components/pointer-highlight) | Highlights text in view with a pointer | Motion | `@aceternity/pointer-highlight` |

## Buttons

| Component | Use it for | Renders with | Install |
| --- | --- | --- | --- |
| [Magnetic Button](https://ui.aceternity.com/components/magnetic-button) | Button drifting toward the cursor with spring return | Motion | `@aceternity/magnetic-button` |
| [Tailwind CSS Buttons](https://ui.aceternity.com/components/tailwindcss-buttons) | Curated button styles (copy from page) | Motion | copy from page |
| [Hover Border Gradient](https://ui.aceternity.com/components/hover-border-gradient) | Gradient border expanding on hover | Motion | `@aceternity/hover-border-gradient` |
| [Moving Border](https://ui.aceternity.com/components/moving-border) | Border light moving around a button | Motion | `@aceternity/moving-border` |
| [Stateful Button](https://ui.aceternity.com/components/stateful-button) | Button with loading and success states | Motion | `@aceternity/stateful-button` |

## Loaders

| Component | Use it for | Renders with | Install |
| --- | --- | --- | --- |
| [Image Generation Loader](https://ui.aceternity.com/components/image-generation-loader) | Scanning pixel loader over an image | Canvas | `@aceternity/image-generation-loader` |
| [Multi Step Loader](https://ui.aceternity.com/components/multi-step-loader) | Named steps for long waits | Motion | `@aceternity/multi-step-loader` |
| [Loaders](https://ui.aceternity.com/components/loader) | Minimal loaders | Motion | `@aceternity/loader` |

## Navigation

| Component | Use it for | Renders with | Install |
| --- | --- | --- | --- |
| [Notch](https://ui.aceternity.com/components/notch) | Floating notch navigation at the top or bottom | Motion | `@aceternity/notch` |
| [Floating Navbar](https://ui.aceternity.com/components/floating-navbar) | Sticky navbar hiding on scroll down | Motion | `@aceternity/floating-navbar` |
| [Navbar Menu](https://ui.aceternity.com/components/navbar-menu) | Animated big navigation menu | Motion | `@aceternity/navbar-menu` |
| [Sidebar](https://ui.aceternity.com/components/sidebar) | Expandable sidebar with mobile support | Motion | `@aceternity/sidebar` |
| [Floating Dock](https://ui.aceternity.com/components/floating-dock) | macOS-style dock navigation | Motion | `@aceternity/floating-dock` |
| [Animated Tabs](https://ui.aceternity.com/components/tabs) | Tabs with animated background | Motion | `@aceternity/tabs` |
| [Resizable Navbar](https://ui.aceternity.com/components/resizable-navbar) | Navbar that narrows on scroll | Motion | `@aceternity/resizable-navbar` |
| [Sticky Banner](https://ui.aceternity.com/components/sticky-banner) | Top banner hiding on scroll | Motion | `@aceternity/sticky-banner` |

## Forms and inputs

| Component | Use it for | Renders with | Install |
| --- | --- | --- | --- |
| [Signup Form](https://ui.aceternity.com/components/signup-form) | Signup form on shadcn inputs (copy from page) | Motion | copy from page |
| [Placeholders And Vanish Input](https://ui.aceternity.com/components/placeholders-and-vanish-input) | Rotating placeholders, vanishing on submit | Motion | `@aceternity/placeholders-and-vanish-input` |
| [File Upload](https://ui.aceternity.com/components/file-upload) | Drag and drop upload with micro-interactions | Motion | `@aceternity/file-upload` |
| [Gooey Input](https://ui.aceternity.com/components/gooey-input) | Search input expanding with a gooey effect | Motion | `@aceternity/gooey-input` |

## Overlays

| Component | Use it for | Renders with | Install |
| --- | --- | --- | --- |
| [Animated Modal](https://ui.aceternity.com/components/animated-modal) | Compound modal with animated transitions | Motion | `@aceternity/animated-modal` |
| [Animated Tooltip](https://ui.aceternity.com/components/animated-tooltip) | Tooltip following the pointer | Motion | `@aceternity/animated-tooltip` |
| [Link Preview](https://ui.aceternity.com/components/link-preview) | Preview card for links | Motion | `@aceternity/link-preview` |
| [Following Pointer](https://ui.aceternity.com/components/following-pointer) | Custom pointer with content | Motion | `@aceternity/following-pointer` |
| [Lens](https://ui.aceternity.com/components/lens) | Zoom lens over images or video | Motion | `@aceternity/lens` |

## Carousels and galleries

| Component | Use it for | Renders with | Install |
| --- | --- | --- | --- |
| [Images Slider](https://ui.aceternity.com/components/images-slider) | Full-page image slider with keyboard | Motion | `@aceternity/images-slider` |
| [Carousel](https://ui.aceternity.com/components/carousel) | Carousel with micro-interactions | Motion | `@aceternity/carousel` |
| [Apple Cards Carousel](https://ui.aceternity.com/components/apple-cards-carousel) | Minimal card carousel, apple.com-style | Motion | `@aceternity/apple-cards-carousel` |
| [Animated Testimonials](https://ui.aceternity.com/components/animated-testimonials) | Testimonial with image and quote | Motion | `@aceternity/animated-testimonials` |
| [Infinite Moving Cards](https://ui.aceternity.com/components/infinite-moving-cards) | Cards looping in a row | Motion | `@aceternity/infinite-moving-cards` |
| [Images Badge](https://ui.aceternity.com/components/images-badge) | Badge revealing images on hover | Motion | `@aceternity/images-badge` |
| [Parallax Hero Images](https://ui.aceternity.com/components/parallax-hero-images) | Mouse parallax images for heroes | Motion | `@aceternity/parallax-hero-images` |
| [Compare](https://ui.aceternity.com/components/compare) | Before and after image slider | tsParticles | `@aceternity/compare` |

## Layout and sections

| Component | Use it for | Renders with | Install |
| --- | --- | --- | --- |
| [Layout Grid](https://ui.aceternity.com/components/layout-grid) | Grid items expanding on click | Motion | `@aceternity/layout-grid` |
| [Bento Grid](https://ui.aceternity.com/components/bento-grid) | Bento grid with title, description and header | Motion | `@aceternity/bento-grid` |
| [Cover](https://ui.aceternity.com/components/container-cover) | Wrapper with beams and space effect on hover | tsParticles | `@aceternity/cover` |
| [Hero Sections](https://ui.aceternity.com/components/hero-sections-free) | Free hero section blocks (copy from page) | Motion + cobe | copy from page |
| [Feature Sections](https://ui.aceternity.com/components/feature-sections-free) | Free feature section blocks (copy from page) | Motion + cobe | copy from page |
| [Cards](https://ui.aceternity.com/components/cards-free) | Free card blocks (copy from page) | Motion | copy from page |

## Product and code

| Component | Use it for | Renders with | Install |
| --- | --- | --- | --- |
| [Keyboard](https://ui.aceternity.com/components/keyboard) | Mac keyboard with key sounds | Motion | `@aceternity/keyboard` |
| [Terminal](https://ui.aceternity.com/components/terminal) | Mac terminal with typewriter | Motion | `@aceternity/terminal` |
| [Code Block](https://ui.aceternity.com/components/code-block) | Syntax-highlighted code block | Motion | `@aceternity/code-block` |

## 3D and globes

| Component | Use it for | Renders with | Install |
| --- | --- | --- | --- |
| [GitHub Globe](https://ui.aceternity.com/components/github-globe) | Interactive globe, GitHub-style | Three.js (three-globe) | `@aceternity/globe` |
| [3D Globe](https://ui.aceternity.com/components/3d-globe) | Realistic globe with tooltips and avatars | Three.js (R3F) | `@aceternity/3d-globe` |
| [World Map](https://ui.aceternity.com/components/world-map) | World map with animated lines and dots | SVG (dotted-map) | `@aceternity/world-map` |
| [3D Animated Pin](https://ui.aceternity.com/components/3d-pin) | Gradient pin animating on hover, for product links | Motion | `@aceternity/3d-pin` |
| [3D Marquee](https://ui.aceternity.com/components/3d-marquee) | Tilted grid marquee for testimonials or heroes | Motion | `@aceternity/3d-marquee` |

---

<sub>Generated by `scripts/build-effects.mjs` from the JSON file next to this one. Edit the JSON, then run the script.</sub>
