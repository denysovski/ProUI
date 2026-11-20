# Legal and trust pages

> The pages, banners and files a site needs so visitors, search engines and regulators trust it: cookie consent, privacy, terms, company details, handling of personal data and uploaded files, accessibility, security contact and a status page. Written for sites aimed at the EU and the Czech Republic; it is guidance for building, not legal advice, so final texts are checked by the client or their lawyer.

[Blueprints](README.md) · [Footer](footer.md) · [Launch Essentials Rulebook](../rules/launch/README.md) · [Security Rulebook](../rules/security/README.md)

## Which pages each kind of site needs

| Page or item | Every site | Collects personal data (forms, newsletter, analytics) | Shop | SaaS or app | Company with many audiences |
| --- | --- | --- | --- | --- | --- |
| Company details (legal name, ID / IČO, address, contact) | **yes** | yes | yes | yes | yes |
| Privacy policy | if any data or analytics | **yes** | yes | yes | yes |
| Cookie banner and cookie policy | if any non-essential cookies | **yes** | yes | yes | yes |
| Cookie settings link in the footer | with a banner | yes | yes | yes | yes |
| Terms of use / service | | | **terms of sale, returns, complaints (reklamace)** | **yes** | yes |
| Accessibility statement | recommended | recommended | **required for most EU shops** | yes | yes |
| Security contact (`security.txt`, "Report security issues") | recommended | yes | yes | **yes** | yes |
| Status page | | | if downtime costs sales | **yes** | yes |
| Trust Center (security, compliance, subprocessors, DPA) | | | | **yes for B2B** | yes |
| Data subject requests (DSR / DSAR) form or address | | **yes** | yes | yes | yes |
| Imprint for press (press kit, brand assets) | | | | optional | **yes** |

## Cookie consent

Since 1 January 2022 Czech law requires prior, active consent for every cookie that is not technically necessary; only cookies without which the site could not work need no consent. The European data protection authorities agree on the details:

- **Reject on the first layer.** A vast majority of authorities consider a banner without a reject option at the same level as "Accept all" a breach. The Czech authority has issued an order against a site whose first layer offered only "Allow all" and "Adjust", with "Reject" on the second layer.
- **No pre-ticked boxes.** Pre-selected categories do not give valid consent, so every optional category starts switched off.
- **Equal design.** Accept and reject buttons with deceptive colours or contrast that push "Accept" are listed as a problem; give both the same size, colour and weight.
- **Nothing before consent.** Analytics, marketing pixels, embedded videos and maps load only after the visitor allows their category. Setting long-lived cookies before the choice was also part of the Czech order above.
- **Withdraw any time.** A "Cookie settings" or "Your privacy choices" link in the footer reopens the banner.

The studied sites show good patterns: Town says "optional cookies only with your permission … change or withdraw your choice at any time" with Customize / Reject / Accept; X Money offers "Accept all cookies" and "Refuse non-essential cookies" as equal pills; Cloudflare places "Reject All" next to "Accept All Cookies" and keeps "Your privacy choices" in the footer.

```text
Cookie banner for <site>: a card at the bottom left (desktop) or bottom sheet (mobile), max 4 lines:
what optional cookies do and that they are off until allowed. Buttons of equal size and style:
"Reject all", "Settings", "Accept all". Settings lists categories (Necessary – always on, Analytics,
Marketing, Preferences) with switches off by default and a plain description of each. Store the choice
for 6–12 months, record the time and version, block every non-essential script until consent, and add
"Cookie settings" to the footer. Keyboard accessible, focus moves into the banner, does not cover the
main action on mobile.
```

Lighter alternative: analytics that set no cookies and collect no personal data (for example self-hosted, cookieless tools) can remove the need for a banner entirely. Check each tool's own statement before relying on it.

## Personal data on the site

| Situation | What to do |
| --- | --- |
| Contact form | ask only for what the reply needs (name, email, message); say what happens with the data next to the button and link the privacy policy; no pre-ticked newsletter box |
| Newsletter | separate, unticked consent; double opt-in; one-click unsubscribe in every email |
| Analytics | cookieless, or behind consent; IP anonymisation; no session replay on pages with forms |
| Embedded maps, videos, fonts | load after consent or use privacy modes (click to load map, `youtube-nocookie`); self-host fonts instead of loading them from a third party |
| Accounts | passwords hashed by the platform, passkeys or magic links where possible, account deletion in settings |
| Data requests | an address or form for access, correction, deletion and export requests, answered within one month |
| Subprocessors | list every service that receives personal data (hosting, email, analytics, CRM) in the privacy policy or a subprocessor page |

