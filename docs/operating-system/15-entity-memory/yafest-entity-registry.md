# Ya-Fest Entity Registry

Date: 2026-06-29
Status: Canonical Phase 4 registry for the current static production surface.
Canonical domain: `https://yafest.ru/`

This registry normalizes Ya-Fest product, person, proof, and conflict facts for
GEO work. It uses current production HTML under `HTML landing for claude/` as
the default current source for prices, dates, and participation conditions. The
React/Vite `website/` surface is prototype-only and may be used only to note
conflicts.

## Source Priority

1. Current production static HTML in `HTML landing for claude/`.
2. Organizer-authored markdown briefs in the repository root.
3. Official Ya-Fest visual assets already used on the site or present in project
   photo folders.
4. Accessible site testimonials and topical VK posts/albums, after the text is
   read and classified with a source reference.
5. React/Vite prototype files only as conflict signals, never as production
   truth.

## Product Records

### P1. ТЕАТРО КАМПУС

- Type: summer creative campus, theatre, children/teens.
- Stable URL: `https://yafest.ru/camp.html#teatro`.
- Audience: children and teens from 6 to 17.
- Place: Sochi, Sochi Park Hotel.
- Dates: 5-15 August 2026.
- Format: 10-day theatre campus with acting, speech/movement, cinema lab,
  admission-training lab, casting-director meetings, gala evening, and final
  festival with prizes.
- Price rule: from 79,000 RUB per package.
- Group rule: for children's groups, a leader package is free for a group from
  20 participants, as described on `camp.html`.
- Teachers tied to the product: Олеся Железняк, Радда Новикова, Сергей
  Черкасский, Виталий Любский, Александр Галибин.
- Result: master classes, cinema lab, admission-training practice, gala evening,
  and final festival.
- Application conditions: age 6-17, individual participants and groups with
  teachers/supervision; booking through the page form or official contacts.
- Proof: teacher portraits in `HTML landing for claude/jury/`; source block on
  `HTML landing for claude/camp.html`.

### P2. DANCE КАМПУС

- Type: summer creative campus, choreography, children/teens.
- Stable URL: `https://yafest.ru/camp.html#dance`.
- Audience: children and teens from 6 to 17.
- Place: Sochi, Sochi Park Hotel.
- Dates: 5-15 August 2026.
- Format: 10-day dance program with classical training, contemporary
  choreography, improvisation, author classes, leaders' workshop, gala concert.
- Price rule: from 79,000 RUB per package.
- Group rule: for children's groups, a leader package is free for a group from
  20 participants, as described on `camp.html`.
- Teachers tied to the product: Фереде, Влад Пургаз Коченов, Семён Шалаев.
- Result: intensive training with choreographers and a gala concert.
- Application conditions: age 6-17, individual participants and groups with
  teachers/supervision; booking through the page form or official contacts.
- Proof: teacher portraits in `HTML landing for claude/jury/`; source block on
  `HTML landing for claude/camp.html`.

### P3. ТЕАТР.КИНО.СОЧИ.

- Type: summer creative campus, theatre and cinema, adults.
- Stable URL: `https://yafest.ru/theatre-cinema-sochi.html`.
- Audience: adults, 18+.
- Place: Sirius/Sochi, Sochi Park Hotel and Sochi Park Arena.
- Dates: 5-15 August 2026.
- Format: 10-day professional creative intensive with acting, theatre directing
  lab, cinema directing lab, admission-training lab, casting-director meetings,
  cinema meetings, and final showing.
- Price rule: from 79,000 RUB per package; page states accommodation, meals, and
  program are included.
- Teachers tied to the product: Олеся Железняк, Вениамин Фильштинский, Радда
  Новикова, Сергей Черкасский, Виталий Любский, Александр Галибин.
- Result: short film participation, theatre sketch, video business card,
  casting practice, professional portfolio, final festival presentation.
- Application conditions: 18+, package booking through site form, VK, WhatsApp,
  or official phone/email.
- Proof: Event JSON-LD on the page, teacher cards with portraits, official
  contact/VK links.

### P4. Театр у моря

