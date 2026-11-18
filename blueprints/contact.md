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

Email first, availability ("Booking from March"), a short project form (name, email, project type, budget
range, message), social links.

## The form

- Name, email (or phone), message. Add a field only when the answer changes who replies or what they reply
  (topic, company size, budget range) (`FO-14`).
- One column, labels above fields, both required and optional marked (`FO-01` to `FO-03`).
- No CAPTCHA by default; use a honeypot or server-side checks first (`FO-17`).
- After sending: a thank-you state or page that says what happens next and when (`PE-07`), and a copy by email
  if the system can send one.
- Consent text for the privacy policy where needed, linked, not a pre-ticked box.

## Avoid

- A form as the only way to reach a company.
- Info@ addresses that nobody reads; test the form end to end before launch (`PE-18`).
- An embedded interactive map loading on page load: use a static image or load the map after a click (`PF-32`).
