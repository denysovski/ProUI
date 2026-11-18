# Motion Primitives (vendored)

> The source of all 33 [Motion Primitives](https://motion-primitives.com) components by ibelick, saved here so XSlop can use them without a network or an account. This is the base of the Quiet kit and the motion layer of every other kit ([kits.md](../../kits.md)).

[Catalogue](../../catalog/motion-primitives.md) · [Effect kits](../../kits.md) · [Licence](LICENSE.md)

| Folder | Contents |
| --- | --- |
| `components/` | one `.tsx` file per component |
| `lib/utils.ts` | the `cn()` helper every component imports from `@/lib/utils` |
| `hooks/` | `useClickOutside` and `usePreventScroll`, used by dialog, popover and toolbar components |

## Use in a project

```bash
npm i motion clsx tailwind-merge
# only for some components: lucide-react, react-use-measure (see the catalogue)
```

Copy `lib/utils.ts` to the project's `lib/`, the component to `components/motion-primitives/`, and any hook it
imports to `hooks/`. The `@/` alias must point at the project root (Next.js and shadcn set this up). Keep the
licence notice from `LICENSE.md` in the project, for example in a `THIRD_PARTY_NOTICES` file.

## Source

Copied from [github.com/ibelick/motion-primitives](https://github.com/ibelick/motion-primitives), commit
`120f64f` (2026-09-28), unchanged. MIT licence, Copyright (c) 2024 ibelick. To update, copy
`components/core/*.tsx` from a newer commit and run `node scripts/build-effects.mjs`.
