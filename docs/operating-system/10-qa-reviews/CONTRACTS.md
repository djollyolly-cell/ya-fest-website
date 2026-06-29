# QA and Reviews Contracts

## Required invariants

- Completion claims require verification output or an explicit unable-to-run note.
- Public content changes require link and route checks.
- Schema changes require validation against visible page content.

## Single-writer boundaries

- This area owns test commands, visual QA, content QA, link checks, schema validation, and review records.
- Cross-area changes require a handoff note or decision record.
- Current status changes must update this area's STATE and, when project-level, 01-current-state.

## Approval, audit, cost, safety, and public guards

- Public routes and public mutations require hostile-input and user-safe failure planning where applicable.
- Paid, metered, or external-account operations require explicit approval and handoff notes.
- Deploy-affecting changes require exact deploy wording and verification evidence.
- Security-sensitive changes require a risk note and verification plan.

## Data and schema rule

Any required schema or data change must include migration, backfill, or compatibility notes when it affects existing public routes, product facts, forms, analytics, or external integrations.
