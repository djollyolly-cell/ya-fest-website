# Phase 6/7 Schema and GEO QA Pass Handoff

Date: 2026-06-30
Surface: `HTML landing for claude/`
Canonical domain: `https://yafest.ru/`
Status: implemented locally; production deploy/live verification pending.

## Summary

Phase 6 added structured data and visible answer blocks on top of existing
source-backed content. Schema was expanded only where visible page facts support
it.

Phase 7 added the recurring GEO QA operating layer: a checklist and a reusable
handoff template for future QA runs.

## Static Surface Changes

- `camp.html`: expanded JSON-LD to `WebPage`, two `Course` nodes, and
  `FAQPage`; added visible FAQ/answer blocks for dates, age, included package,
  and group discount.
- `theatre-cinema-sochi.html`: expanded JSON-LD to `WebPage`, `Event`, `Course`,
  six source-backed `Person` nodes, and `FAQPage`; added visible FAQ/answer
  blocks.
- `theatre-sea.html`, `cinema-sea.html`, `winter-theatre.html`: added
  `WebPage`, completed `Event`, and `FAQPage` JSON-LD; added matching visible
  archive answer blocks.
- `sitemap.xml`: refreshed `lastmod` for touched pages to `2026-06-30`.
- `test-geo-static.mjs`: expanded checks for schema types, visible answer
  blocks, completed archive events, sitemap dates, and source-backed people.

## QA Artifacts

- `docs/operating-system/10-qa-reviews/yafest-geo-qa-checklist.md`
- `docs/operating-system/handoffs/TEMPLATE-geo-qa-recurring.md`
- `docs/operating-system/10-qa-reviews/STATE.md`

## Verification

- `node "HTML landing for claude/test-geo-static.mjs"`: pass.
- `node "HTML landing for claude/test-camp-booking-form.mjs"`: pass.
- Changed HTML image references: pass.
- `git diff --check`: clean.

## Deliberate Non-Goals

- No `website/` React/Vite changes.
- No invented VK album URLs, winners, or archive result summaries.
- No public claim that external webmaster state changed.

## Next Step

- Commit, push, deploy the static surface to `https://yafest.ru`, then record
  live verification in this handoff and the phase-goals evidence.
