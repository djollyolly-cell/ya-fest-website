# Do Not Deploy

The `website/` React/Vite app is a local prototype and experimental track. It is not the production Ya-Fest site.

Production-oriented surface: `../HTML landing for claude/`

Canonical public domain: `https://yafest.ru/`

Do not deploy this directory to production. It still contains `https://ya-fest.ru` references from an earlier prototype, and that domain is not a purchased or public Ya-Fest domain.

Before any future production migration:

- create an explicit accepted decision in `docs/operating-system/DECISIONS.md`;
- retarget canonical URLs, metadata, API checks, robots, and sitemap to `https://yafest.ru/`;
- normalize product facts against the production static surface;
- run the full static/product verification suite.
