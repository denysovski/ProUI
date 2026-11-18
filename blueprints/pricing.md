# Pricing

> How to show prices for services and products: tiered packages, a pricing page, the comparison table, billing toggles and when "contact us" is right.

[Blueprints](README.md) · [Landing page](landing-page.md)

## Which pricing model fits

| The business sells | Show |
| --- | --- |
| One product at one price | one price, what is included, a guarantee. No tiers (`SL-11`) |
| A service in packages (photography, cleaning, web design, coaching, accounting) | **three named packages** built from the real offer, plus add-ons |
| A service priced per job | "from" prices per service and what changes the price; a quote form |
| A subscription product (SaaS, membership) | **three tiers** (optionally a free tier and an enterprise tier), billing toggle, comparison table |
| Custom or enterprise work | the starting price or typical range when possible, a short form, a named contact |
| A menu or price list (restaurant, salon, clinic) | a clean list or table with every item and price |

Prices always come from the business. When the user has no prices yet, ask; do not invent figures. Mark
example prices as placeholders in the build and list them as missing content.

## Tiered packages for services

```text
            Basic                 Standard (recommended)        Premium
  Who       a first, small job    most customers                 large or ongoing work
  Price     from 4 900 Kč         from 9 900 Kč                  from 19 900 Kč
  Includes  core service          core + the things people       everything + priority,
                                  usually ask for                extra rounds, support
  Action    Book Basic            Book Standard                  Talk to us
```

- **Three packages.** Two feel thin, four or more cause hesitation. A fourth "custom" option can be a line
  under the cards.
- **Names describe the customer or the size**, not metals: "Single room / Whole flat / House", "Starter /
  Business / Growing team", "Portrait session / Family / Wedding". Avoid "Silver, Gold, Platinum".
- **Recommend one**, usually the middle, with a label that says why ("Most booked", "Best for families"),
  a stronger border or background, and the primary button. Only one is highlighted.
- **Each card lists the same items in the same order**, the differences first. Five to eight lines per card;
  the rest goes into the comparison table.
- **One action per card**, worded with the package ("Book Standard").
- **Add-ons** under the cards: extra hour, rush delivery, travel, with prices.
- **Under the cards:** what payment looks like (deposit, invoice, card), cancellation, guarantee.

## The pricing page

| Block | Contents |
| --- | --- |
| Heading | what the price buys, one sentence |
| Billing toggle | for subscriptions: monthly / yearly with the saving shown ("2 months free", "save 17 %"); default to the one most customers choose; the layout does not jump when switching |
| Tier cards | as above; prices with currency and period; VAT stated for business buyers |
| Comparison table | every feature that differs, grouped by category, the same order as the cards; ticks and dashes have text alternatives; sticky header row with tier names and buttons; on mobile an accordion or one tier at a time |
| Proof | one or two testimonials or logos close to the decision |
| FAQ | payment, contract length, cancellation, refunds, upgrades, invoices, data |
| Custom needs | "Need more? Talk to us" with a named person or a short form |

## Mobile

- Cards stack in one column with the recommended plan first or clearly marked.
- The toggle stays reachable at the top of the cards.
- Buttons at least 44 px tall (`AX`).
- The comparison table does not force sideways scrolling of the page (`LY-19`); use an accordion per category or a tier switcher.

## Rules this page applies

`SL-11` generic tiers, `SL-17` no decorative counting (prices and quantities are data and stay), `FO-09` full
price early, `CP` action labels, `TY-18` tabular numerals for prices, `PG-08` to `PG-11`.
