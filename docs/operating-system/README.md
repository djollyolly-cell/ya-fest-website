# Ya-Fest Operating System

This is the active operating documentation layer for Ya-Fest. It is designed for people and AI agents who need to understand what exists, what is planned, which decisions are binding, and how to continue without duplicating work.

## Canonical reading order

1. [PROGRESS.md](PROGRESS.md)
2. [01-current-state/STATE.md](01-current-state/STATE.md)
3. [DOCUMENT_POOL.md](DOCUMENT_POOL.md)
4. [DECISIONS.md](DECISIONS.md)
5. The affected numbered area README, STATE, CONTRACTS, and IMPLEMENTATION_STEPS files
6. [10-qa-reviews/GATES.md](10-qa-reviews/GATES.md) before claiming work is complete

## Standard area contour

Every numbered area contains:

- `GOAL.md` - why the area exists
- `README.md` - owned surface and boundaries
- `STAGES.md` - area-level phases/stages; do not create a parallel `PHASES.md`
- `SUBPHASES.md` - subphases inside stages
- `IMPLEMENTATION_STEPS.md` - practical execution order
- `GATES.md` - entry, implementation, verification, and exit gates
- `HANDOFF.md` - what the next worker must leave behind
- `OPEN_QUESTIONS.md` - unresolved questions

Areas with real or likely product/technical contracts also include `STATE.md`, `CONTRACTS.md`, and `FLOWS.md`. In this initial structure those files are present in every numbered area so status and boundaries are explicit.

## Areas

| Area | Name | Owned surface |
|---|---|---|
| [00-north-star/](00-north-star/README.md) | North Star | project purpose, positioning, success criteria, scope boundaries, and strategic narrative. |
| [01-current-state/](01-current-state/README.md) | Current State | implementation status, known working surfaces, skeletons, risks, and current canonical status notes. |
| [02-architecture-contracts/](02-architecture-contracts/README.md) | Architecture Contracts | route ownership, canonical domain policy, rendering boundaries, structured data rules, and source-of-truth rules. |
| [03-backend-runtime/](03-backend-runtime/README.md) | Backend Runtime | API endpoints, PHP handlers, serverless/contact code, validation, notification side effects, and hostile-input handling. |
| [04-agent-runtime/](04-agent-runtime/README.md) | Agent Runtime | agent operating rules, handoff expectations, prompts, logs, reviews, QA records, and stop controls for risky actions. |
| [05-brand-geo-content/](05-brand-geo-content/README.md) | Brand, GEO, and Content | brand positioning, GEO pages, facts pages, llms.txt, FAQ copy, structured answer blocks, and source-backed content claims. |
| [06-programs-campuses-festivals/](06-programs-campuses-festivals/README.md) | Programs, Campuses, and Festivals | program entities, dates, audiences, pricing, inclusions, teachers, locations, results, and archive status. |
| [07-applications-communications/](07-applications-communications/README.md) | Applications and Communications | contact forms, phone/email/social CTAs, product-specific lead routing, success/error messaging, and contact handoff. |
| [08-marketing-analytics/](08-marketing-analytics/README.md) | Marketing and Analytics | Yandex Direct docs, campaign structure, analytics scripts, conversion goals, source UTM rules, and audit reports. |
| [09-deploy-ops/](09-deploy-ops/README.md) | Deploy Operations | deployment surfaces, domain setup, verification files, redirects, release handoffs, and rollback notes. |
| [10-qa-reviews/](10-qa-reviews/README.md) | QA and Reviews | test commands, visual QA, content QA, link checks, schema validation, and review records. |
| [11-migration-rollout/](11-migration-rollout/README.md) | Migration and Rollout | migration sequence, compatibility notes, backfill plans, rollout gates, and route redirects. |
| [12-security-multitenancy/](12-security-multitenancy/README.md) | Security and Multitenancy | hostile-input guards, secrets, public mutation controls, approval policies, and access assumptions. |
| [13-cost-billing-controls/](13-cost-billing-controls/README.md) | Cost and Billing Controls | budget limits, paid provider policy, cost gates, campaign spend controls, and metered-call logging. |
| [14-capability-operations/](14-capability-operations/README.md) | Capability Operations | capability permissions, approval gates, stop controls, external-account operations, and safety notes. |
| [15-entity-memory/](15-entity-memory/README.md) | Entity Memory | canonical entity lists, product facts, teacher facts, venue facts, contacts, source references, and reuse rules. |
| [16-implementation-roadmap/](16-implementation-roadmap/README.md) | Implementation Roadmap | near-term roadmap, stage ordering, implementation ledger references, blocked work, and non-repeat rules. |
| [17-agent-cell-topology/](17-agent-cell-topology/README.md) | Agent Cell Topology | work cell boundaries, single-writer rules, review routing, parallel-work limits, and handoff topology. |

## Service folders

- [goals/](goals/) - scoped goals and outcomes
- [logs/](logs/) - chronological work logs
- [prompts/](prompts/) - reusable or important prompts
- [qa/](qa/) - QA evidence and check records
- [reviews/](reviews/) - review findings and review outcomes
- [handoffs/](handoffs/) - cross-area or session handoffs
- [legacy-to-kill/](legacy-to-kill/) - duplicated or obsolete material proposed for removal after migration

## Source material rule

Old specs, audits, campaign plans, and markdown notes are source/evidence. They are not proof of completed implementation. Current implementation status lives in [01-current-state](01-current-state/README.md), [PROGRESS.md](PROGRESS.md), and affected area state files.
