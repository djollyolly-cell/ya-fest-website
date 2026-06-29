# Ya-Fest Static GEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the first GEO pass on the current production-oriented static HTML surface for Ya-Fest.

**Architecture:** The implementation targets `HTML landing for claude/` and `https://yafest.ru`, because repository evidence marks this as the current production-oriented surface and the user confirmed this is the owned public domain. React/Vite under `website/` remains untouched in this pass and is treated as a local prototype/experimental track. GEO facts live visibly in HTML first, then in `facts.html`, `llms.txt`, sitemap, and JSON-LD.

**Tech Stack:** Static HTML, inline CSS, Schema.org JSON-LD, Node.js smoke-test scripts using `node:fs` and `node:assert`, existing operating docs under `docs/operating-system/`.

## Global Constraints

- Target production-oriented surface: `HTML landing for claude/`.
- Target canonical domain: `https://yafest.ru`.
- Do not implement GEO on `website/` React/Vite in this pass.
- Do not deploy, edit DNS, or change external accounts in this pass.
- Do not create `PHASES.md`; use `STAGES.md`.
- Source docs are evidence, not proof of completed implementation.
- Keep "творческий кампус" as the brand wording; use "лагерь" only in explanatory FAQ or search-intent blocks.
- Do not invent dates, prices, teacher credentials, inclusions, or product facts that are not present in source docs or current static HTML.

---

## File Structure

- Create `HTML landing for claude/test-geo-static.mjs`: static GEO smoke tests for key files, links, JSON-LD, sitemap, `llms.txt`, and facts page.
- Create `HTML landing for claude/facts.html`: plain, crawlable facts page for Ya-Fest ecosystem.
- Create `HTML landing for claude/llms.txt`: AI-readable summary and URL map.
- Modify `HTML landing for claude/index.html`: add facts/answer blocks, link to facts page, and expand JSON-LD.
- Modify `HTML landing for claude/about.html`: make proof and identity facts more explicit.
- Modify `HTML landing for claude/camp.html`: add campus answer/FAQ block and JSON-LD for FAQ/product list.
- Modify `HTML landing for claude/theatre-cinema-sochi.html`: add quotable adult campus facts and JSON-LD.
- Modify `HTML landing for claude/sitemap.xml`: add `facts.html` and `llms.txt` if accepted by sitemap policy; if `llms.txt` is omitted from sitemap, keep it linked from robots and facts page.
- Modify `HTML landing for claude/robots.txt`: keep `Host: yafest.ru`, sitemap, and add no disallow rules.
- Modify `docs/operating-system/05-brand-geo-content/STATE.md`: record implemented GEO files after checks pass.
- Modify `docs/operating-system/10-qa-reviews/STATE.md`: record static GEO verification command.
- Create `docs/operating-system/handoffs/2026-06-29-static-geo-pass.md`: implementation handoff.

---

### Task 1: Static GEO Smoke Test

**Files:**
- Create: `HTML landing for claude/test-geo-static.mjs`

**Interfaces:**
- Consumes: static HTML files in `HTML landing for claude/`.
- Produces: `node "HTML landing for claude/test-geo-static.mjs"` command used by later tasks and handoff.

- [ ] **Step 1: Create the failing test file**

Create `HTML landing for claude/test-geo-static.mjs` with this exact content:

