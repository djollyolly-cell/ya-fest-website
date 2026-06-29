# Document Pool

This file maps project source material and trust levels. It prevents old plans from being mistaken for completed work.

## Trust levels

- Current truth: active status and operating documents, plus code/tests when verified.
- Source/evidence: useful material that can support facts, plans, and copy, but does not prove implementation.
- Historical or draft: context only until re-verified.

## Current truth documents

- [README.md](README.md)
- [PROGRESS.md](PROGRESS.md)
- [01-current-state/STATE.md](01-current-state/STATE.md)
- Area-specific `STATE.md`, `CONTRACTS.md`, and `GATES.md` files
- Code and tests under `website/` and active production HTML files when verified

## Source and evidence documents

| Source | Trust level | Use |
|---|---|---|
| [docs/superpowers/specs/2026-06-29-yafest-geo-design.md](../superpowers/specs/2026-06-29-yafest-geo-design.md) | Current strategy source | GEO strategy, product-map direction, AI visibility principles |
| [teatr_kino_sochi_tvorcheskiy_kampus.md](../../teatr_kino_sochi_tvorcheskiy_kampus.md) | Source/evidence | Adult creative campus facts |
| [master_klassy_i_intensivy.md](../../master_klassy_i_intensivy.md) | Source/evidence | Theater/cinema teachers and intensives |
| [pedagogi_i_napravleniya.md](../../pedagogi_i_napravleniya.md) | Source/evidence | Dance teachers and directions |
| [yandex_direct_relaunch_plan.md](../../yandex_direct_relaunch_plan.md) | Source/evidence | Planned campaign structure and budgets |
| [yandex_direct_account_audit.md](../../yandex_direct_account_audit.md) | Source/evidence | Audit observations; verify against current account before action |
| [yandex_direct_camp_keywords.md](../../yandex_direct_camp_keywords.md) | Source/evidence | Keyword pool for campaign work |
| [yandex_direct_competitors.md](../../yandex_direct_competitors.md) | Source/evidence | Competitive context |
| [website/README.md](../../website/README.md) | Low-value source | Vite template notes, not product architecture |

## Rule

When a source document and current-state conflict, current-state wins for status. When current-state and code/tests conflict, code/tests win and current-state must be updated.
