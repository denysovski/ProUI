<img src="cover.jpg" alt="Security Rulebook: Protecting visitors, data and the site itself, from headers to authentication." width="100%">

[All rulebooks](../README.md) · Prefix `SEC` · Production · 26 rules

**Protecting visitors, data and the site itself, from headers to authentication.**

```text
Apply the Security Rulebook (SEC) to this page.
Review this page against SEC-01 to SEC-05.
Why does SEC-01 matter here?
```

## Do · 21

What a finished, professional site does.

| ID | Rule | Details |
| --- | --- | --- |
| `SEC-01` | **HTTPS only** | The site is served only over HTTPS, with HSTS (`Strict-Transport-Security: max-age=31536000; includeSubDomains`) once HTTPS is confirmed working. |
| `SEC-02` | **Content Security Policy** | A CSP header (or meta tag on static hosting) that allows only the origins the site really uses; no `unsafe-eval`, avoid `unsafe-inline` for scripts (use nonces or hashes). |
| `SEC-03` | **Security headers** | `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` that turns off unused features (camera, microphone, geolocation), and `frame-ancestors 'none'` (or `X-Frame-Options: DENY`) unless embedding is wanted. |
| `SEC-05` | **Validate input on the server** | Every form and API endpoint checks type, length and format on the server, not only in the browser. |
| `SEC-06` | **Escape output** | Never insert user content as HTML (`innerHTML`, `dangerouslySetInnerHTML`, `v-html`) without sanitising it; prefer text nodes. |
| `SEC-07` | **Injection-safe data access** | Parameterised queries or an ORM; no string-built SQL; the database user has only the rights it needs. |
| `SEC-08` | **Forms protected from abuse** | CSRF protection on state-changing requests, rate limiting, and spam protection that does not punish people (honeypot field, time check, or a privacy-friendly challenge). |
| `SEC-09` | **Safe cookies and sessions** | `Secure`, `HttpOnly` and `SameSite=Lax` (or `Strict`) cookies; sessions expire; log-out really ends the session. |
| `SEC-10` | **Authentication done properly** | When the site has accounts: use a proven provider or library, hash passwords with a slow algorithm (argon2 or bcrypt), offer two-factor where it matters, and never reveal whether an email is registered. |
| `SEC-11` | **Safe uploads** | When the site accepts files: check type and size on the server, rename files, store them outside the web root or in object storage, and never execute them. |
| `SEC-12` | **Restricted CORS** | Allow only the origins that need the API; never `*` with credentials. |
| `SEC-13` | **Third-party code is pinned and checked** | Exact versions for CDN scripts with Subresource Integrity (`integrity` + `crossorigin`), sandboxed iframes for embeds, as few third-party scripts as possible. |
| `SEC-14` | **Dependencies audited** | Run `npm audit` (or the stack's equivalent) and fix high and critical issues; remove unused packages (`PF-07`); keep a lockfile. |
| `SEC-15` | **Errors without leaks** | Production error pages and API errors show a friendly message, never stack traces, file paths, queries or versions. |
| `SEC-16` | **Safe external links** | `rel="noopener noreferrer"` on links that open in a new tab. |
| `SEC-17` | **Collect only what is needed** | Minimal personal data, stored securely, with a retention period and a way to delete it; matches the privacy policy (`PE-08`). |
| `SEC-18` | **Security contact** | `/.well-known/security.txt` with a contact address for reporting issues. |
| `SEC-19` | **Rate-limit sign-in and forms** | Repeated failed sign-ins, password resets and form posts are slowed down or blocked per IP and account. |
| `SEC-20` | **Verify webhooks** | Incoming webhooks (payments, forms) are checked by signature before anything happens. |
| `SEC-21` | **Least-privilege keys** | API keys and service accounts have only the rights they need, and are rotated when people leave or keys leak. |
| `SEC-22` | **Expiring reset links** | Password reset and magic links are single-use and expire within about an hour. |

## Don't · 5

What never ships.

| ID | Avoid | Details |
| --- | --- | --- |
| `SEC-04` | **Secrets in the client** | API keys with write access, tokens and passwords never appear in front-end code, the repository or build output. Use environment variables on the server; commit an `.env.example`, never `.env`. |
| `SEC-23` | **Storing card data** | Never store or log card numbers. Use the payment provider's hosted fields or checkout. |
| `SEC-24` | **Exposed internals on the server** | No reachable `.git`, `.env`, backups, directory listings or server version headers in production. |
| `SEC-25` | **Your own crypto** | Never invent hashing, encryption or token schemes. Use the platform's and well-known libraries' implementations. |
| `SEC-26` | **Personal data in logs and URLs** | Logs, analytics and URLs never contain passwords, tokens, card data or unnecessary personal data. |

## How to check

- `curl -I` the live site for headers; `npm audit`; search the repo and build for keys.
- Submit forms with bad and oversized input; check error pages show no internals.

## Sources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [MDN: HTTP security headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
- [securityheaders.com](https://securityheaders.com)

---

Previous: [Performance Rulebook](../performance/README.md) · Next: [GitHub Workflow Rulebook](../github/README.md)

<sub>Generated from `rulebook.json` by `scripts/build-rulebooks.mjs`. To change a rule, edit the JSON and run the script.</sub>
