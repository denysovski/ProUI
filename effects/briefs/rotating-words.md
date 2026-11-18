# Rotating word wheel

> A sentence whose key word sits on a turning wheel: the centre word is sharp, the others above and below fade and blur.

[Briefs](README.md) · [Motion recipes](../catalog/motion-recipes.md) · [Kits](../kits.md)

| Level | GSAP tools | Use in |
| --- | --- | --- |
| Modern | GSAP, ScrollTrigger | hero lines like "We design ___", services, audiences |

## Structure

A visible label, then a list of words placed around a vertical cylinder (rotateX per item) inside a perspective container.

## Motion

- Scroll turns the wheel one word per step (scrub with snapping), or autoplay spins through and lands on the last word.
- Opacity and blur depend on distance from the centre slot.

## Options

- mode: scroll | autoplay
- step size
- blur strength
- landOnLast: true

## Accessibility and reduced motion

- The sentence is readable as text: the full list in a visually hidden element, or the final word in an aria-label.
- Reduced motion: show one word, or the list as plain text.

## Mobile

Fewer visible neighbours.

## Prompt

```text
Build the "Rotating word wheel" effect for <section> of <site>, following effects/briefs/rotating-words.md.
Use GSAP, ScrollTrigger (npm i gsap @gsap/react). Write it from this description; do not copy library code.
Content: <real content>. Use the design tokens for colour, type, radius and spacing.
Wrap motion in gsap.matchMedia() with a reduced-motion branch that shows the final state.
Clean up on unmount (useGSAP in React). Count it against the effect budget.
```
