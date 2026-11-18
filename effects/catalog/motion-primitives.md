# Motion Primitives catalogue

> All 33 components of [Motion Primitives](https://motion-primitives.com) by ibelick: small, quiet Motion components for text, reveals, light and interactive UI. Their source is saved in this repository under [kits/motion-primitives](../kits/motion-primitives/).

[Effects library](../README.md) · [Kits](../kits.md) · [Aceternity catalogue](aceternity.md) · [Install guide](../install.md)

> [!NOTE]
> Motion Primitives is MIT licensed (Copyright (c) 2024 ibelick). The copy in `kits/motion-primitives/` keeps its licence file; keep that notice when a component is copied into a project.

## Install

```bash
# from the vendored copy: copy components/<name>.tsx, lib/utils.ts and any hook it imports
npm i motion clsx tailwind-merge

# or from the official registry
npx motion-primitives@latest add <name>
npx shadcn@latest add "https://motion-primitives.com/c/<name>.json"
```

Every component imports `cn` from `@/lib/utils`. A few also need `lucide-react`, `react-use-measure` or a hook from `hooks/`.

## Contents

- [Text](#text)
- [Reveal and scroll](#reveal-and-scroll)
- [Surfaces and light](#surfaces-and-light)
- [Interactive UI](#interactive-ui)
- [Overlays](#overlays)

## Text

| Component | Use it for | Extra dependencies | Source |
| --- | --- | --- | --- |
| [text-effect](https://motion-primitives.com/docs/text-effect) | Headline entrance per word or letter (fade, blur, slide) | none | [text-effect.tsx](../kits/motion-primitives/components/text-effect.tsx) |
| [text-loop](https://motion-primitives.com/docs/text-loop) | Cycle a few words in a headline | none | [text-loop.tsx](../kits/motion-primitives/components/text-loop.tsx) |
| [text-morph](https://motion-primitives.com/docs/text-morph) | Button label that morphs between states | none | [text-morph.tsx](../kits/motion-primitives/components/text-morph.tsx) |
| [text-roll](https://motion-primitives.com/docs/text-roll) | Rolling letters on hover or entrance | none | [text-roll.tsx](../kits/motion-primitives/components/text-roll.tsx) |
| [text-scramble](https://motion-primitives.com/docs/text-scramble) | Scrambled text that resolves, for tech brands | none | [text-scramble.tsx](../kits/motion-primitives/components/text-scramble.tsx) |
| [text-shimmer](https://motion-primitives.com/docs/text-shimmer) | Shimmer for "loading" or AI status text | none | [text-shimmer.tsx](../kits/motion-primitives/components/text-shimmer.tsx) |
| [text-shimmer-wave](https://motion-primitives.com/docs/text-shimmer-wave) | Wave shimmer across letters | none | [text-shimmer-wave.tsx](../kits/motion-primitives/components/text-shimmer-wave.tsx) |
| [spinning-text](https://motion-primitives.com/docs/spinning-text) | Circular rotating badge text | none | [spinning-text.tsx](../kits/motion-primitives/components/spinning-text.tsx) |
| [animated-number](https://motion-primitives.com/docs/animated-number) | Count up a metric with a spring | none | [animated-number.tsx](../kits/motion-primitives/components/animated-number.tsx) |
| [sliding-number](https://motion-primitives.com/docs/sliding-number) | Odometer-style digits for prices or counters | react-use-measure | [sliding-number.tsx](../kits/motion-primitives/components/sliding-number.tsx) |

## Reveal and scroll

| Component | Use it for | Extra dependencies | Source |
| --- | --- | --- | --- |
| [in-view](https://motion-primitives.com/docs/in-view) | Animate a block when it scrolls into view | none | [in-view.tsx](../kits/motion-primitives/components/in-view.tsx) |
| [animated-group](https://motion-primitives.com/docs/animated-group) | Stagger a list or grid of children | none | [animated-group.tsx](../kits/motion-primitives/components/animated-group.tsx) |
| [scroll-progress](https://motion-primitives.com/docs/scroll-progress) | Reading progress bar | none | [scroll-progress.tsx](../kits/motion-primitives/components/scroll-progress.tsx) |
| [progressive-blur](https://motion-primitives.com/docs/progressive-blur) | Blur that fades over an image edge or scroller | none | [progressive-blur.tsx](../kits/motion-primitives/components/progressive-blur.tsx) |
| [infinite-slider](https://motion-primitives.com/docs/infinite-slider) | Logo wall or marquee loop | react-use-measure | [infinite-slider.tsx](../kits/motion-primitives/components/infinite-slider.tsx) |

## Surfaces and light

| Component | Use it for | Extra dependencies | Source |
| --- | --- | --- | --- |
| [spotlight](https://motion-primitives.com/docs/spotlight) | Soft light following the cursor inside a card | none | [spotlight.tsx](../kits/motion-primitives/components/spotlight.tsx) |
| [glow-effect](https://motion-primitives.com/docs/glow-effect) | Animated glow behind a card or button | none | [glow-effect.tsx](../kits/motion-primitives/components/glow-effect.tsx) |
| [border-trail](https://motion-primitives.com/docs/border-trail) | Light travelling around a border | none | [border-trail.tsx](../kits/motion-primitives/components/border-trail.tsx) |
| [tilt](https://motion-primitives.com/docs/tilt) | Subtle 3D tilt on hover | none | [tilt.tsx](../kits/motion-primitives/components/tilt.tsx) |
| [magnetic](https://motion-primitives.com/docs/magnetic) | Element drifting toward the cursor | none | [magnetic.tsx](../kits/motion-primitives/components/magnetic.tsx) |
| [cursor](https://motion-primitives.com/docs/cursor) | Custom cursor or cursor-attached label | none | [cursor.tsx](../kits/motion-primitives/components/cursor.tsx) |

## Interactive UI

| Component | Use it for | Extra dependencies | Source |
| --- | --- | --- | --- |
| [accordion](https://motion-primitives.com/docs/accordion) | FAQ and expandable lists | none | [accordion.tsx](../kits/motion-primitives/components/accordion.tsx) |
| [disclosure](https://motion-primitives.com/docs/disclosure) | Show more / less block | none | [disclosure.tsx](../kits/motion-primitives/components/disclosure.tsx) |
| [animated-background](https://motion-primitives.com/docs/animated-background) | Sliding highlight for tabs, nav and segmented controls | none | [animated-background.tsx](../kits/motion-primitives/components/animated-background.tsx) |
| [transition-panel](https://motion-primitives.com/docs/transition-panel) | Animated tab or step content | none | [transition-panel.tsx](../kits/motion-primitives/components/transition-panel.tsx) |
| [carousel](https://motion-primitives.com/docs/carousel) | Accessible carousel with controls | lucide-react | [carousel.tsx](../kits/motion-primitives/components/carousel.tsx) |
| [image-comparison](https://motion-primitives.com/docs/image-comparison) | Before and after slider | none | [image-comparison.tsx](../kits/motion-primitives/components/image-comparison.tsx) |
| [dock](https://motion-primitives.com/docs/dock) | macOS-style dock | none | [dock.tsx](../kits/motion-primitives/components/dock.tsx) |
| [toolbar-dynamic](https://motion-primitives.com/docs/toolbar-dynamic) | Toolbar that expands into a search or form | lucide-react | [toolbar-dynamic.tsx](../kits/motion-primitives/components/toolbar-dynamic.tsx) |
| [toolbar-expandable](https://motion-primitives.com/docs/toolbar-expandable) | Toolbar with expanding panels | lucide-react, react-use-measure | [toolbar-expandable.tsx](../kits/motion-primitives/components/toolbar-expandable.tsx) |

## Overlays

| Component | Use it for | Extra dependencies | Source |
| --- | --- | --- | --- |
| [dialog](https://motion-primitives.com/docs/dialog) | Modal dialog with motion | lucide-react, react-dom | [dialog.tsx](../kits/motion-primitives/components/dialog.tsx) |
| [morphing-dialog](https://motion-primitives.com/docs/morphing-dialog) | Card that morphs into a full dialog | lucide-react, react-dom | [morphing-dialog.tsx](../kits/motion-primitives/components/morphing-dialog.tsx) |
| [morphing-popover](https://motion-primitives.com/docs/morphing-popover) | Button that morphs into a popover | none | [morphing-popover.tsx](../kits/motion-primitives/components/morphing-popover.tsx) |

---

<sub>Generated by `scripts/build-effects.mjs` from the JSON file next to this one. Edit the JSON, then run the script.</sub>
