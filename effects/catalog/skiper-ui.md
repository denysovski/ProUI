# Skiper UI catalogue

> The 37 free components of [Skiper UI](https://skiper-ui.com/components?source=free), read from each component page. Small, polished Framer Motion pieces: scroll stacks, carousels, expanding panels, toggles, progressive blur.

[Effects library](../README.md) · [Kits](../kits.md) · [Motion recipes](motion-recipes.md) · [Install guide](../install.md)

> [!IMPORTANT]
> Free Skiper UI components may be used and changed in personal and commercial projects, **with attribution to Skiper UI** (for example a credit in the footer or the colophon). Their source is not copied into XSlop. Pro components need a paid licence key and are not listed.

## Install

```bash
npm i framer-motion clsx tailwind-merge lucide-react
npx shadcn@latest add @skiper-ui/skiper40
```

Components land in `components/v1/skiperNN.tsx`. Rename the file and the export to what it does in the project.

## Contents

- [Media](#media)
- [Buttons and toggles](#buttons-and-toggles)
- [Scroll](#scroll)
- [Text](#text)
- [Numbers](#numbers)
- [Backgrounds](#backgrounds)
- [Links and navigation](#links-and-navigation)
- [Surfaces](#surfaces)
- [Carousels](#carousels)
- [Galleries](#galleries)
- [Cursor](#cursor)
- [Utilities](#utilities)
- [Overlays](#overlays)
- [Forms](#forms)

## Media

| Component | Use it for | Dependencies | Install |
| --- | --- | --- | --- |
| [Apple play button](https://skiper-ui.com/v1/skiper3) | Play button with a soft hover morph | framer-motion | `@skiper-ui/skiper3` |
| [Video player 001](https://skiper-ui.com/v1/skiper67) | Video preview that opens into a modal player | framer-motion, media-chrome, lucide-react | `@skiper-ui/skiper67` |

## Buttons and toggles

| Component | Use it for | Dependencies | Install |
| --- | --- | --- | --- |
| [Theme toggle buttons](https://skiper-ui.com/v1/skiper4) | Five animated light and dark switches | framer-motion, clsx | `@skiper-ui/skiper4` |
| [Music toggle btn](https://skiper-ui.com/v1/skiper25) | Sound on/off toggle with a vinyl motion | framer-motion, use-sound | `@skiper-ui/skiper25` |
| [Theme toggle btn](https://skiper-ui.com/v1/skiper26) | Theme switch using View Transitions (circle, blur, wipe) | framer-motion, next-themes, lucide-react | `@skiper-ui/skiper26` |
| [Animated icons 002](https://skiper-ui.com/v1/skiper99) | Set of animated icons | framer-motion, lucide-react | `@skiper-ui/skiper99` |

## Scroll

| Component | Use it for | Dependencies | Install |
| --- | --- | --- | --- |
| [Card stack scroll](https://skiper-ui.com/v1/skiper16) | Cards stack and scale back as you scroll | framer-motion, lenis | `@skiper-ui/skiper16` |
| [Card stack with gsap and rotate](https://skiper-ui.com/v1/skiper17) | Scroll stack with rotation, GSAP version | gsap, @gsap/react, lenis | `@skiper-ui/skiper17` |
| [Svg follow scroll](https://skiper-ui.com/v1/skiper19) | SVG line draws itself with scroll progress | framer-motion | `@skiper-ui/skiper19` |
| [Oliver parallax](https://skiper-ui.com/v1/skiper30) | Multi-layer parallax of images | framer-motion, lenis | `@skiper-ui/skiper30` |
| [Scroll images reveal 003](https://skiper-ui.com/v1/skiper34) | Images scale and rotate into place on scroll | framer-motion, lenis | `@skiper-ui/skiper34` |
| [Scroll with fade effect](https://skiper-ui.com/v1/skiper87) | CSS-only fade at the top and bottom of a scroller | none | `@skiper-ui/skiper87` |
| [Scroll progress 001](https://skiper-ui.com/v1/skiper89) | Draggable circular reading progress with a number | motion, @number-flow/react | `@skiper-ui/skiper89` |

## Text

| Component | Use it for | Dependencies | Install |
| --- | --- | --- | --- |
| [3D perspective text](https://skiper-ui.com/v1/skiper28) | Headline tilts in perspective with scroll | framer-motion, lenis | `@skiper-ui/skiper28` |
| [Text Scroll animation](https://skiper-ui.com/v1/skiper31) | Letters reveal as the section scrolls | framer-motion, lenis | `@skiper-ui/skiper31` |

## Numbers

| Component | Use it for | Dependencies | Install |
| --- | --- | --- | --- |
| [Animated number](https://skiper-ui.com/v1/skiper37) | Countdown, spring and in-view number animations | framer-motion, @number-flow/react, react-intersection-observer | `@skiper-ui/skiper37` |

## Backgrounds

| Component | Use it for | Dependencies | Install |
| --- | --- | --- | --- |
| [Canvas crowd](https://skiper-ui.com/v1/skiper39) | Canvas of walking illustrated people | gsap | `@skiper-ui/skiper39` |

## Links and navigation

| Component | Use it for | Dependencies | Install |
| --- | --- | --- | --- |
| [CssLink](https://skiper-ui.com/v1/skiper40) | Link with a CSS-only hover animation | lucide-react | `@skiper-ui/skiper40` |
| [Text roll navigation](https://skiper-ui.com/v1/skiper58) | Menu links whose letters roll on hover | framer-motion | `@skiper-ui/skiper58` |

## Surfaces

| Component | Use it for | Dependencies | Install |
| --- | --- | --- | --- |
| [Progressive Blur](https://skiper-ui.com/v1/skiper41) | Layered blur that fades toward an edge | none | `@skiper-ui/skiper41` |
| [Apple squicircle effect](https://skiper-ui.com/v1/skiper63) | Squircle corners through an SVG filter | lucide-react | `@skiper-ui/skiper63` |
| [Gooey Effect](https://skiper-ui.com/v1/skiper64) | Gooey liquid merge on any elements | framer-motion | `@skiper-ui/skiper64` |
| [SVG clip path mask](https://skiper-ui.com/v1/skiper66) | Image masked by a custom SVG shape | tailwindcss | `@skiper-ui/skiper66` |

## Carousels

| Component | Use it for | Dependencies | Install |
| --- | --- | --- | --- |
| [Perspective carousel](https://skiper-ui.com/v1/skiper47) | Coverflow carousel in 3D perspective | swiper, framer-motion | `@skiper-ui/skiper47` |
| [Card swipe carousel](https://skiper-ui.com/v1/skiper48) | Stacked cards you swipe away | swiper, framer-motion | `@skiper-ui/skiper48` |
| [Inverted perspective carousel](https://skiper-ui.com/v1/skiper49) | Coverflow with reversed perspective | swiper, framer-motion | `@skiper-ui/skiper49` |
| [Creative carousel 001](https://skiper-ui.com/v1/skiper50) | Single image slider with a focus effect | swiper, framer-motion | `@skiper-ui/skiper50` |
| [Creative carousel 002](https://skiper-ui.com/v1/skiper51) | Slider with an unusual transition | swiper, framer-motion | `@skiper-ui/skiper51` |
| [Shadcn clipPath Carousal](https://skiper-ui.com/v1/skiper54) | Carousel with clip-path transitions on shadcn | embla-carousel-autoplay, framer-motion, lucide-react | `@skiper-ui/skiper54` |

## Galleries

| Component | Use it for | Dependencies | Install |
| --- | --- | --- | --- |
| [ExpandOnHover](https://skiper-ui.com/v1/skiper52) | Row of panels, the hovered one expands | framer-motion | `@skiper-ui/skiper52` |
| [ExpandOnHover vertical](https://skiper-ui.com/v1/skiper53) | Column of panels, the hovered one expands | framer-motion | `@skiper-ui/skiper53` |

## Cursor

| Component | Use it for | Dependencies | Install |
| --- | --- | --- | --- |
| [Mouse follow animations](https://skiper-ui.com/v1/skiper61) | Elements that follow the pointer, direct or with a spring | framer-motion | `@skiper-ui/skiper61` |

## Utilities

| Component | Use it for | Dependencies | Install |
| --- | --- | --- | --- |
| [Loop animation hook](https://skiper-ui.com/v1/skiper62) | Hook for looping animations | framer-motion | `@skiper-ui/skiper62` |
| [Breakpoint indicator](https://skiper-ui.com/v1/skiper65) | Shows the current Tailwind breakpoint while developing | tailwindcss | `@skiper-ui/skiper65` |
| [Debug Pannel](https://skiper-ui.com/v1/skiper102) | Prints any object on screen while developing | motion | `@skiper-ui/skiper102` |

## Overlays

| Component | Use it for | Dependencies | Install |
| --- | --- | --- | --- |
| [Custom tooltip](https://skiper-ui.com/v1/skiper101) | Tooltip on Radix with animation and arrow | @radix-ui/react-tooltip | `@skiper-ui/skiper101` |

## Forms

| Component | Use it for | Dependencies | Install |
| --- | --- | --- | --- |
| [Smooth caret input](https://skiper-ui.com/v1/skiper106) | Input with an animated caret that glides between positions | dialkit, framer-motion | `@skiper-ui/skiper106` |

---

<sub>Generated by `scripts/build-effects.mjs` from the JSON file next to this one. Edit the JSON, then run the script.</sub>
