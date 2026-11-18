# Magnetic tag cloud

> A cluster of colourful tags that get knocked aside when the cursor sweeps through and are always pulled back to their own spots.

[Briefs](README.md) · [Motion recipes](../catalog/motion-recipes.md) · [Kits](../kits.md)

| Level | GSAP tools | Use in |
| --- | --- | --- |
| Modern | GSAP, Draggable | skills, services, topics, playful about pages |

## Structure

A container of tag elements laid out in rows; each remembers its home position.

## Motion

- Each frame: tags within a radius of the pointer get a push away proportional to pointer speed, plus a small rotation.
- Simple spring back to home (stiffness and damping) and light separation so tags do not overlap.
- Tags can be thrown with drag; they always return.

## Options

- repelRadius and repelStrength
- stiffness and damping
- spin
- throwStrength

## Accessibility and reduced motion

- Tags are links or plain text in a list; keyboard focus does not move them.
- Reduced motion and touch: static layout.
- Stop the physics loop when off screen.

## Mobile

Static, wrapped rows.

## Prompt

```text
Build the "Magnetic tag cloud" effect for <section> of <site>, following effects/briefs/magnetic-tag-cloud.md.
Use GSAP, Draggable (npm i gsap @gsap/react). Write it from this description; do not copy library code.
Content: <real content>. Use the design tokens for colour, type, radius and spacing.
Wrap motion in gsap.matchMedia() with a reduced-motion branch that shows the final state.
Clean up on unmount (useGSAP in React). Count it against the effect budget.
```
