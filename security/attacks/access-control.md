[Security](../README.md) · [Attack library](../ATTACKS.md) · [Checklist](../CHECKLIST.md) · [Self-tests](../PROBES.md)

# Access control

The most common real-world break-in on small apps is not clever: someone changes a number in the URL, opens
`/admin`, or sends one extra field. Every check that decides who may see or change something runs on the
server, for every request. Hiding a button is not a check.

---

### AT-10 Changing the ID in the URL (IDOR)

**What happens.** `/api/orders/1043` shows my order. The attacker tries `/api/orders/1042` and sees someone
else's name, address and items. The same with invoices, files, messages, profiles.

**Impact.** Leaking every customer's data, which is also a reportable GDPR breach.

**Defend (basic).** Every query for a private object filters by the signed-in owner (`SEC-27`):

```js
const order = await db.order.findFirst({ where: { id: params.id, userId: session.user.id } });
if (!order) return notFound(); // 404, not 403: do not confirm that it exists
```

**Defend (intermediate).** Database row-level security (Supabase and Postgres RLS policies) as a second
wall; random IDs (UUIDv7, nanoid) for anything exposed in URLs, so IDs cannot be counted, but never as the
only defence; signed, expiring URLs for private files.

**Test it.** Create two accounts on your own site. As account A, copy the URL or API call of A's object and
open it signed in as B: it must answer 404. Repeat for every object type, including file downloads.

**Rules.** `SEC-27`

---

### AT-11 Typing /admin (missing function-level authorisation)

**What happens.** The admin page or its API routes exist and only the menu link is hidden. Anyone who
guesses `/admin`, `/dashboard`, `/api/admin/users` gets in.

**Defend (basic).** Every admin page and every admin API route checks the role on the server
(middleware plus a check inside the handler) (`SEC-28`). The role comes from the session or database, never
from a cookie or header the browser can change.

**Defend (intermediate).** Admin on a separate route group with its own middleware, two-factor sign-in for
staff, an audit log of admin actions, and the admin area excluded from the sitemap and `robots.txt`
does not count as protection.

**Test it.** Signed out, and signed in as a normal user, open every admin URL and call every admin API
route with `curl`: 401 or 404 every time.

**Rules.** `SEC-10`, `SEC-28`

---

### AT-12 Making myself admin at sign-up (mass assignment)

**What happens.** The sign-up or profile endpoint saves the whole request body:
`db.user.create({ data: req.body })`. The attacker adds `"role": "admin"` or `"isVerified": true`,
`"credits": 99999`, `"price": 1`.

**Defend.** Pick the allowed fields explicitly with a schema, and drop everything else (`SEC-29`):

```js
const Signup = z.object({ email: z.string().email(), password: z.string().min(12), name: z.string().max(80) });
const data = Signup.parse(req.body); // role, credits, isAdmin can never get through
```

**Test it.** Add `role`, `isAdmin`, `credits`, `plan`, `verified` to your sign-up and profile requests;
nothing about the account may change.

**Rules.** `SEC-05`, `SEC-29`

---

### AT-13 Tampered tokens and cookies

**What happens.** The session is a JWT or cookie the server trusts without checking: `jwt.decode()` instead of
`jwt.verify()`, `alg: none` accepted, a cookie `role=user` that can be edited to `role=admin`.

**Defend.** Use the auth library's session (Auth.js, Lucia-style sessions, Clerk, Supabase Auth); if you
handle JWTs, verify the signature with a fixed algorithm and check expiry; never store roles or prices in
a cookie the browser can edit (`SEC-09`, `SEC-10`).

**Rules.** `SEC-09`, `SEC-10`, `SEC-25`

---

### AT-14 Forced browsing and leftover files

**What happens.** Unlinked pages are still reachable: `/old-admin`, `/test`, `/backup.zip`, `/.git/`,
`/.env`, `/phpinfo.php`, an open directory listing, a staging site indexed by Google.

**Defend.** Deploy only the build output; block dotfiles at the server; turn off directory listing; protect
staging with a password; delete old routes instead of unlinking them (`SEC-24`).

**Test it.** `curl -I https://your.site/.env` and `/.git/config` must not answer 200.

**Rules.** `SEC-24`, `SEC-34`
