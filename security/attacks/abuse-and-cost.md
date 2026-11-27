[Security](../README.md) · [Attack library](../ATTACKS.md) · [Checklist](../CHECKLIST.md) · [Self-tests](../PROBES.md)

# Abuse and cost (denial of wallet)

A small app built on paid APIs can be ruined without anyone breaking in: a bot, a loop or a single
abusive user runs up the bill. Ten typical ways a vibe-coded app costs thousands, with the cost of the
example and the fix (after a video by Ryan Naghib, November 2026):

| # | What happens | Example cost | Fix |
| --- | --- | --- | --- |
| 1 | The request picks the AI model: `POST /api/chat { model: "gpt-5-pro" }` | 10 000 chats: $45 → $2 700 | the server picks the model, never the request |
| 2 | A loop or bot loads the paid map: every load past the free tier is billed | 1 000 000 loads: $4 970 | daily quota cap and budget alert at the provider |
| 3 | "Say hi forever": no limit on how long an AI answer can be | 1 000 long replies: $960 | cap the output tokens of one answer |
| 4 | Every refresh reads all 20 000 posts from the database | 1.7 billion reads: $518 | paginate (20 at a time) and cache the home page |
| 5 | "Keep searching until you're 100 % sure": an AI agent calls paid web search in a loop | 1 000 questions × 50 searches: $2 000 | cap tool calls (web searches) per question |
| 6 | Other sites hotlink your 5 MB hero image from your storage | 5 000 GB egress: $450 | block hotlinking, serve images from a CDN, resize them |
| 7 | A voice chat left open all night | $23 a night × 30 nights: $691 | cap voice minutes per user per day, idle timeout |
| 8 | Address autocomplete calls the paid API on every letter | 100 000 bots × 22 letters: $3 033 | wait for 3 letters and debounce, use session tokens |
| 9 | Your AI endpoint is called from someone else's Discord bot with your key | 150 000 calls a month: $2 025 | check sign-in and origin on every AI call, rate-limit per user |
| 10 | The same photo is resized on every request | runs forever | resize once, cache the result |

### AT-70 Unbounded paid API calls

**Defend (basic), all paid APIs (`SEC-32`):**

- A **hard budget** at every provider (OpenAI, Anthropic, Google Cloud, Mapbox, Twilio, Vercel) with an
  alert at 50 % and a stop at 100 %.
- **Per-user and per-IP limits** on every endpoint that costs money (Upstash Ratelimit, Cloudflare rate
  limiting, the platform's firewall).
- **Sign-in required** for anything expensive; anonymous visitors get a small, cached demo.
- The **server fixes** the model, the maximum output tokens, the number of tool calls and the voice minutes.

**Defend (intermediate).** Cache identical requests; queue heavy jobs instead of running them inline;
CAPTCHA-free bot protection (Cloudflare Turnstile) on sign-up and on the first paid call; a daily usage
report per user, with automatic suspension above a threshold.

**Test it.** In staging, call each paid endpoint 50 times in a minute from one session: it must start
answering 429 before the budget notices.

**Rules.** `SEC-19`, `SEC-32`, `PF-13`

---

### AT-71 Spam and fake sign-ups

**What happens.** Bots fill the contact form, create thousands of accounts for free credits, or use your
"invite a friend" email to send spam from your domain.

**Defend.** A honeypot field and a time check, Turnstile where spam continues, rate limits per IP and per
email domain, email verification before credits, no user-written text in emails sent to third parties
(`SEC-08`).

**Rules.** `SEC-08`, `SEC-19`, `FO-17`

---

### AT-72 Scraping and traffic floods

**What happens.** Every product and price is copied nightly, or a flood of requests takes the site down.

**Defend.** The host's DDoS protection and caching; rate limits on search and listing APIs; heavy pages
served static; nothing private reachable without sign-in.

**Rules.** `SEC-19`, `PF-13`
