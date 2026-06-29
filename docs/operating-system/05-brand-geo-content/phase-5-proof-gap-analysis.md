# Phase 5 — Ecosystem Pages and Proof Gap Analysis

Date: 2026-06-29
Owner area: `docs/operating-system/05-brand-geo-content/`
Scope: source-backed gap map for Phase 5. No HTML changed in this task. The
canonical entity registry (`yafest-entity-registry.md`) does not yet exist
(`docs/operating-system/15-entity-memory/STATE.md:16`); this analysis works
directly from production HTML under `HTML landing for claude/` and the source
markdown files referenced from `05-brand-geo-content/README.md`.

## 1. Phase 5 success criteria recap

From `docs/operating-system/goals/2026-06-29-yafest-geo-phase-goals.md:175-195`,
each major product needs:

- a visible page or section with its own stable URL;
- audience, dates, place, format, price, teachers, results, participation
  rules exposed in HTML;
- proof: photos, videos, VK links, teacher names, reviews, archive event
  pages, regulations or result summaries;
- archive pages clearly distinguished from current offers;
- internal links across home, facts, campuses, festivals, teachers, contacts.

## 2. Conservative assumptions made for this analysis

- The `camp.html` page co-hosts three products as in-page sections; sections
  with stable in-page anchors satisfy Phase 5's "section with its own stable
  URL" wording, but only if anchors actually exist. Today the section block
  uses `id="campuses"` only (`HTML landing for claude/camp.html:262`); the
  per-campus divs at `:265`, `:284`, `:303` have no `id`.
- Photos in `HTML landing for claude/photos/` are assumed (per the source rule
  in `15-entity-memory/CONTRACTS.md:9`) to be official Ya-Fest material.
  The current set is wired only to `winter-theatre.html`; visual content
  of each image is presumed to match the Зимний-театр 2026 event and must
  be re-verified before reuse on other festival pages.
- The four `review-card` blocks on `winter-theatre.html:347-379` are generic
  "Участник фестиваля · <city>" testimonials with no source link; they are
  treated here as placeholder copy, not Phase 5-grade social proof.
- VK posts/albums are referenced in the source rule but not yet inventoried;
  this analysis recommends adding VK album links per event but does not
  assert specific URLs.

## 3. Product → URL / section map

| Product | Canonical URL | Stable in-page anchor | Sitemap | Notes |
| --- | --- | --- | --- | --- |
| ТЕАТРО КАМПУС | `/camp.html` (shared) | none on the campus card — only `#campuses` parent | yes (parent) | needs `id="teatro"` on `camp.html:265` |
| DANCE КАМПУС | `/camp.html` (shared) | none | yes (parent) | needs `id="dance"` on `camp.html:284` |
| ТЕАТР.КИНО.СОЧИ. | `/theatre-cinema-sochi.html` | `#quick-facts` (`theatre-cinema-sochi.html:245`) | yes | own URL ✔, Event JSON-LD ✔ (`:16-37`) |
| Театр у моря (архив 2026) | `/theatre-sea.html` | none beyond header banner | yes | archive banner ✔ at `theatre-sea.html:188` |
| Кино у моря (архив 2026) | `/cinema-sea.html` | none | yes | archive banner ✔ at `cinema-sea.html:186` |
| Зимний театр (архив 2026) | `/winter-theatre.html` | none | yes | archive banner ✔ at `winter-theatre.html:206-209` |
| Мастерские / мастер-классы | `/laboratories.html` | none per item | yes | directory page only; items lack stable anchors |
| Факты | `/facts.html` | `#terms` (via JSON-LD `@id`) | yes | DefinedTermSet ✔ (`facts.html:36-66`) |
| О движении | `/about.html` | none | yes | "Доказательная база" block at `about.html:174-198` |
| Жюри (как сущность) | no own page | `/index.html#jury` (`index.html:448`) | n/a | 13 named jurors with photos on home; no Person schema |

## 4. Per-product proof matrix

Legend: ✔ present in production HTML · △ partial / generic · ✗ missing.

