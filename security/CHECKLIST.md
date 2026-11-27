[Security](README.md) · [Attack library](ATTACKS.md) · [Self-tests](PROBES.md) · [Report template](REPORT.md)

# Security checklist

The security pass of the workflow (`workflow/WORKFLOW.md`, Pass: Security) runs this list. Pick the level
from what the site does, run the scanner, go through every line, run the self-tests, and fill in
`proui/SECURITY.md` from [REPORT.md](REPORT.md). A site does not deploy with an open item marked **must**.

## 1. Pick the level

| The site has | Level |
| --- | --- |
| Only pages, maybe a contact form that sends an email | **Basic** |
| Accounts, a database, saved forms, an API, uploads, payments, an admin area or an AI feature | **Basic + Intermediate** |
| Health, finance, children's data, many personal records, or real money moving between users | Basic + Intermediate, then a **professional review** before launch; say so in the handoff |

## 2. Run the scanner

```bash
node <path-to-proui>/scripts/proui-security-scan.mjs .        # report
node <path-to-proui>/scripts/proui-security-scan.mjs . --ci   # exit 1 on a hard finding
```

It finds secrets in code and Git, public env variables with secret names, string-built SQL, raw HTML,
shell calls, prices, roles and models read from the request, redirects and fetches to request URLs, file
paths from input, open CORS, unverified tokens and webhooks. It cannot prove a site is safe: it points at
code to read.

## 3. Basic: every site

| # | Check | Must | Attack | Rule |
| --- | --- | --- | --- | --- |
| B1 | HTTPS everywhere, HTTP redirects, HSTS | must | `AT-55` | `SEC-01` |
| B2 | Security headers: CSP, `frame-ancestors`, `nosniff`, Referrer-Policy, Permissions-Policy | must | `AT-41`, `AT-55` | `SEC-02`, `SEC-03` |
| B3 | No secret keys in client code or the build output; public keys restricted by domain | must | `AT-60` | `SEC-04`, `SEC-21` |
| B4 | `.env*` ignored, never in Git history; `.env.example` with names only | must | `AT-61` | `SEC-34` |
| B5 | No raw HTML from users or URLs; external links `rel="noopener"` | must | `AT-03`, `AT-43` | `SEC-06`, `SEC-16` |
| B6 | Forms validated on the server, honeypot and rate limit, no line breaks in header fields | must | `AT-06`, `AT-71` | `SEC-05`, `SEC-08` |
| B7 | `npm audit` without high or critical issues; lockfile committed | must | `AT-62` | `SEC-14` |
| B8 | Third-party scripts few, pinned, with SRI; none on payment pages | should | `AT-45` | `SEC-13` |
| B9 | Error pages without stack traces; no debug routes, dotfiles or backups served | must | `AT-14`, `AT-54` | `SEC-15`, `SEC-24` |
| B10 | `/.well-known/security.txt` with a contact | should | | `SEC-18` |
| B11 | Only the data the site needs; nothing personal in URLs or logs | must | `AT-63` | `SEC-17`, `SEC-26` |

## 4. Intermediate: sites with data, accounts, money or AI

| # | Check | Must | Attack | Rule |
| --- | --- | --- | --- | --- |
| I1 | Every database access parameterised; no raw-query helpers with interpolation | must | `AT-01`, `AT-02` | `SEC-07` |
| I2 | Every request body validated by a schema with allow-listed fields | must | `AT-12` | `SEC-05`, `SEC-29` |
| I3 | Every private object filtered by its owner; two-account test passes | must | `AT-10` | `SEC-27` |
| I4 | Every admin page and route checks the role on the server | must | `AT-11` | `SEC-28` |
| I5 | Sign-in by a proven library; rate limits; same message for unknown accounts; codes limited to 5 attempts | must | `AT-20`–`AT-23` | `SEC-10`, `SEC-19`, `SEC-22` |
| I6 | Session cookies `HttpOnly`, `Secure`, `SameSite`; new ID at sign-in; CSRF protection on state changes | must | `AT-24`, `AT-40` | `SEC-09` |
| I7 | Prices, discounts, shipping and totals computed on the server; quantities 1 to a maximum | must | `AT-30`, `AT-31` | `SEC-30` |
| I8 | Orders paid only from a verified webhook; amounts checked; events handled once | must | `AT-32`, `AT-34` | `SEC-20` |
| I9 | Coupons, gift cards, stock and credits used atomically; idempotency keys on payments | must | `AT-33` | `SEC-31` |
| I10 | Uploads type-checked by content, size-limited, renamed, re-encoded, served from a separate domain | must | `AT-50` | `SEC-11` |
| I11 | No file paths, shell commands, redirects or server fetches built from input | must | `AT-04`, `AT-42`, `AT-51`, `AT-52` | `SEC-35`–`SEC-37` |
| I12 | CORS limited to known origins | must | `AT-44` | `SEC-12` |
| I13 | Budgets and alerts on every paid API; per-user limits; model, tokens and tool calls fixed on the server | must | `AT-70`, `AT-83` | `SEC-32` |
| I14 | AI features: nothing secret in prompts, side effects confirmed, output sanitised, per-user context | must | `AT-80`–`AT-82` | `SEC-33` |
| I15 | Database row-level security or an equivalent second wall on multi-user data | should | `AT-10` | `SEC-27` |
| I16 | Staff accounts with two-factor sign-in; admin actions logged | should | `AT-11` | `SEC-28` |
| I17 | Backups exist and a restore was tried once | should | | |

## 5. Self-tests

Run the tests in [PROBES.md](PROBES.md) that apply, **against your own local or staging site only**, and
paste the results into the report.

## 6. Report

Fill in `proui/SECURITY.md` from [REPORT.md](REPORT.md): the level, scanner output, each line passed,
failed or not applicable, what was fixed, and what the owner must still do (rotate keys, turn on provider
budgets, book a professional review).
