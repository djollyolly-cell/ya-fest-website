# Current State Contracts

## Required invariants

- Current-state documents override old PRD/spec/audit files for implementation status.
- If code/tests conflict with docs, code/tests are stronger and docs must be corrected.
- Do not mark planned pages, prerendering, or GEO files as implemented until files and checks exist.

## Single-writer boundaries

- This area owns implementation status, known working surfaces, skeletons, risks, and current canonical status notes.
- Cross-area changes require a handoff note or decision record.
- Current status changes must update this area's STATE and, when project-level, 01-current-state.

## Approval, audit, cost, safety, and public guards

- Public routes and public mutations require hostile-input and user-safe failure planning where applicable.
- Paid, metered, or external-account operations require explicit approval and handoff notes.
- Deploy-affecting changes require exact deploy wording and verification evidence.
- Security-sensitive changes require a risk note and verification plan.

## Data and schema rule

Any required schema or data change must include migration, backfill, or compatibility notes when it affects existing public routes, product facts, forms, analytics, or external integrations.
