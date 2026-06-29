# Architecture Contracts Contracts

## Required invariants

- Exactly one public domain variant should be canonical.
- Every public route in sitemap must resolve and have canonical metadata.
- JSON-LD must match visible page content.
- Static HTML and React routes must not publish contradictory facts for the same product.

## Single-writer boundaries

- This area owns route ownership, canonical domain policy, rendering boundaries, structured data rules, and source-of-truth rules.
- Cross-area changes require a handoff note or decision record.
- Current status changes must update this area's STATE and, when project-level, 01-current-state.

## Approval, audit, cost, safety, and public guards

- Public routes and public mutations require hostile-input and user-safe failure planning where applicable.
- Paid, metered, or external-account operations require explicit approval and handoff notes.
- Deploy-affecting changes require exact deploy wording and verification evidence.
- Security-sensitive changes require a risk note and verification plan.

## Data and schema rule

Any required schema or data change must include migration, backfill, or compatibility notes when it affects existing public routes, product facts, forms, analytics, or external integrations.
