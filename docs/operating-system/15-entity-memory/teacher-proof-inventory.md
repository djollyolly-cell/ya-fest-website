# Ya-Fest Teacher and Proof Inventory — Phase 4/5

Date: 2026-06-29
Status: Source-backed working inventory. NOT the canonical registry. Companion to `docs/operating-system/15-entity-memory/product-facts-inventory.md`. Feeds the future `yafest-entity-registry.md` (Phase 4 deliverable per `docs/operating-system/goals/2026-06-29-yafest-geo-phase-goals.md:128`).

## Scope and rules

- Person facts only: canonical name, aliases, role/credential summary, related products/programs, source refs, image refs.
- Visual proof = site images and project photo folders (per `CONTRACTS.md:9`).
- Social proof = reviews, VK posts/albums, site testimonials (per `CONTRACTS.md:10`).
- Production-site facts on `HTML landing for claude/` are treated as current (`CONTRACTS.md:8`).
- React/Vite `website/` is prototype-only and not used as source of truth here.
- Credentials traceable only to an image filename or alt attribute are flagged as image-only and pending external verification.
- Source documents in repo root (Russian-language `*.md`) are organizer-authored briefs and can be used as fact source; conflicts vs site are noted.

## Source map

Site (production HTML, `HTML landing for claude/`):
- `index.html` — site-wide jury cards (lines 447–468).
- `camp.html` — teacher cards for ТЕАТРО / DANCE / ТЕАТР.КИНО.СОЧИ. summaries (lines 269–273, 289–294, 308–312) and full teacher grid (lines 324–400).
- `theatre-cinema-sochi.html` — adult-campus teacher grid (lines 344–399) and program references (lines 275–340).
- `theatre-sea.html` — generic jury wording only (lines 284–285); no named teachers.
- `cinema-sea.html` — no named teachers; references «мастер-классы и мастерские от членов жюри».
- `winter-theatre.html` — gallery (lines 314–344) + 4 anonymized reviews (lines 346–380).
- `laboratories.html` — generic teacher wording only.
- `about.html` — names list as proof of program (lines 186–187).
- `facts.html` — general program description, no person names.
- `llms.txt` — canonical domain, VK group, contacts (lines 3–6, 37).

Source documents (organizer briefs in repo root):
- `pedagogi_i_napravleniya.md` — Фереде, Влад Пургаз Коченов, Семён Шалаев.
- `master_klassy_i_intensivy.md` — Любский, Черкасский, Галибин, Новикова, Фильштинский, Железняк.
- `teatr_kino_sochi_tvorcheskiy_kampus.md` — adult-campus teacher attribution.
- `театр_у_моря_2026 (1).md` — jury for «Театр у моря»: Толстая, Чеботарёв, Фильштинский, Черкасский, Кузнецова, Новикова.
- `кино_и_театр_у_моря_2026.md` — same jury list, same wording.
- `зимний_театр_2026.md` — jury TBA wording, no names.

Photo folders:
- `HTML landing for claude/jury/` — 27 portrait files, named both in latin and Cyrillic.
- `HTML landing for claude/photos/` — 25 event photos used in `winter-theatre.html` gallery.
- `фото преподавателей и ведущих мастерклассы/` (repo root) — 9 portraits (subset of `jury/`).
- `фото с фестиваля зимний театр ` (repo root, trailing space) — 25 originals matching `HTML landing for claude/photos/`.

Video / motion assets:
- `HTML landing for claude/logo_video.webm` + `logo_video.MOV` — used in hero `<video>` (`index.html:307–310`).
- `HTML landing for claude/globe.webp` + `HTML landing for claude/globe.mp4` — listed in repo but not currently referenced by HTML (hero uses logo video).
- `IMG_8041.MP4` (repo root, also stored at `HTML landing for claude/globe.mp4` is a different file) — not referenced from site.
- `REC-20260621124105.mp4` (repo root) — not referenced from site.

## People inventory

