# Diagonal stepping gallery

> Photos queue on a diagonal: the current photo is large in the middle with its text, the next waits small at the bottom right, and each scroll step moves everything one place up the diagonal.

[Briefs](README.md) · [Motion recipes](../catalog/motion-recipes.md) · [Kits](../kits.md)

| Level | GSAP tools | Use in |
| --- | --- | --- |
| Modern | GSAP, ScrollTrigger | collections, case studies, timelines |

## Structure

A pinned stage with photos, a text block (title, line), a step counter and a total.

## Motion

- On each step: the current photo moves to a small thumbnail top left and fades; the next grows from bottom right into the centre; a new one appears bottom right.
- Text swaps with a mask rise; the counter rolls to the next number.
- Scroll snaps to steps.

## Options

- step distance
- duration about 0.9 s
- thumb size

## Accessibility and reduced motion

- Each item is a figure with a caption; the whole set also works as a plain list.
- Reduced motion: list layout.

## Mobile

Vertical list or one item per screen without the diagonal.

## Prompt

```text
Build the "Diagonal stepping gallery" effect for <section> of <site>, following effects/briefs/diagonal-gallery.md.
Use GSAP, ScrollTrigger (npm i gsap @gsap/react). Write it from this description; do not copy library code.
Content: <real content>. Use the design tokens for colour, type, radius and spacing.
Wrap motion in gsap.matchMedia() with a reduced-motion branch that shows the final state.
Clean up on unmount (useGSAP in React). Count it against the effect budget.
```
