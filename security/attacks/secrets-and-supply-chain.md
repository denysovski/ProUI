[Security](../README.md) · [Attack library](../ATTACKS.md) · [Checklist](../CHECKLIST.md) · [Self-tests](../PROBES.md)

# Secrets and dependencies

---

### AT-60 Finding your API key in the browser

**What happens.** A key for OpenAI, Stripe (secret key), Supabase (service role), Google Maps without
restrictions or a database URL is used in client code. Anything in the bundle is public: DevTools, the
network panel or a search through the JavaScript files shows it.

Watch the build prefixes: everything named `NEXT_PUBLIC_…`, `VITE_…`, `PUBLIC_…`, `EXPO_PUBLIC_…` or
`REACT_APP_…` is shipped to every visitor.

**Defend (basic).** Secret keys live only on the server (route handlers, server actions, edge functions); the
client calls your API, your API calls the provider (`SEC-04`). Keys that must be public (Maps, Supabase
anon key, Stripe publishable key) are restricted: by domain, by API, with row-level security behind them
(`SEC-21`).

**Test it.** Search the built output: `grep -rEo "sk-[A-Za-z0-9]{20,}|sk_live_|service_role|AIza[0-9A-Za-z_-]{35}" .next dist build out`.
The security scanner does this (`node scripts/proui-security-scan.mjs`).

**Rules.** `SEC-04`, `SEC-21`

---

### AT-61 Finding your .env in Git

**What happens.** `.env` was committed once, then deleted. It is still in the history, and bots scan every
public repository within minutes of a push.

**Defend (basic).** `.env*` in `.gitignore` before the first commit, with a `.env.example` holding names only
(`SEC-34`); a pre-commit secret scan (gitleaks, GitHub push protection).

**Defend (intermediate).** If a secret was ever pushed, **rotate it first** (a new key at the provider), then
clean the history (`git filter-repo`), because the old key must be assumed copied. Secrets for CI in the
platform's secret store, not in workflow files.

**Test it.** `git log --all --full-history -- .env '*.env'` must show nothing;
`git ls-files | grep -E "^\.env($|\.)" | grep -v example` must be empty.

**Rules.** `SEC-04`, `SEC-34`

---

### AT-62 A bad package

**What happens.** A dependency is hijacked and ships malware in an update, or a look-alike name
(`reacct-dom`, `lodahs`) is installed by mistake, or an install script steals tokens.

**Defend (basic).** A lockfile committed and used (`npm ci`); `npm audit` in CI (`SEC-14`); a new package is
checked before install (downloads, age, maintainer, repository).

**Defend (intermediate).** Dependabot or Renovate with review; avoid packages younger than a few weeks for
anything sensitive; `npm config set ignore-scripts true` where the project allows it; pinned GitHub Actions
by commit SHA (`SEC-13`).

**Rules.** `SEC-13`, `SEC-14`

---

### AT-63 Secrets in logs and error trackers

**What happens.** Request bodies with passwords, tokens or card data end up in logs, Sentry or analytics URLs.

**Defend.** Redact sensitive fields in the logger; never put tokens or personal data in URLs (`SEC-26`).

**Rules.** `SEC-26`
