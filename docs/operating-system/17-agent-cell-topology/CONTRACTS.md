# Agent Cell Topology Contracts

## Required invariants

- Only one worker should edit the same area state or route surface at a time unless a lead explicitly coordinates it.
- Parallel agents must leave handoffs and avoid touching shared canonical docs concurrently.
- Review findings update QA/reviews before completion claims.

## Single-writer boundaries

- This area owns work cell boundaries, single-writer rules, review routing, parallel-work limits, and handoff topology.
- Cross-area changes require a handoff note or decision record.
- Current status changes must update this area's STATE and, when project-level, 01-current-state.

## Approval, audit, cost, safety, and public guards

- Public routes and public mutations require hostile-input and user-safe failure planning where applicable.
- Paid, metered, or external-account operations require explicit approval and handoff notes.
- Deploy-affecting changes require exact deploy wording and verification evidence.
- Security-sensitive changes require a risk note and verification plan.

## Data and schema rule

Any required schema or data change must include migration, backfill, or compatibility notes when it affects existing public routes, product facts, forms, analytics, or external integrations.
