[Back to ProUI](../README.md) · [Concepts](CONCEPTS.md) · [Resilience](RESILIENCE.md) · [Cleanup](CLEANUP.md) · [Security](../security/README.md)

# Production

**A site that looks finished in the demo is not finished.** It still has to survive bad Wi-Fi, a double
tap on "Pay", a deleted post that someone shared, a provider outage and a codebase full of what the agent
tried and threw away. This folder covers what happens after the design is done.

| File | What it is for |
| --- | --- |
| [CONCEPTS.md](CONCEPTS.md) | about 90 engineering terms ("who's gonna tell vibe coders about…") sorted into **now**, **grows** and **big**, each with what it means and what to do for a website or small app |
| [RESILIENCE.md](RESILIENCE.md) | what bad networks do (11 cases) and what deleting breaks (11 cases), with fixes, a fetch helper with timeout and retry, and tests |
| [CLEANUP.md](CLEANUP.md) | the cleanup pass at the end of every project: dead code, duplicates, unused components, overbuilt code, legacy, redundant queries, abandoned files, technical debt |

## Where it plugs into the workflow

- **Pass: States** checks the resilience cases (`ST-17` to `ST-21`, `FO-20`).
- **Pass: Launch and legal** checks the **now** column of the concepts (`PE-31`).
- **Pass: Cleanup** is the last pass before the quality check and handoff (`PE-32`).

Short commands: `ProUI pass states`, `ProUI pass cleanup`.
