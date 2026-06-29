# Capability Operations Contracts

## Required invariants

- Risky external actions require explicit approval before execution.
- Every external account change needs handoff notes with action, surface, verification, and rollback or follow-up.
- Agents must stop on unclear authority rather than guessing.

## Single-writer boundaries

- This area owns capability permissions, approval gates, stop controls, external-account operations, and safety notes.
- Cross-area changes require a handoff note or decision record.
- Current status changes must update this area's STATE and, when project-level, 01-current-state.

## Approval, audit, cost, safety, and public guards

- Public routes and public mutations require hostile-input and user-safe failure planning where applicable.
- Paid, metered, or external-account operations require explicit approval and handoff notes.
- Deploy-affecting changes require exact deploy wording and verification evidence.
- Security-sensitive changes require a risk note and verification plan.

## Data and schema rule

Any required schema or data change must include migration, backfill, or compatibility notes when it affects existing public routes, product facts, forms, analytics, or external integrations.
