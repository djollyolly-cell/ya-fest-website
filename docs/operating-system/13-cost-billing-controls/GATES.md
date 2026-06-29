# Cost and Billing Controls Gates

## Entry gate

- Read docs entry points and this area's README/STATE/CONTRACTS.
- Confirm whether the change affects public routes, public forms, paid systems, deploy, security, or canonical docs.
- Confirm source/evidence before making factual claims.

## Implementation gate

- Keep edits scoped to owned surfaces.
- Add a decision record before changing long-term architecture, deploy ownership, paid operations, or documentation source-of-truth rules.
- Use adapters, guards, policies, approvals, or handoffs where this area's contracts require them.

## Verification gate

Use the relevant checks for the actual change:

- `npm test` inside `website/` for React tests when React code changes.
- `npm run build` inside `website/` for React build/type safety when React code changes.
- `npm run lint` inside `website/` when lint-sensitive code changes.
- Route checks for public pages, redirects, robots, and sitemap changes.
- Markdown link checks for documentation changes.
- Placeholder scan for docs changes.
- Schema validation for JSON-LD changes.
- Manual external verification for DNS, deploy, Yandex Direct, Metrika, or webmaster state.

## Exit gate

- Verification is recorded or inability to run checks is explicit.
- Current-state and affected area state are updated.
- Handoff includes changed areas, checks, risks, open questions, and deploy status.
- No new competing source of truth was created.

## Do-not-cross boundaries

- Paid or metered calls must go through adapter/cost/logging policy when implemented.
- Ad spend changes require explicit approval.
- Campaign budget docs must distinguish planned, imported, and active values.