```js
import { readFileSync, existsSync } from 'node:fs';
import { strict as assert } from 'node:assert';

const base = new URL('./', import.meta.url);

function read(name) {
  return readFileSync(new URL(name, base), 'utf8');
}

function hasJsonLd(html, type) {
  const scripts = [...html.matchAll(/<script type="application\\/ld\\+json">([\\s\\S]*?)<\\/script>/g)];
  return scripts.some((match) => {
    try {
      const parsed = JSON.parse(match[1]);
      if (Array.isArray(parsed['@graph'])) {
        return parsed['@graph'].some((node) => node['@type'] === type);
      }
      return parsed['@type'] === type;
    } catch {
      return false;
    }
  });
}

const requiredFiles = [
  'index.html',
  'about.html',
  'camp.html',
  'theatre-cinema-sochi.html',
  'facts.html',
  'llms.txt',
  'sitemap.xml',
  'robots.txt',
];

for (const file of requiredFiles) {
  assert.equal(existsSync(new URL(file, base)), true, `${file} should exist`);
}

const index = read('index.html');
const about = read('about.html');
const camp = read('camp.html');
const adult = read('theatre-cinema-sochi.html');
const facts = read('facts.html');
const llms = read('llms.txt');
const sitemap = read('sitemap.xml');
const robots = read('robots.txt');

assert.match(robots, /Host:\\s*yafest\\.ru/, 'robots should keep yafest.ru host');
assert.match(robots, /Sitemap:\\s*https:\\/\\/yafest\\.ru\\/sitemap\\.xml/, 'robots should point to yafest sitemap');

assert.match(sitemap, /<loc>https:\\/\\/yafest\\.ru\\/facts\\.html<\\/loc>/, 'sitemap should include facts.html');
assert.doesNotMatch(sitemap, /ya-fest\\.ru/, 'static sitemap must not use ya-fest.ru');

assert.match(index, /href="facts\\.html"/, 'home page should link to facts page');
assert.match(index, /Коротко о Я-Фест/i, 'home page should include quotable Ya-Fest facts');
assert.match(index, /творческ(ая|ую|ие|их|ий) платформ/i, 'home page should describe Ya-Fest as a creative platform');
assert.equal(hasJsonLd(index, 'Organization'), true, 'home page should include Organization JSON-LD');
assert.equal(hasJsonLd(index, 'WebSite'), true, 'home page should include WebSite JSON-LD');

assert.match(about, /Продюсерский центр «Я»/, 'about page should name the organizer');
assert.match(about, /доказатель/i, 'about page should include proof/trust wording');

assert.match(camp, /часто ищут как/i, 'camp page should include careful search-intent wording');
assert.match(camp, /творческие кампусы/i, 'camp page should keep creative campus wording');
assert.equal(hasJsonLd(camp, 'FAQPage'), true, 'camp page should include FAQPage JSON-LD');

assert.match(adult, /5–15 августа/, 'adult campus page should expose dates');
assert.match(adult, /Сочи/, 'adult campus page should expose location');
assert.match(adult, /Олеся Железняк/, 'adult campus page should expose source-backed teacher fact');

assert.match(facts, /<link rel="canonical" href="https:\\/\\/yafest\\.ru\\/facts\\.html">/, 'facts page should have canonical URL');
assert.match(facts, /Я-Фест — творческая платформа/i, 'facts page should lead with the platform definition');
assert.match(facts, /ТЕАТР\\.КИНО\\.СОЧИ\\./, 'facts page should include adult campus');
assert.match(facts, /producer\\.ya@mail\\.ru/, 'facts page should expose official email');

assert.match(llms, /^# Я-Фест/m, 'llms.txt should start with Ya-Fest heading');
assert.match(llms, /https:\\/\\/yafest\\.ru\\/facts\\.html/, 'llms.txt should link facts page');
assert.match(llms, /Do not use https:\\/\\/ya-fest\\.ru as canonical/i, 'llms.txt should clarify non-owned domain');
assert.match(llms, /творческий кампус/i, 'llms.txt should preserve brand wording');

console.log('static GEO checks passed');
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
node "HTML landing for claude/test-geo-static.mjs"
```

Expected: FAIL because `facts.html` and `llms.txt` do not exist yet.

---

### Task 2: Facts Page and LLM Summary

**Files:**
- Create: `HTML landing for claude/facts.html`
- Create: `HTML landing for claude/llms.txt`
- Modify: `HTML landing for claude/sitemap.xml`
- Modify: `HTML landing for claude/robots.txt`
- Test: `HTML landing for claude/test-geo-static.mjs`

