# Ya-Fest GEO Phase Goals

Date: 2026-06-29

Canonical production domain: `https://yafest.ru/`

Production-oriented surface: `HTML landing for claude/`

React/Vite surface: `website/` is prototype-only and must not be deployed without a new accepted decision.

## Completion Definition

The GEO task is complete when Ya-Fest has a verified public site surface, submitted indexation signals, a normalized product/entity map, crawlable ecosystem pages, proof-backed content, structured data, and a repeatable QA/review loop. The goal is not to "trick AI"; the goal is to make the brand easy to understand, quote, verify, and recommend.

## Phase 0 - Strategy and Operating Layer

**Goal:** Establish the canonical Ya-Fest GEO strategy, owned domain decision, operating documentation structure, and source/evidence boundaries.

**Status:** Done locally and pushed to `origin/main` as commit `cbdb4a1`.

**Done means:**

- `https://yafest.ru/` is documented as the canonical public domain.
- `https://ya-fest.ru` is documented as not owned/not canonical.
- `HTML landing for claude/` is documented as the production-oriented surface.
- `website/` is marked as prototype-only.
- Operating docs exist under `docs/operating-system/`.
- Source docs are explicitly treated as evidence, not proof of implementation.

**Evidence:**

- `docs/operating-system/DECISIONS.md`
- `docs/operating-system/PROGRESS.md`
- `docs/operating-system/handoffs/2026-06-29-operating-docs-setup.md`
- `website/DO_NOT_DEPLOY.md`
- Git evidence: `origin/main`, commit `cbdb4a1` (`Add Ya-Fest GEO operating docs and static updates`)

## Phase 1 - Static GEO Foundation

**Goal:** Make the first GEO layer visible in static HTML so people, search engines, and AI systems can read the core Ya-Fest identity without depending on JavaScript.

**Status:** Done locally and pushed to `origin/main` as commit `cbdb4a1`.

**Done means:**

- `facts.html` exists and defines Ya-Fest as a creative platform.
- `llms.txt` exists and names the canonical domain and important URLs.
- Home, about, campus, and adult campus pages include crawlable facts.
- Sitemap includes the facts page.
- JSON-LD exists for core pages where already implemented.
- Static smoke tests pass.

**Evidence:**

- `HTML landing for claude/facts.html`
- `HTML landing for claude/llms.txt`
- `HTML landing for claude/test-geo-static.mjs`
- `docs/operating-system/handoffs/2026-06-29-static-geo-pass.md`
- Git evidence: `origin/main`, commit `cbdb4a1` (`Add Ya-Fest GEO operating docs and static updates`)

## Phase 2 - Live Production Verification

**Goal:** Prove that the pushed static GEO layer is actually available on the public `https://yafest.ru/` surface.

**Status:** Done after production deploy from `origin/main` commit `bb97322`.

**Done means:**

- `https://yafest.ru/` returns the expected production homepage.
- `https://yafest.ru/facts.html` returns HTTP 200 and crawlable HTML.
- `https://yafest.ru/llms.txt` returns HTTP 200 and the expected canonical-domain guidance.
- `https://yafest.ru/sitemap.xml` returns HTTP 200 and includes `facts.html`.
- `https://yafest.ru/robots.txt` returns HTTP 200 and points to the sitemap.
- Canonical tags on key pages use `https://yafest.ru`.
- No public page in the production static surface uses `https://ya-fest.ru` as canonical.
- Verification results are recorded under `docs/operating-system/qa/` or `docs/operating-system/handoffs/`.

**Primary checks:**

- `curl -I https://yafest.ru/`
- `curl -I https://yafest.ru/facts.html`
- `curl -I https://yafest.ru/llms.txt`
- `curl -s https://yafest.ru/facts.html | rg "Я-Фест — творческая платформа|DefinedTermSet|https://yafest.ru/facts.html"`
- `curl -s https://yafest.ru/sitemap.xml | rg "https://yafest.ru/facts.html"`

**Evidence:**

