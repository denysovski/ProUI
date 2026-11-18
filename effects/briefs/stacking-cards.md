# Stacking cards

> A pinned frame where each new card slides up and covers the previous one, which shrinks back, tilts slightly and sinks away. A small counter shows the position and jumps to any card.

[Briefs](README.md) · [Motion recipes](../catalog/motion-recipes.md) · [Kits](../kits.md)

| Level | GSAP tools | Use in |
| --- | --- | --- |
| Modern | GSAP, ScrollTrigger | product lines, services, chapters, case studies |

## Structure

A tall section with a sticky stage; an ordered list of cards, each with an image (inside a clipping frame) and a label; a counter.

## Motion

- For each card after the first, scroll moves it from below the frame to its place.
- At the same time the card underneath scales to about 0.9, rotates a degree or two, darkens, and its frame insets from the edges while its image zooms a little more, so it reads as moving away.
- Labels do not scrub: each one rises on its own once its card is mostly in place.
- The counter rolls to the current card; clicking a number scrolls to that card.

## Options

- scale and tilt of the covered card
- darken amount
- label threshold
- counter on or off

## Accessibility and reduced motion

- Cards are a list with real headings; the counter buttons have labels ("Go to card 3").
- Reduced motion: a normal vertical list of cards.
- Provide a skip link past the pinned section.

## Mobile

Shorter scroll distance per card, or a simple stack without pinning.

## Prompt

```text
Build the "Stacking cards" effect for <section> of <site>, following effects/briefs/stacking-cards.md.
Use GSAP, ScrollTrigger (npm i gsap @gsap/react). Write it from this description; do not copy library code.
Content: <real content>. Use the design tokens for colour, type, radius and spacing.
Wrap motion in gsap.matchMedia() with a reduced-motion branch that shows the final state.
Clean up on unmount (useGSAP in React). Count it against the effect budget.
```
