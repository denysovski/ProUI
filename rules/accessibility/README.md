# Accessibility Rulebook

> Usable by everyone, designed in from the start. Target: WCAG 2.2 AA.

[All rulebooks](../README.md) · Prefix `AX` · Interaction

## Do

Positive rules: what a finished, professional site does.

| ID | Rule | Details |
| --- | --- | --- |
| `AX-01` | **Semantic HTML first** | Landmarks (`header`, `nav`, `main`, `footer`), real headings in order, lists as lists, tables as tables, buttons as buttons. ARIA only where HTML has no element for the job. |
| `AX-02` | **Language set** | `<html lang="…">`, and `lang` on passages in another language. |
| `AX-03` | **Skip link** | A "Skip to content" link as the first focusable element. |
| `AX-04` | **Page titles** | Each page has a unique, descriptive `<title>`; in single-page apps it updates on route change and focus moves to the new content. |
| `AX-05` | **Contrast** | Text 4.5:1 (large text 3:1), UI components and focus indicators 3:1 against neighbours (`CL-09`). Placeholder and disabled text that carries information also pass. |
| `AX-06` | **Visible focus** | A focus ring of at least 2 px with 3:1 contrast, never removed with `outline: none` without a replacement; use `:focus-visible`. |
| `AX-07` | **Text alternatives** | Meaningful alt text on informative images, `alt=""` on decorative ones, labels on icon-only buttons (`aria-label`), captions or transcripts for video and audio. |
| `AX-08` | **Zoom and reflow** | Works at 200 % zoom and at 320 px width without horizontal scrolling; users can change text spacing without breaking the layout. |
| `AX-09` | **Keyboard everything** | Every interactive element reachable and usable by keyboard in a logical order, no keyboard traps, custom widgets follow the ARIA Authoring Practices keyboard patterns. |
| `AX-10` | **Target size and spacing** | Touch targets at least 44 × 44 px with space between neighbours; never below the WCAG 2.2 AA floor of 24 × 24 px (`IX-05`). |
| `AX-12` | **Reduced motion** | `prefers-reduced-motion: reduce` replaces movement with fades or instant changes but keeps the state change visible. Do not kill all transitions to 0 ms if feedback is lost. |
| `AX-14` | **Reduced transparency and more contrast** | Honour `prefers-reduced-transparency` (solid surfaces instead of glass) and `prefers-contrast: more` (stronger borders and text). |
| `AX-15` | **Announce changes** | Loading, success and errors are announced to screen readers (`aria-live`, `role="status"`, `role="alert"`), not only shown. |
| `AX-16` | **Test with real tools** | axe or Lighthouse accessibility audit, keyboard-only walkthrough, a screen reader pass (VoiceOver or NVDA) on the main flow, and a 200 % zoom check before handoff. |
| `AX-17` | **Focus not obscured** | A focused element is never hidden behind sticky headers, footers, cookie bars or chat widgets (WCAG 2.2, 2.4.11). |
| `AX-18` | **Alternatives to dragging** | Everything done by dragging (sliders, sorting, maps) can also be done with single clicks or taps (WCAG 2.2, 2.5.7). |
| `AX-19` | **Consistent help** | Help, contact and chat links appear in the same place on every page (WCAG 2.2, 3.2.6). |
| `AX-20` | **No redundant entry** | Information the user already gave in the same process is filled in or selectable, not asked again (WCAG 2.2, 3.3.7). |
| `AX-21` | **Accessible sign-in** | Sign-in never requires solving a puzzle or remembering and retyping a code without help: allow paste, password managers, passkeys or email links (WCAG 2.2, 3.3.8). |
| `AX-22` | **Link text that makes sense alone** | Links say where they go ("Read the delivery terms"), so a list of links read out of context still works. |
| `AX-23` | **Headings describe their section** | Every heading tells what the section is about; screen reader users jump through headings like a table of contents. |
| `AX-24` | **Accessibility statement** | Sites that sell to EU consumers publish an accessibility statement and a way to report barriers, as the European Accessibility Act requires since 28 June 2025. |

## Don't

Negative rules: what never ships.

| ID | Avoid | Details |
| --- | --- | --- |
| `AX-11` | **Time traps** | Time limits can be extended; carousels and auto-playing media can be paused. |
| `AX-13` | **Flashing content** | Nothing flashes more than three times per second. |
| `AX-25` | **Positive tabindex** | Never use `tabindex` greater than 0. It breaks the natural focus order; fix the DOM order instead. |
| `AX-26` | **Blocking zoom** | Never set `maximum-scale=1` or `user-scalable=no` in the viewport meta tag. |
| `AX-27` | **Instructions by sense alone** | Never say "click the red button" or "see the box on the right". Refer to labels people can find in any mode. |
| `AX-28` | **Accessibility overlays** | Do not install overlay widgets that promise automatic compliance. They do not fix the underlying markup and often get in the way of assistive technology. |

## Related anti-slop rules

Don'ts from the [Anti-Slop Rulebook](../anti-slop/README.md) that belong to this subject.

| ID | Avoid |
| --- | --- |
| `SL-06` | Low-contrast dark mode |
| `SL-48` | Keyboard-unfriendly forms |
| `SL-72` | Content hidden at rest |

## How to check

- axe or Lighthouse accessibility audit.
- Keyboard-only walkthrough of the main flow; screen reader pass with VoiceOver or NVDA.
- 200 % zoom and 320 px width.

## Sources

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [European Accessibility Act (Directive 2019/882)](https://eur-lex.europa.eu/eli/dir/2019/882/oj)

---

<sub>Generated from `rulebook.json` by `scripts/build-rulebooks.mjs`. To change a rule, edit the JSON and run the script.</sub>
