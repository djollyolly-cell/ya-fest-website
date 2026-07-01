import { readFileSync, existsSync } from 'node:fs';
import { strict as assert } from 'node:assert';

const base = new URL('./', import.meta.url);

function read(name) {
  return readFileSync(new URL(name, base), 'utf8');
}

function hasJsonLd(html, type) {
  return jsonLdNodes(html).some((node) => node['@type'] === type);
}

function jsonLdNodes(html) {
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  return scripts.flatMap((match) => {
    const parsed = JSON.parse(match[1]);
    if (Array.isArray(parsed['@graph'])) {
      return parsed['@graph'];
    }
    return [parsed];
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
const theatreSea = read('theatre-sea.html');
const cinemaSea = read('cinema-sea.html');
const llms = read('llms.txt');
const sitemap = read('sitemap.xml');
const robots = read('robots.txt');

assert.match(robots, /Host:\s*yafest\.ru/, 'robots should keep yafest.ru host');
assert.match(robots, /Sitemap:\s*https:\/\/yafest\.ru\/sitemap\.xml/, 'robots should point to yafest sitemap');

assert.match(sitemap, /<loc>https:\/\/yafest\.ru\/facts\.html<\/loc>/, 'sitemap should include facts.html');
assert.doesNotMatch(sitemap, /ya-fest\.ru/, 'static sitemap must not use ya-fest.ru');
assert.match(sitemap, /<loc>https:\/\/yafest\.ru\/festivals\.html<\/loc>[\s\S]*?<lastmod>2026-07-01<\/lastmod>/, 'sitemap should refresh festivals lastmod after source-backed archive edits');
assert.match(sitemap, /<loc>https:\/\/yafest\.ru\/theatre-sea\.html<\/loc>[\s\S]*?<lastmod>2026-07-01<\/lastmod>/, 'sitemap should refresh theatre archive lastmod after signed-protocol publish');
assert.match(sitemap, /<loc>https:\/\/yafest\.ru\/cinema-sea\.html<\/loc>[\s\S]*?<lastmod>2026-07-01<\/lastmod>/, 'sitemap should refresh cinema archive lastmod after signed-protocol publish');
assert.match(sitemap, /<loc>https:\/\/yafest\.ru\/winter-theatre\.html<\/loc>[\s\S]*?<lastmod>2026-06-30<\/lastmod>/, 'sitemap should refresh winter archive lastmod after Phase 6 schema edits');
assert.match(sitemap, /<loc>https:\/\/yafest\.ru\/camp\.html<\/loc>[\s\S]*?<lastmod>2026-07-01<\/lastmod>/, 'sitemap should refresh camp lastmod after family cross-block publish');
assert.match(sitemap, /<loc>https:\/\/yafest\.ru\/theatre-cinema-sochi\.html<\/loc>[\s\S]*?<lastmod>2026-07-01<\/lastmod>/, 'sitemap should refresh adult campus lastmod after family cross-block publish');
assert.match(sitemap, /<loc>https:\/\/yafest\.ru\/laboratories\.html<\/loc>[\s\S]*?<lastmod>2026-07-01<\/lastmod>/, 'sitemap should refresh laboratories lastmod after source-backed workshop edits');

assert.match(index, /href="facts\.html"/, 'home page should link to facts page');
assert.match(index, /Коротко о Я-Фест/i, 'home page should include quotable Ya-Fest facts');
assert.match(index, /творческ(ая|ую|ие|их|ий) платформ/i, 'home page should describe Ya-Fest as a creative platform');
assert.equal(hasJsonLd(index, 'Organization'), true, 'home page should include Organization JSON-LD');
assert.equal(hasJsonLd(index, 'WebSite'), true, 'home page should include WebSite JSON-LD');

assert.match(about, /Продюсерский центр «Я»/, 'about page should name the organizer');
assert.match(about, /доказатель/i, 'about page should include proof/trust wording');

assert.match(camp, /часто ищут как/i, 'camp page should include careful search-intent wording');
assert.match(camp, /творческие кампусы/i, 'camp page should keep creative campus wording');
assert.match(camp, /id="teatro"/, 'camp page should expose stable Teatro anchor');
assert.match(camp, /id="dance"/, 'camp page should expose stable Dance anchor');
assert.match(camp, /Когда и где проходит смена\?/, 'camp page should expose crawlable FAQ answer blocks');
assert.match(camp, /Что входит в стоимость путёвки\?/, 'camp page should expose price/included FAQ answer block');
assert.match(camp, /А если вся семья творческая/, 'camp page should expose the family cross-block for parents');
assert.match(camp, /theatre-cinema-sochi\.html/, 'camp page should cross-link the adult campus for the family scenario');
assert.match(camp, /вожатые/, 'camp page should name the vожатые supervision fact for family scenario');
assert.match(camp, /впервые в 2026/i, 'camp page should mark the family cross-campus scenario as a debut season');
assert.equal(hasJsonLd(camp, 'WebPage'), true, 'camp page should include WebPage JSON-LD');
assert.equal(hasJsonLd(camp, 'Course'), true, 'camp page should include Course JSON-LD for campuses');
assert.equal(hasJsonLd(camp, 'FAQPage'), true, 'camp page should include FAQPage JSON-LD');
const campFaqNames = jsonLdNodes(camp)
  .filter((node) => node['@type'] === 'FAQPage')
  .flatMap((node) => node.mainEntity ?? [])
  .map((q) => q.name);
assert.equal(campFaqNames.some((name) => /семь/i.test(name)), true, 'camp FAQPage should include a family-scenario question');

assert.match(adult, /5–15 августа/, 'adult campus page should expose dates');
assert.match(adult, /Сочи/, 'adult campus page should expose location');
assert.match(adult, /Олеся Железняк/, 'adult campus page should expose source-backed teacher fact');
assert.match(adult, /id="quick-facts"/, 'adult campus page should include quick-facts anchor');
assert.match(adult, /Коротко о ТЕАТР\.КИНО\.СОЧИ\./, 'adult campus page should include quotable facts heading');
assert.match(adult, /Частые вопросы/, 'adult campus page should expose crawlable FAQ answer blocks');
assert.match(adult, /А если приехали с ребёнком/, 'adult campus page should expose the family cross-block for adults with kids');
assert.match(adult, /camp\.html/, 'adult campus page should cross-link the kids campuses for the family scenario');
assert.match(adult, /6[–-]17/, 'adult campus family block should name kid age range');
assert.match(adult, /вожатые/, 'adult campus family block should name vожатые supervision fact');
assert.match(adult, /впервые в 2026/i, 'adult campus family block should mark the debut season');
assert.equal(hasJsonLd(adult, 'Event'), true, 'adult campus page should include Event JSON-LD');
assert.equal(hasJsonLd(adult, 'WebPage'), true, 'adult campus page should include WebPage JSON-LD');
assert.equal(hasJsonLd(adult, 'Course'), true, 'adult campus page should include Course JSON-LD');
assert.equal(hasJsonLd(adult, 'Person'), true, 'adult campus page should include Person JSON-LD for source-backed teachers');
assert.equal(hasJsonLd(adult, 'FAQPage'), true, 'adult campus page should include FAQPage JSON-LD');
const adultFaqNames = jsonLdNodes(adult)
  .filter((node) => node['@type'] === 'FAQPage')
  .flatMap((node) => node.mainEntity ?? [])
  .map((q) => q.name);
assert.equal(adultFaqNames.some((name) => /ребёнк/i.test(name)), true, 'adult campus FAQPage should include a family/kid-scenario question');

const adultPersonNames = jsonLdNodes(adult)
  .filter((node) => node['@type'] === 'Person')
  .map((node) => node.name);
for (const name of ['Олеся Железняк', 'Вениамин Фильштинский', 'Радда Новикова', 'Сергей Черкасский', 'Виталий Любский']) {
  assert.equal(adultPersonNames.includes(name), true, `adult campus Person JSON-LD should include ${name}`);
}

assert.match(facts, /<link rel="canonical" href="https:\/\/yafest\.ru\/facts\.html">/, 'facts page should have canonical URL');
assert.match(facts, /Я-Фест — творческая платформа/i, 'facts page should lead with the platform definition');
assert.match(facts, /ТЕАТР\.КИНО\.СОЧИ\./, 'facts page should include adult campus');
assert.match(facts, /href="camp\.html#teatro"/, 'facts page should link Teatro campus anchor');
assert.match(facts, /href="camp\.html#dance"/, 'facts page should link Dance campus anchor');
assert.match(facts, /producer\.ya@mail\.ru/, 'facts page should expose official email');
assert.equal(hasJsonLd(facts, 'WebPage'), true, 'facts page should include WebPage JSON-LD');
assert.equal(hasJsonLd(facts, 'DefinedTermSet'), true, 'facts page should include DefinedTermSet JSON-LD');

const festivals = read('festivals.html');
const laboratories = read('laboratories.html');
assert.match(festivals, /Григорий Заславский/, 'festivals page should expose named jury proof');
assert.match(festivals, /Вениамин Фильштинский/, 'festivals page should reuse source-backed jury names');
assert.doesNotMatch(festivals, /Артисты театра и кино<\/div><div class="jrole">Ведущие российские актёры/, 'festivals page should not use generic jury placeholders');
assert.match(festivals, /Неудержимые/, 'festivals page should mention Гран-при winner from the signed protocol');
assert.match(festivals, /Маленький принц/, 'festivals page should mention Гран-при production title');
assert.match(festivals, /theatre-i-kino-morya-2026\.pdf/, 'festivals page should link the canonical protocol PDF');
assert.match(festivals, /без публичного источника/, 'festivals page should still note that cinema/winter outcomes remain unpublished');
assert.match(laboratories, /mailto:producer\.ya@mail\.ru/, 'laboratories footer should expose clean official email');
assert.doesNotMatch(laboratories, /cdn-cgi\/l\/email-protection/, 'laboratories footer should not use Cloudflare email obfuscation');
assert.match(laboratories, /theatre-i-kino-morya-2026\.pdf/, 'laboratories page should link the theatre protocol');
assert.match(laboratories, /Кинозабег/, 'laboratories page should still name the outstanding Кинозабег gap');
assert.match(laboratories, /без официального источника/, 'laboratories page should keep the unpublished-cinema-workshop discipline');
assert.match(theatreSea, /Жюри фестивальной серии/, 'theatre archive should expose named jury proof block');
assert.match(theatreSea, /Стася Толстая/, 'theatre archive should include source-backed jury names');
assert.match(theatreSea, /Коротко об архиве/, 'theatre archive should expose visible answer blocks');
assert.match(theatreSea, /Итоги фестиваля/, 'theatre archive should expose the published outcomes section');
assert.match(theatreSea, /Неудержимые/, 'theatre archive should name the Гран-при winner');
assert.match(theatreSea, /Маленький принц/, 'theatre archive should name the Гран-при production');
assert.match(theatreSea, /theatre-i-kino-morya-2026\.pdf/, 'theatre archive should link the canonical protocol PDF');
assert.equal(hasJsonLd(theatreSea, 'WebPage'), true, 'theatre archive should include WebPage JSON-LD');
assert.equal(hasJsonLd(theatreSea, 'Event'), true, 'theatre archive should include Event JSON-LD');
assert.equal(hasJsonLd(theatreSea, 'FAQPage'), true, 'theatre archive should include FAQPage JSON-LD');
const theatreEvent = jsonLdNodes(theatreSea).find((node) => node['@type'] === 'Event');
assert.equal(theatreEvent?.eventStatus, 'https://schema.org/EventCompleted', 'theatre archive event schema should be completed');
assert.equal(Array.isArray(theatreEvent?.award), true, 'theatre archive Event should include award array from signed protocol');
assert.equal(theatreEvent?.award?.length >= 14, true, 'theatre archive Event award array should include all 14 protocol entries');
assert.equal(theatreEvent?.subjectOf?.url, 'https://yafest.ru/protocols/theatre-i-kino-morya-2026.pdf', 'theatre archive Event should cite the protocol PDF via subjectOf');
assert.match(cinemaSea, /Жюри фестивальной серии/, 'cinema archive should expose named jury proof block');
assert.match(cinemaSea, /Дмитрий Чеботар/, 'cinema archive should include source-backed jury names');
assert.match(cinemaSea, /Коротко об архиве/, 'cinema archive should expose visible answer blocks');
assert.match(cinemaSea, /Итоги театральной части/, 'cinema archive should expose theatre-part outcomes with an honest disclaimer');
assert.match(cinemaSea, /Неудержимые/, 'cinema archive should name the Гран-при winner from the joint protocol');
assert.match(cinemaSea, /Маленький принц/, 'cinema archive should name the Гран-при production');
assert.match(cinemaSea, /theatre-i-kino-morya-2026\.pdf/, 'cinema archive should link the canonical protocol PDF');
assert.match(cinemaSea, /Кино-номинации/, 'cinema archive should keep the honest cinema-nominations gap disclaimer');
assert.match(cinemaSea, /без официального источника/, 'cinema archive should keep the Кинозабег discipline');
assert.equal(hasJsonLd(cinemaSea, 'WebPage'), true, 'cinema archive should include WebPage JSON-LD');
assert.equal(hasJsonLd(cinemaSea, 'Event'), true, 'cinema archive should include Event JSON-LD');
assert.equal(hasJsonLd(cinemaSea, 'FAQPage'), true, 'cinema archive should include FAQPage JSON-LD');
const cinemaEvent = jsonLdNodes(cinemaSea).find((node) => node['@type'] === 'Event');
assert.equal(cinemaEvent?.eventStatus, 'https://schema.org/EventCompleted', 'cinema archive event schema should be completed');
assert.equal(Array.isArray(cinemaEvent?.award), true, 'cinema archive Event should include award array (theatre part of joint fest)');
assert.equal(cinemaEvent?.subjectOf?.url, 'https://yafest.ru/protocols/theatre-i-kino-morya-2026.pdf', 'cinema archive Event should cite the protocol PDF via subjectOf');

const winterTheatre = read('winter-theatre.html');
assert.match(winterTheatre, /Коротко об архиве/, 'winter archive should expose visible answer blocks');
assert.match(winterTheatre, /Протокол победителей по номинациям/, 'winter archive should name the missing winner protocol clearly');
assert.match(winterTheatre, /не опубликован на текущей странице/, 'winter archive should not imply unsupported winner names exist');
assert.match(winterTheatre, /без официального источника/, 'winter archive should avoid unsupported winner claims');
assert.equal(hasJsonLd(winterTheatre, 'WebPage'), true, 'winter archive should include WebPage JSON-LD');
assert.equal(hasJsonLd(winterTheatre, 'Event'), true, 'winter archive should include Event JSON-LD');
assert.equal(hasJsonLd(winterTheatre, 'FAQPage'), true, 'winter archive should include FAQPage JSON-LD');
assert.equal(jsonLdNodes(winterTheatre).find((node) => node['@type'] === 'Event')?.eventStatus, 'https://schema.org/EventCompleted', 'winter archive event schema should be completed');

assert.match(llms, /^# Я-Фест/m, 'llms.txt should start with Ya-Fest heading');
assert.match(llms, /https:\/\/yafest\.ru\/facts\.html/, 'llms.txt should link facts page');
assert.match(llms, /Do not use https:\/\/ya-fest\.ru as canonical/i, 'llms.txt should clarify non-owned domain');
assert.match(llms, /творческий кампус/i, 'llms.txt should preserve brand wording');

console.log('static GEO checks passed');
