# Two-colour text scramble

> Text that shuffles through random characters in the accent colour, then resolves into the final words in the text colour.

[Briefs](README.md) · [Motion recipes](../catalog/motion-recipes.md) · [Kits](../kits.md)

| Level | GSAP tools | Use in |
| --- | --- | --- |
| Subtle | GSAP, ScrambleTextPlugin, ScrollTrigger | tech brands, labels, numbers, hero kicker |

## Structure

The element keeps its real text. Inside, two stacked layers: an invisible spacer with the final text (reserves the exact size, so nothing shifts) and an animated layer positioned on top.

## Motion

- Phase one: the animated layer scrambles in the accent colour for about half the duration.
- Phase two: characters lock in from left to right while their colour switches to the text colour.
- Triggers: on scroll into view (default), hover, click, page load, or called from code.
- A group wrapper can run several elements with one trigger and a stagger.

## Options

- trigger: scroll | hover | click | load | manual
- duration: about 1.2 s
- charset: uppercase, digits, binary or custom
- start: scroll trigger position

## Accessibility and reduced motion

- Screen readers get the final text only (aria-label on the element, layers aria-hidden).
- Reduced motion: show the final text, no scramble.

## Mobile

Use scroll or load triggers; hover does not exist on touch.

## Prompt

```text
Build the "Two-colour text scramble" effect for <section> of <site>, following effects/briefs/dual-scramble.md.
Use GSAP, ScrambleTextPlugin, ScrollTrigger (npm i gsap @gsap/react). Write it from this description; do not copy library code.
Content: <real content>. Use the design tokens for colour, type, radius and spacing.
Wrap motion in gsap.matchMedia() with a reduced-motion branch that shows the final state.
Clean up on unmount (useGSAP in React). Count it against the effect budget.
```
