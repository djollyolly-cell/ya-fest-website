# Implementation Roadmap Implementation Steps

## Read before work

1. [../../README.md](../../README.md)
2. [../README.md](../README.md)
3. [../PROGRESS.md](../PROGRESS.md)
4. [../01-current-state/STATE.md](../01-current-state/STATE.md)
5. This area's `README.md`, `STATE.md`, `CONTRACTS.md`, `FLOWS.md`, and `GATES.md`

## What to change

Change only the owned surface described in `README.md`. If the work touches another area, update that area's handoff or add a decision before proceeding.

## Checks to run

- Run repository tests or targeted checks when code changes.
- Run link and route checks when public docs, routes, sitemap, robots, or navigation change.
- Run schema validation when JSON-LD or structured data changes.
- Run build/typecheck/lint for React/Vite changes when feasible.
- Record any check that could not be run and why.

## What to update after work

- This area's `STATE.md` when implementation status changes.
- [../01-current-state/STATE.md](../01-current-state/STATE.md) when project-level status changes.
- [../PROGRESS.md](../PROGRESS.md) after meaningful implementation, review, deploy, or docs pass.
- `HANDOFF.md` or a dated file under [../handoffs/](../handoffs/) with changed areas, checks, risks, and deploy status.

## Do not repeat

- Do not create `PHASES.md`; use `STAGES.md`.
- Do not treat source/evidence docs as completed-work proof.
- Do not duplicate facts across surfaces without deciding the source of truth.
- Do not call a production deploy unless production was actually released and verified.

## Boundaries not to cross

- Roadmap must not mark work done; it points to next safe scope.
- Closed scopes should not be repeated unless regression evidence exists.
- When detailed plans exist, roadmap links to them instead of duplicating every task.