**Interfaces:**
- Consumes: `teatr_kino_sochi_tvorcheskiy_kampus.md`, `master_klassy_i_intensivy.md`, `pedagogi_i_napravleniya.md`, existing static HTML content.
- Produces: crawlable `facts.html`, AI-readable `llms.txt`, and sitemap entries used by Task 3 and Task 4.

- [ ] **Step 1: Run the failing test from Task 1**

Run:

```bash
node "HTML landing for claude/test-geo-static.mjs"
```

Expected: FAIL on missing `facts.html` and `llms.txt`.

- [ ] **Step 2: Create `facts.html`**

Create `HTML landing for claude/facts.html` using the current static style vocabulary. Include this exact content structure in the body:

```html
<main>
  <section class="page-hero">
    <div class="ph-inner">
      <div class="kicker">Факты для людей, поисковиков и AI</div>
      <h1 class="ph-h1">Факты о Я-Фест</h1>
      <p class="ph-sub">Я-Фест — творческая платформа Продюсерского центра «Я»: фестивали, кампусы, мастерские, лаборатории и образовательные программы по театру, кино и хореографии.</p>
    </div>
  </section>

  <section class="body">
    <h2 class="sec-h">Коротко о Я-Фест</h2>
    <p>Я-Фест объединяет театральные и кинематографические проекты для детей, подростков и взрослых участников из России.</p>
    <p>В экосистему входят фестивали, творческие кампусы, мастерские, лаборатории и интенсивы. По каждому направлению должны быть явно указаны аудитория, даты, место, педагоги, стоимость, результат участия и доказательства.</p>

    <h2 class="sec-h">Текущие направления</h2>
    <ul class="fact-list">
      <li><strong>ТЕАТРО КАМПУС</strong> — летний творческий кампус по театру для детей и подростков.</li>
      <li><strong>DANCE КАМПУС</strong> — летний творческий кампус по хореографии для детей и подростков.</li>
      <li><strong>ТЕАТР.КИНО.СОЧИ.</strong> — творческий кампус для взрослых на берегу моря, 5–15 августа, Сириус, Сочи.</li>
      <li><strong>Фестивали Я-Фест</strong> — театральные и кинофестивали, включая архивные и текущие события.</li>
    </ul>

    <h2 class="sec-h">Как правильно описывать кампусы</h2>
    <p>Брендовая формулировка: «летние творческие кампусы по театру, кино и хореографии». Слово «лагерь» можно использовать в FAQ и SEO-пояснениях, потому что часть родителей и участников ищет такие программы как театральный лагерь или танцевальный лагерь.</p>

    <h2 class="sec-h">Контакты</h2>
    <p>Телефон: <a href="tel:+79601343400">8 (960) 134-34-00</a></p>
    <p>Email: <a href="mailto:producer.ya@mail.ru">producer.ya@mail.ru</a></p>
    <p>VK: <a href="https://vk.com/i_festgo">vk.com/i_festgo</a></p>
  </section>
</main>
```

The `<head>` must include:

```html
<title>Факты о Я-Фест — творческая платформа фестивалей и кампусов</title>
<meta name="description" content="Краткие проверяемые факты о Я-Фест: фестивали, творческие кампусы, мастерские, лаборатории, педагоги, даты, контакты и официальные ссылки.">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://yafest.ru/facts.html">
<meta property="og:type" content="website">
<meta property="og:title" content="Факты о Я-Фест">
<meta property="og:description" content="Я-Фест как творческая платформа: фестивали, кампусы, мастерские и образовательные программы.">
<meta property="og:url" content="https://yafest.ru/facts.html">
<meta property="og:locale" content="ru_RU">
<meta property="og:site_name" content="Я-Фест">
```

- [ ] **Step 3: Create `llms.txt`**

Create `HTML landing for claude/llms.txt` with this exact content:

