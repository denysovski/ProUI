# ASCII overlay on media

> Characters bloom over the bright areas of a real photo or video as you scroll, tinted with the colours underneath. The picture stays visible; the characters are an added layer.

[Briefs](README.md) · [Motion recipes](../catalog/motion-recipes.md) · [Kits](../kits.md)

| Level | GSAP tools | Use in |
| --- | --- | --- |
| Modern | GSAP, three.js, ScrollTrigger | tech, data, gaming, editorial heroes |

## Structure

The image or video, and a WebGL canvas above it that samples the media in a grid of cells.

## Motion

- For each cell, measure brightness; cells above a threshold show a glyph from a set ordered by density, tinted with the sampled colour.
- Scroll progress raises the coverage: few glyphs at the start, more as the section moves through.
- Glyphs reshuffle at a slow rate so the layer feels alive.

## Options

- cellSize: 8 to 14 px
- glyphs: string ordered from light to dense
- threshold low and high
- opacity
- reshuffleRate

## Accessibility and reduced motion

- The media keeps its alt text; the canvas is aria-hidden.
- Reduced motion: a fixed coverage, no reshuffle.
- Lazy-load three.js, pause when off screen, cap pixel ratio at 1.5.

## Mobile

Larger cells; consider a static image instead.

## Prompt

```text
Build the "ASCII overlay on media" effect for <section> of <site>, following effects/briefs/ascii-overlay.md.
Use GSAP, three.js, ScrollTrigger (npm i gsap @gsap/react). Write it from this description; do not copy library code.
Content: <real content>. Use the design tokens for colour, type, radius and spacing.
Wrap motion in gsap.matchMedia() with a reduced-motion branch that shows the final state.
Clean up on unmount (useGSAP in React). Count it against the effect budget.
```
