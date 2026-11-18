# Accordion with line reveal

> An FAQ list that opens smoothly: the panel height animates, the plus icon turns into a minus, and the answer text can rise line by line.

[Briefs](README.md) · [Motion recipes](../catalog/motion-recipes.md) · [Kits](../kits.md)

| Level | GSAP tools | Use in |
| --- | --- | --- |
| Subtle | GSAP, SplitText | FAQ, product details, specs |

## Structure

A list of items; each item has a button (the question) with aria-expanded and aria-controls, and a region with the answer. The icon is two bars, one horizontal and one vertical.

## Motion

- Open: tween the panel height from 0 to its measured height (then set it to auto), rotate the vertical bar to flat so the plus becomes a minus.
- Optional: split the answer into lines and let them rise through masks with a short stagger once the panel is about half open.
- Close: reverse quickly (faster than opening).
- Single mode closes the open item when another opens; multiple mode lets several stay open.

## Options

- allowMultiple: false
- openFirst: index of an item open on load, or none
- lineReveal: true
- duration: open about 0.5 s, close about 0.35 s

## Accessibility and reduced motion

- Real button elements, Enter and Space work, aria-expanded updates, the answer region is labelled by its question.
- Closed panels are hidden from the accessibility tree (hidden attribute or inert) after the close finishes.
- Reduced motion: open and close instantly.

## Mobile

Full-width rows, tap target at least 44 px tall.

## Prompt

```text
Build the "Accordion with line reveal" effect for <section> of <site>, following effects/briefs/accordion.md.
Use GSAP, SplitText (npm i gsap @gsap/react). Write it from this description; do not copy library code.
Content: <real content>. Use the design tokens for colour, type, radius and spacing.
Wrap motion in gsap.matchMedia() with a reduced-motion branch that shows the final state.
Clean up on unmount (useGSAP in React). Count it against the effect budget.
```
