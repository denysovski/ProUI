# Launch Essentials Rulebook

> What every real, launched website has: system pages, legal pages, contact details, monitoring.

[All rulebooks](../README.md) · Prefix `PE` · Production

## Do

Positive rules: what a finished, professional site does.

| ID | Rule | Details |
| --- | --- | --- |
| `PE-01` | **Custom 404 page** | In the site's design, with links home, to search and to key pages. |
| `PE-02` | **CTA above the fold** | The primary action is visible without scrolling on desktop and mobile. |
| `PE-03` | **Sticky mobile CTA** | On phones, the primary action stays reachable (for example a bar at the bottom) where it makes sense: product pages, booking, sign-up. |
| `PE-04` | **Mobile breakpoints** | Tested at roughly 360, 390, 768, 1024, 1440 and 1920 px. No horizontal scroll, tap targets at least 44 px. |
| `PE-05` | **Favicon set** | `favicon.ico` or SVG, `apple-touch-icon` (180 px), icons for Android and the web manifest. |
| `PE-06` | **Open Graph and social preview** | `og:title`, `og:description`, `og:image` (1200 × 630), Twitter card tags, per page where it matters. |
| `PE-07` | **Thank-you page or state** | After a form or an order, a confirmation with the next step. |
| `PE-08` | **Privacy policy page** | Required in the EU (GDPR) whenever the site collects any personal data, including analytics and newsletter emails. |
| `PE-09` | **Terms page** | Terms and conditions, required for shops and services. |
| `PE-10` | **Cookie banner** | Needed in the EU for non-essential cookies (analytics, marketing). "Reject" must be as easy as "Accept". Load those scripts only after consent. |
| `PE-11` | **Analytics installed** | Plausible, Umami, Google Analytics or similar, respecting consent. |
| `PE-12` | **Real contact details** | Real address, email, phone and company ID where applicable. |
| `PE-13` | **Version control** | The code lives in a Git repository with meaningful commits. |
| `PE-14` | **Accessibility basics** | Semantic HTML, labelled inputs, visible focus, keyboard navigation for every interactive element, `lang` attribute, reduced-motion support. |
| `PE-15` | **Accessibility statement** | For sites selling to EU consumers, an accessibility statement and a feedback channel for barriers, linked from the footer (`AX-24`). |
| `PE-16` | **Company details** | Legal name, registered address and company ID (in the Czech Republic the IČO, and DIČ if VAT registered) in the footer or contact page where the law asks for them. |
| `PE-17` | **Redirects from old URLs** | When a site replaces an old one, every old URL redirects with a 301 to its closest new page. |
| `PE-18` | **Email that arrives** | Form and order emails are sent from the site domain with SPF, DKIM and DMARC set up, and tested in common inboxes. |
| `PE-19` | **Uptime and error monitoring** | An uptime check and front-end error tracking are in place, alerting a real person. |
| `PE-20` | **Backups** | Content and databases are backed up automatically, and a restore has been tested at least once. |

## Don't

Negative rules: what never ships.

| ID | Avoid | Details |
| --- | --- | --- |
| `PE-21` | **Launch without a content owner** | No site ships without someone named who keeps prices, opening hours, team and legal pages up to date. |
| `PE-22` | **Under construction pages** | No "coming soon" sections or empty pages in navigation. Ship what exists; add the rest when it is real. |

## How to check

- Open every system and legal page; test cookie consent in a fresh browser.
- Send a test through every form and check the email arrives.

## Sources

- [European Accessibility Act](https://eur-lex.europa.eu/eli/dir/2019/882/oj)
- [GDPR overview](https://gdpr.eu)

---

<sub>Generated from `rulebook.json` by `scripts/build-rulebooks.mjs`. To change a rule, edit the JSON and run the script.</sub>