Each entry: canonical name → aliases → role/credential summary (source) → related programs/products → image file(s) → external/social refs → Phase 5 readiness note.

### T-01. Олеся Железняк
- Aliases: «Олеся Владимировна Железняк».
- Role/credential: Народная артистка РФ (2026); актриса театра, кино, телевидения и дубляжа, певица, телеведущая. Sources: `master_klassy_i_intensivy.md:127–131`, `camp.html:333`, `theatre-cinema-sochi.html:352`.
- Related products: ТЕАТРО КАМПУС — актёрское мастерство (`camp.html:270, 331–334`); ТЕАТР.КИНО.СОЧИ. — актёрское мастерство (`teatr_kino_sochi_tvorcheskiy_kampus.md:33–36`, `theatre-cinema-sochi.html:347–354`).
- Images: `HTML landing for claude/jury/олеся железняк.jpg`; original at `фото преподавателей и ведущих мастерклассы/олеся железняк.jpg`.
- Phase 5 readiness: portrait + product mapping + named credential — ready.

### T-02. Вениамин Михайлович Фильштинский
- Aliases: «Вениамин Фильштинский».
- Role/credential: театральный режиссёр, профессор, заведующий кафедрой актёрского мастерства и режиссуры РГИСИ; председатель совета театральных педагогов СТД РФ; учитель Константина Хабенского и Михаила Пореченкова. Sources: `master_klassy_i_intensivy.md:110–121`, `index.html:460`, `theatre-cinema-sochi.html:357–362`.
- Related products: ТЕАТР.КИНО.СОЧИ. — режиссёрская театральная лаборатория (`teatr_kino_sochi_tvorcheskiy_kampus.md:40–50`, `theatre-cinema-sochi.html:356–363`); жюри «Театр у моря» / «Кино у моря» (`театр_у_моря_2026 (1).md:30`).
- Images: `HTML landing for claude/jury/filshtinsky.jpg`, `HTML landing for claude/jury/Вениамин Фильштинский.jpg`; original at `фото преподавателей и ведущих мастерклассы/Вениамин Фильштинский.jpg`.
- Phase 5 readiness: ready.

### T-03. Радда Вячеславовна Новикова
- Aliases: «Радда Новикова», «Рада Новикова» (site jury card variant — `index.html:458`).
- Role/credential: российский режиссёр кино и телевидения; режиссура сериалов «Девушки с Макаровым», «Интерны», «Два отца, два сына»; фильм «Сумасшедшая императрица», 2025. Sources: `master_klassy_i_intensivy.md:44–55`, `camp.html:341`, `theatre-cinema-sochi.html:366–371`.
- Related products: ТЕАТРО КАМПУС / ТЕАТР.КИНО.СОЧИ. — кино-лаборатория (`camp.html:271, 336–342`, `theatre-cinema-sochi.html:364–372`); жюри «Театр у моря» / «Кино у моря» (`театр_у_моря_2026 (1).md:33`).
- Images: `HTML landing for claude/jury/Радда Новикова.jpg`, `HTML landing for claude/jury/рада новикова.jpg`; original at `фото преподавателей и ведущих мастерклассы/Радда Новикова.jpg`.
- Phase 5 readiness: ready. Alias resolution «Радда» vs «Рада» pending an explicit organizer decision (see Conflicts).

### T-04. Александр Владимирович Галибин
- Aliases: «Александр Галибин».
- Role/credential: советский и российский актёр театра, кино и озвучивания, режиссёр театра и кино, телеведущий; Народный артист РФ (2006); лауреат премии Президента РФ (2023); руководит актёрской мастерской во ВГИКе. Sources: `master_klassy_i_intensivy.md:26–40`, `index.html:454`, `theatre-cinema-sochi.html:374–381`.
- Related products: ТЕАТРО КАМПУС / ТЕАТР.КИНО.СОЧИ. — киновстречи и мастер-классы (`camp.html:273, 344–351`, `theatre-cinema-sochi.html:373–381`); сайт-жюри-карточка на главной (`index.html:454`).
- Images: `HTML landing for claude/jury/galibin.jpg`, `HTML landing for claude/jury/александр галибин.jpg`; event photo `HTML landing for claude/photos/галибин на сцене.JPG`; original at `фото преподавателей и ведущих мастерклассы/александр галибин.jpg`.
- Phase 5 readiness: ready, with on-stage event photo available.

