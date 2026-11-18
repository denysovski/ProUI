# Process rail with a travelling bead

> A row of steps along a line. As you scroll, a small bead moves along the line, drawing it behind itself; each step lights up when the bead reaches it.

[Briefs](README.md) · [Motion recipes](../catalog/motion-recipes.md) · [Kits](../kits.md)

| Level | GSAP tools | Use in |
| --- | --- | --- |
| Modern | GSAP, ScrollTrigger, MotionPathPlugin, DrawSVGPlugin | how it works, onboarding, service process |

## Structure

An SVG path behind a row of steps; each step has a number, a title, a short text and an image.

## Motion

- Scroll progress drives the bead along the path (motion path) and the stroke draws from 0 to the bead position.
- When the bead passes a step, its number rolls in, the title gets the accent colour and its image fades in and stays.
- Optional pinning so the whole rail stays on screen while it fills.

## Options

- scrub: true
- sticky: true
- beadSize
- stagger for step content

## Accessibility and reduced motion

- Steps are an ordered list with real text visible without motion.
- Reduced motion: line fully drawn, all steps visible.

## Mobile

Rail turns vertical; steps stack.

## Prompt

```text
Build the "Process rail with a travelling bead" effect for <section> of <site>, following effects/briefs/process-rail.md.
Use GSAP, ScrollTrigger, MotionPathPlugin, DrawSVGPlugin (npm i gsap @gsap/react). Write it from this description; do not copy library code.
Content: <real content>. Use the design tokens for colour, type, radius and spacing.
Wrap motion in gsap.matchMedia() with a reduced-motion branch that shows the final state.
Clean up on unmount (useGSAP in React). Count it against the effect budget.
```
