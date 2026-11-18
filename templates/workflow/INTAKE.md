# Intake questions

The first thing ProUI does on a new website. Ask with the question tool (multiple choice; the user can always
type their own answer), at most four questions per round. Skip any question the request already answers.
Write the answers into `proui/DECISIONS.md` under Intake.

## Round one: the kind of site

**What kind of website is it?**
- Business or service (restaurant, clinic, studio, trades)
- Shop
- Product or SaaS
- Portfolio or creative work
- Personal site or blog
- Dashboard or app

**What should it feel like?**
- Modern: current, bold, animated
- Classic and timeless: calm, trustworthy, nothing trendy
- Old-school or retro: pixel, terminal, print, Y2K
- Editorial or magazine: type-led, long reading
- Minimal: as little as possible
- Playful: colourful, bouncy, fun
- Luxury: dark, quiet, premium

**How much effect should it have?**
- None: calm and fast, only hover and focus
- Subtle: gentle motion and hover depth
- Modern: animated headlines, gradients, one shader background
- Immersive 3D: 3D scenes, globes, 3D galleries, scroll-driven sequences

**Light, dark or colourful?**
- Light
- Dark
- Colourful, with gradients
- Let ProUI decide

## Round two: the practical side

**What is the one thing a visitor should do?**
- Book or reserve
- Buy
- Contact or call
- Sign up or start a trial
- Read or learn

**Which technology?**
- Plain HTML and CSS
- React / Next.js (needed for most of the effects library)
- Already decided in this project
- Let ProUI decide

**What content exists?**
- Texts and photos are ready
- Some of it
- Nothing yet

**Languages and size?**
- One language, one page
- One language, several pages
- Several languages

## Follow-ups when needed

- Any effect level above None: "How many effects or 3D elements? A couple, a few, or as many as fit the
  style?" Skip when the user already said ("only two 3D models"). The answer is the effect budget (`EF-20`).
- A service business: "Do you sell fixed packages, prices per job, or custom quotes? Send the prices if you
  have them." The answer picks the pricing model (`blueprints/pricing.md`).
- A company with many pages or audiences: "Which departments or contacts should visitors reach (sales,
  support, press, careers, locations)?" (`blueprints/contact.md`, `blueprints/footer.md`).

- Immersive 3D or modern on plain HTML: "The 3D components are React. Use React for the site, add one React
  section, or rebuild the effect without React?"
- A dashboard: "Which question should the dashboard answer first, and who asks it how often?"
- A shop: "How many products, and which payment and shipping providers?"
