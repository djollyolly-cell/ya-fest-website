# Winter Theatre Source-Backed GEO Pass Handoff

Date: 2026-06-30
Surface: `HTML landing for claude/`
Primary page: `winter-theatre.html`
Status: completed locally, not deployed in this pass.

## Summary

Added a source-backed archive note for `Зимний театр` that strengthens the page
without inventing unsupported winner facts. The page now clearly says that the
festival archive has confirmed dates, venue, participation conditions, award
categories, and gallery photos, while the nomination-winner protocol is not
published on the current page.

## Source Scan

- Checked repository source brief: `зимний_театр_2026.md`.
- Checked current production-oriented static HTML.
- Attempted public VK access for `vk.com/i_festgo` and `vk.com/producer_ya`;
  unauthenticated responses did not expose readable post content.
- Public search did not surface a specific official VK or Telegram URL with
  named `Зимний театр` winners or a nomination protocol.

## Changed Files

- `HTML landing for claude/winter-theatre.html`
- `HTML landing for claude/test-geo-static.mjs`
- `docs/operating-system/15-entity-memory/yafest-entity-registry.md`
- `docs/operating-system/05-brand-geo-content/STATE.md`
- `docs/superpowers/specs/2026-06-30-winter-theatre-source-backed-geo-design.md`
- `docs/superpowers/plans/2026-06-30-winter-theatre-source-backed-geo.md`

## Verification

- `node "HTML landing for claude/test-geo-static.mjs"`: pass.
- `node "HTML landing for claude/test-camp-booking-form.mjs"`: pass.
- `git diff --check`: clean.

## Remaining Gap

Do not publish named winners for `Зимний театр` until an official source URL is
found and read. Preferred sources remain event-specific posts or albums from
`vk.com/i_festgo`, `vk.com/producer_ya`, or a clearly official Telegram channel.