- Type: grant festival-workshop, theatre.
- Stable URL: `https://yafest.ru/theatre-sea.html`.
- Current status: archive/completed event.
- Audience: amateur theatres, theatre schools, student theatres, music schools,
  speech schools, solo performers, private participants.
- Place: Sochi, Sochi Park Hotel.
- Dates: 8-11 April 2026.
- Format: theatre competition and workshop; drama performance, future
  performance sketch, musical-literary composition, artistic word.
- Price rule: 27,500 RUB for regional participants; 8,000 RUB for Sochi
  participants without accommodation and meals.
- Teacher/jury facts: production page uses generic jury wording; organizer
  briefs name jury candidates for the April festival cycle. Treat named jury as
  source-backed but verify before expanding archive pages.
- Result: Grand Prix 200,000 RUB and laureate/diploma categories.
- Application conditions: applications were accepted until 10 March 2026; archive
  page lists documents and payment rules.
- Proof: archive page, VK group link, source markdown brief. Event photo album
  URL is still missing.

### P5. Кино у моря

- Type: grant festival-workshop, cinema.
- Stable URL: `https://yafest.ru/cinema-sea.html`.
- Current status: archive/completed event.
- Audience: authors and creative teams, amateur and professional, directors,
  operators, screenwriters, actors.
- Place: Sochi, Sochi Park Hotel.
- Dates: 8-11 April 2026.
- Format: short-film competition and `Кинозабег`; films up to 20 minutes, new
  short film up to 5 minutes during the festival.
- Price rule: 27,500 RUB for regional participants; 8,000 RUB for Sochi
  participants without accommodation and meals.
- Teacher/jury facts: production page uses generic invited jury wording; named
  jury candidates exist in organizer briefs and must be verified before broad
  public reuse.
- Result: Grand Prix 200,000 RUB, laureate/diploma categories, special
  `Кинозабег` prize.
- Application conditions: applications were accepted until 10 March 2026; archive
  page lists documents and payment rules.
- Proof: archive page, VK group link, source markdown brief. Event photo album
  URL is still missing.

### P6. Зимний театр

- Type: grant festival-workshop, theatre.
- Stable URL: `https://yafest.ru/winter-theatre.html`.
- Current status: archive/completed event.
- Audience: amateur theatres, theatre schools, student theatres, solo performers,
  private participants.
- Place: Moscow, Izmailovo Concert Hall.
- Dates: 12-14 January 2026.
- Format: theatre competition and workshop with the same core theatre
  nominations as the festival series.
- Price rule: 20,000 RUB for regional participants; 9,000 RUB for Moscow
  participants without accommodation and meals.
- Teacher/jury facts: production page does not name jury members.
- Result: Grand Prix 50,000 RUB and laureate/diploma categories.
- Application conditions: archive page lists rules and participation package;
  current application deadline is not applicable.
- Proof: archive page, 25 official gallery photos, 4 site testimonials, VK group
  link. Testimonials are city/category-attributed and should not be treated as
  per-person proof.

### P7. Мастерские и мастер-классы Я-Фест

- Type: program cluster, not a single dated event.
- Stable URL: `https://yafest.ru/laboratories.html`.
- Audience: festival participants, studios, individual authors, different
  preparation levels.
- Place/date: mixed; festival-linked workshops in Sochi, author master classes by
  schedule in Moscow/online.
- Format: theatre workshop, cinema workshop, speech workshop, acting workshop,
  `Кинозабег`, directing workshop, author master classes.
- Price rule: not public as a separate product; festival-linked workshops are
  included in festival participation fees, standalone master classes require a
  request.
- Teacher facts: current page uses generic wording; named teachers are better
  represented through the campus products until the workshop page is rebuilt.
- Result: practical work from idea to stage/screen material and professional
  feedback.
- Application conditions: contact form or official phone/email.
- Proof: current page and source markdown briefs; needs stronger public proof in
  Phase 5/6.

## Person Records

### Ready For Public Proof Blocks

These people have enough source support for Phase 5 proof blocks because they
have product mapping plus a public source-backed credential and visual asset.

