# Elastic divider line

> A thin line between sections that springs away from a sweeping cursor and rings back like a plucked string.

[Briefs](README.md) · [Motion recipes](../catalog/motion-recipes.md) · [Kits](../kits.md)

| Level | GSAP tools | Use in |
| --- | --- | --- |
| Subtle | GSAP | between sections on playful or editorial sites |

## Structure

An inline SVG with one quadratic path across the full width.

## Motion

- Track pointer speed near the line. When it crosses, set the control point toward the pointer by an amount based on speed (clamped).
- Release with an elastic ease or a damped spring so it oscillates and settles.
- Nothing moves on scroll or on its own.

## Options

- maxAmplitude: about 60 px
- sensitivity
- damping and frequency
- stroke colour and weight from tokens

## Accessibility and reduced motion

- Decorative: aria-hidden.
- Off on touch and reduced motion.

## Mobile

Static line.

## Prompt

```text
Build the "Elastic divider line" effect for <section> of <site>, following effects/briefs/elastic-divider.md.
Use GSAP (npm i gsap @gsap/react). Write it from this description; do not copy library code.
Content: <real content>. Use the design tokens for colour, type, radius and spacing.
Wrap motion in gsap.matchMedia() with a reduced-motion branch that shows the final state.
Clean up on unmount (useGSAP in React). Count it against the effect budget.
```
