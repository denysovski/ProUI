# Line and word reveal

> Make a heading arrive with weight: each line (or word, or letter) rises out of an invisible slot as the heading enters the screen.

[Briefs](README.md) · [Motion recipes](../catalog/motion-recipes.md) · [Kits](../kits.md)

| Level | GSAP tools | Use in |
| --- | --- | --- |
| Subtle | GSAP, ScrollTrigger, SplitText | hero headlines, section titles, statements |

## Structure

A normal heading element with real text. The script splits it into lines, wraps each line in a clipping wrapper (overflow hidden), and keeps the original string for assistive tech.

## Motion

- When the heading top crosses about 80 % of the viewport, every piece starts below its slot (translateY a little over 100 %) and slides to 0.
- Lines take about 0.8 s with a short stagger, words a bit faster, letters fastest with a tiny stagger. A strong ease-out (expo or quart) so it lands softly.
- Plays once by default; an optional scrub mode ties progress to scroll between two points.
- Re-split on resize (debounced) so line breaks stay correct; revert the split after the animation if no scrub.

## Options

- split: lines | words | chars (default lines)
- start: viewport position that triggers (default "top 80%")
- duration and stagger: overrides per split type
- offset: how far below the slot pieces start (percent of their height)
- scrub: false or a scroll range

## Accessibility and reduced motion

- Heading keeps its text: set aria-label to the full string on the heading and aria-hidden on the split pieces, or revert the split after it runs.
- Reduced motion: show the text immediately, no split.

## Mobile

Same behaviour; use lines or words, letters get too busy on small screens.

## Prompt

```text
Build the "Line and word reveal" effect for <section> of <site>, following effects/briefs/text-reveal.md.
Use GSAP, ScrollTrigger, SplitText (npm i gsap @gsap/react). Write it from this description; do not copy library code.
Content: <real content>. Use the design tokens for colour, type, radius and spacing.
Wrap motion in gsap.matchMedia() with a reduced-motion branch that shows the final state.
Clean up on unmount (useGSAP in React). Count it against the effect budget.
```
