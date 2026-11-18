# Two-panel drawer menu

> A side drawer for large menus: the first panel slides in with the main categories, and categories with children open a second panel beside it.

[Briefs](README.md) · [Motion recipes](../catalog/motion-recipes.md) · [Kits](../kits.md)

| Level | GSAP tools | Use in |
| --- | --- | --- |
| Subtle | GSAP | shops, sports, editorial sites with deep categories |

## Structure

A toggle button (label swaps between Menu and Close), a dim overlay, panel one with the main list, and one hidden sub-list per category. On phones the sub-lists become screens you drill into with a Back button.

## Motion

- Open: panel one reveals from the left edge with a clip-path inset and rounded corners; the main links fade and slide in with a stagger; the page behind dims.
- Hovering (or focusing) a category with children reveals panel two next to panel one with its own left-to-right reveal and staggered links.
- Close: everything reverses, faster.
- Phones: tapping a category slides its list in from the right over panel one; Back slides it out.

## Options

- duration: about 0.6 s
- stagger: about 0.04 s per link
- panelColor and overlayOpacity from the tokens
- breakpoint for drill-down mode

## Accessibility and reduced motion

- Toggle has aria-expanded and controls the drawer; focus moves into the drawer on open and back to the toggle on close; Escape closes; focus is trapped while open.
- Category buttons with children use aria-expanded too; hover intent delay so a diagonal move does not switch categories.
- Reduced motion: panels appear without movement.

## Mobile

Drill-down instead of side-by-side panels; large tap targets.

## Prompt

```text
Build the "Two-panel drawer menu" effect for <section> of <site>, following effects/briefs/multi-level-drawer-menu.md.
Use GSAP (npm i gsap @gsap/react). Write it from this description; do not copy library code.
Content: <real content>. Use the design tokens for colour, type, radius and spacing.
Wrap motion in gsap.matchMedia() with a reduced-motion branch that shows the final state.
Clean up on unmount (useGSAP in React). Count it against the effect budget.
```
