# Archive Outcome Source Inventory

Date: 2026-07-01
Scope: winner/result protocols for `Зимний театр`, `Театр у моря`,
`Кино у моря`, and festival-linked workshop outcomes including `Кинозабег`.
Status: partial — signed protocol for `Театр у моря` / «Театр и кино моря»
2026 received on 2026-07-01 and mirrored to production; `Зимний театр`,
`Кино у моря` cinema-nomination protocol, and `Кинозабег` are still without
an official source.

## Received Sources (2026-07-01)

- Festival: «Театр и кино моря» 2026 (covers P4 «Театр у моря»).
  - Public canonical URL: `https://yafest.ru/protocols/theatre-i-kino-morya-2026.pdf`.
  - Local mirror: `docs/operating-system/15-entity-memory/sources/2026-04-theatre-i-kino-morya-protocol.pdf`.
  - SHA-1: `edd5fa55850d29933844e73f8ed1ad866d5ffebe`.
  - Format: signed CamScanner PDF, 3 pages, seal + director signature (Труфанова П.С.).
  - Content: theatre nominations only, flat degree list (Гран-при / Лауреаты I–III / Дипломанты I–III), no cinema categories, no `Кинозабег`.
  - Filled protocol table: `docs/operating-system/15-entity-memory/sources/2026-04-theatre-sea-winner-protocol-filled.md`.

## Sources Checked

Local repository evidence:

- `зимний_театр_2026.md`
- `театр_у_моря_2026 (1).md`
- `кино_и_театр_у_моря_2026.md`
- Production static pages in `HTML landing for claude/`
- Existing inventories and handoffs under `docs/operating-system/` and
  `docs/superpowers/`

Public web search:

- Exact-match searches for `Я-Фест` + `Зимний театр` + `победители`.
- Exact-match searches for `Я-Фест` + `Театр у моря` + `победители`.
- Exact-match searches for `Я-Фест` + `Кино у моря` + `победители`.
- Exact-match searches for `Кинозабег` + `Я-Фест`.
- Exact-match searches for official handles `vk.com/i_festgo`,
  `vk.com/producer_ya`, `i_festgo`, and `producer_ya`.
- Telegram/public-web searches for `Я-Фест`, festival names, and `t.me`.

VK access attempts:

- `https://vk.com/i_festgo`
- `https://vk.com/producer_ya`
- `https://m.vk.com/i_festgo`
- `https://m.vk.com/producer_ya`
- VK wall/search pages for `Я-Фест Зимний театр`.
- VK API methods:
  - `utils.resolveScreenName?screen_name=i_festgo`
  - `utils.resolveScreenName?screen_name=producer_ya`
  - `groups.getById?group_id=i_festgo`
  - `groups.getById?group_id=producer_ya`

## Findings

### Local repository

The local markdown briefs and production pages confirm program rules, dates,
venues, jury/teacher candidates, nomination categories, and prize funds. They do
not contain a public nomination-winner protocol, named festival winners, or a
named `Кинозабег` special-prize recipient.

### Official VK handles

The public VK page fetches returned a VK shell/login-style HTML response rather
than crawlable wall content. Keyword scans of the returned HTML did not surface
festival result text.

The VK API methods returned token-required errors, so no official wall inventory
could be completed through the API from this environment.

### Public search

Public search surfaced Ya-Fest site pages and unrelated Instagram/TG results,
but did not surface an official Ya-Fest VK/Telegram/source URL that names
winners or publishes a result protocol for the archive festivals.

### Telegram / local media

One relevant local-media Telegram post was found:

- `https://t.me/s/vlast_sovetov?before=49556`

It states that a Выселки theatre studio was going to Moscow for the `Зимний
театр` festival, that the festival performances would be broadcast in the
Ya-Fest VK group, and names hosts/jury categories. It does not publish results,
winners, laureates, or a nomination protocol. Treat it as non-official
participation/broadcast context only, not winner proof.

## Decision (updated 2026-07-01)

Publish `Театр у моря` winners using the received signed protocol.
Keep the following claims unpublished until their own official source URLs
are attached:

- `Зимний театр` nomination-winner protocol and named winners.
- `Кино у моря` cinema-nomination protocol and named winners
  (the received protocol names theatre nominees only).
- `Кинозабег` special-prize winner.
- Aggregate cinema-side winner claims on `festivals.html` and
  `laboratories.html`.

## Next Source Paths

1. Ask the producer whether a separate cinema-nominations protocol exists for
   «Кино у моря» 2026 (best film, directing, camera, screenplay, acting,
   `Кинозабег`).
2. If it exists, mirror it under `docs/operating-system/15-entity-memory/sources/`,
   upload to `~/www/yafest.ru/protocols/` via SSH, and follow the same
   publish flow.
3. Ask the producer for a signed «Зимний театр» 2026 protocol using the
   same template.
4. After each publish pass, update `yafest-entity-registry.md`,
   `05-brand-geo-content/STATE.md`, and public HTML/JSON-LD in one commit.
