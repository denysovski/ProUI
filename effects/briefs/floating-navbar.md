# Header that folds into a pill

> A full-width header over the hero that, once the visitor scrolls, folds into a small floating pill with the logo, key links and the button. Back at the top it opens again.

[Briefs](README.md) · [Motion recipes](../catalog/motion-recipes.md) · [Kits](../kits.md)

| Level | GSAP tools | Use in |
| --- | --- | --- |
| Subtle | GSAP, ScrollTrigger | most marketing sites at Subtle level and above |

## Structure

A header with logo, nav links and a call to action; a background layer that changes shape.

## Motion

- After a small scroll threshold, the background shrinks to a centred rounded pill with a slight shadow, the logo may swap to its mark, less important links fade out and the button stays.
- Reversing above the threshold restores the full header.
- Optional hide on scroll down and show on scroll up.

## Options

- threshold: about 80 px
- duration and ease
- mode: pill | hide-on-down
- links to keep in the pill

## Accessibility and reduced motion

- Links that fade out stay reachable (move into a menu button), never just disappear.
- Header always shows when something inside it has focus.
- Reduced motion: switch states without animation.

## Mobile

Pill holds logo, menu button and the primary action.

## Prompt

```text
Build the "Header that folds into a pill" effect for <section> of <site>, following effects/briefs/floating-navbar.md.
Use GSAP, ScrollTrigger (npm i gsap @gsap/react). Write it from this description; do not copy library code.
Content: <real content>. Use the design tokens for colour, type, radius and spacing.
Wrap motion in gsap.matchMedia() with a reduced-motion branch that shows the final state.
Clean up on unmount (useGSAP in React). Count it against the effect budget.
```
