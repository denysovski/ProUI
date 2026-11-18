# Apple Human Interface Guidelines, distilled for the web

Source: https://developer.apple.com/design/human-interface-guidelines (every page also has a Markdown version
at the same URL with `.md`, useful for agents). This file summarises the parts that apply to websites, in our
own words, and maps them to ProUI rules. Read the original for native apps.

## Design principles

Apple's current principles: **Purpose** (make something meaningful), **Agency** (let people do things their
own way), **Responsibility** (act in people's best interest), **Familiarity** (build on what people know),
**Flexibility** (adapt to diverse contexts), **Simplicity** (be clear and direct), **Craft** (care about every
detail), **Delight** (make it human, and don't mistake delight for decoration). ProUI: `PL-01` to `PL-05`.

## Typography

- Default and minimum text sizes per platform: iOS 17 pt default / 11 pt minimum, macOS 13 / 10. On the web
  ProUI uses 16 px body minimum and 11–12 px absolute floor (`TY-06`).
- Avoid light weights for text; prefer Regular, Medium, Semibold, Bold (`TY-04`).
- Minimise the number of typefaces (`TY-03`).
- Keep hierarchy and avoid truncation when text size grows; layouts restack at large sizes (`TY-09`, `AX-08`).
- Custom fonts must stay legible and support the same accessibility features as system fonts (`TY-19`).

## Colour and dark mode

- One colour, one meaning; don't use the interactive colour for static text (`CL-08`).
- Every colour works in light, dark and increased-contrast contexts (`CL-12`, `CL-13`).
- Don't rely on colour alone; consider cultural meaning of colours (`CL-10`, `CL-16`).
- Contrast at least 4.5:1, aim for 7:1 for small custom text (`CL-09`).
- Dark mode colours are not simple inversions; dark interfaces use dimmer bases and brighter elevated layers;
  soften white areas in images (`CL-12`, `CL-14`).
- Follow the system appearance instead of offering an app-only switch (`CL-13`).
- Wide colour (P3) can enrich visuals, but gradients in P3 can clip on sRGB screens: check both (`GR-10`).

## Layout

- Order content by importance in reading order; align to scan, indent to show hierarchy (`LY-01`, `LY-11`).
- Group related items with space, shapes or separators (`LY-06`).
- Progressive disclosure keeps layouts clean (`LY-03`).
- Differentiate controls from content (`LY-04`).
- Adapt to every size; keep functionality the same when space changes; respect safe areas (`LY-14`, `LY-16`).

## Materials

- Translucent materials belong to the control layer floating over content, not to the content itself; use
  them sparingly; never stack glass on glass; add a dimming layer behind clear glass over bright content
  (`PL-07`, `SL-04`).

## Accessibility

- Hit targets at least 44 × 44 pt on touch screens; spacing between controls matters as much as size
  (`IX-05`).
- Support larger text, reduced motion, reduced transparency, increased contrast and screen readers (`AX`).

## Other pages worth reading

Writing, Dark mode, Motion, Icons, Branding, Onboarding, Loading, Feedback, Modality, Searching, Entering
data, Charts, Buttons, Menus, Sidebars, Tab bars, Toolbars, Text fields, Pointing devices, Right to left.
