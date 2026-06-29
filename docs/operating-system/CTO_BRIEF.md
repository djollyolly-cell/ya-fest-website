# CTO Brief

## Technical picture

Ya-Fest currently has one production-oriented website surface in the repository: the static HTML site under `HTML landing for claude/`, whose canonical tags, sitemap, and robots file point to `https://yafest.ru`. The React/Vite app under `website/` includes tests, SEO component foundations, robots, and sitemap, but it uses `https://ya-fest.ru` references; that domain is not a purchased/public Ya-Fest domain, so the React/Vite app is a local prototype/experimental track, not production.

## Maturity

The project is beyond pure notes: it has working site code, tests, static pages, campaign materials, and a GEO strategy design. The operating documentation layer is newly created and should be treated as draft canonical until reviewed against the active production surface.

## Main risks

- External live availability for `https://yafest.ru` is not yet verified in the operating docs.
- `https://ya-fest.ru` appears in the React/Vite track even though it is not a purchased/public Ya-Fest domain.
- Product facts may drift between React, static HTML, markdown source docs, and advertising materials.
- Campaign plans may be mistaken for active account state.
- Contact form behavior may differ between React API and PHP handler surfaces.

## Next safe scope

1. Verify `https://yafest.ru` DNS, HTTPS, redirects, robots, sitemap, and active hosting surface.
2. Keep GEO implementation on `HTML landing for claude/` and `https://yafest.ru`.
3. Normalize product map for campuses, festivals, teachers, prices, dates, and application conditions.
4. Implement first GEO pass on the static HTML production-oriented surface: facts page, llms.txt, sitemap updates, visible quotable blocks, and schema updates.
5. Add verification evidence under `10-qa-reviews/` and update current-state.
