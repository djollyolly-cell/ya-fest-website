# Agent Runtime Contracts

## Required invariants

- Agents must start from docs/README.md, then docs/operating-system/README.md, then PROGRESS.md and 01-current-state.
- Risky external actions require explicit approval and handoff notes.
- No agent should create PHASES.md or duplicate roadmap/current-state truth.

## Single-writer boundaries

- This area owns agent operating rules, handoff expectations, prompts, logs, reviews, QA records, and stop controls for risky actions.
- Cross-area changes require a handoff note or decision record.
- Current status changes must update this area's STATE and, when project-level, 01-current-state.

## Approval, audit, cost, safety, and public guards

- Public routes and public mutations require hostile-input and user-safe failure planning where applicable.
- Paid, metered, or external-account operations require explicit approval and handoff notes.
- Deploy-affecting changes require exact deploy wording and verification evidence.
- Security-sensitive changes require a risk note and verification plan.

## Data and schema rule

Any required schema or data change must include migration, backfill, or compatibility notes when it affects existing public routes, product facts, forms, analytics, or external integrations.
