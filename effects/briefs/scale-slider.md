# Shrinking row slider

> A row of square photos where the first is huge and cropped by the screen edge and every next one is smaller, so the row seems to recede. Visitors drag, throw, scroll or let it drift.

[Briefs](README.md) · [Motion recipes](../catalog/motion-recipes.md) · [Kits](../kits.md)

| Level | GSAP tools | Use in |
| --- | --- | --- |
| Modern | GSAP, Draggable, InertiaPlugin | collections, lookbooks, project galleries |

## Structure

A scene containing a track of square cards, plus previous and next buttons.

## Motion

- Card size follows its position: the closer to the leading edge, the bigger. Recompute scale for every card on every update from its x position.
- Dragging moves the track with inertia and snaps to a card when released; page scroll nudges it; with no input it drifts slowly.
- Loop seamlessly by wrapping positions.

## Options

- minScale and maxScale
- drift speed (0 to turn off)
- snap: true
- direction: shrink toward left or right

## Accessibility and reduced motion

- Previous and next buttons and arrow keys move one card; each card is a link with a label.
- Autoplay drift pauses on hover, focus and reduced motion.

## Mobile

Swipe works; turn off drift; fewer visible cards.

## Prompt

```text
Build the "Shrinking row slider" effect for <section> of <site>, following effects/briefs/scale-slider.md.
Use GSAP, Draggable, InertiaPlugin (npm i gsap @gsap/react). Write it from this description; do not copy library code.
Content: <real content>. Use the design tokens for colour, type, radius and spacing.
Wrap motion in gsap.matchMedia() with a reduced-motion branch that shows the final state.
Clean up on unmount (useGSAP in React). Count it against the effect budget.
```
