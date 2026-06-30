# Ya-Fest GEO QA Checklist

Status: Canonical recurring QA checklist for the Ya-Fest GEO surface.
Canonical domain: `https://yafest.ru/`
Production-oriented surface: `HTML landing for claude/`
React/Vite `website/` is prototype-only and is out of scope for this checklist.

## How to use

Run this checklist for any GEO-relevant change before declaring it done, and
on a recurring monthly cadence even when no change is shipped. A change is
GEO-relevant if it touches public HTML, sitemap, robots, JSON-LD, product
facts, teacher/proof claims, or canonical-domain wording.

Record each run in a handoff under [`../handoffs/`](../handoffs/) using the
template at [`../handoffs/TEMPLATE-geo-qa-recurring.md`](../handoffs/TEMPLATE-geo-qa-recurring.md).
If a check cannot be run, record the reason in the same handoff instead of
skipping it silently.

## Invariants

- New or changed product, teacher, venue, or proof facts MUST update
  [`../15-entity-memory/yafest-entity-registry.md`](../15-entity-memory/yafest-entity-registry.md)
  first or in the same change. HTML that contradicts the registry is a
  defect, not a new fact.
- Any deploy or public claim (site copy, schema, sitemap entry, llms.txt,
  webmaster submission) MUST have a dated handoff under
  [`../handoffs/`](../handoffs/) with the checks that were run.
- Source/evidence docs (briefs, registries, inventories, this checklist) are
  evidence of intent, not proof of implementation. Implementation is proven
  only by checks against the deployed surface and the static smoke tests.
- The static surface is the single source of truth for product facts. Do not
  treat the React/Vite prototype, archived briefs, or memory notes as
  current truth.
- Canonical domain is `https://yafest.ru/`. `https://ya-fest.ru` is not
  owned and MUST NOT appear as a canonical, sitemap, robots host, llms.txt
  pointer, or schema URL.

## 1. Canonical domain

Local checks from the repo root:

```bash
git grep -nE "ya-fest\.ru" -- "HTML landing for claude" docs
git grep -nE 'rel="canonical"' -- "HTML landing for claude"
```

- `ya-fest.ru` must only appear inside explicit "not owned / not canonical"
  documentation. Any other hit is a defect.
- Every public HTML page in `HTML landing for claude/` that exposes a
  canonical link must use the `https://yafest.ru/...` form.

Live checks against production:

```bash
for path in / facts.html camp.html theatre-cinema-sochi.html about.html; do
  curl -sSI "https://yafest.ru$path" | head -1
done
curl -sS https://yafest.ru/facts.html | rg 'rel="canonical"'
```

- Each URL must return `HTTP/2 200`.
- The canonical href on each checked page must be `https://yafest.ru/...`.

## 2. Sitemap and robots

Local checks:

```bash
python3 -c "import xml.etree.ElementTree as ET; ET.parse('HTML landing for claude/sitemap.xml')"
git grep -nE "<loc>|<lastmod>" -- "HTML landing for claude/sitemap.xml"
git grep -nE "Host:|Sitemap:" -- "HTML landing for claude/robots.txt"
```

- `sitemap.xml` must parse as well-formed XML.
- Every `<loc>` must use `https://yafest.ru/...`.
- `<lastmod>` for any page edited in this change must be updated to the
  edit date.
- `robots.txt` must contain `Host: yafest.ru` and
  `Sitemap: https://yafest.ru/sitemap.xml`.

Live checks:

```bash
curl -sS https://yafest.ru/robots.txt | rg "Host:|Sitemap:"
curl -sS https://yafest.ru/sitemap.xml \
  | rg -o "https://yafest.ru[^<]+" \
  | while read url; do printf "%s %s\n" "$(curl -sI -o /dev/null -w '%{http_code}' "$url")" "$url"; done
```

- The robots host and sitemap line must match the local file.
- Every URL in the live sitemap must return `200`. Any non-200 is a defect
  for this checklist.

## 3. Product facts

Source of truth:
[`../15-entity-memory/yafest-entity-registry.md`](../15-entity-memory/yafest-entity-registry.md).

For each product record (TEATRO КАМПУС, DANCE КАМПУС, ТЕАТР.КИНО.СОЧИ.,
festivals, archive events, master classes, laboratories, intensives) the
deployed page must expose, in HTML text, the facts the registry lists:
audience, place, dates, format, price or price rule, teachers, result,
and application conditions.

Local check:

```bash
node "HTML landing for claude/test-geo-static.mjs"
node "HTML landing for claude/test-camp-booking-form.mjs"
```

- Both static smoke tests must print their pass line.
- If a fact changed in HTML without a matching registry update, this is a
  defect of the invariant above and blocks completion.

Live spot check (run for any product whose facts changed):

```bash
curl -sS https://yafest.ru/camp.html | rg "id=\"teatro\"|id=\"dance\"|5–15 августа|79 000"
curl -sS https://yafest.ru/theatre-cinema-sochi.html | rg "5–15 августа|Сочи|Олеся Железняк"
curl -sS https://yafest.ru/facts.html | rg "ТЕАТР\.КИНО\.СОЧИ\.|camp.html#teatro|camp.html#dance|producer\.ya@mail\.ru"
```

