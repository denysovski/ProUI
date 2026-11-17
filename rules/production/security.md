# Security (`SEC`)

Every site, even a static one, ships with these. Apply what fits the stack; mark the rest as not applicable
in the final report rather than skipping silently.

- **SEC-01 HTTPS only** with HSTS (`Strict-Transport-Security: max-age=31536000; includeSubDomains`) once
  HTTPS is confirmed working.
- **SEC-02 Content Security Policy.** A CSP header (or meta tag on static hosting) that allows only the
  origins the site really uses; no `unsafe-eval`, avoid `unsafe-inline` for scripts (use nonces or hashes).
- **SEC-03 Security headers.** `X-Content-Type-Options: nosniff`, `Referrer-Policy:
  strict-origin-when-cross-origin`, `Permissions-Policy` that turns off unused features (camera, microphone,
  geolocation), and `frame-ancestors 'none'` (or `X-Frame-Options: DENY`) unless embedding is wanted.
- **SEC-04 No secrets in the client.** API keys with write access, tokens and passwords never appear in
  front-end code, the repository or build output. Use environment variables on the server; commit an
  `.env.example`, never `.env`.
- **SEC-05 Validate input on the server.** Every form and API endpoint checks type, length and format on the
  server, not only in the browser.
- **SEC-06 Escape output.** Never insert user content as HTML (`innerHTML`, `dangerouslySetInnerHTML`, `v-html`)
  without sanitising it; prefer text nodes.
- **SEC-07 Injection-safe data access.** Parameterised queries or an ORM; no string-built SQL; the database
  user has only the rights it needs.
- **SEC-08 Forms protected from abuse.** CSRF protection on state-changing requests, rate limiting, and spam
  protection that does not punish people (honeypot field, time check, or a privacy-friendly challenge).
- **SEC-09 Safe cookies and sessions.** `Secure`, `HttpOnly` and `SameSite=Lax` (or `Strict`) cookies; sessions
  expire; log-out really ends the session.
- **SEC-10 Authentication done properly** (when the site has accounts). Use a proven provider or library,
  hash passwords with a slow algorithm (argon2 or bcrypt), offer two-factor where it matters, never reveal
  whether an email is registered.
- **SEC-11 Safe uploads** (when the site accepts files). Check type and size on the server, rename files,
  store them outside the web root or in object storage, never execute them.
- **SEC-12 Restricted CORS.** Allow only the origins that need the API; never `*` with credentials.
- **SEC-13 Third-party code is pinned and checked.** Exact versions for CDN scripts with Subresource Integrity
  (`integrity` + `crossorigin`), sandboxed iframes for embeds, as few third-party scripts as possible.
- **SEC-14 Dependencies audited.** Run `npm audit` (or the stack's equivalent) and fix high and critical
  issues; remove unused packages (`PF-07`); keep a lockfile.
- **SEC-15 Errors without leaks.** Production error pages and API errors show a friendly message, never stack
  traces, file paths, queries or versions.
- **SEC-16 Safe external links.** `rel="noopener noreferrer"` on links that open in a new tab.
- **SEC-17 Collect only what is needed.** Minimal personal data, stored securely, with a retention period and
  a way to delete it; matches the privacy policy (`PE-08`).
- **SEC-18 Security contact.** `/.well-known/security.txt` with a contact address for reporting issues.