| Product | Audience | Dates | Place | Format | Price | Teachers (named) | Teacher photos | Result / outcome | Site photos | Reviews | VK link | JSON-LD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ТЕАТРО КАМПУС | ✔ 6–17 (`camp.html:279`) | ✔ 5–15 авг 2026 (`:278`) | ✔ Сочи Парк Отель (`:279`) | ✔ списком (`:269-276`) | ✔ от 79 000 ₽ (`:281`) | ✔ 5 (`:329-367`) | ✔ | ✔ "гала-вечер и финальный фестиваль с призами" (`:275`) | ✗ | ✗ | △ generic group VK only | △ FAQPage on camp.html (`:16-30`), no Course |
| DANCE КАМПУС | ✔ 6–17 (`:299`) | ✔ 5–15 авг 2026 | ✔ | ✔ (`:288-295`) | ✔ от 79 000 ₽ | ✔ 3 (`:374-399`) | ✔ | ✔ "гала-концерт" (`:294`) | ✗ | ✗ | △ | △ same FAQPage |
| ТЕАТР.КИНО.СОЧИ. | ✔ 18+ (`theatre-cinema-sochi.html:242`) | ✔ 5–15 авг 2026 (`:239`) | ✔ Сочи Парк Отель + Арена (`:241`) | ✔ полная программа (`:272-340`) | ✔ от 79 000 ₽ (`:439-447`) | ✔ 6 (`:347-400`) | ✔ | ✔ конкретный список (`:407-414`) | ✗ | ✗ | ✔ `vk.me/i_festgo` (`:229,455`) | ✔ Event (`:16-37`), no Person/Course |
| Театр у моря (архив) | ✔ (`theatre-sea.html:245-251`) | ✔ 8–11 апр 2026 (`:209`) | ✔ Сочи Парк Отель (`:210`) | ✔ номинации (`:225-229`) | ✔ оргвзнос (`:300-316`) | ✗ имена не указаны; только обобщённый "ГИТИС, РГИСИ, …" (`:285`) | ✗ | ✗ список победителей и итоги отсутствуют | ✗ (0 фото на странице — `grep -c '<img'` = 1) | ✗ | ✔ `vk.com/i_festgo` (`:200,347`) | ✗ |
| Кино у моря (архив) | ✔ (`cinema-sea.html:249-261`) | ✔ 8–11 апр 2026 (`:207`) | ✔ Сочи Парк Отель (`:208`) | ✔ номинации (`:235-244`) | ✔ оргвзнос (`:264-281`) | ✗ нет (тоже только обобщения) | ✗ | ✗ нет итогов / победителей "Кинозабега" | ✗ | ✗ | ✔ `vk.com/i_festgo` (`:198,310`) | ✗ |
| Зимний театр (архив) | ✔ (`winter-theatre.html:254-269`) | ✔ 12–14 янв 2026 (`:229`) | ✔ КЗ «Измайлово» (`:230`) | ✔ (`:244-249`) | ✔ оргвзнос (`:297-312`) | ✗ имена не указаны (только "ГИТИС/РГИСИ обобщённо" по тексту) | ✗ | ✗ конкретные победители не названы | ✔ 25 фото (`:316-343`) с lightbox | △ 4 review-card, placeholder без источника (`:347-379`) | ✔ группа (`:200,398`) | ✗ |
| Мастерские | △ обобщённо (`laboratories.html:151-156`) | △ только две даты, привязанные к фестивалям (`:177,188`) | △ "Москва / онлайн" без адреса (`:199`) | ✔ типы (`:161-165`) | ✗ цены не указаны | ✗ имена педагогов отсутствуют | ✗ | △ описаны общими словами | ✗ | ✗ | △ группа в футере | ✗ |
| Жюри | n/a | n/a | n/a | n/a | n/a | ✔ 13 (`index.html:453-465`; `jury/` 27 файлов) | ✔ | n/a | n/a | n/a | n/a | ✗ Person schema отсутствует |
| Доказательная база (about) | n/a | n/a | n/a | n/a | n/a | △ список имён без ссылок (`about.html:186-188`) | ✗ | n/a | ✗ | ✗ | ✔ группа в тексте | ✗ |

Conflict and quality notes captured during the scan:

- `festivals.html:152-161` renders generic jury cards (emoji avatars, no real
  names) — duplicates the role of `index.html:447-468` but loses the named
  people. This is the same product area; pick one source of truth.
- Source `кино_и_театр_у_моря_2026.md:60-67` names a jury that is **not**
  rendered on `theatre-sea.html` or `cinema-sea.html` (Стася Толстая,
  Дмитрий Чеботарёв, Антонина Кузнецова, Вениамин Фильштинский, Сергей
  Черкасский, Радда Новикова). Photos for several of them exist in `jury/`
  (`tolstaya.jpg`, `дмитрий чеботарев.png`, `антонина кузнецова.png`,
  `filshtinsky.jpg`, `cherkassky.jpg`, `Радда Новикова.jpg`).
- `laboratories.html:221` exposes the producer email via Cloudflare
  `cf_email` obfuscation, while every other footer uses a clean
  `mailto:producer.ya@mail.ru` — should be normalised before adding more
  proof copy.
