# Split-flap board

> A station-style board of tiles that flip through characters to show the next message, row by row, each tile landing on its own beat.

[Briefs](README.md) · [Motion recipes](../catalog/motion-recipes.md) · [Kits](../kits.md)

| Level | GSAP tools | Use in |
| --- | --- | --- |
| Modern | GSAP | launch dates, scores, departures, playful headlines |

## Structure

A grid of tiles, each with a top half and bottom half and a flipping leaf; the messages are a list of strings.

## Motion

- On click (or on a timer), each tile flips through a few intermediate characters before landing on its target, top leaf folding down over the bottom.
- Rows cascade left to right with a small stagger; each tile gets a slightly different number of flips so they finish at different moments.
- Optional tiny bounce on landing.

## Options

- messages: list
- flipsPerTile: 3 to 8
- duration per flip
- stagger
- autoplay interval

## Accessibility and reduced motion

- The current message is real text for assistive tech; tiles aria-hidden.
- Button to advance; reduced motion swaps text without flips.

## Mobile

Fewer columns, larger tiles.

## Prompt

```text
Build the "Split-flap board" effect for <section> of <site>, following effects/briefs/split-flap-board.md.
Use GSAP (npm i gsap @gsap/react). Write it from this description; do not copy library code.
Content: <real content>. Use the design tokens for colour, type, radius and spacing.
Wrap motion in gsap.matchMedia() with a reduced-motion branch that shows the final state.
Clean up on unmount (useGSAP in React). Count it against the effect budget.
```
