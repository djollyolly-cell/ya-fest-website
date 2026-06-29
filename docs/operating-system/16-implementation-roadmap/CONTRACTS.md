# Implementation Roadmap Contracts

## Required invariants

- Roadmap must not mark work done; it points to next safe scope.
- Closed scopes should not be repeated unless regression evidence exists.
- When detailed plans exist, roadmap links to them instead of duplicating every task.

## Single-writer boundaries

- This area owns near-term roadmap, stage ordering, implementation ledger references, blocked work, and non-repeat rules.
- Cross-area changes require a handoff note or decision record.
- Current status changes must update this area's STATE and, when project-level, 01-current-state.

## Approval, audit, cost, safety, and public guards

- Public routes and public mutations require hostile-input and user-safe failure planning where applicable.
- Paid, metered, or external-account operations require explicit approval and handoff notes.
- Deploy-affecting changes require exact deploy wording and verification evidence.
- Security-sensitive changes require a risk note and verification plan.

## Data and schema rule

Any required schema or data change must include migration, backfill, or compatibility notes when it affects existing public routes, product facts, forms, analytics, or external integrations.
