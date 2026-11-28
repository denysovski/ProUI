[Production](README.md) · [Resilience](RESILIENCE.md) · [Cleanup](CLEANUP.md)

# Production concepts, sorted for websites and small apps

A viral video by Nata (nataindata, October 2026) asks "who's gonna tell vibe coders about…" and scrolls
through about 90 engineering terms. They are all real, and an agent that builds a shop or a small SaaS will
meet some of them on day one and most of them never. This page sorts them by when they matter, says what
each means in one line, and what to do.

**Now:** every site with a back end needs it before launch. **Grows:** needed once there are real users,
money or traffic (thousands of users a day, a team, an SLA). **Big:** large systems; do not build it for a
small site, and say so if someone asks.

## Traffic and speed

| Concept | In one line | When | What to do |
| --- | --- | --- | --- |
| Rate limiting | cap how often one user or IP can call something | Now | on sign-in, forms, every paid API (`SEC-19`, `SEC-32`) |
| Caching | keep a ready answer instead of computing it again | Now | static pages, CDN, cache API reads (`PF-12` to `PF-14`) |
| CDN, edge caching | serve files from a server near the visitor | Now | the host does it; long cache for hashed assets (`PF-24`) |
| Cache invalidation | making sure the cache forgets what changed | Now | revalidate by tag or path on every content change; never "clear it by hand" |
| Pagination | send 20 items, not 20 000 | Now | every list, every API (`abuse-and-cost.md`) |
| Database indexing | make lookups fast | Now | index every column you filter, sort or join on |
| N+1 queries | one query per row instead of one for all | Now | `include` / join, or batch (`DataLoader`); check the query log |
| Query optimisation | read only what you need | Now | select needed columns, `EXPLAIN` slow queries |
| Connection pooling | reuse database connections | Now on serverless | a pooler (PgBouncer, Supabase pooler, Prisma Accelerate, Neon) |
| Cold starts, serverless limits | the first request after idle is slow; functions have time and size limits | Now | keep heavy work out of request handlers; know the platform's timeout |
| Load balancing, reverse proxy | spread traffic over servers | Grows | the host does it |
| Autoscaling, horizontal and vertical scaling | add servers or a bigger one under load | Grows | the host does it; design stateless handlers |
| Read replicas, sharding, partitioning | split the database | Big | not for small sites |
| Latency, throughput, P99, tail latency | how slow the slowest requests are | Grows | watch P95/P99 in monitoring, not the average |

## Reliability

| Concept | In one line | When | What to do |
| --- | --- | --- | --- |
| Timeouts | stop waiting after N seconds | Now | every outgoing request, client and server (`ST-17`) |
| Retries with exponential backoff | try again, waiting longer each time | Now | only idempotent requests, max 2–3 times |
| Idempotency | doing it twice has the same effect as once | Now | payments, orders, webhooks (`SEC-31`) |
| Race conditions | two things change the same data at once | Now | atomic updates, transactions, unique constraints (`SEC-31`) |
| Optimistic and pessimistic locking | detect or prevent conflicting edits | Grows | a `version` column for edits by several people (`ST-13`) |
| Deadlocks | two transactions wait for each other forever | Grows | short transactions, same lock order |
| Data validation | check every input on the server | Now | a schema on every endpoint (`SEC-05`) |
| Health checks, liveness and readiness probes | a URL that says "I am up" | Now | `/api/health` checking the database; uptime monitor on it (`PE-19`) |
| Circuit breakers | stop calling a service that keeps failing | Grows | fallback message when the AI or payment provider is down |
| Message queues, pub/sub, dead letter queues | do slow work later, keep failed jobs | Grows | a job queue (Inngest, Trigger.dev, QStash, BullMQ) for emails, exports, AI jobs |
| Cron jobs | scheduled tasks | Now when needed | the host's cron; make each run idempotent and logged |
| Webhooks | the provider calls you when something happens | Now | verify signature, handle each event once (`SEC-20`) |
| Event-driven architecture, sagas, distributed transactions | many services coordinating | Big | one database and one app are enough for a small site |
| Service discovery, API gateways | finding and fronting many services | Big | not for small sites |
| CAP theorem, eventual consistency | in a distributed system you trade consistency for availability | Big | know that caches and replicas can be a few seconds old (`ST-11`) |
| Leader election, network partitions, clock skew | coordination problems of clusters | Big | not for small sites; store times in UTC |
| Memory leaks, garbage collection | memory that is never freed | Grows | remove listeners and intervals on unmount; watch memory in monitoring |
| Backpressure | slowing producers when consumers cannot keep up | Big | queues with limits |
| Thread safety | shared state across parallel work | Grows | no module-level mutable state in serverless handlers |

