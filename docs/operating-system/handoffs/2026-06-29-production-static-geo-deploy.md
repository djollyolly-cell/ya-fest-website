# Production Static GEO Deploy Handoff

Date: 2026-06-29

## Scope

Production deploy of the current static GEO surface to `https://yafest.ru`.

Target surface: `HTML landing for claude/`

Target commit: `bb97322` (`Document Ya-Fest GEO phase goals`)

Deploy environment: reg.ru shared hosting, web root `~/www/yafest.ru/`

## Deploy Steps

External SSH from the local machine was not usable: `server266.hosting.reg.ru` timed out during SSH banner exchange and direct IP login rejected the available public keys. The deploy was completed through the ISPmanager Shell-client.

Server-side commands used:

```bash
cd ~/www/yafest.ru
git stash push -m "server-pre-geo-deploy-$(date +%F-%H%M)" -- "HTML landing for claude/analytics.js" "HTML landing for claude/camp.html" "HTML landing for claude/tg-notify.php"
git pull --ff-only origin main
cp -r "HTML landing for claude/"* .
git rev-parse --short HEAD
test -f facts.html && echo "facts.html OK"
test -f llms.txt && echo "llms.txt OK"
```

Observed server evidence:

```text
bb97322
facts.html OK
llms.txt OK
```

## External Verification

HTTP headers:

```text
https://yafest.ru/facts.html  -> HTTP/2 200, last-modified: Mon, 29 Jun 2026 17:22:40 GMT
https://yafest.ru/llms.txt    -> HTTP/2 200, last-modified: Mon, 29 Jun 2026 17:22:40 GMT
https://yafest.ru/sitemap.xml -> HTTP/2 200, last-modified: Mon, 29 Jun 2026 17:22:40 GMT
https://yafest.ru/robots.txt  -> HTTP/2 200, last-modified: Mon, 29 Jun 2026 17:22:40 GMT
```

Content checks:

```text
facts.html includes canonical https://yafest.ru/facts.html
facts.html includes DefinedTermSet JSON-LD
facts.html includes "Я-Фест — творческая платформа"
facts.html includes producer.ya@mail.ru
llms.txt includes canonical domain https://yafest.ru
sitemap.xml includes https://yafest.ru/facts.html
robots.txt includes Sitemap: https://yafest.ru/sitemap.xml and Host: yafest.ru
```

Sitemap route check:

```text
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

Canonical check:

```text
https://yafest.ru/                          -> https://yafest.ru/
https://yafest.ru/facts.html                -> https://yafest.ru/facts.html
https://yafest.ru/camp.html                 -> https://yafest.ru/camp.html
https://yafest.ru/theatre-cinema-sochi.html -> https://yafest.ru/theatre-cinema-sochi.html
https://yafest.ru/about.html                -> https://yafest.ru/about.html
```

No checked production canonical used `https://ya-fest.ru`.

## Deploy Status

Production deploy was performed and checked for the static `https://yafest.ru` surface.

## Risks and Open Items

- Webmaster/Search Console submission is not completed in this deploy pass.
- Server had local modifications in `HTML landing for claude/analytics.js`, `HTML landing for claude/camp.html`, and `HTML landing for claude/tg-notify.php` before deploy; they were stashed before `git pull --ff-only`.
- External SSH still needs hosting-side cleanup if future deployments should be run directly from local automation rather than through ISPmanager Shell-client.
