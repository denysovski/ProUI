# Microsoft Fluent 2, distilled for the web

Source: https://fluent2.microsoft.design (Layout, Typography, Color, Elevation, Motion, Shapes, Iconography,
Accessibility, Content). Fluent 2 is the design system behind Microsoft 365, Teams, Windows and Azure; it is a
strong reference for product UI (`modes/operate.md`).

## What to take

- **A 4 px spacing system** shared by components and layouts, with a global ramp (2, 4, 6, 8, 10, 12, 16, 20,
  24, 32 and larger layout steps). ProUI: `LY-05`.
- **One type family** for every role in product UI, a defined type ramp from caption to display, system fonts
  as the default on each platform. ProUI: `TY-02`, `TY-05`.
- **Three-tier tokens:** global values (raw colours), alias tokens by role (`colorNeutralBackground1`,
  `colorBrandForeground1`), component tokens. Components never use raw values. ProUI: `CL-04`, `DC-05`.
- **An elevation ramp** (shadow 2, 4, 8, 16, 28, 64) where higher means more temporary: cards low, flyouts
  medium, dialogs high. ProUI: `PL-09`.
- **A radius ramp** (none, small, medium, large, circular) used consistently. ProUI: `PL-08`.
- **Motion with purpose:** short durations for small changes, longer for large spatial moves, decelerate on
  enter, accelerate on exit. ProUI: `MO`.
- **Content guidance:** sentence case, short, verb-first buttons, helpful errors. ProUI: `CP`.
- **Accessibility as a default** in every component: focus visuals, high-contrast mode, keyboard patterns.
  ProUI: `AX`.

## What not to copy

The Microsoft look itself (Segoe, Acrylic and Mica materials, Fluent icons) on a site that is not a Microsoft
product. Take the system discipline, not the costume.