### T-05. Сергей Дмитриевич Черкасский
- Aliases: «Сергей Черкасский».
- Role/credential: театральный режиссёр, педагог, исследователь театра; профессор; доктор искусствоведения; лауреат международной премии К. С. Станиславского; заслуженный деятель искусств; Санкт-Петербург. Sources: `master_klassy_i_intensivy.md:14–22`, `index.html:457`, `театр_у_моря_2026 (1).md:31`, `theatre-cinema-sochi.html:384–390`.
- Related products: ТЕАТРО КАМПУС / ТЕАТР.КИНО.СОЧИ. — лаборатория «Игра в поступление» (`camp.html:272, 352–359`, `theatre-cinema-sochi.html:383–391`); жюри «Театр у моря» / «Кино у моря» (`театр_у_моря_2026 (1).md:31`).
- Images: `HTML landing for claude/jury/cherkassky.jpg`, `HTML landing for claude/jury/сергей черкасский.jpg`; original at `фото преподавателей и ведущих мастерклассы/сергей черкасский.jpg`.
- Phase 5 readiness: ready.

### T-06. Виталий Владимирович Любский
- Aliases: «Виталий Любский».
- Role/credential: актёр театра и кино, режиссёр, педагог; доцент РГИСИ. Sources: `master_klassy_i_intensivy.md:4–11`, `index.html:459`, `theatre-cinema-sochi.html:393–399`.
- Related products: ТЕАТРО КАМПУС / ТЕАТР.КИНО.СОЧИ. — тренинги для абитуриентов, «Игра в поступление» (`camp.html:272, 360–367`, `theatre-cinema-sochi.html:392–399`).
- Images: `HTML landing for claude/jury/виталий любский.jpg`; original at `фото преподавателей и ведущих мастерклассы/Виталий любский.jpg`.
- Phase 5 readiness: ready.

### T-07. Фереде (Фереде Кананова)
- Aliases: «Фереде» (sole name on site, `camp.html:379`); «Фереде Кананова» (photo filename only).
- Role/credential: танцор-хореограф, стаж 6–7 лет; создатель команды The Flow; участник «Лиги танцев», 2 сезон; действующий педагог школы танцев MDC BRG; призёр / участник Strelka, Offside, Volga Champ, Fame Your Choreo. Sources: `pedagogi_i_napravleniya.md:3–22`, `camp.html:376–382`.
- Related products: DANCE КАМПУС — Afro Choreo (`camp.html:290, 374–382`).
- Images: `HTML landing for claude/jury/фереде кананова (педагог танцы).jpg`; original at `фото преподавателей и ведущих мастерклассы/фереде кананова (педагог танцы).jpg`.
- Phase 5 readiness: ready. Full surname «Кананова» appears only in photo filename and source brief — surface as alias, do not invent academic credential.

### T-08. Влад Пургаз Коченов
- Aliases: «Влад Пургаз Коченов», «Влад (Пургаз) Коченов» (photo filename), «Влад Коченов».
- Role/credential: хореограф, постановщик, актёр; выпускник Московского института культуры и искусств; призёр чемпионатов в составе Oomph Factor, Fame Your Choreo, 818 Project, Respect; хореограф проекта «Фитнес против вируса» в онлайн-кинотеатре OKKO; педагог танцевальной студии MDC NRG; Москва. Sources: `pedagogi_i_napravleniya.md:37–57`, `camp.html:384–390`.
- Related products: DANCE КАМПУС — Jazz Funk (`camp.html:291, 383–390`).
- Images: `HTML landing for claude/jury/Влад (Пургаз) коченов.jpg`; original at `фото преподавателей и ведущих мастерклассы/Влад (Пургаз) коченов.jpg`.
- Phase 5 readiness: ready.

