[Security](README.md) · [Checklist](CHECKLIST.md) · [Self-tests](PROBES.md) · [Security Rulebook](../rules/security/README.md)

# Attack library

Every attack the security pass checks for, in plain words, with the defence at two levels and a way to test
it on your own site. IDs (`AT-xx`) are fixed, so a report can say "AT-33 fails on /api/coupon".

**Level** says which sites need it: **B** basic, every site including static ones; **I** intermediate,
sites with forms that store data, accounts, payments, APIs, uploads or AI features.

## Injection · [injection.md](attacks/injection.md)

| ID | Attack | Level | Main defence |
| --- | --- | --- | --- |
| `AT-01` | SQL injection | I | parameterised queries, no string-built SQL (`SEC-07`) |
| `AT-02` | NoSQL injection | I | schema-validate types, strip `$` operators (`SEC-05`) |
| `AT-03` | Cross-site scripting (stored, reflected, DOM) | B | framework escaping, no raw HTML, CSP (`SEC-02`, `SEC-06`) |
| `AT-04` | Command injection | I | no shell with user input, argument arrays |
| `AT-05` | Template injection | I | user text only as data in developer templates |
| `AT-06` | Header and email injection | B | no line breaks in header fields (`SEC-08`) |
| `AT-07` | Prompt injection | I | see AI features |

## Access control · [access-control.md](attacks/access-control.md)

| ID | Attack | Level | Main defence |
| --- | --- | --- | --- |
| `AT-10` | Changing the ID in the URL (IDOR) | I | every query filtered by owner (`SEC-27`) |
| `AT-11` | Typing /admin | I | role checked on the server on every admin route (`SEC-28`) |
| `AT-12` | Making myself admin at sign-up (mass assignment) | I | allow-listed fields (`SEC-29`) |
| `AT-13` | Tampered tokens and cookies | I | verified sessions, no roles in editable cookies (`SEC-09`) |
| `AT-14` | Forced browsing, leftover files | B | deploy build output only, block dotfiles (`SEC-24`) |

## Sign-in and accounts · [authentication.md](attacks/authentication.md)

| ID | Attack | Level | Main defence |
| --- | --- | --- | --- |
| `AT-20` | Password guessing, credential stuffing | I | rate limits, breached-password check (`SEC-19`) |
| `AT-21` | Guessing the login code | I | 5 attempts, 10-minute expiry |
| `AT-22` | Finding out who has an account | I | same message and timing |
| `AT-23` | Reset poisoning, reusable links | I | fixed base URL, single-use expiring tokens (`SEC-22`) |
| `AT-24` | Stolen or fixed sessions | I | HttpOnly Secure SameSite cookies, new ID at sign-in |
| `AT-25` | OAuth and magic-link misuse | I | exact redirect URIs, PKCE, verified emails |

## Shops and money · [business-logic.md](attacks/business-logic.md)

| ID | Attack | Level | Main defence |
| --- | --- | --- | --- |
| `AT-30` | Editing the price | I | the server computes every total (`SEC-30`) |
| `AT-31` | Ordering −1 items | I | whole numbers 1 to a maximum |
| `AT-32` | Faking a payment | I | paid only on a verified webhook (`SEC-20`) |
| `AT-33` | Redeeming a coupon 100 times | I | atomic check-and-use, idempotency (`SEC-31`) |
| `AT-34` | Replaying requests | I | idempotency keys, event IDs once |
| `AT-35` | Guessing gift cards and order numbers | I | long random codes, rate limits |

## Browser-side · [browser.md](attacks/browser.md)

| ID | Attack | Level | Main defence |
| --- | --- | --- | --- |
| `AT-40` | Cross-site request forgery | I | SameSite cookies, origin check (`SEC-09`) |
| `AT-41` | Clickjacking | B | `frame-ancestors 'self'` (`SEC-03`) |
| `AT-42` | Open redirect | I | relative own paths only (`SEC-36`) |
| `AT-43` | Reverse tabnabbing | B | `rel="noopener"` (`SEC-16`) |
| `AT-44` | Open CORS | I | origin allow-list (`SEC-12`) |
| `AT-45` | Compromised third-party script | B | few scripts, SRI, provider card fields (`SEC-13`) |
| `AT-46` | Unchecked postMessage | I | check `event.origin` |

## Files and the server · [files-and-server.md](attacks/files-and-server.md)

| ID | Attack | Level | Main defence |
| --- | --- | --- | --- |
| `AT-50` | Uploading something that isn't a photo | I | content-type sniffing, re-encode, separate domain (`SEC-11`) |
| `AT-51` | Reading other files (path traversal) | I | no paths from input (`SEC-37`) |
| `AT-52` | Making the server fetch for you (SSRF) | I | host allow-list, no private IPs (`SEC-35`) |
| `AT-53` | XML and archive tricks | I | no external entities, check entry paths |
| `AT-54` | Talkative errors, debug leftovers | B | generic errors, no debug in production (`SEC-15`) |
| `AT-55` | Missing HTTPS and headers | B | HSTS, CSP, security headers (`SEC-01`–`SEC-03`) |

## Secrets and dependencies · [secrets-and-supply-chain.md](attacks/secrets-and-supply-chain.md)

| ID | Attack | Level | Main defence |
| --- | --- | --- | --- |
| `AT-60` | Your API key in the browser | B | secret keys on the server only (`SEC-04`) |
| `AT-61` | Your .env in Git | B | ignored before the first commit, rotate on leak (`SEC-34`) |
| `AT-62` | A bad package | B | lockfile, audit, review new packages (`SEC-14`) |
| `AT-63` | Secrets in logs | I | redaction, nothing in URLs (`SEC-26`) |

## Abuse and cost · [abuse-and-cost.md](attacks/abuse-and-cost.md)

| ID | Attack | Level | Main defence |
| --- | --- | --- | --- |
| `AT-70` | Unbounded paid API calls (denial of wallet) | I | budgets, per-user limits, server-fixed limits (`SEC-32`) |
| `AT-71` | Spam and fake sign-ups | B | honeypot, rate limits, Turnstile (`SEC-08`) |
| `AT-72` | Scraping and floods | B | host protection, caching, rate limits |

## AI features · [ai-features.md](attacks/ai-features.md)

| ID | Attack | Level | Main defence |
| --- | --- | --- | --- |
| `AT-80` | "Ignore your instructions" | I | nothing secret in prompts, decisions in code (`SEC-33`) |
| `AT-81` | Instructions hidden in content | I | read-only tools, confirm side effects |
| `AT-82` | Leaking data through the answer | I | sanitise output, per-user context |
| `AT-83` | The request chooses the model and limits | I | server-fixed model and limits (`SEC-32`) |
| `AT-84` | The AI key in the app | I | call through your own server (`SEC-04`) |

## Sources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/) and [OWASP API Security Top 10](https://owasp.org/www-project-api-security/)
- [OWASP Top 10 for LLM applications](https://genai.owasp.org/)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- Ryan Naghib's videos on what vibe-coded apps get wrong (14 attacks; 10 ways they cost thousands), November 2026