## Files uploaded by users

| Rule | Why |
| --- | --- |
| Limit type and size on the server, not only in the browser (for example images up to 10 MB, PDF up to 20 MB) | browsers can be bypassed |
| Store uploads outside the web root or in private object storage; serve them through signed, expiring links | uploaded files are personal data and can be malicious |
| Rename files on upload and strip metadata (EXIF location from photos) | privacy and safety |
| Scan for malware when files are shared with other people | protects staff and users |
| Never execute or render uploaded HTML or SVG on your own domain | stored cross-site scripting |
| Delete after the purpose ends (for example CVs after the hiring round) and say so in the privacy policy | storage limitation |
| Show progress, size limits and allowed formats before upload; let the user remove a file | UX (`FO`) |

## Accessibility

The European Accessibility Act applies from 28 June 2025 to products and services offered to consumers in the EU, including e-commerce, banking and passenger transport services, also for businesses outside the EU. Microenterprises (fewer than 10 employees and under €2 million turnover) are exempt for services. Designing to EN 301 549 normally meets the requirements, which in practice means WCAG 2.1 AA (`AX`). Publish an accessibility statement with known limitations and a contact (`PE-15`).

## Security contact

Publish `/.well-known/security.txt` (RFC 9116) with at least a `Contact` and an `Expires` field, and link "Report security issues" or "Responsible disclosure" from the footer, as Cloudflare, Mintlify, Rox and Heron do.

```text
Contact: mailto:security@example.com
Expires: 2027-11-21T00:00:00.000Z
Preferred-Languages: cs, en
Canonical: https://example.com/.well-known/security.txt
Policy: https://example.com/security
```

## Status page

Products that people log in to, pay through or integrate with need a public status page on a separate host (so it stays up when the site is down), linked from the footer and the help centre. Mintlify shows a live "All systems normal" line in its footer; Cloudflare, Rox and xAI link "Status" from theirs.

| Status page shows | Notes |
| --- | --- |
| current state of each component (website, app, API, payments, email) | green / degraded / outage, in words, not colour only |
| incident history with times and updates | builds trust after an outage |
| scheduled maintenance | announced in advance |
| subscribe by email or RSS | |

Hosted status tools or a static page updated by the monitoring service both work; the monitoring itself is `PE-19`.

## Footer checklist from the studied sites

| Group | Links that appear again and again | Seen on |
| --- | --- | --- |
| Product | features, pricing, changelog, integrations, download, docs | all product sites |
| Company | about, careers, press, press kit, investors, contact, blog, events | Cloudflare, xAI, Town, Brik |
| Resources / help | help center, support, guides, FAQ, community, status | Cloudflare, Rox, Brik, Mintlify |
| Trust | security, Trust Center, compliance, subprocessors, responsible disclosure, transparency report | Cloudflare, Rox, Heron, xAI, Agentcard |
| Legal | privacy policy, terms, cookie policy, cookie settings, accessibility statement, trademark, product-specific terms | every site |
| Company identity | legal name, registered address, phone, ID numbers, © year | Rox, Heron, Jack & Jill |
| Social and language | social links, language switcher | Town (9 languages), Jack & Jill |

Footer links help visitors who scroll to the end looking for contact or legal details, and give search engines a consistent path to every important page. Keep them to real pages; never a block of keywords (`PG-21`).

## Sources

- [EDPB Cookie Banner Taskforce report (2023)](https://www.edpb.europa.eu/system/files/2023-01/edpb_20230118_report_cookie_banner_taskforce_en.pdf)
- [ÚOOÚ order on a cookie banner without first-layer reject (2025)](https://uoou.gov.cz/media/poskytnute-informace/2025/1292025/prikaz-cj-uoou-0248222-9.pdf)
- [Finance.cz: cookie rules from 1 January 2022](https://www.finance.cz/clanky/540261-pravidla-pro-nastaveni-cookie-listy-v-roce-2022/)
- [CMS: European Accessibility Act](https://cms.law/en/cze/legal-updates/european-accessibility-act-what-does-this-mean-for-your-organisation)
- [RFC 9116: security.txt](https://www.rfc-editor.org/rfc/rfc9116)
