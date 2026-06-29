# Progress

Last updated: 2026-06-29

## Current status

- Operating documentation structure has been created as a draft canonical layer.
- GEO strategy design exists at [../superpowers/specs/2026-06-29-yafest-geo-design.md](../superpowers/specs/2026-06-29-yafest-geo-design.md).
- GEO phase status and exit criteria are tracked in [goals/2026-06-29-yafest-geo-phase-goals.md](goals/2026-06-29-yafest-geo-phase-goals.md).
- Repository evidence points to `HTML landing for claude/` and canonical `https://yafest.ru` as the current production-oriented site surface.
- The React/Vite site under `website/` uses `https://ya-fest.ru` references, but that domain is not a purchased/public Ya-Fest domain; treat React/Vite as a local prototype/experimental track.
- Public `https://yafest.ru` availability was not verified in this documentation pass and must be checked before production GEO claims.

## Done

- Initial operating-system area structure created.
- Product areas adapted to Ya-Fest: brand/GEO/content, programs/campuses/festivals, applications/communications, marketing/analytics.
- Old docs are connected as source/evidence through DOCUMENT_POOL.md.
- First static GEO implementation pass completed locally on `HTML landing for claude/` and verified with `node "HTML landing for claude/test-geo-static.mjs"` and `node "HTML landing for claude/test-camp-booking-form.mjs"`.
- Review follow-up added `facts.html` structured data and an explicit `website/` prototype/do-not-deploy guard.
- Phase goals for the remaining GEO work are documented in [goals/2026-06-29-yafest-geo-phase-goals.md](goals/2026-06-29-yafest-geo-phase-goals.md).

## In progress

- Documentation canonicalization.
- GEO implementation review and live-domain verification preparation.

## Open

- Verify DNS, HTTPS, redirects, robots, sitemap, and public route availability for `https://yafest.ru`.
- Decide whether React/Vite under `website/` remains as a prototype or is retired; until then, do not deploy it.
- Normalize product map across festivals, campuses, teachers, prices, dates, and application rules.
- Decide prerender/static-generation strategy.

## Do not repeat

- Do not recreate a parallel `PHASES.md`; use `STAGES.md`.
- Do not treat old campaign plans or specs as proof of completed implementation.
- Do not call a partial deploy a production deploy.
