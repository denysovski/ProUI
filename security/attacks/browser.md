[Security](../README.md) · [Attack library](../ATTACKS.md) · [Checklist](../CHECKLIST.md) · [Self-tests](../PROBES.md)

# Browser-side attacks

Attacks that use a visitor's own browser against them. Most are closed by headers and cookie settings that
every site should send, also a static one.

---

### AT-40 Cross-site request forgery (CSRF)

**What happens.** A page on another site submits a form to yours; the visitor's browser sends their session
cookie with it, so the action runs as them (change email, place order, delete account).

**Defend.** Session cookies `SameSite=Lax` or `Strict` (`SEC-09`); actions only on POST, PUT or DELETE, never
on GET; a CSRF token or a check of the `Origin` header on state-changing requests (Next.js Server Actions
and most frameworks do this; custom API routes need it).

**Rules.** `SEC-08`, `SEC-09`

---

### AT-41 Clickjacking

**What happens.** Your site is loaded in an invisible frame on another page, and the visitor is tricked into
clicking your "Delete" or "Pay" button.

**Defend.** `Content-Security-Policy: frame-ancestors 'self'` (and `X-Frame-Options: DENY` for old
browsers) (`SEC-03`).

**Rules.** `SEC-02`, `SEC-03`

---

### AT-42 Open redirect

**What happens.** `/login?next=https://evil.example` sends the visitor to any site after sign-in, which makes
phishing links look like yours.

**Defend.** Redirect only to relative paths on your own site, checked against an allow-list (`SEC-36`):

```js
const next = typeof q.next === 'string' && q.next.startsWith('/') && !q.next.startsWith('//') ? q.next : '/';
```

**Rules.** `SEC-36`

---

### AT-43 Reverse tabnabbing

**What happens.** A link opened in a new tab can change the original tab to a fake sign-in page through
`window.opener`.

**Defend.** `rel="noopener noreferrer"` on every `target="_blank"` link (`SEC-16`). The slop scanner checks it.

**Rules.** `SEC-16`

---

### AT-44 Open CORS

**What happens.** The API answers `Access-Control-Allow-Origin: *` or reflects any origin together with
`Allow-Credentials: true`, so any website can read signed-in users' data.

**Defend.** An explicit allow-list of origins; never reflect the request origin; no credentials with `*`
(`SEC-12`).

**Rules.** `SEC-12`

---

### AT-45 Compromised third-party script (Magecart)

**What happens.** A chat widget, analytics or CDN script you load is changed by its owner or an attacker, and
now skims every card typed on your checkout.

**Defend.** Few third-party scripts, none on payment pages; card fields in the provider's iframe (Stripe
Elements, Adyen) (`SEC-23`); pinned versions with Subresource Integrity (`SEC-13`); a CSP that lists the
allowed script hosts (`SEC-02`).

**Rules.** `SEC-02`, `SEC-13`, `SEC-23`

---

### AT-46 Unchecked postMessage

**What happens.** A page listens for `message` events and acts on any of them, so another window can send
commands or data.

**Defend.** Check `event.origin` against an exact allow-list before using `event.data`; never put message data
into HTML.

**Rules.** `SEC-06`