### T-09. Семён Шалаев
- Aliases: «Семен Шалаев».
- Role/credential: педагог и артист в сфере современной хореографии; заведующий отделением современной хореографии в МХУ при МГАТТ «Гжель»; ведущий преподаватель АНО ПО «Школа классического танца Ледях»; член Союза театральных деятелей РФ; экс-солист театра танца «нОга»; участник Топ-30 шоу «ТАНЦЫ» на ТНТ, 3 сезон. Sources: `pedagogi_i_napravleniya.md:61–77`, `camp.html:392–398`.
- Related products: DANCE КАМПУС — современная хореография (`camp.html:292, 391–399`).
- Images: `HTML landing for claude/jury/семен шалаев.jpg`; original at `фото преподавателей и ведущих мастерклассы/семен шалаев.jpg`.
- Phase 5 readiness: ready.

### T-10. Григорий Заславский
- Aliases: «Григорий Заславский».
- Role/credential: театральный критик, театровед, журналист; с 2016 года — ректор ГИТИСа. Source: `index.html:453` (HTML jury card only). Not present in MD organizer briefs.
- Related products: жюри-карточка на главной (`index.html:453`); не привязан к конкретному фестивалю в source-докуменах.
- Images: `HTML landing for claude/jury/zaslavsky.jpg`.
- Phase 5 readiness: ready as a jury-cards face; product linkage to a specific festival/program is not in repo — pending organizer confirmation.

### T-11. Татьяна Васильева
- Aliases: none captured.
- Role/credential: старший преподаватель кафедры сценической речи ГИТИСа. Source: `index.html:455` (HTML jury card only).
- Related products: жюри на главной (`index.html:455`); product linkage not in repo.
- Images: `HTML landing for claude/jury/Татьяна Васильева.jpg`, `HTML landing for claude/jury/vasilyeva.jpg`.
- Phase 5 readiness: photo + site credential present; product linkage and biographical depth pending external verification.

### T-12. Татьяна Морозова
- Aliases: none captured.
- Role/credential: старший педагог по актёрскому мастерству ГИТИСа. Source: `index.html:456` (HTML jury card only).
- Related products: жюри на главной (`index.html:456`); product linkage not in repo.
- Images: `HTML landing for claude/jury/татьяна морозова.jpg`.
- Phase 5 readiness: photo + site credential; product linkage and biographical depth pending external verification.

### T-13. Ирина Савицкова (Савицкая-Галибина)
- Aliases: «Ирина Савицкова» (`index.html:461`); «Ирина Савицкая-Галибина» (photo filename — credential string «гитис, вгик, актриса»).
- Role/credential: actress; «ГИТИС, ВГИК, актриса». Source: `index.html:461`. Filename-derived credential ⇒ image-only.
- Related products: жюри-карточка на главной; no product linkage in repo.
- Images: `HTML landing for claude/jury/ирина савицкая-галибина гитис, вгик, актриса.jpg`.
- Phase 5 readiness: pending external verification of preferred surname form and credential.

### T-14. Ирина Абросимова
- Aliases: «Ирина Абросимова» (`index.html:462` text), «Ирина Амбросимова» (`index.html:462` alt-attribute), «ирина амбросиева» (filename slug).
- Role/credential: актриса театра и кино. Source: `index.html:462` (HTML jury card only).
- Related products: жюри на главной; no product linkage in repo.
- Images: `HTML landing for claude/jury/ирина амбросиева.jpg`.
- Phase 5 readiness: pending — name spelling must be confirmed before public publishing.

### T-15. Елена Исаева
- Aliases: none captured.
- Role/credential: драматург, сценарист, художественный руководитель курса «Драматургия» в ГИТИСе. Source: `index.html:463` (HTML jury card only).
- Related products: жюри на главной; no product linkage in repo.
- Images: `HTML landing for claude/jury/елена Исаева.jpg`.
- Phase 5 readiness: photo + site credential; product linkage pending.

