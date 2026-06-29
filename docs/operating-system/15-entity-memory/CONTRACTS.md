# Entity Memory Contracts

## Required invariants

- Entity facts need source references.
- Conflicting facts must be resolved in current-state before propagation.
- Do not duplicate people, products, or venues with slightly different names without an alias note.

## Single-writer boundaries

- This area owns canonical entity lists, product facts, teacher facts, venue facts, contacts, source references, and reuse rules.
- Cross-area changes require a handoff note or decision record.
- Current status changes must update this area's STATE and, when project-level, 01-current-state.

## Approval, audit, cost, safety, and public guards

- Public routes and public mutations require hostile-input and user-safe failure planning where applicable.
- Paid, metered, or external-account operations require explicit approval and handoff notes.
- Deploy-affecting changes require exact deploy wording and verification evidence.
- Security-sensitive changes require a risk note and verification plan.

## Data and schema rule

Any required schema or data change must include migration, backfill, or compatibility notes when it affects existing public routes, product facts, forms, analytics, or external integrations.
