# Architecture Contracts State

## Implemented

SEO components and sitemap files exist in both surfaces. The static HTML surface under `HTML landing for claude/` is the current production-oriented surface by repository evidence and uses `https://yafest.ru`. React/Vite under `website/` uses `https://ya-fest.ru`, but that domain is not a purchased/public Ya-Fest domain; React/Vite remains a non-production prototype unless a later explicit decision migrates it to `https://yafest.ru`.

## Skeleton or foundation

- Operating documentation files for this area now exist.
- Contracts and flows are documented at an initial level and should be deepened as implementation touches this area.

## Not implemented or not verified

- External production state for `https://yafest.ru` has not been verified in this documentation pass unless explicitly stated in source files.
- `https://ya-fest.ru` references in React/Vite are prototype leftovers and should not be propagated.
- Any future feature described in roadmap or source documents remains unimplemented until code/files/checks prove otherwise.

## Risks and compatibility notes

- Source/evidence documents may be older than code or active deployment state.
- React and static HTML surfaces may diverge if facts are updated in only one place.
- Area status must be updated after meaningful implementation, review, deploy, or docs pass.
