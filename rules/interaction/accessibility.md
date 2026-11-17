# Accessibility (`AX`)

Accessibility is designed in from the first screen, not checked at the end. Target: WCAG 2.2 AA.

## Structure

- **AX-01 Semantic HTML first.** Landmarks (`header`, `nav`, `main`, `footer`), real headings in order, lists
  as lists, tables as tables, buttons as buttons. ARIA only where HTML has no element for the job.
- **AX-02 Language set.** `<html lang="…">`, and `lang` on passages in another language.
- **AX-03 Skip link.** A "Skip to content" link as the first focusable element.
- **AX-04 Page titles.** Each page has a unique, descriptive `<title>`; in single-page apps it updates on route
  change and focus moves to the new content.

## Seeing

- **AX-05 Contrast.** Text 4.5:1 (large text 3:1), UI components and focus indicators 3:1 against neighbours
  (`CL-09`). Placeholder and disabled text that carries information also pass.
- **AX-06 Visible focus.** A focus ring of at least 2 px with 3:1 contrast, never removed with `outline: none`
  without a replacement; use `:focus-visible`.
- **AX-07 Text alternatives.** Meaningful alt text on informative images, `alt=""` on decorative ones, labels on
  icon-only buttons (`aria-label`), captions or transcripts for video and audio.
- **AX-08 Zoom and reflow.** Works at 200 % zoom and at 320 px width without horizontal scrolling; users can
  change text spacing without breaking the layout.

## Operating

- **AX-09 Keyboard everything.** Every interactive element reachable and usable by keyboard in a logical order,
  no keyboard traps, custom widgets follow the ARIA Authoring Practices keyboard patterns.
- **AX-10 Target size and spacing.** See `IX-05`.
- **AX-11 No time traps.** Time limits can be extended; carousels and auto-playing media can be paused.

## Motion and sensory

- **AX-12 Reduced motion.** `prefers-reduced-motion: reduce` replaces movement with fades or instant changes but
  keeps the state change visible. Do not kill all transitions to 0 ms if feedback is lost.
- **AX-13 No flashing.** Nothing flashes more than three times per second.
- **AX-14 Reduced transparency and more contrast.** Honour `prefers-reduced-transparency` (solid surfaces
  instead of glass) and `prefers-contrast: more` (stronger borders and text).

## Understanding

- **AX-15 Announce changes.** Loading, success and errors are announced to screen readers (`aria-live`,
  `role="status"`, `role="alert"`), not only shown.
- **AX-16 Test with real tools.** axe or Lighthouse accessibility audit, keyboard-only walkthrough, a screen
  reader pass (VoiceOver or NVDA) on the main flow, and a 200 % zoom check before handoff.