- `docs/operating-system/handoffs/2026-06-29-production-static-geo-deploy.md`
- Server evidence from ISPmanager Shell: `git rev-parse --short HEAD` returned `bb97322`, `facts.html OK`, and `llms.txt OK`.
- External checks confirmed `https://yafest.ru/facts.html`, `https://yafest.ru/llms.txt`, `https://yafest.ru/sitemap.xml`, and `https://yafest.ru/robots.txt` return HTTP 200.
- Sitemap route check confirmed all sitemap-listed URLs return HTTP 200 and no checked canonical uses `https://ya-fest.ru`.

## Phase 3 - Indexation and Webmaster Signals

**Goal:** Give search engines clear crawl/indexation signals for the new GEO surface.

**Status:** Done. Yandex.Webmaster discovered the sitemap from `robots.txt` with status `ok`; Google Search Console verified ownership and accepted `sitemap.xml` with 10 discovered pages.

**Done means:**

- `https://yafest.ru/sitemap.xml` is submitted or resubmitted in Yandex.Webmaster.
- `https://yafest.ru/sitemap.xml` is submitted or resubmitted in Google Search Console.
- Important URLs are requested for recrawl where tools allow it:
  - `https://yafest.ru/`
  - `https://yafest.ru/facts.html`
  - `https://yafest.ru/camp.html`
  - `https://yafest.ru/theatre-cinema-sochi.html`
  - `https://yafest.ru/about.html`
- Webmaster errors, indexing exclusions, and canonical conflicts are recorded.
- No DNS changes are made unless a separate deployment/domain decision requires them.

**Evidence to record:**

- Date of sitemap submission.
- Screenshots or notes from Yandex.Webmaster and Google Search Console.
- Any discovered indexing/canonical errors.

**Current evidence:**

- `https://yafest.ru/robots.txt` includes `Sitemap: https://yafest.ru/sitemap.xml`.
- `https://yafest.ru/sitemap.xml` returns HTTP 200 and lists 10 canonical URLs.
- All 10 sitemap URLs returned HTTP 200 in the 2026-06-29 Phase 3 preflight.
- Yandex.Webmaster screenshot showed `https://yafest.ru/sitemap.xml` found in `robots.txt`, status `ok`, last loaded `27.06.2026 20:28`, with 9 links at that time.
- Google Search Console ownership was verified by HTML file `googlec5257f56ceb7704e.html`.
- Google Search Console screenshot showed `sitemap.xml` submitted successfully with 10 discovered pages.
- Handoff: `docs/operating-system/handoffs/2026-06-29-phase-3-indexation-preflight.md`

## Phase 4 - Product and Entity Map

**Goal:** Convert scattered Ya-Fest facts into a normalized product/entity registry that can feed pages, schema, FAQ, ads, and future AI summaries.

**Status:** Done locally. Production deployment is tracked with Phase 5 because
the public HTML proof pass ships in the same static-surface change.

**Done means:**

- Each product has a canonical record:
  - `ТЕАТРО КАМПУС`
  - `DANCE КАМПУС`
  - `ТЕАТР.КИНО.СОЧИ.`
  - festivals and archive events
  - master classes, laboratories, and intensives
- Each product record includes supported facts only:
  - audience
  - city/place
  - dates
  - format
  - price or price rule
  - teachers
  - participation result
  - application conditions
  - proof links
- Teacher/person facts are separated from product facts.
- Conflicts between static HTML, markdown sources, and React prototype are listed instead of silently merged.
- The registry is referenced from `15-entity-memory`.
- `docs/operating-system/15-entity-memory/STATE.md` is updated with the registry status and verification notes.
- `docs/operating-system/15-entity-memory/CONTRACTS.md` is updated if Phase 4 introduces source, field, or conflict-resolution rules.

**Suggested artifact:**

- `docs/operating-system/15-entity-memory/yafest-entity-registry.md`

**Current evidence:**

- Canonical registry: `docs/operating-system/15-entity-memory/yafest-entity-registry.md`
- Working product inventory: `docs/operating-system/15-entity-memory/product-facts-inventory.md`
- Working teacher/proof inventory: `docs/operating-system/15-entity-memory/teacher-proof-inventory.md`
- Entity-memory status updated in `docs/operating-system/15-entity-memory/STATE.md`
- Source rules remain in `docs/operating-system/15-entity-memory/CONTRACTS.md`
- Verification: `node "HTML landing for claude/test-geo-static.mjs"`,
  `node "HTML landing for claude/test-camp-booking-form.mjs"`, and
  `git diff --check`

