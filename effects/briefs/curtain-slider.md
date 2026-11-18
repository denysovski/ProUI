# Curtain column slider

> A full-bleed slider where each change splits the outgoing image into vertical strips that wipe away one after another, uncovering the next image.

[Briefs](README.md) · [Motion recipes](../catalog/motion-recipes.md) · [Kits](../kits.md)

| Level | GSAP tools | Use in |
| --- | --- | --- |
| Modern | GSAP | full-screen heroes, chapters, case study openers |

## Structure

A stage with the slides stacked. During a change, the outgoing image is rendered into N columns (each a clipped copy) above the incoming one. Title, chapter label and index sit in their own layer.

## Motion

- Each column animates its clip edge sideways (toward the travel direction) with a small stagger from one side to the other.
- The incoming image starts slightly scaled up and settles to 1 underneath.
- Title and label roll out upward and the new ones roll in; the index counts to the new number.
- Navigation by arrows, drag or swipe, and keyboard; optional autoplay.

## Options

- columns: 8 to 12
- duration: about 1.1 s
- stagger: about 0.04 s
- autoplay interval or off

## Accessibility and reduced motion

- Region labelled as a carousel, slide x of y announced politely, buttons for previous and next, autoplay off by default or with a pause button.
- Reduced motion: crossfade.

## Mobile

Fewer columns (6), swipe navigation.

## Prompt

```text
Build the "Curtain column slider" effect for <section> of <site>, following effects/briefs/curtain-slider.md.
Use GSAP (npm i gsap @gsap/react). Write it from this description; do not copy library code.
Content: <real content>. Use the design tokens for colour, type, radius and spacing.
Wrap motion in gsap.matchMedia() with a reduced-motion branch that shows the final state.
Clean up on unmount (useGSAP in React). Count it against the effect budget.
```
