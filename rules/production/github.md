# GitHub workflow (`GH`)

Every site built with XSlop lives in a GitHub repository with an automated path from commit to deploy. The
full walkthrough is `workflow/GITHUB.md`; ready files to copy are in `templates/github/`.

## Repository

- **GH-01 One repository per site** with a clear name, description, topics and website URL set.
- **GH-02 A real README.** What the site is, the live URL, how to install, run, build and deploy (commands that
  actually exist in `package.json`), where content is edited, and the tech stack.
- **GH-03 Ignore what must not be committed.** `.gitignore` for `node_modules`, build output, `.env*` (except
  `.env.example`), OS and editor files, logs, local caches.
- **GH-04 `.env.example`.** Every environment variable the project needs, with placeholder values and a
  comment. Real secrets live in GitHub Actions secrets or the host's secret store (`SEC-04`).
- **GH-05 Consistent formatting.** `.editorconfig`, a formatter (Prettier or the stack's equivalent) and a
  linter configured in the repo and run in CI.

## Working

- **GH-06 `main` is always deployable.** Work happens on short branches (`feat/…`, `fix/…`, `chore/…`), merged
  by pull request.
- **GH-07 Conventional commits.** `feat:`, `fix:`, `style:`, `perf:`, `refactor:`, `docs:`, `chore:`, `ci:`,
  with a short imperative summary. One logical change per commit.
- **GH-08 Pull requests with a checklist.** Every PR uses the template: what changed, screenshots at mobile and
  desktop, XSlop passes touched, how it was tested.
- **GH-09 Protected `main`.** Branch protection (or a ruleset): pull request required, CI must pass, no force
  pushes. For a solo project, at least require CI.

## Automation

- **GH-10 CI on every push and PR.** Install with a lockfile, lint, type-check, run tests if any, build.
- **GH-11 Quality gates.** Lighthouse CI with budgets (performance, accessibility, SEO, best practices), an
  accessibility check (axe or pa11y), a link checker, and `scripts/xslop-scan.mjs` for slop patterns.
- **GH-12 Preview deploys.** Each PR gets a preview URL (Vercel, Netlify, Cloudflare Pages) so changes are
  reviewed in a browser, not only in code.
- **GH-13 Automated deploy from `main`.** GitHub Pages, Vercel, Netlify or Cloudflare deploy on merge; the
  hosting config lives in the repo (`vercel.json`, `netlify.toml`, `wrangler.toml` or the Pages workflow).
- **GH-14 Dependency and security automation.** Dependabot (or Renovate) for npm and GitHub Actions, secret
  scanning and push protection on, CodeQL or another code scan for apps with a backend (`SEC-14`).
- **GH-15 Releases.** Tag versions (`v1.0.0`) at launch and at major changes, with release notes generated
  from the commits.
- **GH-16 Issue and PR templates.** A bug template (steps, expected, actual, device, screenshot) and a feature
  template, so feedback after launch arrives in a usable shape.
