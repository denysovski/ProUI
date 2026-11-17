# XSlop ship

Take a finished design to production. Runs the production passes from `workflow/WORKFLOW.md`, then the GitHub
workflow from `workflow/GITHUB.md`.

- Production and legal pass (`PE`), SEO pass (`SEO`), performance pass (`PF`), security pass (`SEC`).
- Repository: README, `.gitignore`, `.env.example`, formatter, linter (`GH-01` to `GH-05`).
- Copy the files from `templates/github/` that fit the stack: CI, Lighthouse CI, deploy, Dependabot, PR and
  issue templates (`GH-08`, `GH-10` to `GH-16`).
- Deploy from `main`, check the live URL at mobile and desktop, submit the sitemap (`SEO-15`).
- Tag the release (`GH-15`) and report what shipped, what was skipped and what still needs the client.
- Ask before anything that creates accounts, changes repository settings or publishes.
