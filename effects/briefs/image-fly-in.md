# Images flying toward the viewer

> A hero where photos keep coming from deep inside the page toward the visitor and fade out as they pass, leaving a clear zone in the middle for the headline.

[Briefs](README.md) · [Motion recipes](../catalog/motion-recipes.md) · [Kits](../kits.md)

| Level | GSAP tools | Use in |
| --- | --- | --- |
| Immersive | GSAP, ScrollTrigger, SplitText | campaign heroes, launches, portfolios with strong photography |

## Structure

A stage with perspective holding a few dozen image cards, plus a centred content block (headline, line, button) above them.

## Motion

- Each card starts small and faint far away (large negative Z or small scale) at a random position outside the central clear zone, and travels toward the viewer while scaling up; it fades in, then fades out before it reaches the camera.
- Cards are recycled in a loop with staggered start times so the flow never stops.
- Scrolling speeds the flow up briefly; the whole field shifts a little with the pointer for depth.
- The headline enters line by line once.

## Options

- cards: 20 to 30
- speed and depth
- clearZone: size of the empty centre
- pointerPan: strength
- scrollBoost: extra speed on scroll

## Accessibility and reduced motion

- Images are decorative (empty alt) unless they carry content; the headline and button are real HTML above them.
- Pause control or stop after a while; reduced motion: a static collage.
- Pause when the hero is off screen.

## Mobile

Fewer cards and no pointer pan; keep the clear zone big enough for the text.

## Prompt

```text
Build the "Images flying toward the viewer" effect for <section> of <site>, following effects/briefs/image-fly-in.md.
Use GSAP, ScrollTrigger, SplitText (npm i gsap @gsap/react). Write it from this description; do not copy library code.
Content: <real content>. Use the design tokens for colour, type, radius and spacing.
Wrap motion in gsap.matchMedia() with a reduced-motion branch that shows the final state.
Clean up on unmount (useGSAP in React). Count it against the effect budget.
```
