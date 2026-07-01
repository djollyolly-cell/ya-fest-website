# Archive Source-Backed Production Deploy Handoff

Date: 2026-07-01
Surface: `HTML landing for claude/`
Canonical domain: `https://yafest.ru/`
Target content commit: `b64eb76` (archive HTML changes)
Production deploy commit: `a13f3e5`
Status: production deploy performed and checked.

## Summary

The source-backed archive GEO changes for `winter-theatre.html`,
`theatre-sea.html`, and `cinema-sea.html` were deployed to production on
2026-07-01.

The production checkout was fast-forwarded from `8b03ee8` to `a13f3e5`, then
the static files from `HTML landing for claude/` were copied into the webroot.
The public archive pages now expose the source-backed "protocol not published"
GEO block.

## Commits To Deploy

- `1a4ea5b` — `Source-backed GEO pass for winter-theatre archive`
- `b64eb76` — `Source-backed GEO pass for theatre and cinema archives`
- `a860004` — `Record archive GEO deploy blocker`
- `4e448f4` — `Fix archive GEO deploy handoff target`
- `a13f3e5` — `Make archive deploy handoff commit check stable`

## Local Verification Before Deploy Attempt

- `node "HTML landing for claude/test-geo-static.mjs"`: pass.
- `node "HTML landing for claude/test-camp-booking-form.mjs"`: pass.
- `git diff --check`: clean.
- `git status --short --branch`: `main...origin/main` with only unrelated
  untracked files left in the local workspace.

## Production Access Reference

Use the explicit hosting SSH identity and user:

```bash
ssh -i ~/.ssh/id_ed25519_server u3449604@server266.hosting.reg.ru
```

The previous generic SSH check below is not a valid deploy access path for this
hosting account:

```text
ssh -o BatchMode=yes -o ConnectTimeout=8 server266.hosting.reg.ru 'echo ssh-ok'
Permission denied (publickey,password).
```

## Deploy Command

This command was run successfully from the local machine:

```bash
ssh -i ~/.ssh/id_ed25519_server u3449604@server266.hosting.reg.ru \
  'cd ~/www/yafest.ru && git pull --ff-only origin main && cp -r "HTML landing for claude/"* . && git merge-base --is-ancestor b64eb76 HEAD && echo "archive HTML commit included"'
```

Final deploy output included:

```text
8b03ee8..a13f3e5  main -> origin/main
archive HTML commit included
```

## Post-Deploy Checks

Live URL checks:

```bash
for p in winter-theatre.html theatre-sea.html cinema-sea.html; do
  html=$(curl -L -s "https://yafest.ru/$p")
  protocol=$(printf '%s' "$html" | grep -F -c "Протокол победителей по номинациям")
  source=$(printf '%s' "$html" | grep -F -c "без официального источника")
  printf '%s protocol=%s source=%s\n' "$p" "$protocol" "$source"
done
```

Observed output:

```text
winter-theatre.html protocol=2 source=1
theatre-sea.html protocol=2 source=1
cinema-sea.html protocol=2 source=1
```

Server-side check:

```bash
ssh -i ~/.ssh/id_ed25519_server -o ConnectTimeout=8 u3449604@server266.hosting.reg.ru \
  'cd ~/www/yafest.ru && git rev-parse --short HEAD && for p in winter-theatre.html theatre-sea.html cinema-sea.html; do printf "%s " "$p"; grep -F -c "Протокол победителей по номинациям" "$p"; done'
```

Observed output:

```text
a13f3e5
winter-theatre.html 2
theatre-sea.html 2
cinema-sea.html 2
```

Local checks after production deploy:

- `node "HTML landing for claude/test-geo-static.mjs"`: pass.
- `node "HTML landing for claude/test-camp-booking-form.mjs"`: pass.
- `git diff --check`: clean.

## Rollback Reference

If the static deploy must be rolled back, use the previous production commit and
copy its generated HTML back into the webroot:

```bash
ssh -i ~/.ssh/id_ed25519_server u3449604@server266.hosting.reg.ru \
  'cd ~/www/yafest.ru && git reset --hard 8b03ee8 && cp -r "HTML landing for claude/"* .'
```

## Deploy Status

Production deploy was performed and checked for the static `https://yafest.ru/`
archive pages.
