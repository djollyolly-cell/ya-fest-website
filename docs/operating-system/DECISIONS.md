# Decisions

This file indexes architecture and operating decisions. Add a new decision when a choice changes public behavior, canonical ownership, deployment surface, data contracts, paid operations, security posture, or long-term documentation structure.

## Decision record format

Use this format inline or link to a dedicated decision record when the decision is large:

- Date
- Decision
- Context
- Options considered
- Consequences
- Affected areas
- Verification or rollback notes

## Current decisions

| Date | Decision | Status | Affected areas |
|---|---|---|---|
| 2026-06-29 | Create `docs/operating-system/` as the active project operating layer. Old specs and audits remain source/evidence, not completed-work proof. | Accepted | 00, 01, 04, 16 |
| 2026-06-29 | Adapt product areas to Ya-Fest rather than copying AIExpert Marketing OS names. | Accepted | 05, 06, 07, 08 |
| 2026-06-29 | Use `STAGES.md` for area-level phases and do not create `PHASES.md`. | Accepted | All numbered areas |
| 2026-06-29 | Treat `HTML landing for claude/` with canonical `https://yafest.ru` as the current production-oriented site surface. `https://ya-fest.ru` is not a purchased/public Ya-Fest domain and must not be planned as a redirect or migration target unless it is acquired later by an explicit decision. Treat `website/` React/Vite as a local prototype/experimental track, not production. | Accepted, pending external live-domain verification for `https://yafest.ru` | 01, 02, 09, 11 |

## Pending decisions

- Verify external live state for `https://yafest.ru`: DNS, HTTPS, redirects, robots, sitemap, and the actually served HTML.
- Decide whether React/Vite under `website/` should remain as a prototype or be retired. Migrating it to production would require a new explicit decision and must target `https://yafest.ru`, not `https://ya-fest.ru`.
