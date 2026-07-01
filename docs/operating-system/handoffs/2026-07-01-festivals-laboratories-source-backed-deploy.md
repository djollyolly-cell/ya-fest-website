# Festivals and Laboratories Source-Backed Deploy Handoff

Date: 2026-07-01
Surface: `HTML landing for claude/`
Canonical domain: `https://yafest.ru/`
Production deploy commit: `4a4dd31`
Status: production deploy performed and checked; external reindex submission blocked by missing console/API access.

## Summary

The source-backed GEO anti-hallucination pass was extended to:

- `festivals.html`
- `laboratories.html`

Both pages now visibly state that the nomination-winner protocol is not
published on the current page and that Ya-Fest should not publish winner names
or workshop outcome names without an official source.

The deploy also refreshed `sitemap.xml` `lastmod` values for both changed URLs
to `2026-07-01`.

## Commits Deployed

- `2424d17` — `Record archive GEO production deploy`
- `4a4dd31` — `Add source-backed GEO gaps to festivals and workshops`

## Local Verification

- `node "HTML landing for claude/test-geo-static.mjs"`: pass.
- `node "HTML landing for claude/test-camp-booking-form.mjs"`: pass.
- `git diff --check`: clean.

TDD evidence:

- Static GEO test was first updated to require the new source-backed phrases on
  `festivals.html` and `laboratories.html`.
- The first run failed on the missing `festivals.html` protocol phrase.
- Sitemap lastmod expectations were then moved to `2026-07-01`; the first run
  failed on the stale `festivals.html` `2026-06-29` value before `sitemap.xml`
  was updated.

## Deploy Command

```bash
ssh -i ~/.ssh/id_ed25519_server u3449604@server266.hosting.reg.ru \
  'cd ~/www/yafest.ru && git pull --ff-only origin main && cp -r "HTML landing for claude/"* . && git merge-base --is-ancestor 4a4dd31 HEAD && echo "festivals laboratories GEO commit included"'
```

Final deploy output included:

```text
a13f3e5..4a4dd31  main -> origin/main
festivals laboratories GEO commit included
```

## Production Verification

Live URL checks:

```text
festivals.html protocol=1 source=1 current=1
laboratories.html protocol=1 source=1 current=1
```

Live sitemap checks:

```text
<loc>https://yafest.ru/festivals.html</loc>
<lastmod>2026-07-01</lastmod>
<loc>https://yafest.ru/laboratories.html</loc>
<lastmod>2026-07-01</lastmod>
```

Server-side check:

```text
4a4dd31
festivals.html 1
laboratories.html 1
```

## Reindex Submission Status

Not submitted from this agent session.

Reason:

- No `GOOGLE`, `GSC`, `YANDEX`, `WEBMASTER`, OAuth, or service-account token was
  present in the local environment.
- In-app browser discovery returned no available browser targets, so there was
  no authenticated Search Console or Yandex.Webmaster session to use.
- Existing project evidence already notes that local Google Search Console /
  Yandex.Webmaster API tokens are unavailable.

URLs to submit manually when console access is available:

```text
https://yafest.ru/winter-theatre.html
https://yafest.ru/theatre-sea.html
https://yafest.ru/cinema-sea.html
https://yafest.ru/festivals.html
https://yafest.ru/laboratories.html
https://yafest.ru/sitemap.xml
```

Google Search Console path:

- URL Inspection -> inspect each changed page URL -> Request indexing.
- Sitemap page -> resubmit or confirm `https://yafest.ru/sitemap.xml`.

Yandex.Webmaster path:

- Indexing -> Reindex pages -> submit the changed page URLs.
- Sitemap files -> confirm `https://yafest.ru/sitemap.xml` is loaded.
