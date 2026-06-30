# Theatre/Cinema Archive Source-Backed GEO Pass Handoff

Date: 2026-06-30
Surface: `HTML landing for claude/`
Pages: `theatre-sea.html`, `cinema-sea.html`
Status: completed locally, not deployed in this pass.

## Summary

Applied the `winter-theatre.html` source-backed archive pattern to the two
April 2026 archive pages. Both pages now state the confirmed archive facts and
explicitly avoid publishing winner names without an official source.

## Changes

- `theatre-sea.html`: added a visible `Что известно об итогах?` block and a
  matching `FAQPage` JSON-LD entry for the missing winner protocol.
- `cinema-sea.html`: added the same source-backed archive block and JSON-LD
  entry, including the missing source for the `Кинозабег` special-prize winner.
- `test-geo-static.mjs`: added assertions that both pages name the protocol gap
  and avoid unsupported winner claims.
- `STATE.md` and `yafest-entity-registry.md`: recorded source-backed gaps for
  both archive events.

## Verification

- `node "HTML landing for claude/test-geo-static.mjs"`: pass.
- `node "HTML landing for claude/test-camp-booking-form.mjs"`: pass.
- `git diff --check`: clean.

## Remaining Gap

Do not publish named winners for `Театр у моря`, `Кино у моря`, or the
`Кинозабег` special prize until an official VK/Telegram/source URL is found and
read.

