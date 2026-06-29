# Progress

Last updated: 2026-06-29

## Current status

- Operating documentation structure has been created as a draft canonical layer.
- GEO strategy design exists at [../superpowers/specs/2026-06-29-yafest-geo-design.md](../superpowers/specs/2026-06-29-yafest-geo-design.md).
- GEO phase status and exit criteria are tracked in [goals/2026-06-29-yafest-geo-phase-goals.md](goals/2026-06-29-yafest-geo-phase-goals.md).
- Repository evidence points to `HTML landing for claude/` and canonical `https://yafest.ru` as the current production-oriented site surface.
- The React/Vite site under `website/` uses `https://ya-fest.ru` references, but that domain is not a purchased/public Ya-Fest domain; treat React/Vite as a local prototype/experimental track.
- Public `https://yafest.ru` availability for the first static GEO pass was verified after production deploy on 2026-06-29; see [handoffs/2026-06-29-production-static-geo-deploy.md](handoffs/2026-06-29-production-static-geo-deploy.md).

## Done

- Initial operating-system area structure created.
- Product areas adapted to Ya-Fest: brand/GEO/content, programs/campuses/festivals, applications/communications, marketing/analytics.
- Old docs are connected as source/evidence through DOCUMENT_POOL.md.
- First static GEO implementation pass completed locally on `HTML landing for claude/` and verified with `node "HTML landing for claude/test-geo-static.mjs"` and `node "HTML landing for claude/test-camp-booking-form.mjs"`.
- Review follow-up added `facts.html` structured data and an explicit `website/` prototype/do-not-deploy guard.
- Phase goals for the remaining GEO work are documented in [goals/2026-06-29-yafest-geo-phase-goals.md](goals/2026-06-29-yafest-geo-phase-goals.md).
- Production static GEO deploy completed for `https://yafest.ru` and Phase 2 live verification passed.
- Phase 3 sitemap signals completed: Yandex.Webmaster shows sitemap from `robots.txt` with status `ok`, and Google Search Console accepted `sitemap.xml` with 10 discovered pages.

## In progress

- Phase 4 product and entity map preparation; Phase 4/5 source rules are accepted in [DECISIONS.md](DECISIONS.md) and [15-entity-memory/CONTRACTS.md](15-entity-memory/CONTRACTS.md).

## Open

- Request recrawl for priority URLs in Google Search Console and Yandex.Webmaster where useful.
- Decide whether React/Vite under `website/` remains as a prototype or is retired; until then, do not deploy it.
- Normalize product map across festivals, campuses, teachers, prices, dates, and application rules.
- Decide prerender/static-generation strategy.

## Do not repeat

- Do not recreate a parallel `PHASES.md`; use `STAGES.md`.
- Do not treat old campaign plans or specs as proof of completed implementation.
- Do not call a partial deploy a production deploy.