**Accepted source rule:**

- Production-site prices, dates, and participation conditions are current unless a newer explicit source overrides them.
- Photos already used on the site and photos in project photo folders are official Ya-Fest visual materials.
- Accessible reviews on the site, in project folders, and in topical VK posts/albums may be analyzed and used as proof material with source references.
- VK posts and albums should be read for topical relevance before they are used as proof.

## Phase 5 - Ecosystem Pages and Proof Base

**Goal:** Turn the product/entity map into crawlable pages with enough proof for people, search engines, and AI systems to trust the content.

**Status:** Done locally. Production deployment and live verification are the
next operational step.

**Done means:**

- Each major product has a visible page or section with its own stable URL.
- Pages expose audience, dates, place, format, price, teachers, results, and participation rules in HTML.
- Proof is attached where available:
  - photos
  - videos
  - VK links
  - teacher names
  - reviews
  - archive event pages
  - regulations or result summaries
- Archive pages clearly distinguish completed events from current offers.
- Internal links connect home, facts, campuses, festivals, teachers, and contacts.

**Suggested first URLs:**

- `/camp.html`
- `/theatre-cinema-sochi.html`
- `/facts.html`
- future stable teacher/proof/archive pages if implemented on the static surface.

**Current evidence:**

- `camp.html` now exposes stable anchors for `ТЕАТРО КАМПУС` and
  `DANCE КАМПУС`.
- `facts.html` links current products to stable URLs/anchors.
- `festivals.html` exposes named jury proof instead of generic placeholders.
- `theatre-sea.html` and `cinema-sea.html` expose named archive jury proof from
  organizer briefs.
- `laboratories.html` exposes the clean official email instead of an obfuscated
  Cloudflare email placeholder.
- `sitemap.xml` has refreshed `lastmod` values for touched proof pages.
- Gap analysis: `docs/operating-system/05-brand-geo-content/phase-5-proof-gap-analysis.md`
- Verification: `node "HTML landing for claude/test-geo-static.mjs"`,
  `node "HTML landing for claude/test-camp-booking-form.mjs"`, and
  `git diff --check`

## Phase 6 - Structured Data, FAQ, and Answer Blocks

**Goal:** Add structured, quotable, and source-backed answer formats on top of the real content instead of using schema as a substitute for content.

**Status:** Open.

**Done means:**

- Relevant pages have validated JSON-LD where facts are supported:
  - `Organization`
  - `WebSite`
  - `WebPage`
  - `Event`
  - `Course` or `EducationalOccupationalProgram` where appropriate
  - `Person` for teachers where source-backed
  - `FAQPage` for real FAQ blocks
- FAQ blocks use natural search language without weakening the brand:
  - brand wording: "творческий кампус"
  - search wording allowed in FAQ: "лагерь", "театральный лагерь", "танцевальный лагерь"
- JSON-LD is validated after each change.
- Static smoke tests cover required schema presence and canonical-domain rules.

**Primary checks:**

- `node "HTML landing for claude/test-geo-static.mjs"`
- Schema validation for changed pages.
- HTML source review for crawlable facts.

## Phase 7 - Monitoring and Continuous GEO QA

**Goal:** Make GEO upkeep repeatable so future changes do not drift away from the canonical brand facts.

**Status:** Open.

**Done means:**

- A recurring QA checklist exists for:
  - canonical domain
  - sitemap and robots
  - product facts
  - schema validity
  - broken links
  - outdated dates/prices
  - teacher/proof changes
- New product or teacher facts update the entity registry first or in the same change.
- Any deploy or public claim has a handoff with checks.
- Search/AI-facing changes are reviewed against the rule: source docs are evidence, not proof of implementation.

**Suggested artifacts:**

- `docs/operating-system/10-qa-reviews/yafest-geo-qa-checklist.md`
- recurring handoffs under `docs/operating-system/handoffs/`

## Current Count

- Completed phases: 4 (`Phase 0`, `Phase 1`, `Phase 2`, `Phase 3`)
- Remaining phases for strong GEO completion: 4 (`Phase 4` through `Phase 7`)
- Minimum next phase to close: `Phase 4 - Product and Entity Map`