```markdown
# Я-Фест

Official site: https://yafest.ru/
Canonical domain: https://yafest.ru

Do not use https://ya-fest.ru as canonical. It is not the purchased public Ya-Fest domain. In this repository, references to that domain belong to the local React/Vite prototype and should not be propagated to production static HTML.

## Summary

Я-Фест is a creative platform by Продюсерский центр «Я». It presents festivals, creative campuses, workshops, laboratories, and educational programs in theater, cinema, and choreography.

Preferred Russian wording: «творческий кампус», «летние творческие кампусы по театру, кино и хореографии», «мастерские», «лаборатории», «образовательные программы».

The word «лагерь» may appear in FAQ or search-intent explanations because users search for theater camp or dance camp programs, but the brand-level wording is «творческий кампус».

## Important URLs

- Home: https://yafest.ru/
- Facts: https://yafest.ru/facts.html
- Festivals: https://yafest.ru/festivals.html
- Laboratories and workshops: https://yafest.ru/laboratories.html
- Creative campuses: https://yafest.ru/camp.html
- Adult theater and cinema campus: https://yafest.ru/theatre-cinema-sochi.html
- About: https://yafest.ru/about.html

## Current product areas

- ТЕАТРО КАМПУС: creative theater campus for children and teenagers.
- DANCE КАМПУС: creative choreography campus for children and teenagers.
- ТЕАТР.КИНО.СОЧИ.: adult creative campus in Sirius, Sochi, 5–15 August.
- Festivals: theater and cinema festival projects, including archive and current events.

## Contacts

- Phone: 8 (960) 134-34-00
- Email: producer.ya@mail.ru
- VK group: https://vk.com/i_festgo
```

- [ ] **Step 4: Update sitemap**

Add this URL block before `</urlset>` in `HTML landing for claude/sitemap.xml`:

```xml
  <url>
    <loc>https://yafest.ru/facts.html</loc>
    <lastmod>2026-06-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
```

- [ ] **Step 5: Keep robots canonical**

Confirm `HTML landing for claude/robots.txt` contains exactly one `Host: yafest.ru` line and exactly one sitemap line:

```txt
Sitemap: https://yafest.ru/sitemap.xml

Host: yafest.ru
```

- [ ] **Step 6: Run test**

Run:

```bash
node "HTML landing for claude/test-geo-static.mjs"
```

Expected: FAIL on home/about/camp/adult page content that will be added in later tasks.

---

### Task 3: Home Page GEO Facts and Navigation

**Files:**
- Modify: `HTML landing for claude/index.html`
- Test: `HTML landing for claude/test-geo-static.mjs`

**Interfaces:**
- Consumes: `facts.html`, existing Organization and WebSite JSON-LD.
- Produces: visible platform definition and facts link for crawlers and users.

- [ ] **Step 1: Add a facts link to desktop and mobile nav**

In `HTML landing for claude/index.html`, add this link after `о нас` in both desktop and mobile navigation:

```html
<a href="facts.html">факты</a>
```

Use capitalized text in mobile nav:

```html
<a href="facts.html">Факты</a>
```

- [ ] **Step 2: Add a quotable facts section**

Insert this section after the about section and before the festival card grid:

```html
<section class="section alt" id="facts">
  <div class="wrap">
    <div class="sec-kicker">Коротко о Я-Фест</div>
    <h2 class="sec-h">Творческая платформа фестивалей, кампусов и мастерских</h2>
    <div class="answer-grid">
      <article class="answer">
        <h3>Что такое Я-Фест?</h3>
        <p>Я-Фест — творческая платформа Продюсерского центра «Я»: фестивали, кампусы, мастерские, лаборатории и образовательные программы по театру, кино и хореографии.</p>
      </article>
      <article class="answer">
        <h3>Кому подходят программы?</h3>
        <p>Программы подходят детям, подросткам, взрослым участникам, руководителям коллективов, актёрам, режиссёрам, хореографам и тем, кто готовит поступление в творческие вузы.</p>
      </article>
      <article class="answer">
        <h3>Что важно для выбора?</h3>
        <p>По каждому направлению Я-Фест должен показывать аудиторию, даты, место, педагогов, стоимость, условия участия, результат и доказательства.</p>
      </article>
    </div>
    <a href="facts.html" class="btn-o">Смотреть факты о Я-Фест</a>
  </div>
</section>
```

