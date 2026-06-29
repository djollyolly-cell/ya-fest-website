# Programs, Campuses, and Festivals Contracts

## Required invariants

- Every product should expose audience, city, venue, dates, format, price, inclusions, teachers or jury, result, and application conditions when known.
- Archive events must be labeled as archive and must not invite users to closed applications.
- Program pages must not conflict across React and static HTML surfaces.

## Single-writer boundaries

- This area owns program entities, dates, audiences, pricing, inclusions, teachers, locations, results, and archive status.
- Cross-area changes require a handoff note or decision record.
- Current status changes must update this area's STATE and, when project-level, 01-current-state.

## Approval, audit, cost, safety, and public guards

- Public routes and public mutations require hostile-input and user-safe failure planning where applicable.
- Paid, metered, or external-account operations require explicit approval and handoff notes.
- Deploy-affecting changes require exact deploy wording and verification evidence.
- Security-sensitive changes require a risk note and verification plan.

## Data and schema rule

Any required schema or data change must include migration, backfill, or compatibility notes when it affects existing public routes, product facts, forms, analytics, or external integrations.