### T-16. Антонина Кузнецова
- Aliases: «Антонина Кузнецова».
- Role/credential: site (`index.html:464`) — «Заведующая кафедрой сценической речи ГИТИСа»; MD briefs (`театр_у_моря_2026 (1).md:32`, `кино_и_театр_у_моря_2026.md:66`) — «Советская и российская актриса, мастер художественного слова». Two sources disagree — see Conflicts.
- Related products: жюри «Театр у моря» / «Кино у моря» (`театр_у_моря_2026 (1).md:32`); site-wide jury card on home (`index.html:464`).
- Images: `HTML landing for claude/jury/антонина кузнецова.png`.
- Phase 5 readiness: photo ready; credential needs organizer decision before publishing.

### T-17. Денис Степанов
- Aliases: none captured.
- Role/credential: актёр театра и кино, педагог по актёрскому мастерству. Source: `index.html:465` (HTML jury card only).
- Related products: жюри на главной; no product linkage in repo.
- Images: `HTML landing for claude/jury/денис степанов.png`.
- Phase 5 readiness: photo + site credential present; product linkage pending.

### T-18. Стася Толстая
- Aliases: «Стася Толстая».
- Role/credential: актриса, сценарист, режиссёр; ВГИК (мастерская Сергея Соловьёва); Театр Наций, театр им. Вахтангова; фильмы «Гроза», «Тайное влечение», «Семейное счастье»; прапраправнучка Льва Толстого. Source: `театр_у_моря_2026 (1).md:28`, `кино_и_театр_у_моря_2026.md:62`. Not on production HTML jury section.
- Related products: жюри «Театр у моря» / «Кино у моря» (organizer-brief level).
- Images: `HTML landing for claude/jury/tolstaya.jpg`.
- Phase 5 readiness: photo + credential text exist; she is NOT in HTML jury cards — surface gap (see Conflicts).

### T-19. Дмитрий Чеботарёв
- Aliases: «Дмитрий Чеботарёв», «Дмитрий Чеботарев».
- Role/credential: актёр Электротеатра Станиславский (Щукинское училище); «Майор Гром: Чумной доктор», «Вампиры средней полосы», «Фитнес», «Карамора»; лауреат премии «Золотой лист». Source: `театр_у_моря_2026 (1).md:29`, `кино_и_театр_у_моря_2026.md:63`. Not on production HTML jury section.
- Related products: жюри «Театр у моря» / «Кино у моря».
- Images: `HTML landing for claude/jury/дмитрий чеботарев.png`.
- Phase 5 readiness: photo + credential text exist; HTML jury cards do not list him — surface gap.

### T-20. Александр Карпиловский
- Aliases: none captured.
- Role/credential: not present in any text source in repo.
- Related products: none mapped in repo.
- Images: `HTML landing for claude/jury/александр карпиловский.png` (image-only).
- Phase 5 readiness: pending external verification — image present but no organizer text source.

### T-21. Майя Яницкая
- Aliases: none captured.
- Role/credential: not present in any text source in repo.
- Related products: none mapped in repo.
- Images: `HTML landing for claude/jury/Майя яницкая.jpg` (image-only).
- Phase 5 readiness: pending external verification.

### T-22. Агапов (имя не зафиксировано)
- Aliases: filename-only photo (`agapov.jpg`).
- Role/credential: not present in any text source in repo. No site reference.
- Related products: none mapped in repo.
- Images: `HTML landing for claude/jury/agapov.jpg` (image-only).
- Phase 5 readiness: pending external verification — clarify first/last name and role before any public surface.

## Visual proof inventory

### Site portrait catalog — `HTML landing for claude/jury/`

