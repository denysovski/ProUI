# Lookbook

> How a clothing brand's lookbook should work online so it sells: three levels from a plain grid to a full-screen, tappable, shoppable story.

[Blueprints](README.md) · [Cart drawer](cart.md) · [Sitemaps](site-types.md) · [Page Structure Rulebook](../rules/structure/README.md)

A lookbook is where a fashion brand shows the clothes worn together. On most shops it is a grid of photos
that leads nowhere. Shovel Studio, who build Shopify sites for fashion brands, describe three levels
(video, October 2026). Their numbers: about 23 % of visitors tap into lookbook images, and about 72 % of
those then expect to swipe. Baymard Institute's research found that tapping takes less effort than
swiping, so the best version supports both.

## Level 1: a grid with a stepper

```text
┌─────────────────────────────┐
│  AUTUMN 26                  │
│  ┌──────┐┌──────┐┌──────┐   │   grid of looks
│  │ look ││ look ││ look │   │
│  └──────┘└──────┘└──────┘   │
└─────────────────────────────┘
        tap a look ↓
┌─────────────────────────────┐
│           ┌──────┐          │   the look opens larger,
│           │      │          │   swipe left and right
│           └──────┘          │
│        ● ○ ○ ○ ○ ○ ○        │   stepper: where you are, how many
└─────────────────────────────┘
```

The minimum: the image opens bigger, can be swiped, and a stepper shows the position. Without the
stepper people do not know how many looks there are or that they can swipe.

## Level 2: full screen, like stories (`PG-29`)

```text
┌─────────────────┐
│ ▬▬▬▬ ▬▬▬▬ ──── ─│   progress bars like Instagram Stories
│                 │
│                 │   the image fills the screen in 9:16
│     the look    │   (portrait shot for phones,
│                 │    centred crop on desktop)
│ ◀ tap   tap ▶  │   left and right third: back and forward
│┌───────────────┐│
││▢ Ruby glasses ││   the products in this look (PG-30)
││  Green · 2 490 ││
│└───────────────┘│
└─────────────────┘
```

- **9:16 images** shot or cropped for phones; on desktop the story sits in the middle with the next and
  previous looks dimmed beside it, or as a full-height column.
- **The image resizes as you swipe**: the outgoing look shrinks slightly and the next one grows in, so the
  swipe feels physical (`MO-40` for the release).
- **Stories progress bars** at the top, one segment per look; the pattern is familiar from Instagram, so no
  one needs to learn it (Jakob's law, `IX-27`).
- **Tap zones** on the left and right third, swipe as a second way, arrow keys and visible buttons for
  keyboard and screen readers (`IX-18`). No auto-advance unless the visitor presses play (`IX-21`).
- **Close** returns to the grid at the same look.

## Level 3: shop the look (`PG-30`)

Every look lists everything the model wears in a small sheet at the bottom: thumbnail, name, colour,
price and an add button. One-size items add with one tap; items with sizes open a compact size picker in
the same sheet, never a new page. Several items can be added from one look, and the cart drawer
(`blueprints/cart.md`) confirms without closing the story.

Shovel Studio built this for the western-wear brand Diamond Cross Ranch, aiming for the visitor to feel
"a high", as they put it, while the shop sells the whole outfit instead of one piece.

## Build notes

- **Images:** AVIF or WebP at 1080 × 1920 and 720 × 1280, `sizes="100vw"`, the next look preloaded, the
  rest lazy (`IM-03`, `PF`). Focal point set so faces are not cropped on desktop (`IM-04`).
- **Height:** the story is `100dvh`, never `100vh` (`LY-25`).
- **State in the URL:** `/lookbook/autumn-26?look=4`, so a look can be shared and the back button closes it.
- **Accessibility:** the story is a dialog with a title; each look has alt text naming the outfit; the
  progress bar has a text equivalent ("Look 4 of 12"); reduced motion swaps the slide for a crossfade.
- **Measure:** taps into looks, looks viewed per session, add-to-cart from looks, and revenue per visitor
  against the old grid (`PG-28`).