| ID | Canonical name | Role summary | Related products | Visual proof |
| --- | --- | --- | --- | --- |
| T-01 | Олеся Железняк | People's Artist of Russia; theatre, film, TV and dubbing actor | P1, P3 | `jury/олеся железняк.jpg` |
| T-02 | Вениамин Фильштинский | Theatre director, professor, RGISI acting/directing department head | P3, festival jury briefs | `jury/filshtinsky.jpg`, `jury/Вениамин Фильштинский.jpg` |
| T-03 | Радда Новикова | Film and TV director | P1, P3, festival jury briefs | `jury/Радда Новикова.jpg`, `jury/рада новикова.jpg` |
| T-04 | Александр Галибин | Actor, theatre/film director, People's Artist of Russia | P1, P3 | `jury/galibin.jpg`, `jury/александр галибин.jpg` |
| T-05 | Сергей Черкасский | Theatre director, professor, doctor of art history | P1, P3, festival jury briefs | `jury/cherkassky.jpg`, `jury/сергей черкасский.jpg` |
| T-06 | Виталий Любский | Actor, director, RGISI associate professor | P1, P3 | `jury/виталий любский.jpg` |
| T-07 | Фереде | Choreographer, teacher, The Flow creator | P2 | `jury/фереде кананова (педагог танцы).jpg` |
| T-08 | Влад Пургаз Коченов | Choreographer, director, actor | P2 | `jury/Влад (Пургаз) коченов.jpg` |
| T-09 | Семён Шалаев | Contemporary choreography teacher and performer | P2 | `jury/семен шалаев.jpg` |

### Site-Supported Jury Names, Product Link Pending

- T-10 Григорий Заславский: jury card on home; product-specific link pending.
- T-11 Татьяна Васильева: jury card on home; product-specific link pending.
- T-12 Татьяна Морозова: jury card on home; product-specific link pending.
- T-15 Елена Исаева: jury card on home; product-specific link pending.
- T-17 Денис Степанов: jury card on home; product-specific link pending.

### Conflicted Or Pending Person Records

- T-13 Ирина Савицкова / Савицкая-Галибина: name and credential variants must be
  resolved before prominent publication.
- T-14 Ирина Абросимова / Амбросимова / Амбросиева: name variants must be
  resolved before prominent publication.
- T-16 Антонина Кузнецова: production HTML and markdown briefs use different
  credential summaries; both may be true, but the registry keeps this as a
  conflict until confirmed.
- T-18 Стася Толстая and T-19 Дмитрий Чеботарёв: named in organizer briefs for
  the April festival cycle and photos exist, but they are absent from production
  HTML jury cards.
- T-20 Александр Карпиловский, T-21 Майя Яницкая, T-22 Агапов: photo-only in the
  repo; do not publish as source-backed people until text proof exists.

## Proof Assets

- Official portraits: `HTML landing for claude/jury/` and the project root
  folder `фото преподавателей и ведущих мастерклассы/`.
- Official event gallery: `HTML landing for claude/photos/` and the project root
  folder `фото с фестиваля зимний театр `.
- In-use brand video: `HTML landing for claude/logo_video.webm` and
  `HTML landing for claude/logo_video.MOV`.
- Official social links: `https://vk.com/i_festgo` for the festival movement and
  `https://vk.com/producer_ya` for the producer center.
- Site testimonials: 4 winter-theatre testimonials on `winter-theatre.html`.
  They are useful as general social proof, not as attributable individual proof.

## Conflict Log

1. `website/` merges or reshapes some production facts and contains historical
   `ya-fest.ru` references. It is prototype-only.
2. Brand wording is `творческий кампус`; `лагерь` can be used only as a
   search/FAQ synonym, not as a separate product unless a new source says so.
3. The `21st/free leader` rules differ between children's campuses and festival
   participation packages; keep the source wording per product.
4. Named jury facts for `Театр у моря` and `Кино у моря` exist in markdown briefs
   but are not fully represented on production archive pages.
5. Some portrait files duplicate latin/Cyrillic slugs; public pages should pick
   one canonical image per person where possible.
6. VK album/post URLs for specific events are not yet inventoried.

## Phase 5 Handoff

- Use P1-P7 for page/proof expansion.
- Use only T-01 through T-09 for high-confidence teacher proof blocks without
  additional organizer confirmation.
- Use generic group VK links until event-specific VK album/post URLs are read and
  attached.
- Keep archive pages clearly marked as completed events.
