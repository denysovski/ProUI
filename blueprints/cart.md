# Cart drawer

> How a shop's cart should look and behave so it raises the order value honestly: the drawer layout, the free-gift ladder, one-click add-ons, paid extras done legally, and what to measure.

[Blueprints](README.md) · [Sitemaps](site-types.md) · [Page Structure Rulebook](../rules/structure/README.md)

The cart is the last screen before checkout and the one with the most money riding on it. Fashion studios
that build Shopify shops in the 1–20 M USD range treat it as a small store of its own, not a list.
This blueprint follows the cart Shovel Studio built for the clothing brand Hours, which the studio says
added over a million dollars of revenue together with the redesign. One of the tricks that cart
uses is illegal in the EU, and this blueprint replaces it with the legal version (`PG-27`).

## The drawer (`PG-24`)

```text
┌──────────────────────────────────────┐
│ Your bag (3)                 Close ✕ │  header: count, close button
├──────────────────────────────────────┤
│ ▢ Drop shoulder hoodie   1 890 Kč    │  items: image, name, variant,
│   Burgundy, M      − 1 +   Remove    │  quantity stepper, remove
│ ▢ Skull cap              Free        │  a reached gift is a line priced "Free"
│   Black, one size   Free gift        │
├──────────────────────────────────────┤
│ ███████████████░░░░░  Free socks     │  gift ladder: progress to the next tier
│ Add 450 Kč for free socks            │  (PG-25)
├──────────────────────────────────────┤
│ Pairs with                           │  2–4 one-size products,
│ ▢ Bracelet 690 Kč  [+]  ▢ Cap  [+]   │  one click adds them (PG-26)
├──────────────────────────────────────┤
│ ☐ Free returns  +120 Kč   (optional) │  paid extra: its own switch, off (PG-27)
│ Subtotal                 1 890 Kč    │  sticky footer: total and one button,
│ [      Checkout · 1 890 Kč       ]   │  the button shows the real total
│ Shipping and taxes at checkout       │
└──────────────────────────────────────┘
```

- **Opens on add to cart** from the right (on phones as a bottom sheet with the footer always visible).
  The page behind stays where it was.
- **Behaviour:** Escape, the close button and a click on the backdrop close it; focus moves into it on
  open and back to the add button on close; the item count is announced (`AX`).
- **Quantities update in place** with an optimistic total, without reloading the drawer.
- **Empty cart:** a short line, the bestsellers or recently viewed products, and a link back to the shop.
  Never only "Your cart is empty".
- **Motion:** slide 280–320 ms ease-out in, 220 ms out (`MO-15`); items added later fade in, nothing bounces.

## The free-gift ladder (`PG-25`)

In the Hours cart, free gifts at spend thresholds moved order value and conversion more than a discounted
checkout or free shipping did, and they keep the full price of the products. Set it up like this:

| Step | How |
| --- | --- |
| Find the average order | from the shop's data; the first threshold sits just above it |
| Space the tiers | about 50–100 USD (1 000–2 000 Kč) apart, two to four tiers |
| Choose the gifts | low cost to make, low weight to ship, high perceived value: a cap, socks, a tote, a sample |
| Show progress | one progress line and one sentence with the amount still missing |
| Reached gift | added as a cart line priced "Free", removable if the person does not want it |

Free shipping can be one of the tiers. Test the ladder on your own shop (`PG-28`).

## One-click add-ons (`PG-26`)

- Two to four products that complete what is in the cart, chosen by rules (same collection, often bought
  together) and never the item already there.
- One size only, so the add button needs no size picker. A product with sizes belongs on its page.
- Image, name, price and a round add button with a visible label for screen readers ("Add bracelet").
- With one item or none in the cart, a "Recently viewed" row is a good second strip.

## Paid extras, done legally (`PG-27`)

Shipping protection, order insurance and free-returns plans (often apps such as Checkout+ or Route) can
be offered, but only as a choice the person makes:

| Do | Do not |
| --- | --- |
| A switch or checkbox with the name, the price and one line on what it covers, right above the button | put the extra into the price of the main checkout button |
| Off by default | pre-tick it or add it automatically |
| The checkout button shows the total of what was chosen | make "continue without" a weaker secondary button |
| Explain the cover in a link or a small popover | hide what it costs until the checkout page |

The pre-selected version is popular in US fashion shops because it raises the order value by a few
dollars per order. In the EU it breaks article 22 of the Consumer Rights Directive (an extra payment needs
express consent and may not be a default option), and the US FTC treats it as a hidden fee.

## What to measure (`PG-28`)

Run each change as an A/B test against the current cart for at least two full weeks:

- **Average order value (AOV)**
- **Conversion rate** from cart to paid order
- **Revenue per visitor (RPV)**, which combines the two above and decides
- Afterwards: returns, complaints and refund requests for the extras

A change that raises only clicks or only the order value while conversion falls is not a win.