- [ ] **Step 3: Add CSS for answer cards**

Add this CSS near section helper styles:

```css
.answer-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin:36px 0}
.answer{background:var(--bg3);border:1px solid var(--border);border-radius:16px;padding:24px}
.answer h3{font-size:1rem;font-weight:700;margin-bottom:10px;color:var(--text)}
.answer p{font-size:.92rem;color:var(--muted);line-height:1.72;font-weight:300}
@media(max-width:900px){.answer-grid{grid-template-columns:1fr}}
```

- [ ] **Step 4: Run test**

Run:

```bash
node "HTML landing for claude/test-geo-static.mjs"
```

Expected: FAIL only on about/camp/adult requirements that are not implemented yet.

---

### Task 4: About and Campus Answer Blocks

**Files:**
- Modify: `HTML landing for claude/about.html`
- Modify: `HTML landing for claude/camp.html`
- Test: `HTML landing for claude/test-geo-static.mjs`

**Interfaces:**
- Consumes: brand wording from the GEO design and existing campus content.
- Produces: proof block on about page and search-intent/FAQ block on campus page.

- [ ] **Step 1: Add proof block to about page**

In `HTML landing for claude/about.html`, add this section after the mission block:

```html
<section class="body2">
  <div class="stat2-wrap">
    <div class="kicker">Доказательная база</div>
    <h2 class="sec-h" style="margin-bottom:28px">Почему Я-Фест можно проверять</h2>
    <div class="values">
      <div class="val">
        <div class="val-icon">📍</div>
        <div>
          <div class="val-h">Есть конкретные площадки и города</div>
          <div class="val-p">В материалах Я-Фест указаны Москва, Сочи, Сириус, Сочи Парк Отель и Сочи Парк Арена.</div>
        </div>
      </div>
      <div class="val">
        <div class="val-icon">🎓</div>
        <div>
          <div class="val-h">Есть имена педагогов и экспертов</div>
          <div class="val-p">В программе указаны педагоги и мастера: Олеся Железняк, Вениамин Фильштинский, Радда Новикова, Сергей Черкасский, Виталий Любский и другие участники программ.</div>
        </div>
      </div>
      <div class="val">
        <div class="val-icon">📞</div>
        <div>
          <div class="val-h">Есть официальные контакты</div>
          <div class="val-p">Связаться с Я-Фест можно по телефону 8 (960) 134-34-00, email producer.ya@mail.ru и через VK-группу vk.com/i_festgo.</div>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add campus FAQ block**

In `HTML landing for claude/camp.html`, add this section before the final CTA block:

```html
<section class="bonus" id="campus-faq">
  <div class="bonus-icon">?</div>
  <div>
    <h3>Это лагерь или творческий кампус?</h3>
    <p>Такие программы часто ищут как театральный лагерь в Сочи или танцевальный лагерь у моря. В позиционировании Я-Фест это летние творческие кампусы по театру, кино и хореографии: с педагогами, программой, практикой и итоговым результатом.</p>
  </div>
</section>
```

- [ ] **Step 3: Add FAQPage JSON-LD to `camp.html`**

Add this JSON-LD script in the `<head>` after existing meta tags:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Это лагерь или творческий кампус?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Такие программы часто ищут как театральный лагерь в Сочи или танцевальный лагерь у моря. В позиционировании Я-Фест это летние творческие кампусы по театру, кино и хореографии: с педагогами, программой, практикой и итоговым результатом."
      }
    }
  ]
}
</script>
```

