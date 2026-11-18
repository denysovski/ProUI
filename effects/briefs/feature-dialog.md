# Feature dialog rising from a tile

> A preview tile with an expand button that opens a tall centred dialog; the page dims and blurs, the dialog rises in quickly and a soft gradient band follows it up.

[Briefs](README.md) · [Motion recipes](../catalog/motion-recipes.md) · [Kits](../kits.md)

| Level | GSAP tools | Use in |
| --- | --- | --- |
| Subtle | GSAP | feature details, product quick view, "learn more" without leaving the page |

## Structure

Tile with media, title and an expand button; a dialog element with a sheet, a gradient band, title and close button; an overlay.

## Motion

- Open: overlay fades in with backdrop blur, the sheet rises from about 40 px below with a fast fade, the gradient band trails it by a beat.
- Close: reverse, quicker.

## Options

- duration: about 0.5 s
- blur amount
- band colours from the palette

## Accessibility and reduced motion

- Use the native dialog element or full dialog semantics: focus moves to the dialog, is trapped, Escape and the backdrop close it, focus returns to the expand button.
- Reduced motion: fade only.

## Mobile

Sheet becomes almost full-screen, scrollable inside.

## Prompt

```text
Build the "Feature dialog rising from a tile" effect for <section> of <site>, following effects/briefs/feature-dialog.md.
Use GSAP (npm i gsap @gsap/react). Write it from this description; do not copy library code.
Content: <real content>. Use the design tokens for colour, type, radius and spacing.
Wrap motion in gsap.matchMedia() with a reduced-motion branch that shows the final state.
Clean up on unmount (useGSAP in React). Count it against the effect budget.
```
