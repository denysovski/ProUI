# States Rulebook

> Every situation the interface has to handle, not only the happy path.

[All rulebooks](../README.md) · Prefix `ST` · Interaction

## Do

Positive rules: what a finished, professional site does.

| ID | Rule | Details |
| --- | --- | --- |
| `ST-01` | **Empty state** | Before there is any data, explain what this place is for and give one clear action ("Create your first project"). |
| `ST-02` | **Loading state** | Skeletons that match the final layout, disabled and busy buttons, progress where the duration is known. The wait should look active. |
| `ST-03` | **Error state** | Say what happened in plain words and give a way out: retry, go back, contact support. Never only "Something went wrong". |
| `ST-04` | **Offline state** | Tell the user they are offline (a small bar), keep already loaded content visible, queue or disable actions that need the network. |
| `ST-05` | **Slow network** | Show incremental progress and partial content. A spinner that never changes looks frozen; after a few seconds, say that it is still working. |
| `ST-06` | **Zero search results** | Offer a spelling fix, related results, popular items or a way to clear filters. Never a dead end. |
| `ST-07` | **Permission denied** | Explain why access is blocked and how to get it ("Ask an admin", "Allow camera in browser settings"). |
| `ST-08` | **Session expiry** | Save drafts and form input before signing the user out, and restore them after they sign back in. |
| `ST-09` | **Form validation** | Errors appear inline at the exact field, in plain words, after the user leaves the field or submits. Focus moves to the first error. Correct tab order, Enter submits, visible focus rings. |
| `ST-10` | **Success state** | Confirm completion clearly and offer the next step ("Track your order", "Continue shopping"). |
| `ST-11` | **Stale data says so** | When data might be old, show when it was last updated and offer a refresh. |
| `ST-12` | **Partial content** | When part of a page fails, show what loaded and explain what did not, with a retry for that part only. |
| `ST-13` | **Concurrent edits** | When two people can edit the same thing, detect conflicts and let the user choose what to keep instead of silently overwriting. |
| `ST-14` | **First run** | The very first visit to a product area has a short orientation or a useful default, which can be skipped and never comes back unasked. |
| `ST-15` | **Maintenance and rate limits** | Planned downtime and rate limits get their own friendly page or message with a time when it will work again. |

## Don't

Negative rules: what never ships.

| ID | Avoid | Details |
| --- | --- | --- |
| `ST-16` | **Blank screens** | A page is never empty white while it loads, fails or has no data. Every wait and every failure shows something useful. |

## How to check

- Throttle the network, go offline, empty the data, send bad input, and screenshot each state.

## Sources

- [NN/g: Error message guidelines](https://www.nngroup.com/articles/error-message-guidelines/)

---

<sub>Generated from `rulebook.json` by `scripts/build-rulebooks.mjs`. To change a rule, edit the JSON and run the script.</sub>
