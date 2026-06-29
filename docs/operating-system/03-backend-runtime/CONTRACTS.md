# Backend Runtime Contracts

## Required invariants

- Public form mutations require validation and hostile-input guards.
- Notification side effects must be auditable through logs or explicit handoff notes.
- Backend changes must not assume the inactive surface is production without verification.

## Single-writer boundaries

- This area owns API endpoints, PHP handlers, serverless/contact code, validation, notification side effects, and hostile-input handling.
- Cross-area changes require a handoff note or decision record.
- Current status changes must update this area's STATE and, when project-level, 01-current-state.

## Approval, audit, cost, safety, and public guards

- Public routes and public mutations require hostile-input and user-safe failure planning where applicable.
- Paid, metered, or external-account operations require explicit approval and handoff notes.
- Deploy-affecting changes require exact deploy wording and verification evidence.
- Security-sensitive changes require a risk note and verification plan.

## Data and schema rule

Any required schema or data change must include migration, backfill, or compatibility notes when it affects existing public routes, product facts, forms, analytics, or external integrations.
