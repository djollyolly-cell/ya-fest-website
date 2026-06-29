# Deploy Operations State

## Implemented

The repo contains deployment-facing assets. Static HTML under `HTML landing for claude/` is the current production-oriented surface by repository evidence: `sitemap.xml`, page canonical tags, `robots.txt` `Host`, and Yandex verification file point to `https://yafest.ru`. The first static GEO pass was deployed to production on 2026-06-29 from commit `bb97322`, and live checks confirmed `facts.html`, `llms.txt`, `robots.txt`, `sitemap.xml`, and all sitemap URLs return HTTP 200.

## Skeleton or foundation

- Operating documentation files for this area now exist.
- Contracts and flows are documented at an initial level and should be deepened as implementation touches this area.

## Not implemented or not verified

- Search-console/webmaster submission state has not been verified in this deploy pass.
- `https://ya-fest.ru` appears in the React/Vite track but is not a purchased/public Ya-Fest domain; do not plan redirects for it.
- Any future feature described in roadmap or source documents remains unimplemented until code/files/checks prove otherwise.

## Risks and compatibility notes

- Source/evidence documents may be older than code or active deployment state.
- React and static HTML surfaces may diverge if facts are updated in only one place.
- Area status must be updated after meaningful implementation, review, deploy, or docs pass.
