# Area Template

Use this template when creating or developing a numbered operating area.

## Required files

- `GOAL.md`
- `README.md`
- `STAGES.md`
- `SUBPHASES.md`
- `IMPLEMENTATION_STEPS.md`
- `GATES.md`
- `HANDOFF.md`
- `OPEN_QUESTIONS.md`

For areas with product, runtime, architecture, security, deploy, cost, or data contracts, also include:

- `STATE.md`
- `CONTRACTS.md`
- `FLOWS.md`

## Mandatory rule

`STAGES.md = area-level phases/stages; do not create a parallel PHASES.md`.

## GOAL.md

Explain why the area exists, what role it plays in the full product, what success means, and what drift it prevents.

## README.md

Define owned surface, entities/processes/modules/UI/backend/runtime/operations, source docs or files, and what does not belong here.

## STAGES.md

For each area-level stage include name, goal, entry condition, exit condition, evidence/checks, and relation to any canonical implementation plan.

## SUBPHASES.md

For each subphase include parent stage, output, owner surface, dependency, and what blocks the next subphase.

## IMPLEMENTATION_STEPS.md

State what to read before work, what to change, what checks to run, what current-state/handoff updates are required, what not to repeat, and which boundaries cannot be crossed.

## STATE.md

Say what is implemented, what is skeleton/foundation, what is not implemented, and what risks, migrations, backfills, or compatibility notes exist. Do not call unfinished parts implemented.

## CONTRACTS.md

Record invariants, required fields/entities, single-writer boundaries, adapter/policy/guard requirements, and actions needing approval, audit log, cost gate, safety gate, or public guard.

## FLOWS.md

Describe lifecycles from input to result, state writers, status changes, approvals, QA, events, cost gates, safety gates, and side effects owned by other areas.
