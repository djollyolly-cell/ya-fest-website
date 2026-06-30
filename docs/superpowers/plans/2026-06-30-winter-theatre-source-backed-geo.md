# Winter Theatre Source-Backed GEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a source-backed, anti-hallucination archive block to `winter-theatre.html` and record unresolved winner/source gaps.

**Architecture:** Keep the static HTML surface as the production source. Add one visible answer block, expand the static smoke test, and update operating docs/registry so future source-backed updates know what remains missing.

**Tech Stack:** Static HTML, Node smoke tests, Markdown operating docs.

## Global Constraints

- Do not publish winner names without an official VK/Telegram/source URL.
- Do not claim event-specific VK album URLs unless a specific URL was found and read.
- Keep `website/` React/Vite out of scope.
- Use `https://yafest.ru/` as the canonical domain.

---

### Task 1: Test The New Winter Archive Source Block

**Files:**
- Modify: `HTML landing for claude/test-geo-static.mjs`
- Test: `HTML landing for claude/test-geo-static.mjs`

**Interfaces:**
- Consumes: current `winter-theatre.html`.
- Produces: failing assertions for the source-backed archive block.

- [ ] **Step 1: Add failing assertions**

Add assertions requiring `Протокол победителей по номинациям`, `не опубликован на текущей странице`, and `без официального источника` in `winter-theatre.html`.

- [ ] **Step 2: Run test to verify it fails**

Run: `node "HTML landing for claude/test-geo-static.mjs"`
Expected: FAIL because the new block is not present.

### Task 2: Add The Public Archive Source Block

**Files:**
- Modify: `HTML landing for claude/winter-theatre.html`

**Interfaces:**
- Consumes: assertions from Task 1.
- Produces: visible source-backed archive copy.

- [ ] **Step 1: Insert one `icard` under `Коротко об архиве`**

Copy must state that the festival took place, official gallery photos are on the page, and the nomination winner protocol is not published on the current page without an official source.

- [ ] **Step 2: Run test to verify it passes**

Run: `node "HTML landing for claude/test-geo-static.mjs"`
Expected: PASS.

### Task 3: Record The Source Gap

**Files:**
- Modify: `docs/operating-system/15-entity-memory/yafest-entity-registry.md`
- Modify: `docs/operating-system/05-brand-geo-content/STATE.md`

**Interfaces:**
- Consumes: source scan results.
- Produces: explicit operating-doc gap for future source-backed update.

- [ ] **Step 1: Update P6 proof/gap notes**

Record that winner protocols and event-specific VK/Telegram URLs are not yet inventoried.

- [ ] **Step 2: Update brand/GEO state**

Record that the winter archive page now avoids unsupported winner claims.

### Task 4: Verify

**Files:**
- Test: `HTML landing for claude/test-geo-static.mjs`
- Test: `HTML landing for claude/test-camp-booking-form.mjs`

- [ ] **Step 1: Run static GEO smoke test**

Run: `node "HTML landing for claude/test-geo-static.mjs"`
Expected: `static GEO checks passed`.

- [ ] **Step 2: Run booking form smoke test**

Run: `node "HTML landing for claude/test-camp-booking-form.mjs"`
Expected: `camp booking form checks passed`.

- [ ] **Step 3: Run whitespace check**

Run: `git diff --check`
Expected: no output.