Used by `index.html`, `camp.html`, `theatre-cinema-sochi.html`. Total 27 files. Per-person mapping above (T-01..T-22). Latin-named files (`zaslavsky.jpg`, `galibin.jpg`, `cherkassky.jpg`, `filshtinsky.jpg`, `tolstaya.jpg`, `vasilyeva.jpg`, `agapov.jpg`) appear to be older slugs and partially shadow Cyrillic-named files for the same person; both can be used, but the registry should choose one canonical slug per person.

### Site event-photo catalog — `HTML landing for claude/photos/`

25 files, all referenced from `winter-theatre.html:316–344` gallery. Tagged with generic alt text («Выступление», «Творческий процесс», etc.) except the five descriptive files: `галибин на сцене.JPG`, `кого-то из них.JPG`, `рождение звезды.JPG`, `слушайте!.JPG`, `эмоции.JPG`. The only person-identifiable event photo is `галибин на сцене.JPG` → Александр Галибин (T-04). All other photos are useful as ambience/festival proof but not for per-teacher pages.

### Project root portrait folder — `фото преподавателей и ведущих мастерклассы/`

9 originals: Вениамин Фильштинский, Виталий любский, Влад (Пургаз) коченов, Радда Новикова, александр галибин, олеся железняк, семен шалаев, сергей черкасский, фереде кананова (педагог танцы). Each maps to a teacher in T-01..T-09 and is already mirrored under `HTML landing for claude/jury/`. Use this folder as canonical-original / higher-resolution source if needed for Phase 5 reprocessing.

### Project root event-photo folder — `фото с фестиваля зимний театр ` (trailing space)

25 originals matching `HTML landing for claude/photos/` 1:1 by filename. Same content as the site gallery; reuse as canonical-original.

### Video / motion assets

- `HTML landing for claude/logo_video.webm` + `logo_video.MOV` — in-use, hero of `index.html` (lines 307–310).
- `HTML landing for claude/globe.mp4` + `globe.webp` — not currently referenced in HTML files; CSS class `.hero-globe video` exists at `index.html:87`, but no `<source>` for `globe.*` is wired in. Treat as available-but-unused brand asset.
- `IMG_8041.MP4` (repo root) — unreferenced; provenance not stated in source docs. Pending external review.
- `REC-20260621124105.mp4` (repo root) — unreferenced. Pending external review.
- `photo_2026-03-03_08-52-34.jpg`, `photo_2026-03-03_12-12-23.jpg` (repo root) — unreferenced. Pending external review.

## Social proof inventory

### VK links found in site/docs

- `https://vk.com/producer_ya` — Продюсерский центр «Я». Source refs: `index.html:17`, `index.html:544`, `index.html:624`, `театр_у_моря_2026 (1).md:151`, `кино_и_театр_у_моря_2026.md:122`, `зимний_театр_2026.md:144`. Marked as canonical organizer VK in `CONTRACTS.md`-adjacent material.
- `https://vk.com/i_festgo` — Группа фестивалей Я-Фест. Source refs: `index.html:18`, `index.html:393`, `index.html:545`, `index.html:603`, `index.html:625`, `cinema-sea.html:198`, `cinema-sea.html:323`, `llms.txt:37`, all three festival MD docs.

VK album/post-level proof links (e.g. specific festival album, specific teacher post) are NOT present in repo. Per `CONTRACTS.md:10`, such links may be added once they are read and classified — pending external research.

### Site testimonials

- `winter-theatre.html:346–380` — 4 reviews. Each is 5-star, attributed only by city/category («Театральная студия, Самара», «Театральная школа, Казань», «Молодёжный театр, Екатеринбург», «Детская студия, Новосибирск»). Useful as ambient social proof; not usable as per-person, per-teacher proof. No verifiable attribution.

### External reviews

No external review sources are linked in the repo. Production HTML does not embed Google Maps reviews, Yandex Maps reviews, or 2GIS reviews. Pending external verification for Phase 5.

## Phase 5 readiness summary

