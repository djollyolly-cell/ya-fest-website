# Migration and Rollout State

## Implemented

Two site surfaces exist. Static HTML under `HTML landing for claude/` is the current production-oriented surface by repository evidence and uses `https://yafest.ru`. React/Vite under `website/` uses `https://ya-fest.ru`, but that domain is not a purchased/public Ya-Fest domain; React/Vite should be treated as a local prototype/experimental track. No migration plan is active.

## Skeleton or foundation

- Operating documentation files for this area now exist.
- Contracts and flows are documented at an initial level and should be deepened as implementation touches this area.

## Not implemented or not verified

- External production state has not been verified in this documentation pass unless explicitly stated in source files.
- Any future feature described in roadmap or source documents remains unimplemented until code/files/checks prove otherwise.

## Risks and compatibility notes

- Source/evidence documents may be older than code or active deployment state.
- React and static HTML surfaces may diverge if facts are updated in only one place.
- Area status must be updated after meaningful implementation, review, deploy, or docs pass.
