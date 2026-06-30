# Ya-Fest GEO QA Recurring Handoff Template

Copy this file to `YYYY-MM-DD-yafest-geo-qa-run.md` and fill in. Drop sections
that did not apply to this run but record the reason in the Notes block.

Date: YYYY-MM-DD
Trigger: scheduled monthly run | change PR <slug> | post-deploy verification | ad-hoc
Surface: `HTML landing for claude/`
Canonical domain: `https://yafest.ru/`
Checklist: [`../10-qa-reviews/yafest-geo-qa-checklist.md`](../10-qa-reviews/yafest-geo-qa-checklist.md)
Registry: [`../15-entity-memory/yafest-entity-registry.md`](../15-entity-memory/yafest-entity-registry.md)

## Scope

- What was checked in this run (full checklist | scoped to sections X, Y).
- What was deliberately not checked and why.
- Whether a deploy was performed in the same change.

## Invariant Confirmations

- Entity registry updated first or in the same change: yes | no | not applicable, with reason.
- This handoff exists for any deploy or public claim made in this run: yes | no.
- Source docs were treated as evidence, not proof of implementation: yes | no.

## Section Results

For each section, record `pass`, `fail`, or `skipped` and the command output
or note that justifies it. Keep entries short.

### 1. Canonical domain

- Local: `git grep ya-fest.ru` and `git grep rel="canonical"` results.
- Live: HTTP status per checked URL and canonical href per checked page.

### 2. Sitemap and robots

- Local: XML parses; loc/host/sitemap lines look correct.
- Live: robots host/sitemap lines and per-URL HTTP status from sitemap.

### 3. Product facts

- Static smoke tests printed their pass line.
- Live spot checks for any product whose facts changed.

### 4. Schema validity

- Static smoke test passed for required JSON-LD blocks.
- Manual JSON parse for any changed JSON-LD block.
- External validator runs, if used.

### 5. Broken links

- Local relative-link scan.
- Live full-sitemap status sweep, if run.

### 6. Outdated dates and prices

- List of dated or priced claims confirmed against the registry.
- Any expired claim found and how it was handled.

### 7. Teacher and proof changes

- Local grep for known named-proof strings.
- Live confirmation of named-proof blocks for pages that changed.

## Defects and follow-ups

- Defect: short description, page or file, date found.
- Action: fixed in this change | follow-up issue with owner and target date | accepted with reason.

## Notes

- Anything that affected the run: sections skipped and why, tools that were
  unavailable, hosting state, webmaster behavior, surprising diffs.

## Outcome

- Run state: clean | with-defects-fixed | with-open-followups | blocked.
- Deploy status, if applicable: not deployed | deployed and verified | deployed and unverified.
- Next run trigger: next monthly date | next PR | post-deploy of <change>.