- [ ] **Step 4: Run test**

Run:

```bash
node "HTML landing for claude/test-geo-static.mjs"
```

Expected: FAIL only on adult page requirements if Task 5 is not complete.

---

### Task 5: Adult Campus Quotable Facts

**Files:**
- Modify: `HTML landing for claude/theatre-cinema-sochi.html`
- Test: `HTML landing for claude/test-geo-static.mjs`

**Interfaces:**
- Consumes: existing adult campus content and `teatr_kino_sochi_tvorcheskiy_kampus.md`.
- Produces: visible factual summary for the adult campus route.

- [ ] **Step 1: Add quotable fact box**

In `HTML landing for claude/theatre-cinema-sochi.html`, add this block after the key info row:

```html
<section class="incl-box" id="quick-facts">
  <h3>Коротко о ТЕАТР.КИНО.СОЧИ.</h3>
  <div class="incl-grid">
    <div class="incl-item">ТЕАТР.КИНО.СОЧИ. — творческий кампус для взрослых на берегу моря.</div>
    <div class="incl-item">Даты программы: 5–15 августа.</div>
    <div class="incl-item">Место: Сириус, Сочи; площадки — Сочи Парк Отель и Сочи Парк Арена.</div>
    <div class="incl-item">Направления: актёрское мастерство, режиссура, кино-лаборатория, подготовка к поступлению и встречи с индустрией.</div>
    <div class="incl-item">Среди педагогов и экспертов в материалах указаны Олеся Железняк, Вениамин Фильштинский, Радда Новикова, Сергей Черкасский и Виталий Любский.</div>
  </div>
</section>
```

- [ ] **Step 2: Add Event JSON-LD for adult campus**

Add this JSON-LD script in the `<head>` after existing meta tags:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "ТЕАТР.КИНО.СОЧИ.",
  "description": "Творческий кампус для взрослых на берегу моря: актёрское мастерство, режиссура, кино-лаборатория и практическая программа.",
  "startDate": "2026-08-05",
  "endDate": "2026-08-15",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "Place",
    "name": "Сочи Парк Отель и Сочи Парк Арена",
    "address": "Сириус, Сочи"
  },
  "organizer": {
    "@type": "Organization",
    "name": "Я-Фест",
    "url": "https://yafest.ru"
  },
  "url": "https://yafest.ru/theatre-cinema-sochi.html"
}
</script>
```

- [ ] **Step 3: Run test**

Run:

```bash
node "HTML landing for claude/test-geo-static.mjs"
```

Expected: PASS with `static GEO checks passed`.

---

### Task 6: Operating Docs and Final Verification

**Files:**
- Modify: `docs/operating-system/05-brand-geo-content/STATE.md`
- Modify: `docs/operating-system/10-qa-reviews/STATE.md`
- Modify: `docs/operating-system/PROGRESS.md`
- Create: `docs/operating-system/handoffs/2026-06-29-static-geo-pass.md`

**Interfaces:**
- Consumes: successful output from `node "HTML landing for claude/test-geo-static.mjs"`.
- Produces: project status and handoff record for next agent or developer.

- [ ] **Step 1: Update brand/GEO state**

In `docs/operating-system/05-brand-geo-content/STATE.md`, add this bullet under `## Implemented` after the existing paragraph:

```markdown
- First static GEO pass implemented on the production-oriented static HTML surface: `facts.html`, `llms.txt`, home-page facts block, campus FAQ/search-intent block, adult campus quick facts, and expanded static GEO smoke checks.
```

- [ ] **Step 2: Update QA state**

In `docs/operating-system/10-qa-reviews/STATE.md`, add this bullet under `## Implemented`:

```markdown
- Static GEO smoke test exists at `HTML landing for claude/test-geo-static.mjs` and verifies facts page, llms.txt, sitemap, robots, canonical domain, key quotable blocks, and JSON-LD presence.
```