- Any registry fact that fails to appear in the deployed HTML is a
  surface/registry drift defect.

## 4. Schema validity

Local check:

```bash
node "HTML landing for claude/test-geo-static.mjs"
```

The smoke test asserts presence of:

- `Organization` and `WebSite` JSON-LD on the home page.
- `FAQPage` JSON-LD on `camp.html`.
- `Event` JSON-LD on `theatre-cinema-sochi.html`.
- `WebPage` and `DefinedTermSet` JSON-LD on `facts.html`.

For any page whose JSON-LD blocks were edited, also run a manual JSON
parse to confirm well-formedness:

```bash
curl -sS https://yafest.ru/<page>.html \
  | python3 -c "import re,sys,json; \
      blocks=re.findall(r'<script type=\"application/ld\\+json\">(.*?)</script>', sys.stdin.read(), re.S); \
      [json.loads(b) for b in blocks]; \
      print(f'{len(blocks)} JSON-LD blocks parsed')"
```

- Every block must parse. A parse error is a defect.
- Schema must match what the visible page actually states. Schema is not
  a substitute for content. Do not add `Event`, `Course`, `Person`, or
  `FAQPage` blocks for facts that are not also present in the visible HTML
  and the entity registry.

External validators (manual, only when needed):

- `https://validator.schema.org/`
- `https://search.google.com/test/rich-results`

These are optional follow-ups, not required for every run.

## 5. Broken links

Local check:

```bash
git grep -nE 'href="[^"]+"' -- "HTML landing for claude" \
  | rg -v 'href="(#|mailto:|tel:|https?://)' \
  | rg -oE 'href="[^"]+"' | sort -u
```

- Each relative `href` must resolve to a file in `HTML landing for claude/`
  or to a known fragment on a real page.

Live check (run only for pages that changed or for the full sitemap on the
monthly cadence):

```bash
curl -sS https://yafest.ru/sitemap.xml \
  | rg -o "https://yafest.ru[^<]+" \
  | while read url; do printf "%s %s\n" "$(curl -sI -o /dev/null -w '%{http_code}' "$url")" "$url"; done
```

- Any non-200 is a defect. Record the URL and the redirect target if any.

## 6. Outdated dates and prices

Trigger this section whenever the calendar date passes a published event
date, a published price, or a published application deadline.

Local checks:

```bash
git grep -nE "20[0-9]{2}|РУБ|руб|79 000|5–15" -- "HTML landing for claude"
```

- For every dated claim, confirm against the entity registry whether the
  date is still current.
- For every price claim, confirm against the registry whether the price
  rule is still current.
- An expired date or price on a public page is a defect even if no code
  changed.

Live spot check:

```bash
curl -sS https://yafest.ru/facts.html | rg "20[0-9]{2}|РУБ|руб"
curl -sS https://yafest.ru/camp.html | rg "20[0-9]{2}|РУБ|руб"
curl -sS https://yafest.ru/theatre-cinema-sochi.html | rg "20[0-9]{2}|РУБ|руб"
```

- Each dated or priced claim must still hold on the current calendar date.

## 7. Teacher and proof changes

Source of truth:
[`../15-entity-memory/yafest-entity-registry.md`](../15-entity-memory/yafest-entity-registry.md),
[`../15-entity-memory/teacher-proof-inventory.md`](../15-entity-memory/teacher-proof-inventory.md).

When a teacher, jury member, archive participant, photo asset, VK post, or
review is added, removed, or re-described:

- Update the entity registry and the teacher/proof inventory first or in
  the same change.
- Confirm the proof type (visual, social, archive, organizer brief) and
  add a source reference.
- Do not invent VK album URLs, archive winners, or review quotes.
- Do not promote photo-only people into public facts.
- Do not replace a clean official email with an obfuscated form.

Local check:

```bash
git grep -nE "Олеся Железняк|Вениамин Фильштинский|Григорий Заславский|Стася Толстая|Дмитрий Чеботар|producer\.ya@mail\.ru" -- "HTML landing for claude"
node "HTML landing for claude/test-geo-static.mjs"
```

- Any teacher or proof block that the smoke test exercises must still pass.
- Any new teacher or proof block must be backed by the registry/inventory.

Live spot check:

```bash
curl -sS https://yafest.ru/festivals.html | rg "Григорий Заславский|Вениамин Фильштинский"
curl -sS https://yafest.ru/theatre-sea.html | rg "Жюри фестивальной серии|Стася Толстая"
curl -sS https://yafest.ru/cinema-sea.html | rg "Жюри фестивальной серии|Дмитрий Чеботар"
curl -sS https://yafest.ru/laboratories.html | rg "mailto:producer\.ya@mail\.ru"
```

- Any missing or altered named-proof block is a defect.

## Completion rule

A run is complete when:

- Every section above was either run or recorded as unable-to-run with
  reason in the handoff.
- All defects found were either fixed in the same change or filed as a
  follow-up with a date and owner in the handoff.
- The dated handoff was written under [`../handoffs/`](../handoffs/).
- Where the change shipped to production, the handoff includes the live
  checks from sections 1, 2, 4, 5, 6, and 7 as appropriate.
