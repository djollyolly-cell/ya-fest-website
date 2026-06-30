# Winter Theatre Source-Backed GEO Design

Date: 2026-06-30
Scope: `winter-theatre.html` first pass.

## Goal

Strengthen the `Зимний театр` archive page without inventing winner names,
event-specific VK albums, or Telegram sources that were not found.

## Source Scope

- Primary external source scope: `vk.com/producer_ya`, `vk.com/i_festgo`, and
  public Telegram pages if they are clearly connected to Ya-Fest.
- Repository evidence: `зимний_театр_2026.md`, current static HTML, entity
  registry, and official event photos already used on the site.
- Local source scan found supported facts for dates, place, price rules,
  award categories, Grand Prix, and official contacts.
- Local source scan did not find public winner names, nomination protocols, or
  event-specific VK/Telegram album URLs for `Зимний театр`.

## Public Page Behavior

The page should say what is proven and should explicitly avoid filling the
winner/protocol gap with guesses. The archive page may state that the event
took place, show official gallery photos, list award categories, and link the
official VK group for future/archive announcements. It must also say that the
nomination winner protocol is not published on the current site until an
official source is attached.

## Documentation Behavior

The entity registry and brand/GEO state should record the gap:

- winner/result protocol is not in repository evidence;
- event-specific VK/Telegram URL is not inventoried;
- future updates must attach source URLs before publishing names.

## Verification

Update `test-geo-static.mjs` before editing HTML. It should fail until the new
archive/source block exists. After implementation, run:

- `node "HTML landing for claude/test-geo-static.mjs"`
- `node "HTML landing for claude/test-camp-booking-form.mjs"`
- `git diff --check`

