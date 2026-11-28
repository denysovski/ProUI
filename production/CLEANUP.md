[Production](README.md) · [Concepts](CONCEPTS.md) · [Resilience](RESILIENCE.md)

# Cleanup pass

The last pass before handoff (`workflow/WORKFLOW.md`, Pass: Cleanup). Building with an AI agent leaves
things behind: the first version of a component, a route that was replaced, a helper written twice, a
package tried once, a feature that was dropped from the brief. They cost build time, bundle size, review
time and security surface, and they confuse the next person (or agent) who reads the code.

**The rule: remove what is not used, merge what is duplicated, simplify what is overbuilt, and prove nothing
broke.** Never delete on a guess.

## 1. Find it

Run the tools, then read the code they point at. Tools give candidates, not verdicts: dynamic imports,
files used by name (Next.js `page.tsx`, `route.ts`, `middleware.ts`), config files and things used only in
production can look unused.

| What | Tool | Command |
| --- | --- | --- |
| Unused files, exports, dependencies, types | [Knip](https://knip.dev) | `npx knip` |
| Unused and missing dependencies | depcheck | `npx depcheck` |
| Files nothing imports (orphans), circular imports | madge | `npx madge --orphans --extensions ts,tsx,js,jsx src` |
| Duplicated code blocks | jscpd | `npx jscpd src --min-lines 8` |
| Unused variables and imports | the linter | `npx eslint . --rule '{"no-unused-vars":"error"}'` or `tsc --noUnusedLocals --noUnusedParameters` |
| Unused CSS | Chrome DevTools → Coverage; PurgeCSS for plain CSS | |
| What makes the bundle big | the bundle analyser | `ANALYZE=true npm run build` (Next.js `@next/bundle-analyzer`), `npx vite-bundle-visualizer` |
| Repeated or slow queries | the ORM's query log, the database's slow log | Prisma `log: ['query']`, `EXPLAIN ANALYZE` |
| Abandoned files | Git history | `git log -1 --format=%cr -- <file>` for files untouched since the first weeks |
| Leftovers | search | `grep -rnE "TODO|FIXME|console\.log|debugger|lorem|placeholder|test123" src` |

## 2. The eight things to look for

| # | Look for | Typical examples | Action |
| --- | --- | --- | --- |
| 1 | Dead code | unused functions, files, components, routes, API endpoints, variables, imports, packages | delete; uninstall packages |
| 2 | Duplicate logic | two date formatters, three fetch wrappers, price calculation in two places | keep one, import it everywhere |
| 3 | Unused UI components | `ButtonOld`, a modal from an abandoned flow, five card variants where two are used | delete, or merge into the design system's component |
| 4 | Overly complex code | a state library for two values, an abstraction with one user, a custom hook wrapping one line | replace with the plain version |
| 5 | Legacy code | the old API version, a migration shim, a feature flag that is 100 % on, a polyfill no browser needs | remove the flag and the old branch |
| 6 | Redundant queries and calls | the same data fetched in layout and page, N+1 queries, a request in a loop, refetch on every render | fetch once and pass down, batch, cache (`PF-12`) |
| 7 | Abandoned files | `test.tsx`, `page-copy.tsx`, `old/`, `backup/`, scratch scripts, sample data, unused images in `public/` | delete; images in `public/` checked with `grep` |
| 8 | Technical debt | `any` types, ignored lint rules, `@ts-ignore`, copy-pasted config, missing error states | fix the cheap ones now, list the rest in the handoff |

Also remove: console logs and debug code, commented-out blocks (Git remembers them), unused environment
variables in `.env.example`, unused fonts and font weights (`TY`), unused icons and images, stale
`README` instructions, and features that were in an early draft but not in the final brief.

## 3. Prove nothing broke

1. Commit before cleaning, then clean in small commits by category ("Remove unused components", "Merge
   duplicate price helpers"), so any one can be reverted.
2. After each commit: `npm run build`, type check, lint, tests, and open the main pages.
3. At the end: the full quality check again (Lighthouse, axe, `proui-scan`, `proui-security-scan`), and
   compare bundle size and dependency count with before.

## 4. Report

Add a short section to the handoff:

```markdown
## Cleanup
- Removed: 14 unused files, 6 components, 3 API routes, 5 packages (−182 kB JavaScript)
- Merged: price calculation (cart + checkout) into lib/pricing.ts; 3 fetch helpers into lib/request.ts
- Simplified: replaced Zustand store for the menu with useState
- Queries: product page 9 → 2 queries (N+1 on variants)
- Left for later: typed API client (12 `any`), tests for the cart
```

## Prompt for the agent

> Analyse the entire codebase and identify:
> 1. dead code (unused functions, files, components, routes, APIs, variables, imports and dependencies),
> 2. duplicate logic that should be consolidated,
> 3. unused UI components,
> 4. overly complex implementations that can be simplified,
> 5. legacy code that is no longer needed,
> 6. redundant database queries or API calls,
> 7. files that appear abandoned or disconnected from the application,
> 8. opportunities to reduce technical debt.
>
> Run Knip, depcheck, madge `--orphans` and jscpd first, then confirm every candidate by reading the code
> and searching for its name. List findings in a table (what, where, evidence, action, risk) before deleting
> anything. Then clean in small commits by category, build and test after each, and finish with the cleanup
> report. Never delete files the framework loads by name, config, migrations, or anything you cannot prove
> unused.
