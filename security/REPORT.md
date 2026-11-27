[Security](README.md) · [Checklist](CHECKLIST.md)

# Security report template

Copy to `proui/SECURITY.md` in the project and fill it in during the security pass.

```markdown
# Security report: <site>

Date: <YYYY-MM-DD> · Level: Basic | Basic + Intermediate | needs professional review
Stack: <framework, host, database, auth, payments, AI providers>

## Scanner

`node proui/scripts/proui-security-scan.mjs .` → <n> findings (<n> hard)
<paste the hard and warn findings, and what was done with each>

## Checklist

| # | Check | Result | Notes |
| --- | --- | --- | --- |
| B1 | HTTPS and HSTS | pass / fail / n/a | |
| ... | | | |
| I13 | Budgets and per-user limits on paid APIs | | provider budgets set: OpenAI ✓, Maps ✓ |

## Self-tests run

| Test | Result |
| --- | --- |
| Two-account object access (AT-10) | 404 for all 4 object types |
| ... | |

## Fixed in this pass

- ...

## The owner must still

- [ ] Rotate <key> (it was in Git history before this pass)
- [ ] Turn on budget alerts at <provider>
- [ ] Book a professional review before handling <payments / health data>
```
