# Agent Cell Topology Subphases

## Stage 1 - Establish current truth

| Subphase | Output | Owner surface | Dependency | Blocks next subphase when |
|---|---|---|---|---|
| Source scan | List of relevant source docs and files | This area README | Access to repository files | Source/evidence cannot be located |
| Code or external-state check | Confirmed implemented/skeleton/not implemented status | This area STATE | Source scan | Code/tests or external state contradict docs and conflict is unresolved |
| Status sync | Updated area STATE and current-state notes if needed | 01-current-state plus this area | Code or external-state check | Status remains ambiguous |

## Stage 2 - Define or update contracts

| Subphase | Output | Owner surface | Dependency | Blocks next subphase when |
|---|---|---|---|---|
| Boundary review | Confirmed in-scope and out-of-scope surfaces | CONTRACTS.md | Current truth | Ownership is unclear |
| Lifecycle review | Main flows and side effects listed | FLOWS.md | Boundary review | Side effects cross into another area without handoff |
| Gate review | Required checks and approvals listed | GATES.md | Lifecycle review | Public, paid, deploy, or security risk has no gate |

## Stage 3 - Implement scoped change

| Subphase | Output | Owner surface | Dependency | Blocks next subphase when |
|---|---|---|---|---|
| Read-before-work | Worker has read required docs | IMPLEMENTATION_STEPS.md | Contracts and gates | Required docs are stale or conflicting |
| Change execution | Scoped file or external change | Owned files/surfaces | Read-before-work | Change crosses area boundaries without decision or handoff |
| Verification | Check output or explicit unable-to-run note | QA/reviews and GATES.md | Change execution | Checks fail or are not recorded |

## Stage 4 - Synchronize operating docs

| Subphase | Output | Owner surface | Dependency | Blocks next subphase when |
|---|---|---|---|---|
| Handoff | Branch/commit/files/checks/risks recorded | HANDOFF.md or handoffs/ | Verification | Missing verification or risk notes |
| Progress update | Concise status update | PROGRESS.md | Handoff | Status would duplicate or contradict current-state |
| Roadmap update | Next safe scope adjusted | 16-implementation-roadmap | Progress update | New scope is unclear or repeats completed work |
