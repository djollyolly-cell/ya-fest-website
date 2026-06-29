# Current State State

## Implemented

The repository contains a production-oriented static HTML site and a React/Vite prototype. Repository evidence points to `HTML landing for claude/` as the current production-oriented surface: its canonical tags, sitemap, robots `Host`, verification file, and recent git history use `https://yafest.ru`. The React/Vite surface under `website/` has tests, SEO components, robots, and sitemap foundations, but it uses `https://ya-fest.ru` references; that domain is not a purchased/public Ya-Fest domain and must not be treated as a redirect or migration target. `website/DO_NOT_DEPLOY.md` and `website/README.md` now mark that surface as prototype-only. External live availability for `https://yafest.ru` was not verified in this documentation pass.

## Skeleton or foundation

- Operating documentation files for this area now exist.
- Contracts and flows are documented at an initial level and should be deepened as implementation touches this area.

## Not implemented or not verified

- External production state for `https://yafest.ru` has not been verified in this documentation pass unless explicitly stated in source files.
- Any future feature described in roadmap or source documents remains unimplemented until code/files/checks prove otherwise.

## Risks and compatibility notes

- Source/evidence documents may be older than code or active deployment state.
- React and static HTML surfaces already use different canonical domains; React's `https://ya-fest.ru` references are prototype leftovers, not production truth.
- Area status must be updated after meaningful implementation, review, deploy, or docs pass.