## Shipping

| Concept | In one line | When | What to do |
| --- | --- | --- | --- |
| CI/CD | checks and deploy on every push | Now | the quality workflow (`templates/github/workflows/quality.yml`) |
| Feature flags | turn a feature on without deploying | Grows | a flag service or env flag; remove flags after rollout (`CLEANUP.md`) |
| Blue-green, canary, rolling deployments | release to a few, then all | Grows | preview deployments per branch; instant rollback on the host |
| Docker, Kubernetes, Helm, Terraform, infrastructure as code | packaging and defining servers | Big for websites | a managed host (Vercel, Netlify, Cloudflare, Render, Fly) instead |
| Build caching, dependency hell | slow builds, conflicting packages | Now | lockfile, `npm ci`, few dependencies (`CLEANUP.md`) |
| API versioning, semantic versioning | change APIs without breaking clients | Grows | `/v1/` once others call your API; version your packages |
| Database migrations | change the schema safely | Now | migrations in Git, never edit production by hand |

## Watching production

| Concept | In one line | When | What to do |
| --- | --- | --- | --- |
| Logging | write down what happened | Now | structured logs without personal data (`SEC-26`) |
| Monitoring, metrics, alerts | know when it breaks before users tell you | Now | uptime + error tracking (Sentry) alerting a person (`PE-19`) |
| Observability, distributed tracing | follow one request through everything | Grows | the host's tracing or OpenTelemetry |
| SLIs, SLOs, error budgets | targets for uptime and speed | Grows | "99.9 % of checkouts succeed" once someone depends on you |
| Production incidents, on-call, postmortems | who wakes up and what we learn | Grows | a named owner (`PE-21`), a short written postmortem after any outage |
| Backups, disaster recovery, failover | getting data back | Now | automatic backups and one tested restore (`PE-20`) |
| Multi-region, chaos engineering | survive a whole region going down | Big | not for small sites |
| Cost optimisation | the bill grows faster than the users | Now | budgets and alerts on every provider (`SEC-32`) |

## Security and networking

| Concept | In one line | When | What to do |
| --- | --- | --- | --- |
| JWT, OAuth, JWT rotation | sign-in tokens and delegated sign-in | Now | a proven auth library (`SEC-10`); short-lived tokens, HttpOnly cookies (`SEC-38`) |
| SQL injection, XSS, CSRF, CORS | the classic web attacks | Now | `security/ATTACKS.md` |
| Secrets management, IAM | where keys live, who can do what | Now | env vars on the host, least privilege (`SEC-04`, `SEC-34`) |
| TLS, encryption in transit and at rest | traffic and stored data encrypted | Now | HTTPS + HSTS (`SEC-01`); the database provider encrypts at rest |
| WAF, DDoS protection | filter bad traffic at the edge | Grows | the host's firewall or Cloudflare |
| DNS | names to addresses | Now | records documented; short TTL before a move |
| HTTP/2 and HTTP/3, TCP vs UDP, gRPC | transport protocols | Big | the host handles it |
| WebSockets, server-sent events, long polling | live updates | when the product needs live data | SSE for one-way updates, WebSockets for chat; reconnect with backoff |

When an agent proposes something from the **Big** column for a small site, the answer is no: it adds cost,
moving parts and places to break (`PE-31`).