- Sitemap `lastmod` for archive festival pages is `2026-03-14`
  (`sitemap.xml:18,24,30`) — older than the events themselves; refresh once
  any archive-page proof is added.

## 5. Quick wins (single-page edits, no new URLs)

W1. **Add `id="teatro"` and `id="dance"` to the campus cards** in
`camp.html` at `:265` and `:284`, then link from `facts.html:166-171`
("Текущие направления") via `camp.html#teatro` / `camp.html#dance`. Cost:
two attribute additions + two link href updates. Gives Phase 5 its stable
in-page URL for ТЕАТРО and DANCE without forking the page.

W2. **Named jury block on `theatre-sea.html` and `cinema-sea.html`.**
Source: `кино_и_театр_у_моря_2026.md:60-67`. Photos already in `jury/`.
Insert a `Жюри фестиваля` section after the current generic block
(`theatre-sea.html:281-297`, `cinema-sea.html` lacks any jury block).

W3. **Replace generic jury cards on `festivals.html:152-161`** with the
named-and-photographed cards used on `index.html:453-465`. Keep one source
of truth.

W4. **Archive results / итоги block on each archive page.** Even a short
"гала-концерт состоялся, фотогалерея, благодарственные дипломы" block with
a VK album link satisfies the "result summary" requirement. For
`theatre-sea.html` and `cinema-sea.html` this is currently missing
entirely; for `winter-theatre.html` the gallery exists but the named
winners list does not. Source for winners is not in repo today — see §8.

W5. **Replace or source-tag the placeholder reviews** on
`winter-theatre.html:347-379`. Two options: (a) swap for two real VK
testimonials with a footer "Источник: vk.com/i_festgo, <дата>", or (b)
relabel the block as "Отклики участников (агрегировано из VK)" and add a
single link to the group. Option (b) is the conservative path until a real
review pull is done.

W6. **Photo galleries on `theatre-sea.html` and `cinema-sea.html`.** Add
a small gallery (3–6 images) drawn from `photos/` only after verifying
each image was actually shot at the Sochi April-2026 events; if not yet
verified, link to the VK album instead of embedding ambiguous images. Do
not silently reuse the Зимний-театр photoset.

W7. **Concrete `laboratories.html` schedule.** Add named teachers and
specific dates from `master_klassy_i_intensivy.md` and
`pedagogi_i_napravleniya.md` to the cards at `laboratories.html:170-202`.
Today the page reads as a brochure without facts; Phase 5 wants
"educational programs" with audience, dates, teachers.

W8. **VK-link specificity.** Every page currently points VK CTAs to the
group root `vk.com/i_festgo`. Where a topical VK album or post exists for
a given product, swap the CTA to that exact URL (per the source rule in
`15-entity-memory/CONTRACTS.md:10`). Until URLs are inventoried, this is a
queued win, not an immediate edit.

W9. **Internal-link knit on `about.html`.** The "Доказательная база"
list (`about.html:186-188`) names six teachers in prose; link each name to
the matching product page section (e.g., Фильштинский →
`theatre-cinema-sochi.html#program-режиссёрская-лаборатория` once W1-style
anchors exist on that page).

W10. **Refresh sitemap `lastmod`** for any page touched by W1–W9, and
backfill `lastmod` for archive pages to the actual event end-date instead
of `2026-03-14`.

## 6. Larger page builds

L1. **`/teatro-campus.html` and `/dance-campus.html` as own canonical
URLs.** Phase 5 wording allows section-with-URL, so this is not strictly
required, but separate URLs let each child product carry its own
`EducationalOccupationalProgram` JSON-LD, its own meta description, and
its own canonical URL for AI citations. Risk: doubles maintenance of the
same August 2026 facts — gate behind a single source-of-truth pattern
(include from a shared partial or maintain via the entity registry once
it lands in Phase 4).

L2. **`/jury/` index page (or `/teachers/<slug>.html` per person).** The
13 named jurors on `index.html:453-465` and the additional teachers in
`camp.html:329-399` and `theatre-cinema-sochi.html:347-400` are the
strongest proof asset on the site. Stable per-person URLs let Phase 6
attach `Person` schema and let AI systems cite individual credentials.
Conservative scope: start with the six teachers who appear in the
ТЕАТР.КИНО.СОЧИ. program, since their credentials are already
source-supported in `master_klassy_i_intensivy.md` and
`pedagogi_i_napravleniya.md`.

