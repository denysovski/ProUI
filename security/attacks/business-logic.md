[Security](../README.md) · [Attack library](../ATTACKS.md) · [Checklist](../CHECKLIST.md) · [Self-tests](../PROBES.md)

# Shops and money

No scanner finds these: the code works exactly as written, it just trusts the wrong side. The rule for all
of them: **the browser sends intentions ("I want product 42, size M, two of them, with code AUTUMN"), the
server decides everything with a price on it.**

---

### AT-30 Editing the price

**What happens.** The cart sends `{ "productId": 42, "price": 1290 }` and the checkout charges what the
browser said. In DevTools the price becomes 1.

**Defend.** The server looks up every price, discount, shipping cost and tax from its own data and computes
the total (`SEC-30`). The amount sent to the payment provider is created on the server
(Stripe Checkout Session, PaymentIntent) from that total.

**Test it.** Change the price in the request with DevTools or `curl`: the charged total must not change.

**Rules.** `SEC-30`

---

### AT-31 Ordering −1 items

**What happens.** Quantity `-1` turns into a negative line that lowers the total, or a refund; `0.5` or
`99999` breaks stock and shipping.

**Defend.** Quantity is a whole number from 1 to a sensible maximum (for example 20), checked on the server;
totals can never go below zero.

**Rules.** `SEC-05`, `SEC-30`

---

### AT-32 Faking a payment

**What happens.** The order is marked paid when the browser reaches `/success?order=1043`, or when anything
posts to the webhook URL.

**Defend.** An order is paid only when the provider's signed webhook says so: verify the signature
(`stripe.webhooks.constructEvent`), check the amount and currency against the order, and handle each event
ID once (`SEC-20`). The success page only shows status.

**Test it.** Open the success URL for an unpaid order: it must stay unpaid. Post a made-up event to your
webhook: 400.

**Rules.** `SEC-20`, `SEC-30`

---

### AT-33 Redeeming a coupon 100 times (race conditions)

**What happens.** A single-use code is checked ("not used yet") and marked used in two steps. Fifty requests
sent at the same moment all pass the check before any of them marks it. The same works for gift-card
balances, referral bonuses, the last item in stock and free-trial sign-ups.

**Defend.** Make the check and the change one atomic step (`SEC-31`):

```sql
UPDATE coupons SET used_at = now(), order_id = $2
WHERE code = $1 AND used_at IS NULL
RETURNING id;          -- no row back means: already used
```

Or a unique constraint on `(coupon_id, user_id)`, a transaction with row locking, and an idempotency key on
"place order" so a double click creates one order.

**Test it.** Send 20 parallel redemption requests for one code against your staging site
([self-tests](../PROBES.md)): exactly one may succeed.

**Rules.** `SEC-31`

---

### AT-34 Replaying requests

**What happens.** A captured "add credits" or "apply refund" request is sent again and again.

**Defend.** Idempotency keys on every money-moving endpoint; webhook event IDs stored and ignored the second
time; actions tied to the signed-in session, not just to a token in the body.

**Rules.** `SEC-20`, `SEC-31`

---

### AT-35 Guessing gift cards and order numbers

**What happens.** Gift-card codes like `GIFT1001`, `GIFT1002` are counted through; order-status pages that need
only an order number show addresses.

**Defend.** Codes of at least 16 random characters; balance checks rate-limited; order lookup for guests needs
the order number and the email together.

**Rules.** `SEC-19`, `SEC-27`
