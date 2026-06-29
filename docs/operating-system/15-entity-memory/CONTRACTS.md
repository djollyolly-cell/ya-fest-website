# Entity Memory Contracts

## Required invariants

- Entity facts need source references.
- Conflicting facts must be resolved in current-state before propagation.
- Do not duplicate people, products, or venues with slightly different names without an alias note.
- Current production-site prices, dates, and participation conditions are the default current facts unless a newer explicit source overrides them.
- Site photos and project photo-folder assets may be used as official Ya-Fest visual proof material for Phase 4 and Phase 5.
- Reviews and topical VK posts/albums may be used as proof material after reading and classifying the text; do not quote or summarize them as proof without a source reference.

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

## Phase 4 and Phase 5 source rule

The entity registry should separate fact type from proof type:

- product facts: name, audience, place, dates, format, price, teachers, result, conditions;
- person facts: name, role, credential, related program, source;
- visual proof: site images, project photo folders, event/festival albums;
- social proof: reviews, VK posts, VK albums, site testimonials;
- conflict notes: outdated, ambiguous, duplicate, or React-prototype-only facts.
