[Production](README.md) · [Concepts](CONCEPTS.md) · [Cleanup](CLEANUP.md) · [States Rulebook](../rules/states/README.md)

# Resilience: bad networks and deleting things

A demo runs on fast Wi-Fi with fresh data and one user. Real people are on a train, in a hotel, half-way
through paying, deleting things other people still point at. These are the two places where vibe-coded
apps break most often, each written as a test you can run and the fix (after videos by Arshan Adili,
November 2026).

## Part 1: what bad Wi-Fi does to your app

| # | What happens | What breaks | Fix | Rule |
| --- | --- | --- | --- | --- |
| 1 | Wi-Fi switches to mobile data mid-request | "The network connection was lost", the request is gone | retry idempotent requests once with backoff; keep the user's input | `ST-17` |
| 2 | On slow 3G | everything waits, spinners forever | skeletons, partial content, timeouts, smaller first payload | `ST-05`, `ST-17` |
| 3 | Hotel Wi-Fi with a sign-in page answers your API with HTML | `Unexpected token '<' … is not valid JSON` crashes the screen | check status and `content-type` before parsing; say "Your network is asking you to sign in" | `ST-18` |
| 4 | The API takes 30 seconds | the screen hangs with no end | a timeout (10–15 s), then an error with retry; say it is still working after 3 s | `ST-17` |
| 5 | The AI provider is down | `503 Service Unavailable` shown raw, or nothing | a friendly message, a retry, a fallback model or queue where it matters | `ST-03`, `ST-17` |
| 6 | The same request hits twice (double tap, retry after timeout) | two orders, charged twice | button locked while sending; idempotency key on the server | `FO-20`, `SEC-31` |
| 7 | The sign-in expires while the user works | the next save fails, work lost | keep drafts, sign in again inline, then finish the action | `ST-08` |
| 8 | An image never loads | an empty box or a spinner forever | reserved space, a placeholder colour, alt text, a timeout | `IM-05`, `ST-12` |
| 9 | The API says error | a blank screen | an error state for every request, with what happened and a retry | `ST-03`, `ST-16` |
| 10 | A push notification opens a post that was deleted | `TypeError: Cannot read properties of undefined` | a "This post was deleted" page with a way back | `ST-20` |
| 11 | No signal right after paying | "Payment failed, try again" while the money is already taken | the order status comes from the server; on reconnect show the real result, never invite a second payment | `ST-19` |

### Test it

- **Chrome DevTools → Network:** throttle to *Slow 3G*, then *Offline* in the middle of a save, then back.
- **Request blocking:** block the API host or one endpoint; every screen must show an error state, none blank.
- **Captive portal:** make the API return an HTML page with status 200
  (`page.route('**/api/**', r => r.fulfill({ status: 200, contentType: 'text/html', body: '<html>Login</html>' }))`
  in Playwright); the app must say the network is blocking it.
- **Slow API:** add a 30-second delay to one endpoint in a test build; the timeout and retry must appear.
- **Double tap:** click every submit button twice quickly; one request, one result.
- **Phones:** iOS has a *Network Link Conditioner* in Developer settings (Very Bad Network, 100 % loss,
  Edge); Android has network throttling in Developer options.

### The fetch helper every project starts with

```ts
// lib/request.ts: timeout, content check and one safe retry for GETs (ST-17, ST-18)
export async function request<T>(url: string, init: RequestInit = {}, { timeout = 12000, retry = init.method ? 0 : 1 } = {}): Promise<T> {
  for (let attempt = 0; ; attempt++) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), timeout);
    try {
      const res = await fetch(url, { ...init, signal: ctrl.signal });
      const type = res.headers.get('content-type') ?? '';
      if (!type.includes('application/json')) throw new NetworkError('blocked', res.status); // captive portal, proxy, HTML error page
      const body = await res.json();
      if (!res.ok) throw new ApiError(body?.message ?? 'Request failed', res.status);
      return body as T;
    } catch (err) {
      const retriable = attempt < retry && (err instanceof NetworkError || (err as Error).name === 'AbortError' || (err as Error).name === 'TypeError');
      if (!retriable) throw err;
      await new Promise((r) => setTimeout(r, 600 * 2 ** attempt)); // exponential backoff
    } finally {
      clearTimeout(timer);
    }
  }
}
export class NetworkError extends Error { constructor(public kind: 'blocked' | 'offline', public status?: number) { super(kind); } }
export class ApiError extends Error { constructor(message: string, public status: number) { super(message); } }
```

POST, PUT and DELETE are not retried automatically unless they carry an idempotency key the server honours.

## Part 2: what deleting breaks

| # | What the user deletes | What breaks | Fix |
| --- | --- | --- | --- |
| 1 | Their account during a paid subscription | the account is gone, the card is still charged every month | cancel the subscription at the provider first, then delete; confirm both in the email |
| 2 | A post someone already shared | the shared link points at nothing or crashes | a tombstone page "This post was deleted" (`ST-20`), shares and embeds show it too |
| 3 | Then taps Undo right away | undo brings it back twice, or half of it | soft delete (`deleted_at`) with a grace period; undo clears the flag, idempotent |
| 4 | The last item in a list | a broken empty screen | the empty state with one clear action (`ST-01`) |
| 5 | A team or group with members | other people are stuck in a group that is gone | transfer ownership or notify members and remove them cleanly first |
| 6 | A comment with replies | the replies point at nothing | keep the thread with "Comment deleted" in place of the text |
| 7 | The app's cache | data that only lived in the cache is gone | the server is the source of truth; local-only drafts sync or warn before clearing |
| 8 | The card the subscription uses | the next charge goes to a card that no longer exists | require a replacement card first, or switch the plan to end at the period's end |
| 9 | The data a dashboard or report depends on | totals change silently, charts break | keep aggregates or show "includes deleted items" |
| 10 | A folder with 1 000 files | it times out half-way: half deleted, half not | a background job with progress, resumable, all items marked first |
| 11 | Two people delete the same thing at once | two deletes, five related records gone | idempotent delete: "already deleted" counts as success; foreign keys with defined `ON DELETE` behaviour |

### The deletion checklist (`ST-21`)

For every thing a user can delete, write down before building:

1. **Who else points at it?** Other users, shares, embeds, notifications, search index, emails, caches, analytics.
2. **What happens to them?** Cascade, keep with a tombstone, reassign, or block the delete until they are handled.
3. **Is it reversible?** Reversible → act at once with Undo (`IX-15`). Irreversible → confirm by name (`IX-20`).
4. **Does money depend on it?** Subscriptions, saved cards, open orders: settle them first.
5. **Is it big?** More than a few hundred records → a background job with progress.
6. **Is it personal data?** Delete it everywhere it was copied (uploads, backups after their retention,
   email lists, the analytics user), as the privacy policy promises (`PE-27`, `SEC-17`).

### Test it

With two test accounts: share an item from A and delete it as A while B has it open; delete and undo
quickly three times; delete the only item; delete a team with members; delete the account with an active
test subscription and check the provider's dashboard; delete a large folder and kill the server half-way.
