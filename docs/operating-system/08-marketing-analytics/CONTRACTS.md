# Marketing and Analytics Contracts

## Required invariants

- Ad plans are source/evidence until imported and verified in the ad account.
- Conversion names must match analytics implementation.
- Paid campaign changes require approval and post-change handoff.
- Do not call a planning document an active campaign state.

## Single-writer boundaries

- This area owns Yandex Direct docs, campaign structure, analytics scripts, conversion goals, source UTM rules, and audit reports.
- Cross-area changes require a handoff note or decision record.
- Current status changes must update this area's STATE and, when project-level, 01-current-state.

## Approval, audit, cost, safety, and public guards

- Public routes and public mutations require hostile-input and user-safe failure planning where applicable.
- Paid, metered, or external-account operations require explicit approval and handoff notes.
- Deploy-affecting changes require exact deploy wording and verification evidence.
- Security-sensitive changes require a risk note and verification plan.

## Data and schema rule

Any required schema or data change must include migration, backfill, or compatibility notes when it affects existing public routes, product facts, forms, analytics, or external integrations.
