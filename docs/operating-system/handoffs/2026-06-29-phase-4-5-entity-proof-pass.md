# Phase 4/5 Entity and Proof Pass Handoff

Date: 2026-06-29
Surface: `HTML landing for claude/`
Canonical domain: `https://yafest.ru/`
Deployed static commit: `7526bfe`

## Summary

Phase 4 created a normalized Ya-Fest entity registry and source-backed working
inventories for products, teachers, and proof materials.

Phase 5 added the first proof-oriented static-surface pass: stable campus
anchors, linked product facts, named jury cards, named archive jury proof, a
clean official laboratory-page email, refreshed sitemap dates, and expanded
static checks.

## Files Added

- `docs/operating-system/15-entity-memory/yafest-entity-registry.md`
- `docs/operating-system/15-entity-memory/product-facts-inventory.md`
- `docs/operating-system/15-entity-memory/teacher-proof-inventory.md`
- `docs/operating-system/05-brand-geo-content/phase-5-proof-gap-analysis.md`

## Static Surface Changes

- `camp.html`: stable `#teatro` and `#dance` anchors.
- `facts.html`: product links to current stable URLs/anchors.
- `festivals.html`: named jury proof replaces generic jury placeholders.
- `theatre-sea.html`: named jury proof from the organizer brief.
- `cinema-sea.html`: named jury proof from the organizer brief.
- `laboratories.html`: clean `mailto:producer.ya@mail.ru`.
- `sitemap.xml`: refreshed `lastmod` for touched proof pages.
- `test-geo-static.mjs`: coverage for anchors, proof blocks, email, and sitemap
  dates.

## Verification

- `node "HTML landing for claude/test-geo-static.mjs"`: pass.
- `node "HTML landing for claude/test-camp-booking-form.mjs"`: pass.
- `git diff --check`: clean.
- Live deploy verification: `camp.html`, `festivals.html`, `theatre-sea.html`,
  `cinema-sea.html`, `laboratories.html`, and `sitemap.xml` exposed the expected
  strings on `https://yafest.ru`.
- Live sitemap verification: all 10 URLs in `https://yafest.ru/sitemap.xml`
  returned HTTP 200.

## Deliberate Non-Goals

- No React/Vite production work; `website/` remains prototype-only.
- No `ya-fest.ru` references were introduced.
- No photo-only people were promoted into public facts.
- No event-specific VK album/post URLs were invented.
- No archive winners/results were invented; those remain blocked until a public
  source is selected and cited.

## Next Recommended Work

- Request recrawl for updated priority pages where useful.
- Inventory topical VK posts/albums for festival archive proof.
- Move Phase 6 next: structured data, FAQ, and source-backed answer blocks.
