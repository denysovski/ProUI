# Pricing with rolling prices

> A pricing section with a monthly / yearly switch where every price rolls to its new value digit by digit and a savings chip pops in.

[Briefs](README.md) · [Motion recipes](../catalog/motion-recipes.md) · [Kits](../kits.md)

| Level | GSAP tools | Use in |
| --- | --- | --- |
| Subtle | GSAP | SaaS and subscription pricing |

## Structure

A switch (role switch or two radio buttons), plan cards with name, price split into digit columns, period, features and a button. One plan marked recommended.

## Motion

- Switching: each digit column scrolls to its new digit, columns staggered slightly from left to right; the period label swaps.
- When yearly is selected, a chip with the saving scales in with a small overshoot; it scales out when monthly is selected.
- Plan names can carry a slow shimmer (optional, the recommended one only).

## Options

- monthly and yearly prices per plan
- currency and position
- default period
- showSavingsChip: true
- rollDuration about 0.6 s, digitStagger about 0.04 s

## Accessibility and reduced motion

- Screen readers get the whole price as text in a visually hidden element that updates; the digit columns are aria-hidden.
- The switch states its value; prices update in a polite live region only once per change.
- Reduced motion: prices swap instantly.
- Tabular figures so widths do not jump.

## Mobile

Cards stack; recommended plan first or clearly marked.

## Prompt

```text
Build the "Pricing with rolling prices" effect for <section> of <site>, following effects/briefs/pricing.md.
Use GSAP (npm i gsap @gsap/react). Write it from this description; do not copy library code.
Content: <real content>. Use the design tokens for colour, type, radius and spacing.
Wrap motion in gsap.matchMedia() with a reduced-motion branch that shows the final state.
Clean up on unmount (useGSAP in React). Count it against the effect budget.
```
