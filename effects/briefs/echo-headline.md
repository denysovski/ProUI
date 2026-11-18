# Echo headline

> One large word that grows a 3D trail of its own copies as you scroll, stacking into the distance and fading with depth.

[Briefs](README.md) · [Motion recipes](../catalog/motion-recipes.md) · [Kits](../kits.md)

| Level | GSAP tools | Use in |
| --- | --- | --- |
| Immersive | GSAP, ScrollTrigger | one big word in a campaign or brand page |

## Structure

The real word, and a set of aria-hidden copies behind it inside a 3D container that can be tilted on X, Y and Z.

## Motion

- Scroll progress spreads the copies along Z (or Y) from zero to the full depth; each further copy is fainter.
- The container tilt is set by options; optional hold at full spread before it collapses back.

## Options

- copies: 8 to 20
- depth
- tilt X, Y, Z
- fade amount
- scrub or once

## Accessibility and reduced motion

- Only the front word is read; copies aria-hidden.
- Reduced motion: the single word without copies.

## Mobile

Fewer copies, smaller depth.

## Prompt

```text
Build the "Echo headline" effect for <section> of <site>, following effects/briefs/echo-headline.md.
Use GSAP, ScrollTrigger (npm i gsap @gsap/react). Write it from this description; do not copy library code.
Content: <real content>. Use the design tokens for colour, type, radius and spacing.
Wrap motion in gsap.matchMedia() with a reduced-motion branch that shows the final state.
Clean up on unmount (useGSAP in React). Count it against the effect budget.
```
