# Current State Open Questions

## Questions

- Which files or external systems are active production truth for this area?
- Which source documents are outdated but still need migration into current operating docs?
- What verification is required before this area can be called implementation-ready?

## Area-specific question

- Static HTML under `HTML landing for claude/` points to `https://yafest.ru` and is the current production-oriented surface by repository evidence, but the live domain, redirects, and actually served HTML still need external verification.
- React/Vite under `website/` points to `https://ya-fest.ru`, which is not a purchased/public Ya-Fest domain. Should the React/Vite prototype be kept for experiments or retired?

Do not fill these answers from memory. Resolve them from code, tests, source evidence, or verified external-state checks.
