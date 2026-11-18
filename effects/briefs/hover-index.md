# Proximity work index

> A dark list of project names where brightness follows the pointer: names close to it are bright, others fade with distance. A preview card in a corner wipes to the hovered project.

[Briefs](README.md) · [Motion recipes](../catalog/motion-recipes.md) · [Kits](../kits.md)

| Level | GSAP tools | Use in |
| --- | --- | --- |
| Modern | GSAP | portfolio and studio work lists |

## Structure

A list of links (project names with metadata) and a fixed preview frame with an image layer.

## Motion

- On pointer move, for every item compute vertical distance to the pointer and map it to opacity (bright near, dim far).
- When the hovered item changes, the preview image wipes to the new photo from the direction of movement (up or down) with clip-path.
- The preview can follow the pointer loosely.

## Options

- range: distance for full fall-off
- dimOpacity: about 0.25
- follow: true or false

## Accessibility and reduced motion

- Items are real links; keyboard focus gets the same highlight and preview.
- Reduced motion: no fall-off, simple hover state, preview swaps without wipe.

## Mobile

Normal list; preview shown inline under the tapped item or not at all.

## Prompt

```text
Build the "Proximity work index" effect for <section> of <site>, following effects/briefs/hover-index.md.
Use GSAP (npm i gsap @gsap/react). Write it from this description; do not copy library code.
Content: <real content>. Use the design tokens for colour, type, radius and spacing.
Wrap motion in gsap.matchMedia() with a reduced-motion branch that shows the final state.
Clean up on unmount (useGSAP in React). Count it against the effect budget.
```
