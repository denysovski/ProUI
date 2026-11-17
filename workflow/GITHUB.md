# GitHub workflow, from first commit to live site

How every XSlop site lives on GitHub. Rules: `rules/production/github.md` (`GH`). Files to copy:
`templates/github/`. The agent asks before creating a repository, changing repository settings, adding
secrets or publishing anything.

```
Create repo ─▶ Scaffold ─▶ Branch ─▶ Commit ─▶ Pull request ─▶ CI + quality gates ─▶ Preview ─▶ Merge
                                                                                               │
                         Release tag ◀── Check live site ◀── Deploy from main ◀────────────────┘
                              │
                              ▼
                  Dependabot, issues, next change
```

## Create the repository

```bash
git init -b main
gh repo create <owner>/<site-name> --private --source . --remote origin \
  --description "Website for <business>" --homepage "https://<domain>"
gh repo edit --add-topic website --add-topic <stack>
```

Private until launch unless the user wants it public. Never commit someone else's images or fonts without a
licence that allows it.

## Scaffold the repository files

| File | From | Rule |
| --- | --- | --- |
| `README.md` | written for the project: what, live URL, install, run, build, deploy, where to edit content, stack, credits | `GH-02` |
| `.gitignore` | `templates/github/gitignore.template` | `GH-03` |
| `.env.example` | `templates/github/env.example.template` | `GH-04`, `SEC-04` |
| `.editorconfig` | `templates/github/editorconfig.template` | `GH-05` |
| formatter and linter config | Prettier + ESLint (or the stack's own), with `lint` and `format` scripts | `GH-05` |
| `PRODUCT.md`, `DESIGN.md`, `xslop/DECISIONS.md` | XSlop | design memory for later sessions |
| `public/.well-known/security.txt` | `templates/github/security.txt.template` | `SEC-18` |

`package.json` scripts the rest of the pipeline expects: `dev`, `build`, `preview`, `lint`, `typecheck` (if
TypeScript), `test` (if any).

## Branches and commits

- `main` is always deployable (`GH-06`). Work on `feat/hero-booking`, `fix/mobile-nav`, `chore/deps`.
- Conventional commits (`GH-07`):

```
feat: add table booking form to the hero
fix: keep focus inside the menu dialog
style: align footer columns to the grid
perf: serve hero image as AVIF with srcset
docs: add deploy steps to README
```

- One logical change per commit. Never commit `.env`, build output or `node_modules`.

## Pull requests

```bash
git push -u origin feat/hero-booking
gh pr create --fill --base main
```

The PR uses `templates/github/pull_request_template.md` (`GH-08`): what changed, screenshots at 390 and
1440 px, the XSlop checks, passes touched. Review the preview URL, not only the diff.

## CI and quality gates

Copy into `.github/workflows/`:

- `ci.yml`: install with the lockfile, lint, type-check, test, build (`GH-10`).
- `quality.yml`: XSlop scan (hard rules fail the build), Lighthouse CI with budgets from `lighthouserc.json`
  (performance 0.9, accessibility, best practices and SEO 0.95, CLS under 0.1), axe accessibility check on the
  built site, link check (`GH-11`).

Pushing workflow files needs a token with the `workflow` scope. If the push is refused, tell the user and let
them add the files through the GitHub web interface or a token with that scope.

## Protect main

Settings → Rules → Rulesets (or Branch protection): require a pull request, require the CI and Quality checks
to pass, block force pushes and deletion (`GH-09`). For a solo project, requiring CI is the minimum. This
changes repository settings, so the agent asks first.

## Deploy

Pick one host and keep its config in the repository (`GH-13`):

| Host | Setup | Preview per PR (`GH-12`) |
| --- | --- | --- |
| GitHub Pages | `templates/github/workflows/pages.yml`; Settings → Pages → Source: GitHub Actions | no (use a separate preview host if needed) |
| Vercel | import the repo; `vercel.json` for headers and redirects | yes |
| Netlify | import the repo; `netlify.toml` with build command, publish dir, headers | yes |
| Cloudflare Pages | connect the repo; `_headers` and `_redirects` files or `wrangler.toml` | yes |

Security headers (`SEC-01` to `SEC-03`) go in the host's config file, not only in a meta tag. Custom domain:
DNS at the registrar, HTTPS enforced on the host (`SEO-14`).

## After deploy

- Open the live URL at 390 and 1440 px; run Lighthouse on the live site.
- Submit `sitemap.xml` in Google Search Console (`SEO-15`).
- Tag the release (`GH-15`):

```bash
git tag -a v1.0.0 -m "Launch"
git push origin v1.0.0
gh release create v1.0.0 --generate-notes
```

## Keep it healthy

- `templates/github/dependabot.yml` → `.github/dependabot.yml` for weekly npm and Actions updates (`GH-14`).
- Settings → Code security: secret scanning and push protection on; CodeQL for sites with a back end.
- `templates/github/ISSUE_TEMPLATE/` → `.github/ISSUE_TEMPLATE/` so the client can report bugs and changes in
  a usable shape (`GH-16`).
- `templates/github/release.yml` → `.github/release.yml` for grouped release notes.
