# Applications and Communications Contracts

## Required invariants

- Every public application form requires validation, spam/hostile-input handling, user-safe error states, and clear product context.
- Lead routing changes must be tested end-to-end or explicitly marked not deployed.
- Phone, email, and social links must match current official contacts.

## Single-writer boundaries

- This area owns contact forms, phone/email/social CTAs, product-specific lead routing, success/error messaging, and contact handoff.
- Cross-area changes require a handoff note or decision record.
- Current status changes must update this area's STATE and, when project-level, 01-current-state.

## Approval, audit, cost, safety, and public guards

- Public routes and public mutations require hostile-input and user-safe failure planning where applicable.
- Paid, metered, or external-account operations require explicit approval and handoff notes.
- Deploy-affecting changes require exact deploy wording and verification evidence.
- Security-sensitive changes require a risk note and verification plan.

## Data and schema rule

Any required schema or data change must include migration, backfill, or compatibility notes when it affects existing public routes, product facts, forms, analytics, or external integrations.
