# Phase 3 Indexation Preflight Handoff

Date: 2026-06-29

## Scope

Phase 3 preparation for indexation and webmaster signals after the production static GEO deploy.

Canonical sitemap URL:

```text
https://yafest.ru/sitemap.xml
```

## Public Signals Verified

`robots.txt` is live and points to the sitemap:

```text
User-agent: *
Allow: /
Disallow:

Sitemap: https://yafest.ru/sitemap.xml

Host: yafest.ru
```

`sitemap.xml` is live:

```text
HTTP/2 200
content-type: text/xml
```

Sitemap route check:

```text
sitemap status=200 urls=10
200 https://yafest.ru/
200 https://yafest.ru/festivals.html
200 https://yafest.ru/theatre-sea.html
200 https://yafest.ru/cinema-sea.html
200 https://yafest.ru/winter-theatre.html
200 https://yafest.ru/laboratories.html
200 https://yafest.ru/camp.html
200 https://yafest.ru/theatre-cinema-sochi.html
200 https://yafest.ru/about.html
200 https://yafest.ru/facts.html
```

## Official Guidance Checked

Google Search Central says a sitemap can be made available to Google through Search Console, the Search Console API, or a `Sitemap:` line in `robots.txt`.

Yandex Webmaster says a sitemap can be pointed to through a special directive in `robots.txt` or on the Sitemap files page in Yandex Webmaster.

Sources:

- Google Search Central: `https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap`
- Yandex Webmaster: `https://yandex.com/support/webmaster/en/robot-workings/sitemap.html`

## Authenticated Submission Status

Completed with user-assisted console access.

Yandex.Webmaster:

- Property: `https://yafest.ru`
- Sitemap source: `https://yafest.ru/sitemap.xml`, found in `robots.txt`
- Status: `ok`
- Screenshot showed last loaded `27.06.2026 20:28` and 9 links at that time.

Google Search Console:

- Property type: URL prefix, `https://yafest.ru/`
- Ownership verification method: HTML file
- Verification file deployed and publicly verified: `https://yafest.ru/googlec5257f56ceb7704e.html`
- Sitemap submitted: `sitemap.xml`
- Submission result: `Sitemap submitted successfully`
- Screenshot showed 10 discovered pages.

Local automation note:

- No local Google Search Console or Yandex.Webmaster API token was available.
- In-app browser automation was unavailable in this environment.
- Console submission was completed by the user in authenticated browser sessions.

## Recrawl URL List

Request recrawl where the console allows it:

```text
https://yafest.ru/
https://yafest.ru/facts.html
https://yafest.ru/camp.html
https://yafest.ru/theatre-cinema-sochi.html
https://yafest.ru/about.html
```

## Deploy Status

No deploy was performed in this Phase 3 pass. Public files were already live from the production static GEO deploy.

## Next Gate

Phase 3 is done for sitemap discovery/submission. Optional next step: request recrawl for the priority URL list above where each console allows it.
