# Critique rubric

Used by `commands/critique.md`. Based on Nielsen's ten usability heuristics, cognitive-load checks and persona
walkthroughs, as structured in Impeccable's critique and in common UX practice.

## Heuristics, scored 0–4

0 = absent or broken, 1 = major problems, 2 = mixed, 3 = good with small gaps, 4 = excellent throughout.

- **Visibility of status:** loading, saving, selection, progress, where am I.
- **Match with the real world:** the user's words, familiar order, recognisable icons.
- **User control and freedom:** undo, cancel, back, clear filters, escape from flows.
- **Consistency and standards:** same words and components mean the same thing; platform conventions.
- **Error prevention:** constraints, good defaults, confirmations only for destructive actions, autosave.
- **Recognition over recall:** visible options, labels on icons, recent items, autocomplete.
- **Flexibility and efficiency:** shortcuts, bulk actions, saved views, skippable onboarding.
- **Aesthetic and minimalist design:** nothing irrelevant competes with what matters.
- **Error recovery:** plain-language errors with a way forward.
- **Help and documentation:** help at the point of need, searchable, task-focused.

Total out of 40: 36–40 excellent, 28–35 good, 20–27 needs work, below 20 poor.

## Cognitive load

- more than about four choices in one group
- more than one focal point competing in a viewport
- jargon or abbreviations without explanation
- information the user must remember from a previous screen
- forms asking for things not needed yet (`SL-47`)

## Personas

Pick two or three that fit, plus one derived from `PRODUCT.md`.

- **Power user:** expert, impatient. Can the core task be done fast, by keyboard, in bulk? Can onboarding be
  skipped?
- **First-timer:** never used this kind of product. Is the first action obvious in five seconds? Are icons
  labelled? Is there help at decisions?
- **Accessibility user:** keyboard and screen reader, maybe 200 % zoom. Can the whole flow be done? Are changes
  announced? Is contrast enough?
- **Mobile in a hurry:** one hand, bad signal, outside light. Are targets big, is the action reachable, does it
  work on slow network?
- **Sceptical buyer:** looking for reasons not to trust. Are claims proven, prices clear, the company real,
  contact and legal pages present?

## Severity

| Level | Meaning | When to fix |
| --- | --- | --- |
| P0 | blocks the task | now |
| P1 | major difficulty or confusion | before release |
| P2 | annoyance with a workaround | next pass |
| P3 | polish | when time allows |

If unsure between two levels: would a user contact support about it? If yes, it is at least P1.
