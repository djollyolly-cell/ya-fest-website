# Programs, Campuses, and Festivals Stages

STAGES.md = area-level phases/stages; do not create a parallel PHASES.md.

## Stage 1 - Establish current truth

- Goal: confirm what is already real for this area.
- Entry condition: a worker is preparing to change Programs, Campuses, and Festivals.
- Exit condition: `STATE.md` reflects verified code, files, docs, or external-state checks.
- Evidence/checks: read `teatr_kino_sochi_tvorcheskiy_kampus.md`, `master_klassy_i_intensivy.md`, `pedagogi_i_napravleniya.md`, `кино_и_театр_у_моря_2026.md`, `зимний_театр_2026.md`; compare with code/tests where relevant; record conflicts as open questions.
- Canonical plan link: update `16-implementation-roadmap/` if this changes next safe scope.

## Stage 2 - Define or update contracts

- Goal: make boundaries explicit before implementation.
- Entry condition: current truth is understood.
- Exit condition: `CONTRACTS.md` and `FLOWS.md` describe invariants, owners, and lifecycle impacts.
- Evidence/checks: contract review against affected public routes, backend handlers, content, deploy, or campaign surfaces.
- Canonical plan link: implementation plan should reference the contracts it depends on.

## Stage 3 - Implement scoped change

- Goal: change only the surfaces owned or explicitly coordinated by this area.
- Entry condition: contracts and dependencies are clear.
- Exit condition: files are changed, checks are run, and unsupported assumptions are not introduced.
- Evidence/checks: run area gates from `GATES.md` and global QA gates where applicable.
- Canonical plan link: record completion or blockers in `PROGRESS.md` and affected handoff.

## Stage 4 - Synchronize operating docs

- Goal: leave the project easier for the next person or agent.
- Entry condition: implementation or review pass is complete.
- Exit condition: current-state, roadmap, area state, and handoff reflect the real outcome.
- Evidence/checks: no new placeholders, no broken local links, no duplicate source of truth.
- Canonical plan link: detailed ledgers belong in implementation plans or logs, not in old source docs.
