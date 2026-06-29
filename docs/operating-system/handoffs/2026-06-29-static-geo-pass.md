# Static GEO Pass Handoff

Date: 2026-06-29

## Scope

Implemented the first local GEO pass on the production-oriented static HTML surface under `HTML landing for claude/`.

No deploy, DNS change, webmaster console change, ad account change, branch change, commit, stash, or push was performed.

## Changed files

- `HTML landing for claude/test-geo-static.mjs`
- `HTML landing for claude/facts.html`
- `HTML landing for claude/llms.txt`
- `HTML landing for claude/index.html`
- `HTML landing for claude/about.html`
- `HTML landing for claude/camp.html`
- `HTML landing for claude/theatre-cinema-sochi.html`
- `HTML landing for claude/sitemap.xml`
- `website/DO_NOT_DEPLOY.md`
- `website/README.md`
- `docs/operating-system/DECISIONS.md`
- `docs/operating-system/CTO_BRIEF.md`
- `docs/operating-system/01-current-state/OPEN_QUESTIONS.md`
- `docs/operating-system/01-current-state/STATE.md`
- `docs/operating-system/02-architecture-contracts/OPEN_QUESTIONS.md`
- `docs/operating-system/02-architecture-contracts/STATE.md`
- `docs/operating-system/05-brand-geo-content/STATE.md`
- `docs/operating-system/09-deploy-ops/STATE.md`
- `docs/operating-system/10-qa-reviews/STATE.md`
- `docs/operating-system/11-migration-rollout/STATE.md`
- `docs/operating-system/PROGRESS.md`
- `docs/operating-system/handoffs/2026-06-29-operating-docs-setup.md`
- `docs/operating-system/handoffs/2026-06-29-static-geo-pass.md`
- `docs/superpowers/specs/2026-06-29-yafest-geo-design.md`
- `docs/superpowers/plans/2026-06-29-yafest-static-geo-implementation.md`

## Review closure

- Added `WebPage` and `DefinedTermSet` JSON-LD to `facts.html` so the facts page exposes a machine-readable entity map.
- Extended `test-geo-static.mjs` to verify the new facts page structured data.
- Added `website/DO_NOT_DEPLOY.md` and a README warning so the React/Vite prototype is not mistaken for the production surface.
- Expanded this handoff's changed-file list to include the domain and prototype decisions that shaped the implementation.

## Verification

Commands:

```bash
node "HTML landing for claude/test-geo-static.mjs"
node "HTML landing for claude/test-camp-booking-form.mjs"
git diff --check -- 'HTML landing for claude' docs website/DO_NOT_DEPLOY.md website/README.md
find docs -name 'PHASES.md' -print
find docs/operating-system -type d -empty -print
node - <<'NODE'
const fs = require('fs');
const path = require('path');
const root = path.resolve('docs');
const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && entry.name.endsWith('.md')) files.push(full);
  }
}
walk(root);
const misses = [];
const linkRe = /\[[^\]]*\]\((?!https?:|mailto:|tel:|#)([^)]+)\)/g;
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  for (const match of text.matchAll(linkRe)) {
    let target = match[1].trim().replace(/^<|>$/g, '').split('#')[0];
    if (!target) continue;
    target = decodeURIComponent(target);
    const resolved = path.resolve(path.dirname(file), target);
    if (!fs.existsSync(resolved)) misses.push(`${path.relative(process.cwd(), file)} -> ${match[1]}`);
  }
}
if (misses.length) {
  console.error(misses.join('\n'));
  process.exit(1);
}
console.log(`markdown links OK (${files.length} files)`);
NODE
```

Passing output observed:

```text
static GEO checks passed
camp booking form checks passed
markdown links OK (218 files)
```

The `git diff --check`, `PHASES.md`, and empty-directory checks produced no output.

## Risks and open items

- Live `https://yafest.ru` DNS, HTTPS, redirects, robots, sitemap, and rendered HTML still need external verification after deployment.
- `https://ya-fest.ru` is not the purchased public Ya-Fest domain; do not plan redirects or migration targets for it.
- React/Vite under `website/` remains a local prototype/experimental track.
- Product facts should be normalized into a richer entity registry in a later pass.

## Deploy status

No deploy was performed.
