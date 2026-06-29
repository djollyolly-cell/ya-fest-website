# Brand, GEO, and Content Contracts

## Required invariants

- Facts must be source-backed.
- Do not invent teacher credentials, dates, prices, or inclusions.
- llms.txt is an AI-friendly map, not the sole visibility mechanism.
- Content must keep brand-level "creative campus" wording while using "лагерь" carefully for search-intent explanation.

## Single-writer boundaries

- This area owns brand positioning, GEO pages, facts pages, llms.txt, FAQ copy, structured answer blocks, and source-backed content claims.
- Cross-area changes require a handoff note or decision record.
- Current status changes must update this area's STATE and, when project-level, 01-current-state.

## Approval, audit, cost, safety, and public guards

- Public routes and public mutations require hostile-input and user-safe failure planning where applicable.
- Paid, metered, or external-account operations require explicit approval and handoff notes.
- Deploy-affecting changes require exact deploy wording and verification evidence.
- Security-sensitive changes require a risk note and verification plan.

## Data and schema rule

Any required schema or data change must include migration, backfill, or compatibility notes when it affects existing public routes, product facts, forms, analytics, or external integrations.
