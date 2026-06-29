import { readFileSync, existsSync } from 'node:fs';
import { strict as assert } from 'node:assert';

const base = new URL('./', import.meta.url);

function read(name) {
  return readFileSync(new URL(name, base), 'utf8');
}

function hasJsonLd(html, type) {
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
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
const theatreSea = read('theatre-sea.html');
const cinemaSea = read('cinema-sea.html');
const llms = read('llms.txt');
const sitemap = read('sitemap.xml');
const robots = read('robots.txt');

assert.match(robots, /Host:\s*yafest\.ru/, 'robots should keep yafest.ru host');
assert.match(robots, /Sitemap:\s*https:\/\/yafest\.ru\/sitemap\.xml/, 'robots should point to yafest sitemap');

assert.match(sitemap, /<loc>https:\/\/yafest\.ru\/facts\.html<\/loc>/, 'sitemap should include facts.html');
assert.doesNotMatch(sitemap, /ya-fest\.ru/, 'static sitemap must not use ya-fest.ru');
assert.match(sitemap, /<loc>https:\/\/yafest\.ru\/festivals\.html<\/loc>[\s\S]*?<lastmod>2026-06-29<\/lastmod>/, 'sitemap should refresh festivals lastmod after proof edits');
assert.match(sitemap, /<loc>https:\/\/yafest\.ru\/theatre-sea\.html<\/loc>[\s\S]*?<lastmod>2026-06-29<\/lastmod>/, 'sitemap should refresh theatre archive lastmod after proof edits');
assert.match(sitemap, /<loc>https:\/\/yafest\.ru\/cinema-sea\.html<\/loc>[\s\S]*?<lastmod>2026-06-29<\/lastmod>/, 'sitemap should refresh cinema archive lastmod after proof edits');

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
assert.equal(hasJsonLd(camp, 'FAQPage'), true, 'camp page should include FAQPage JSON-LD');

assert.match(adult, /5–15 августа/, 'adult campus page should expose dates');
assert.match(adult, /Сочи/, 'adult campus page should expose location');
assert.match(adult, /Олеся Железняк/, 'adult campus page should expose source-backed teacher fact');
assert.match(adult, /id="quick-facts"/, 'adult campus page should include quick-facts anchor');
assert.match(adult, /Коротко о ТЕАТР\.КИНО\.СОЧИ\./, 'adult campus page should include quotable facts heading');
assert.equal(hasJsonLd(adult, 'Event'), true, 'adult campus page should include Event JSON-LD');

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
assert.match(laboratories, /mailto:producer\.ya@mail\.ru/, 'laboratories footer should expose clean official email');
assert.doesNotMatch(laboratories, /cdn-cgi\/l\/email-protection/, 'laboratories footer should not use Cloudflare email obfuscation');
assert.match(theatreSea, /Жюри фестивальной серии/, 'theatre archive should expose named jury proof block');
assert.match(theatreSea, /Стася Толстая/, 'theatre archive should include source-backed jury names');
assert.match(cinemaSea, /Жюри фестивальной серии/, 'cinema archive should expose named jury proof block');
assert.match(cinemaSea, /Дмитрий Чеботар/, 'cinema archive should include source-backed jury names');

assert.match(llms, /^# Я-Фест/m, 'llms.txt should start with Ya-Fest heading');
assert.match(llms, /https:\/\/yafest\.ru\/facts\.html/, 'llms.txt should link facts page');
assert.match(llms, /Do not use https:\/\/ya-fest\.ru as canonical/i, 'llms.txt should clarify non-owned domain');
assert.match(llms, /творческий кампус/i, 'llms.txt should preserve brand wording');

console.log('static GEO checks passed');
