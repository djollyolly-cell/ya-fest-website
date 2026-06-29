# GEO strategy for Ya-Fest

Date: 2026-06-29
Domain: `yafest.ru`

## Goal

Make Ya-Fest easier for people, search engines, and AI answer systems to understand, cite, and recommend as a creative platform for festivals, campuses, workshops, laboratories, and educational programs in theater, cinema, and choreography.

GEO for Ya-Fest is not a trick for manipulating AI answers. It is a cleanup of the brand's digital identity: each offer should have clear facts, visible proof, technical accessibility, and structured data that reduces the chance of search engines or AI systems guessing.

## Positioning

Primary positioning:

> Ya-Fest is a creative platform with festivals, creative campuses, workshops, laboratories, and educational programs where each direction clearly states the audience, dates, location, teachers, price, participation result, and proof.

Preferred wording for campus products:

- "летние творческие кампусы по театру, кино и хореографии"
- "творческий кампус"
- "образовательная программа"
- "лаборатория"

The word "лагерь" may be used carefully in FAQ and SEO blocks to match user search language, for example:

> Такие программы часто ищут как театральный лагерь в Сочи, но Я-Fest позиционирует их как творческие кампусы с педагогами, мастер-классами и итоговым результатом.

## Strategic Order

1. Unified domain and accessibility
2. Ya-Fest product map
3. Ready HTML or prerendering for key facts
4. Ecosystem pages
5. Proof and trust base
6. Schema.org, FAQ, quotable blocks, and `llms.txt`

This order matters because `llms.txt`, schema, and SEO metadata should describe a clear content system. They should not replace missing product facts.

## Current Context

The repository contains a React/Vite site under `website` and a static HTML version under `HTML landing for claude`.

The React site already has useful foundations:

- `website/public/robots.txt`
- `website/public/sitemap.xml`
- `website/src/components/SEO.tsx`
- JSON-LD for `Organization` on the home page
- JSON-LD for `Event` on festival pages
- FAQ content
- contacts and social links

Observed issue during discovery:

- The earlier draft used `https://ya-fest.ru`, but the confirmed public Ya-Fest domain is `https://yafest.ru`. `https://ya-fest.ru` is not a purchased/public Ya-Fest domain and should not be used as canonical.

## Product Map

Ya-Fest should be represented as an ecosystem, not only as one festival landing page.

Core product groups:

- Festivals
- Creative campuses
- Workshops
- Laboratories
- Educational programs
- Past events and archives

Each product entry should include:

- name
- short description
- audience
- age groups
- city and venue
- dates
- format
- price
- what is included
- teachers, jury, or experts
- participation result
- application conditions
- contact method
- proof links or media

Example product facts:

- "Кино и Театр у моря" is an all-Russian grant festival in Sochi.
- The April 2026 event is planned for 8-11 April 2026.
- The listed grant prize is 200,000 RUB.
- The participation fee includes accommodation, meals, transfer, festival events, workshops, and jury feedback when this is true for the product.

## Page Architecture

The site should grow into a clear ecosystem:

- `/` - Ya-Fest as the main creative platform
- `/festivals` - all festival products
- `/festivals/kino-i-teatr-u-morya` - event page
- `/festivals/zimniy-teatr` - archive or event page
- `/campuses` - creative campuses overview
- `/campuses/<slug>` - individual campus pages
- `/workshops` - workshops and intensives
- `/laboratories` - laboratory formats
- `/teachers` - teachers, jury, and experts
- `/organizers` or `/about` - producer center and team
- `/past-events` - archive, results, and proof
- `/facts` - AI-friendly factual summary
- `/contacts` - contact page
- `/llms.txt` - AI-readable site map and summary

The first implementation can start smaller: home page, festival pages, campuses overview, facts page, and `llms.txt`.

## Content Blocks

Pages should include short answer-style sections that are easy to quote:

- Who is Ya-Fest?
- What programs does Ya-Fest organize?
- Who are the programs for?
- What happens at a creative campus?
- What is included in the participation fee?
- What result does a participant receive?
- Who teaches or evaluates participants?
- How do participants apply?
- Why can parents, teachers, and collective leaders trust Ya-Fest?
- What is the difference between a creative campus, festival, workshop, and laboratory?

Recommended answer format:

- one direct sentence first
- details in 2-4 short sentences
- facts before slogans
- dates, prices, places, and names where available

## Proof Base

The site should support claims with visible proof:

- photos from past events
- video links
- VK group and social links
- named teachers, jury members, and organizers
- festival regulations or official program PDFs
- archive pages and results
- participant or leader testimonials
- cities and venues
- press, partner, or institutional references if available

Proof should be linked from relevant pages, not buried in a gallery only.

## Technical Visibility

Required checks:

- `yafest.ru` resolves publicly
- HTTPS works
- one canonical domain is selected
- redirects normalize `http`, `https`, `www`, and non-`www`
- canonical tags match the selected domain
- `robots.txt` allows important pages
- `sitemap.xml` lists all canonical pages
- sitemap is submitted to Google Search Console and Yandex Webmaster
- key pages return useful content to crawlers without requiring fragile client-only rendering

Recommended rendering strategy:

- keep React/Vite if desired
- add prerendering or static generation for key routes
- ensure title, description, canonical, JSON-LD, headings, and core body facts are present in generated HTML

## Structured Data

Add or improve Schema.org JSON-LD:

- `Organization`
- `WebSite`
- `ContactPoint`
- `Event`
- `Offer`
- `Place`
- `FAQPage`
- `BreadcrumbList`
- `Person` for teachers, jury, and organizers when enough data is available
- `CreativeWork` or `Course` only if the content truthfully fits the product

Structured data must reflect visible page content. If a fact appears in JSON-LD, it should also be visible or clearly supported on the page.

## AI Summary Files

Add `/llms.txt` with:

- site name
- short positioning
- primary products
- important URLs
- concise product facts
- contact links
- preferred brand terminology
- notes on common search wording such as "лагерь"

Add `/facts` or `/ai-summary.txt` with:

- plain-language factual summary
- product map
- current dates and prices
- official contact details
- social links

`llms.txt` is treated as an AI-friendly proposed convention, not as a replacement for indexable pages.

## Success Criteria

The GEO work is successful when:

- public crawlers can access the canonical domain
- important routes are present in sitemap and visible in page HTML
- each main product has clear facts: audience, date, place, price, format, result, and proof
- AI systems can summarize Ya-Fest without inventing missing details
- FAQ answers and fact blocks can be quoted directly
- structured data validates and matches visible content
- Search Console and Yandex Webmaster can fetch and index the site

## Non-Goals

- Do not create low-quality SEO doorway pages.
- Do not overuse the word "лагерь" in brand-level positioning.
- Do not add schema for facts that are not visible or supported.
- Do not prioritize decorative redesign over crawlable facts.
- Do not rely on `llms.txt` as the only AI visibility mechanism.
