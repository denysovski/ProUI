[Back to ProUI](../README.md) · [Attack library](ATTACKS.md) · [Checklist](CHECKLIST.md) · [Self-tests](PROBES.md) · [Report](REPORT.md) · [Security Rulebook](../rules/security/README.md)

# Security

**A beautiful site that leaks its customers' data, charges 1 Kč for a jacket or burns 5 000 USD of API
credit overnight is not finished.** AI agents write working code fast, and the same few mistakes come back
in almost every vibe-coded app: an admin page anyone can open, an ID you can change in the URL, a price the
browser decides, an API key in the JavaScript, a `.env` in Git. This folder is how ProUI catches them.

> [!IMPORTANT]
> This is basic and intermediate protection for websites, shops and small apps. It is not a penetration test
> and not a guarantee. Sites that handle health data, finances, children's data or money between users get a
> professional review before launch; the handoff says so.

## What is here

| File | What it is for |
| --- | --- |
| [ATTACKS.md](ATTACKS.md) | the attack library: 49 attacks in 9 groups, each with ID, level and main defence |
| [attacks/](attacks/) | one page per group: what happens, an example, the impact, the defence at two levels, how to test it |
| [CHECKLIST.md](CHECKLIST.md) | the security pass: pick the level, run the scanner, 11 basic and 17 intermediate checks |
| [PROBES.md](PROBES.md) | self-tests with `curl` and two test accounts, for your own local or staging site |
| [REPORT.md](REPORT.md) | the report template the agent fills in as `proui/SECURITY.md` |
| [`scripts/proui-security-scan.mjs`](../scripts/proui-security-scan.mjs) | a static scanner for the patterns behind most of these attacks |
| [Security Rulebook](../rules/security/README.md) | the `SEC` rules the checks point to |

## The groups

| Group | Typical attacks |
| --- | --- |
| [Injection](attacks/injection.md) | SQL and NoSQL injection, XSS, shell and template injection |
| [Access control](attacks/access-control.md) | changing the ID in the URL, typing `/admin`, making yourself admin at sign-up |
| [Sign-in and accounts](attacks/authentication.md) | password and login-code guessing, account enumeration, reset links, sessions |
| [Shops and money](attacks/business-logic.md) | editing the price, ordering −1 items, faking a payment, redeeming a coupon 100 times |
| [Browser-side](attacks/browser.md) | CSRF, clickjacking, open redirects, open CORS, skimming scripts |
| [Files and the server](attacks/files-and-server.md) | malicious uploads, path traversal, SSRF, debug leftovers, missing headers |
| [Secrets and dependencies](attacks/secrets-and-supply-chain.md) | keys in the browser, `.env` in Git, bad packages |
| [Abuse and cost](attacks/abuse-and-cost.md) | denial of wallet: paid APIs, maps, AI and voice running up the bill |
| [AI features](attacks/ai-features.md) | prompt injection, data leaks through answers, client-chosen models |

## How the agent uses it

1. **While building**, the `SEC` rules apply like any other rulebook: secret keys stay on the server, the server
   computes prices, every query checks the owner.
2. **In the security pass** (after performance, before launch), the agent follows [CHECKLIST.md](CHECKLIST.md):
   level, scanner, checks, self-tests, report.
3. **In CI**, `proui-security-scan.mjs --ci` runs next to the slop scanner and fails the build on a hard finding
   (`workflow/GITHUB.md`).
4. **At handoff**, the owner gets the list of what only they can do: rotate a leaked key, set provider budgets,
   book a review.

Short command: `ProUI pass security`.
