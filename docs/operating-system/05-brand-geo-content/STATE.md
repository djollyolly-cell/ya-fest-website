# Brand, GEO, and Content State

## Implemented

A GEO strategy design exists. The first implementation pass now exists on the production-oriented static HTML surface and was verified live on `https://yafest.ru` after production deploy on 2026-06-29.

- First static GEO pass implemented locally on the production-oriented static HTML surface: `facts.html`, `llms.txt`, home-page facts block, campus FAQ/search-intent block, adult campus quick facts, and expanded static GEO smoke checks.
- Production verification confirmed `facts.html`, `llms.txt`, sitemap, robots, and sitemap-listed routes are available on `https://yafest.ru`.
- Phase 5 proof/content pass implemented on the static surface and deployed to
  `https://yafest.ru` from commit `7526bfe`: stable anchors for
  `ТЕАТРО КАМПУС` and `DANCE КАМПУС`, linked facts-page product entries, named
  jury proof on `festivals.html`, named archive jury proof on
  `theatre-sea.html` and `cinema-sea.html`, clean official email on
  `laboratories.html`, refreshed sitemap `lastmod`, and expanded static smoke
  checks.
- Phase 5 gap analysis exists at `phase-5-proof-gap-analysis.md`.
- Phase 6 structured-data and answer-block pass is implemented on the
  static surface and deployed to `https://yafest.ru` from commit `3673811`:
  `camp.html` and `theatre-cinema-sochi.html` have expanded
  `WebPage`, `Course`, `Person`, `Event`, and `FAQPage` JSON-LD where supported;
  archive pages have `WebPage`, completed `Event`, and visible FAQ/answer blocks
  with matching `FAQPage` JSON-LD; `test-geo-static.mjs` validates the new schema
  and answer-block coverage.
- Winter archive source-backed GEO pass completed locally on 2026-06-30:
  `winter-theatre.html` now names the unsupported winner-protocol gap in visible
  HTML and matching FAQ JSON-LD instead of publishing or implying winner names
  without an official source.

## Skeleton or foundation

- Operating documentation files for this area now exist.
- Contracts and flows are documented at an initial level and should be deepened as implementation touches this area.

## Not implemented or not verified

- Event-specific VK album/post URLs are not inventoried yet.
- Winner/result summaries for the archive festivals are not in the repository yet.
- `Зимний театр` nomination-winner protocol and event-specific VK/Telegram
  source URL are not found yet; winner names must remain unpublished until a
  source is attached.
- Any future feature described in roadmap or source documents remains unimplemented until code/files/checks prove otherwise.

## Verified live

- `https://yafest.ru/camp.html` exposes `#teatro` and `#dance` anchors.
- `https://yafest.ru/festivals.html` exposes named jury proof.
- `https://yafest.ru/theatre-sea.html` and `https://yafest.ru/cinema-sea.html`
  expose named archive jury proof.
- `https://yafest.ru/laboratories.html` exposes `mailto:producer.ya@mail.ru`.
- `https://yafest.ru/sitemap.xml` has refreshed `lastmod` values and all 10
  sitemap URLs returned HTTP 200 after deployment.
- Phase 6 live verification confirmed required JSON-LD types on `camp.html`,
  `theatre-cinema-sochi.html`, `theatre-sea.html`, `cinema-sea.html`, and
  `winter-theatre.html`; visible answer blocks were present on those pages.

## Risks and compatibility notes

- Source/evidence documents may be older than code or active deployment state.
- React and static HTML surfaces may diverge if facts are updated in only one place.
- Area status must be updated after meaningful implementation, review, deploy, or docs pass.
