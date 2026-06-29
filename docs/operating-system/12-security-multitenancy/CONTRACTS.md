# Security and Multitenancy Contracts

## Required invariants

- Any public mutation requires hostile-input guard plan.
- Secrets must not be committed in docs or source.
- External risky actions need approval and audit/handoff notes.
- Future multi-entity data must not share writable state without explicit ownership.

## Single-writer boundaries

- This area owns hostile-input guards, secrets, public mutation controls, approval policies, and access assumptions.
- Cross-area changes require a handoff note or decision record.
- Current status changes must update this area's STATE and, when project-level, 01-current-state.

## Approval, audit, cost, safety, and public guards

- Public routes and public mutations require hostile-input and user-safe failure planning where applicable.
- Paid, metered, or external-account operations require explicit approval and handoff notes.
- Deploy-affecting changes require exact deploy wording and verification evidence.
- Security-sensitive changes require a risk note and verification plan.

## Data and schema rule

Any required schema or data change must include migration, backfill, or compatibility notes when it affects existing public routes, product facts, forms, analytics, or external integrations.
