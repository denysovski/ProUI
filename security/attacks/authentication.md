[Security](../README.md) · [Attack library](../ATTACKS.md) · [Checklist](../CHECKLIST.md) · [Self-tests](../PROBES.md)

# Sign-in and accounts

Use a proven auth provider or library (Auth.js, Clerk, Supabase Auth, Firebase Auth, Better Auth) instead of
writing sign-in yourself (`SEC-10`). Most of the attacks below are already handled by them when they are
configured with the limits on.

---

### AT-20 Guessing passwords (brute force and credential stuffing)

**What happens.** A bot tries thousands of passwords on one account, or millions of leaked email and password
pairs from other sites on yours.

**Defend (basic).** Rate-limit sign-in per account and per IP, with growing delays (`SEC-19`); minimum 12
characters for new passwords, no forced complexity rules; passwords hashed with Argon2id or bcrypt by the
library.

**Defend (intermediate).** Check new passwords against known breaches (the Have I Been Pwned range API);
offer passkeys and two-factor sign-in; alert the user about sign-ins from new devices.

**Test it.** Send 20 wrong passwords quickly to one test account: the 6th to 10th attempt must slow down or be
blocked, with the same message for "wrong password" and "no such account".

**Rules.** `SEC-10`, `SEC-19`

---

### AT-21 Guessing the login code

**What happens.** A 6-digit email or SMS code has a million combinations. Without an attempt limit, a script
tries them all in minutes.

**Defend.** At most 5 attempts per code, then a new code; codes expire in 10 minutes; one active code per
account; compare in constant time; rate-limit how often codes can be sent (each SMS also costs money,
[abuse and cost](abuse-and-cost.md)).

**Rules.** `SEC-19`, `SEC-22`

---

### AT-22 Finding out who has an account (enumeration)

**What happens.** "No account with this email" on sign-in or reset tells an attacker which emails are customers.

**Defend.** The same message and the same response time for both cases: "If an account exists, we sent a
link."

**Rules.** `SEC-10`, `SEC-15`

---

### AT-23 Password reset poisoning and reusable links

**What happens.** The reset link is built from the request's `Host` header, so an attacker makes the victim's
email point to the attacker's domain; or reset links never expire and work many times.

**Defend.** Build links from a fixed configured base URL; tokens random (at least 128 bits), single-use,
expiring in 30–60 minutes, stored hashed; sign out other sessions after a reset (`SEC-22`).

**Rules.** `SEC-22`

---

### AT-24 Stolen or fixed sessions

**What happens.** A session cookie readable by JavaScript is stolen through XSS; a session ID set before sign-in
stays the same after it.

**Defend.** Cookies `HttpOnly`, `Secure`, `SameSite=Lax` or `Strict`; a new session ID at sign-in and at any
privilege change; sessions expire and can be revoked; sign-out deletes the session on the server (`SEC-09`).

**Rules.** `SEC-09`

---

### AT-25 OAuth and magic-link misuse

**What happens.** The redirect after "Sign in with Google" goes to any URL in the request, so the token lands on
the attacker's site; or an account is linked by email from a provider that does not verify emails.

**Defend.** Exact redirect URIs registered with the provider; `state` and PKCE on; link accounts only on
verified emails (`SEC-36`).

**Rules.** `SEC-10`, `SEC-36`
