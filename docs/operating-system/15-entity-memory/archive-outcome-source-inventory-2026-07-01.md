# Archive Outcome Source Inventory

Date: 2026-07-01
Scope: winner/result protocols for `Зимний театр`, `Театр у моря`,
`Кино у моря`, and festival-linked workshop outcomes including `Кинозабег`.
Status: no official winner protocol or named winner source found.

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

## Decision

Do not replace the current public source-backed gap blocks with winner names.

Keep these claims unpublished until an official source URL is attached:

- `Зимний театр` nomination-winner protocol and named winners.
- `Театр у моря` nomination-winner protocol and named winners.
- `Кино у моря` nomination-winner protocol and named winners.
- `Кинозабег` special-prize winner.
- Aggregate winner claims on `festivals.html` and `laboratories.html`.

## Next Source Paths

The next useful step is off-code organizer confirmation:

1. Ask the producer/organizer whether a protocol PDF, spreadsheet, post, album,
   or VK discussion with official results exists.
2. If it exists, attach the exact URL/file in this inventory and update
   `yafest-entity-registry.md`.
3. Only then update public HTML/JSON-LD with named winners.
