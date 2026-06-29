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

Not completed in this pass.

Reason:

- No local Google Search Console or Yandex.Webmaster API token was available.
- In-app browser automation was unavailable in this environment.
- Console submission requires an authenticated account with access to `https://yafest.ru/`.

## Manual Submission Steps

### Yandex.Webmaster

1. Open Yandex.Webmaster.
2. Select `https://yafest.ru/`.
3. Go to Indexing -> Sitemap files.
4. Add or update:

```text
https://yafest.ru/sitemap.xml
```

5. Record status or screenshot.

### Google Search Console

1. Open Google Search Console.
2. Select the `https://yafest.ru/` property.
3. Go to Sitemaps.
4. Submit:

```text
https://yafest.ru/sitemap.xml
```

5. Record status or screenshot.

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

Phase 3 can be marked done only after Yandex.Webmaster and Google Search Console submission evidence is recorded, or after an explicit decision accepts robots-based discovery as sufficient for this phase.
