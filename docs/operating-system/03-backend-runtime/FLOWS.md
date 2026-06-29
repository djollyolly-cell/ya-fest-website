# Backend Runtime Flows

## Main lifecycle

1. Form submission enters from public UI, is validated by the active backend handler, sends notification side effects, and returns a user-safe success or error state.

## State writers

- Implementation workers update owned files and this area's STATE.
- Reviewers update reviews or QA evidence when findings are generated.
- Deploy operators update handoff and deploy notes with exact deploy wording.
- Project lead or current worker updates PROGRESS.md when status changes.

## Status changes

- planned -> scoped when roadmap selects it as next safe work;
- scoped -> implemented when files/code/content are changed;
- implemented -> verified when required checks pass or are explicitly recorded;
- verified -> current truth when current-state and affected area STATE are synchronized.

## Approvals and gates

- Public forms need validation and hostile-input guards.
- Paid and metered operations need cost approval.
- External account changes need approval and handoff.
- Deploy changes need environment-specific verification.

## Side effects owned by other areas

If a change affects forms, deploy, marketing spend, entity facts, security, or QA evidence, update the corresponding area or leave a handoff for it before completion.