- [ ] **Step 3: Update progress**

In `docs/operating-system/PROGRESS.md`, add this bullet under `## Done`:

```markdown
- First static GEO implementation pass completed locally on `HTML landing for claude/` and verified with `node "HTML landing for claude/test-geo-static.mjs"`.
```

Keep these bullets under `## Open`:

```markdown
- Verify DNS, HTTPS, redirects, robots, sitemap, and public route availability for `https://yafest.ru`.
- Keep `https://ya-fest.ru` out of production GEO work; it is not the purchased public Ya-Fest domain.
```

- [ ] **Step 4: Create handoff**

Create `docs/operating-system/handoffs/2026-06-29-static-geo-pass.md`:

```markdown
# Static GEO Pass Handoff

Date: 2026-06-29

## Scope

Implemented the first local GEO pass on the production-oriented static HTML surface under `HTML landing for claude/`.

## Changed files

- `HTML landing for claude/test-geo-static.mjs`
- `HTML landing for claude/facts.html`
- `HTML landing for claude/llms.txt`
- `HTML landing for claude/index.html`
- `HTML landing for claude/about.html`
- `HTML landing for claude/camp.html`
- `HTML landing for claude/theatre-cinema-sochi.html`
- `HTML landing for claude/sitemap.xml`
- `docs/operating-system/05-brand-geo-content/STATE.md`
- `docs/operating-system/10-qa-reviews/STATE.md`
- `docs/operating-system/PROGRESS.md`

## Verification

Command:

```bash
node "HTML landing for claude/test-geo-static.mjs"
```

Expected passing output:

```text
static GEO checks passed
```

## Risks and open items

- No deploy was performed.
- Live `https://yafest.ru` DNS, HTTPS, redirects, robots, sitemap, and rendered HTML still need external verification.
- `https://ya-fest.ru` is not the purchased public Ya-Fest domain; do not plan redirects or migration targets for it.
- Product facts should be normalized into a richer entity registry in a later pass.

## Deploy status

No deploy was performed.
```

- [ ] **Step 5: Run full verification commands**

Run:

```bash
node "HTML landing for claude/test-geo-static.mjs"
node "HTML landing for claude/test-camp-booking-form.mjs"
```

Expected:

```text
static GEO checks passed
camp booking form checks passed
```

- [ ] **Step 6: Run docs verification**

Run the existing operating-docs verification command from the previous handoff or use this shorter check:

```bash
find docs -name 'PHASES.md' -print
find docs/operating-system -type d -empty -print
node - <<'NODE'
const fs = require('fs');
const path = require('path');
const markers = ['TB' + 'D', 'TO' + 'DO', 'FIX' + 'ME', 'PLACE' + 'HOLDER', '?' + '?' + '?', 'lor' + 'em', 'Lor' + 'em', 'заг' + 'луш'];
const roots = ['docs/README.md', 'docs/operating-system'];
const hits = [];
function walk(target) {
  const stat = fs.statSync(target);
  if (stat.isDirectory()) {
    for (const item of fs.readdirSync(target)) walk(path.join(target, item));
    return;
  }
  if (!target.endsWith('.md')) return;
  const text = fs.readFileSync(target, 'utf8');
  for (const marker of markers) {
    if (text.includes(marker)) hits.push(`${target}: ${marker}`);
  }
}
for (const root of roots) walk(root);
if (hits.length) {
  console.log(hits.join('\n'));
  process.exit(1);
}
NODE
```

Expected:

```text
```

No output for all three checks.

---

## Self-Review Notes

- Spec coverage: this plan covers the first safe GEO scope on static HTML, not React/Vite migration, deploy, DNS, or external account work.
- Placeholder scan: the plan avoids unresolved marker words and vague delayed-fill instructions.
- Type consistency: all commands and file paths use the production-oriented static path `HTML landing for claude/` and canonical domain `https://yafest.ru`.
