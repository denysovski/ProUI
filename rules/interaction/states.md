# States (`ST`)

Design and build every state, not only the happy path.

- **ST-01 Empty state.** Before there is any data, explain what this place is for and give one clear action
  ("Create your first project").
- **ST-02 Loading state.** Skeletons that match the final layout, disabled and busy buttons, progress where
  the duration is known. The wait should look active.
- **ST-03 Error state.** Say what happened in plain words and give a way out: retry, go back, contact support.
  Never only "Something went wrong".
- **ST-04 Offline state.** Tell the user they are offline (a small bar), keep already loaded content visible,
  queue or disable actions that need the network.
- **ST-05 Slow network.** Show incremental progress and partial content. A spinner that never changes looks
  frozen; after a few seconds, say that it is still working.
- **ST-06 Zero search results.** Offer a spelling fix, related results, popular items or a way to clear
  filters. Never a dead end.
- **ST-07 Permission denied.** Explain why access is blocked and how to get it ("Ask an admin", "Allow camera
  in browser settings").
- **ST-08 Session expiry.** Save drafts and form input before signing the user out, and restore them after
  they sign back in.
- **ST-09 Form validation.** Errors appear inline at the exact field, in plain words, after the user leaves
  the field or submits. Focus moves to the first error. Correct tab order, Enter submits, visible focus rings.
- **ST-10 Success state.** Confirm completion clearly and offer the next step ("Track your order",
  "Continue shopping").