Group A — full proof bundle ready (portrait + named credential in MD brief + product mapping on production HTML):
- T-01 Олеся Железняк, T-02 Вениамин Фильштинский, T-03 Радда Новикова, T-04 Александр Галибин, T-05 Сергей Черкасский, T-06 Виталий Любский, T-07 Фереде, T-08 Влад Пургаз Коченов, T-09 Семён Шалаев.

Group B — portrait + site credential, no MD brief credential and no per-product mapping:
- T-10 Григорий Заславский, T-11 Татьяна Васильева, T-12 Татьяна Морозова, T-15 Елена Исаева, T-17 Денис Степанов.

Group C — portrait exists but name/credential consistency unresolved:
- T-13 Ирина Савицкова / Савицкая-Галибина, T-14 Ирина Абросимова / Амбросимова, T-16 Антонина Кузнецова (two diverging credentials).

Group D — in organizer briefs but absent from production HTML jury section:
- T-18 Стася Толстая, T-19 Дмитрий Чеботарёв.

Group E — photo only, no text source anywhere in repo:
- T-20 Александр Карпиловский, T-21 Майя Яницкая, T-22 Агапов (имя не зафиксировано).

## Conflict / external-verification notes

1. **«Радда» vs «Рада» Новикова.** Site jury card uses «Рада» (`index.html:458` text); all other site cards and alt-tags use «Радда» (`camp.html:337`, `theatre-cinema-sochi.html:366`, `master_klassy_i_intensivy.md:44`). Default: canonical = «Радда Новикова»; «Рада» is a one-place site typo to fix before Phase 5 publishing.
2. **Антонина Кузнецова credentials.** Production HTML calls her «Заведующая кафедрой сценической речи ГИТИСа» (`index.html:464`). Both organizer festival briefs (`театр_у_моря_2026 (1).md:32`, `кино_и_театр_у_моря_2026.md:66`) call her «Советская и российская актриса, мастер художественного слова». Different descriptors. Pending organizer decision; if both are true, surface both in registry.
3. **Ирина Савицкова vs Ирина Савицкая-Галибина vs Ирина Савицкая.** `index.html:461` jury card text uses «Савицкова»; image filename uses «Савицкая-Галибина». Credential «ГИТИС, ВГИК, актриса» is image-filename-only. Pending external verification.
4. **Ирина Амбросимова vs Ирина Абросимова.** Same card on `index.html:462` carries the name in two forms (alt vs text). Filename is third form («амбросиева»). Pending external verification.
5. **Толстая and Чеботарёв missing from HTML jury cards.** Both listed in organizer briefs (`театр_у_моря_2026 (1).md:28–29`) as jury for Театр/Кино у моря 2026. Production `index.html` jury section does not include them. Either site is out of date or organizer brief is aspirational — pending organizer decision.
6. **Карпиловский, Яницкая, Агапов — photo only.** Image files exist in `HTML landing for claude/jury/` but no text source ties them to any role, credential, or program. Cannot be published on Phase 5 pages without external verification (organizer brief or VK album reference).
7. **Latin vs Cyrillic photo filenames in `jury/`.** For Галибин, Фильштинский, Черкасский, Новикова, Заславский, Толстая, Васильева there is both a latin-named and Cyrillic-named file. Registry should pick one canonical slug per person to avoid duplicate proof references.
8. **Reviews are anonymized.** `winter-theatre.html:346–380` testimonials are city-only attributions and cannot serve as per-teacher proof. Phase 5 person pages need either verifiable VK album posts or first-name+collective attributions sourced from organizer.

## Handoff

This file complements `docs/operating-system/15-entity-memory/product-facts-inventory.md` on the person/proof side. It does not edit the canonical registry. Next responsible owner should:

- Resolve the eight conflict items above with the organizer.
- Add VK album / post-level proof references after reading and classifying them (`CONTRACTS.md:10`).
- Decide canonical slugs for `jury/` portraits before Phase 5 page generation.
- After resolution, fold T-01..T-22 into the future `yafest-entity-registry.md` and update `STATE.md`.
