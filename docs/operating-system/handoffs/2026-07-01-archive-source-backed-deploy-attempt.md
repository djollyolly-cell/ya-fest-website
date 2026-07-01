# Archive Source-Backed Deploy Attempt Handoff

Date: 2026-07-01
Surface: `HTML landing for claude/`
Canonical domain: `https://yafest.ru/`
Target commit: `a860004`
Status: pushed to `origin/main`; production deploy blocked by hosting access.

## Summary

The source-backed archive GEO changes for `winter-theatre.html`,
`theatre-sea.html`, and `cinema-sea.html` are committed and pushed to
`origin/main`.

Production is not updated yet. Public checks on 2026-07-01 showed that all three
live pages still miss the new `Протокол победителей по номинациям` archive
block.

## Commits To Deploy

- `1a4ea5b` — `Source-backed GEO pass for winter-theatre archive`
- `b64eb76` — `Source-backed GEO pass for theatre and cinema archives`

## Local Verification Before Deploy Attempt

- `node "HTML landing for claude/test-geo-static.mjs"`: pass.
- `node "HTML landing for claude/test-camp-booking-form.mjs"`: pass.
- `git diff --check`: clean.
- `git status --short --branch`: `main...origin/main` with only unrelated
  untracked files left in the local workspace.

## Deploy Attempt

Direct SSH from the local machine is not available:

```text
ssh -o BatchMode=yes -o ConnectTimeout=8 server266.hosting.reg.ru 'echo ssh-ok'
Permission denied (publickey,password).
```

The in-app browser runtime is also unavailable in this session, so ISPmanager
Shell-client could not be opened from the agent environment.

## Required ISPmanager Shell Commands

Run these from the hosting shell:

```bash
cd ~/www/yafest.ru
git pull --ff-only origin main
cp -r "HTML landing for claude/"* .
git rev-parse --short HEAD
```

Expected `git rev-parse --short HEAD` output:

```text
a860004
```

## Post-Deploy Checks

Run from local machine or hosting shell:

```bash
for p in winter-theatre.html theatre-sea.html cinema-sea.html; do
  curl -L -s "https://yafest.ru/$p" \
    | grep -F -e "Протокол победителей по номинациям" -e "без официального источника"
done
```

Each page should return both phrases.

## Deploy Status

No production deploy was performed from this agent session.