L3. **Per-festival archive expansion** on `theatre-sea.html`,
`cinema-sea.html`, and `winter-theatre.html`: programme of the past
event, jury list, winners, gallery, VK album link, link to "current
analogue" (Зимний-театр → next winter slot; Театр-у-моря → ТЕАТР.КИНО.СОЧИ.).
This is the biggest content gap in the production surface today.

L4. **Real `laboratories.html` rebuild** with cards per master class:
дата, педагог, аудитория, формат, цена, ссылка на запись. Today the page
satisfies neither "section per product" nor "proof attached".

## 7. Cross-cutting concerns

C1. Structured data coverage is uneven: Organization + WebSite on home,
DefinedTermSet on facts, FAQPage on camp, Event on
theatre-cinema-sochi — and nothing on the three archive pages or on
laboratories. Phase 6 will codify this; flag here so Phase 5 page builds
do not add new pages without baseline schema.

C2. Archive vs current distinction is good on archive heroes (badges at
`theatre-sea.html:188`, `cinema-sea.html:186`,
`winter-theatre.html:206-209`) but **breaks in the global footer**: every
page footer lists `Театр у моря (архив)` / `Кино у моря (архив)` /
`Зимний театр (архив)` but no current festival, so the "upcoming" slot
silently disappears as soon as you scroll. Add an "Актуально" footer
column once the next festival is announced.

C3. The home-page form has a `<select>` of directions
(`index.html:566-573`) that includes "ТЕАТР.КИНО.СОЧИ. (взрослый)" but
the public top-nav has no link to that page from `index.html:268-275` —
the entry point is buried in a Featured card. Either promote it in the
top-nav or accept the current entry path; document the choice.

C4. The local React/Vite surface under `website/` is prototype-only per
`docs/operating-system/DECISIONS.md`; do not mirror Phase 5 page builds
into it.

## 8. Open items / blocked-by-data

- Winners and итоги for all three 2026 festivals are not in the
  repository. Without them, L3 cannot land its "result summary" section.
  Recommended default: pull from VK group posts and add source URLs in
  the same change.
- VK album URLs per event are not inventoried. Recommended default for
  Phase 5: link to the group root and queue a single album-inventory pass
  before Phase 6.
- The "Доказательная база" block on `about.html:186-188` claims "и
  другие участники программ" — without a source it should either name
  the others or drop the trailing phrase.
- No Phase 4 entity registry exists yet
  (`docs/operating-system/15-entity-memory/STATE.md:16`). Phase 5 page
  builds should not block on it, but any teacher/program fact added now
  should be the eventual source-of-truth row in that registry.

## 9. Recommended Phase 5 sequencing

1. Land quick wins W1, W3, W10 in a single content-only PR — they're
   pure HTML and sitemap edits with no new pages.
2. Add named jury blocks (W2) and replace placeholder reviews (W5) in a
   second PR that also pulls one VK source link per page.
3. Build out the archive pages (L3) using whatever winners/итоги can be
   sourced from VK; if blocked, ship the gallery + jury sections and
   leave a clearly-labelled "Итоги будут опубликованы" stub.
4. Add per-person teacher pages (L2) limited to the six
   ТЕАТР.КИНО.СОЧИ. teachers — this is the highest-ROI proof move.
5. Defer L1 (separate /teatro-campus.html, /dance-campus.html) until the
   Phase 4 entity registry lands, to avoid duplicating the source of
   truth.
6. Rebuild `laboratories.html` (L4) last — it is currently the weakest
   page and any partial update risks adding more brochure copy without
   proof.

## 10. Source references

- Phase goals: `docs/operating-system/goals/2026-06-29-yafest-geo-phase-goals.md`
- Entity-memory state and rules:
  `docs/operating-system/15-entity-memory/STATE.md`,
  `docs/operating-system/15-entity-memory/CONTRACTS.md`
- Brand/GEO area state: `docs/operating-system/05-brand-geo-content/STATE.md`
- Source markdown referenced by `05-brand-geo-content/README.md`:
  `teatr_kino_sochi_tvorcheskiy_kampus.md`,
  `master_klassy_i_intensivy.md`,
  `pedagogi_i_napravleniya.md`,
  `зимний_театр_2026.md`,
  `кино_и_театр_у_моря_2026.md`
- Production HTML surface: `HTML landing for claude/index.html`,
  `facts.html`, `camp.html`, `theatre-cinema-sochi.html`,
  `theatre-sea.html`, `cinema-sea.html`, `winter-theatre.html`,
  `laboratories.html`, `festivals.html`, `about.html`,
  `sitemap.xml`, `llms.txt`
