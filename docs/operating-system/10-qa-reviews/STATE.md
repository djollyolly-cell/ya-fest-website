# QA and Reviews State

## Implemented

The React site has Vitest and e2e-like test files. Static HTML QA now has focused smoke tests for the campus booking form and the first GEO pass.

- Static GEO smoke test exists at `HTML landing for claude/test-geo-static.mjs` and verifies facts page, llms.txt, sitemap, robots, canonical domain, key quotable blocks, and JSON-LD presence including facts page `WebPage` and `DefinedTermSet` structured data.
- Existing static booking form smoke test exists at `HTML landing for claude/test-camp-booking-form.mjs` and was run after the GEO pass to guard current campus booking behavior.
- React/Vite prototype guard exists at `website/DO_NOT_DEPLOY.md` and `website/README.md`.
- Recurring GEO QA checklist exists at `yafest-geo-qa-checklist.md` covering canonical domain, sitemap and robots, product facts, schema validity, broken links, outdated dates/prices, and teacher/proof changes, with the registry-first and handoff-on-deploy invariants.
- Recurring GEO QA handoff template exists at `../handoffs/TEMPLATE-geo-qa-recurring.md` for per-run records.
- Phase 7 monitoring foundation is implemented locally through the recurring
  checklist and handoff template.

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
