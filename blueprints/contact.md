# Contact page

> What a contact page needs for a company, a local business and a product, and how to lay it out. Visitors look for the label "Contact"; give it to them in the header and the footer.

[Blueprints](README.md) · [Footer](footer.md) · [Forms and Checkout Rulebook](../rules/forms/README.md)

## Always

- Labelled **Contact** (or "Kontakt"), linked from the header and the footer, not hidden under About or Help.
- Contact details as real text, not images: phone as a `tel:` link, email as a `mailto:` link, the address copyable.
- What to expect: hours, response time ("We reply within one working day"), who answers.
- Company details where the law asks for them: legal name, registration number, VAT number, registered address (`PE-16`).
- `LocalBusiness` or `Organization` structured data with the same name, address and phone as the page (`SEO`).

## Layouts

### Local business (shop, clinic, restaurant, trades)

```text
| Heading: Contact and opening hours                              |
| Phone (large, tappable)   | Opening hours table                 |
| Email                     | Address + "Get directions" link      |
| Map (static image, links to the map app; loads after click)     |
| Short form: name, email or phone, message                        |
| Parking, transport, accessibility                               |
```

### Company with departments

```text
| Heading: How can we help?                                         |
| Route cards by need, not by org chart:                            |
|   Sales / new project   Support for customers   Press   Careers   |
|   each: who it is for, email or phone, response time, button      |
| Main switchboard number and general email                         |
| Locations: one card per office with address, phone, hours, map    |
| Company details (legal name, registration, VAT)                   |
```

Group contacts by what visitors need, because visitors do not know the internal structure. Always keep one
main number and email for anyone who does not fit a route.

### Product or SaaS

```text
| Talk to sales (form with company size and need) | Get support (help centre, chat, status) |
| Other: press, partnerships, security, billing                                         |
```

### Freelancer, studio, portfolio

Email first, availability ("Booking from March"), the two-step form with project types as the topics (New website,
Redesign, Branding, Other), social links.

## The form (`FO-19`)

Ask as little as possible, in two steps:

```text
Step 1  What is it about?                    Step 2  Bug
        ┌─────────┐ ┌─────────────┐                  Name   [                    ]
        │ Product │ │ Partnership │                  Email  [                    ]
        └─────────┘ └─────────────┘                  What went wrong?
        ┌─────────┐ ┌─────────┐                      [                           ]
        │   Bug   │ │  Other  │                      [                           ]
        └─────────┘ └─────────┘                      [ Send ]        ← Change topic
```

- **Step 1:** two to six large tap targets with the topics the business really gets (Product, Partnership, Bug,
  Billing, Press, Other). Picking one opens step 2 at once, no Next button. On a page that already has one
  topic (a support page, a careers page), skip step 1.
- **Step 2:** only **name, email and the description**. The description's label and placeholder follow the
  topic ("What would you like to know about the product?", "What went wrong? What did you expect?"). The topic
  is shown above the fields with a "Change topic" link and is sent with the message.
- Nothing else: no phone, company, budget, subject or "how did you hear about us" unless the owner says the
  answer changes who replies (`FO-14`). One column, labels above fields (`FO-01`, `FO-02`).
- The topic routes the message (Bug → support inbox, Partnership → the founder) and can prefill the subject of
  the email the team receives.
- No CAPTCHA by default; use a honeypot or server-side checks first (`FO-17`, `security/attacks/abuse-and-cost.md`).
- After sending: a thank-you state that names who answers and when (`PE-07`), and a copy by email if the
  system can send one.
- Consent text for the privacy policy where needed, linked, not a pre-ticked box.
- A plain email address stays on the page for anyone who would rather write directly (`PG-20`).

## Avoid

- A form as the only way to reach a company.
- Info@ addresses that nobody reads; test the form end to end before launch (`PE-18`).
- An embedded interactive map loading on page load: use a static image or load the map after a click (`PF-32`).
