---
name: manuscript-tour-authoring
description: Generate a Manuscript scenario JSON that walks a user through any web page. Use when the user provides a URL (or raw HTML) and asks for a tour, walkthrough, demo, onboarding, product highlight, or visual guide. The output is a single JSON file conforming to schemaVersion 0.1.1 that the Manuscript Chrome extension (or its runtime bridge) can replay step-by-step.
---

# Manuscript Scenario Authoring — Agent Skill

> **Goal:** Inspect a web page (URL or HTML), pick the right elements,
> write narration, and emit a single JSON file. When this skill finishes,
> the user can hand the file to Manuscript and it plays a polished
> spotlight-and-narration tour with zero extra work.

## How to use this file

You (the human) don't edit anything by hand. The flow is:

1. **Give this `SKILL.md` to an AI agent** alongside the URL you want
   toured. Any of these work:
   - Claude.ai / Claude Code / Claude API — paste the contents as a
     skill, system prompt, or attached file.
   - Cursor, Windsurf, Cline — drop it in your project as
     `SKILL.md` and reference it from your prompt.
   - Any other agent that accepts a markdown skill spec.
2. **Tell the agent the URL** (and optionally language, length, tone).
3. **The agent emits `tour-<lang>.json`** following this skill. You
   save the file, drop it next to the Manuscript bridge, hit play.

That's the entire loop. No DOM picking, no JSON editing, no per-step
clicking. The skill below is everything the agent needs.

A minimal user prompt looks like:

> *"Use SKILL.md. Generate a Manuscript tour for
> `https://example.com/dashboard`. English, 6 steps."*

The expected response is **only the JSON file content** — no
preamble, no explanation. Paste it into `tour-en.json`, ship it.

This document is meant to be followed end-to-end by an AI agent. It
contains:

1. [Output contract](#1-output-contract)
2. [Procedure (the algorithm)](#2-procedure-the-algorithm)
3. [Inputs you need to ask for](#3-inputs-you-need-to-ask-for)
4. [Page analysis — finding good tour targets](#4-page-analysis--finding-good-tour-targets)
5. [JSON schema reference](#5-json-schema-reference)
6. [Selector chain authoring (the 3-layer rule)](#6-selector-chain-authoring-the-3-layer-rule)
7. [Annotation patterns](#7-annotation-patterns)
8. [Narration & pacing](#8-narration--pacing)
9. [Localization — same selectors, different language](#9-localization--same-selectors-different-language)
10. [Validation checklist](#10-validation-checklist)
11. [Worked example](#11-worked-example)
12. [Generation pseudocode](#12-generation-pseudocode)

---

## 1. Output contract

The skill produces **one file per language**, no more.

```
tour-<lang>.json   // schemaVersion === "0.1.1"
```

Required:

* `schemaVersion: "0.1.1"` (literal)
* `id: string` — stable kebab-case (`tour-acme-onboarding-en`)
* `name: string` — human title in the tour's language
* `url: string` — the canonical URL the scenario targets
* `createdAt`, `updatedAt: ISO-8601 string`
* `steps: Step[]` — 4–8 steps is the sweet spot

Each step requires `id`, `name`, `description`, `selectors`, an
`annotations` array (may be empty), `autoAdvanceMs`, and
`waitForNavigation`. Schema details are in §5.

The file must:

* Parse as valid JSON (no comments, no trailing commas).
* Use the literal string `"0.1.1"` for `schemaVersion`. Do not invent
  newer versions.
* Be small enough to ship in a repo (under ~50 KB per file is normal;
  freedraw with many points can push higher).

Anything outside the schema is **ignored** by the extension — don't
invent fields. Optional fields (e.g. `anchorOffset`, `siteFonts`) may
be added when meaningful.

---

## 2. Procedure (the algorithm)

Follow these phases in order.

**Phase A — Gather**
1. Read the target page (fetch HTML, render JS if needed, screenshot if
   you can).
2. Confirm the user's intent: tour purpose (onboarding? feature
   highlight? marketing tour?), the audience, and the language(s).
3. Note the page's heading hierarchy, primary CTA, distinct sections,
   and any obvious data-* attributes / ids / aria-labels.

**Phase B — Plan**
4. Pick **4–8 spotlight targets**. Order them so the camera moves
   roughly top-to-bottom or in narrative order (problem → solution →
   proof → CTA).
5. For each target, decide:
   - The element it spotlights (selector).
   - One narration sentence (read aloud during replay).
   - Whether to add an inline label (text annotation) or arrow.
   - The auto-advance time (5–8 seconds per step is normal; longer if
     narration is long).
   - Whether the step waits for a user click (`waitForNavigation`).

**Phase C — Selector pass**
6. For each spotlight target, build a `SelectorChain` with all three
   layers populated (see §6). Always fill all three — the chain only
   gracefully degrades when every layer is present.

**Phase D — Annotation pass**
7. Add text labels, shapes, or arrows only when they pull weight.
   Empty `annotations: []` is fine — spotlight + narration alone can
   carry a step.
8. Use `anchorOffset` for any annotation that should follow the
   spotlight element on window resize (§7).

**Phase E — Emit**
9. Assemble the JSON. Run the validation checklist (§10).
10. Output the JSON only. No surrounding prose unless the user asked
    for an explanation.

---

## 3. Inputs you need to ask for

If the user hasn't already provided these, ask before generating:

* **Target URL.** Required. If only HTML is provided, infer the URL or
  use `https://example.com/` and tell the user to edit it.
* **Tour purpose.** "Onboarding for X", "marketing walkthrough", "demo
  of the new dashboard". This shapes the narration tone.
* **Language(s).** Default to English. If the user mentions Korean or
  the page contains Korean copy, generate `tour-ko.json` too with the
  same selectors and translated narration.
* **Length preference.** Short (≤4 steps) vs. standard (5–7) vs.
  thorough (8+). Default to standard.

If the user gives only a URL with no other context, **default to: 6
steps, English, marketing-walkthrough tone, 6 second per step.**

---

## 4. Page analysis — finding good tour targets

A "good" spotlight target is something the user benefits from
*noticing*. Heuristics in priority order:

1. **The page's primary CTA** (sign-up button, "Get started", "Buy
   now"). Always tour-worthy.
2. **The hero / lede.** First impression. Usually `section.hero`,
   `header`, or the page's first `<h1>` container.
3. **Distinct product surfaces.** Features grid, pricing table,
   testimonials, FAQ. Each grid container is one step — don't tour
   every grid item individually.
4. **Navigation / language switcher / theme toggle.** Only if relevant
   to the user's goal.
5. **Settings, search, profile area.** Often, but skip if irrelevant.

Avoid:

* Decorative elements (background gradients, page-edge ornaments).
* Pieces of text that aren't visually distinct from neighbors.
* Anything below the fold that scroll-into-view can't easily show.

Order targets so the scroll path looks smooth — not jumping from
bottom back to top.

---

## 5. JSON schema reference

### 5.1 `Scenario`

```ts
{
  schemaVersion: "0.1.1",          // literal
  id: string,                       // kebab-case, unique
  name: string,                     // displayed in extension's list
  url: string,                      // canonical page URL
  createdAt: string,                // ISO-8601
  updatedAt: string,                // ISO-8601
  steps: Step[],                    // 1 or more
  siteColors?: { text?: string[]; background?: string[] },
  siteFonts?: string[],             // CSS font-family stacks
  customColors?: { text?: string[]; background?: string[] }
}
```

`siteFonts` is helpful — fill it with a stack matching the target page
so annotation text doesn't visually clash. Example:

```json
"siteFonts": [
  "'Pretendard Variable', Pretendard, -apple-system, 'Asta Sans', sans-serif"
]
```

### 5.2 `Step`

```ts
{
  id: string,                                  // kebab-case
  name: string,                                // short, shown in step list
  description: string,                         // narration (read aloud)
  thumbnailDataUrl: null,                      // leave null when authoring by hand
  selectors: SelectorChain,                    // see §5.3
  annotations: Annotation[],                   // may be []
  autoAdvanceMs: number | null,                // null = manual advance only
  waitForNavigation: boolean,                  // true = action step (§8)
  pickedAtUrl?: string                         // override the scenario url for this step
}
```

### 5.3 `SelectorChain`

```ts
{
  layer1: { kind: "stable-attr",      cssSelector: string },
  layer2: { kind: "text-parent",      text: string, parentSelector: string, tagName: string },
  layer3: { kind: "visual-heuristic", x: number, y: number, width: number, height: number, nearbyText: string[] },
  framePath?: { index: number, url: string }[]   // only for iframe targets
}
```

Always populate all three layers. See §6 for how.

### 5.4 `Annotation` — discriminated union

#### `TextAnnotation`

```ts
{
  kind: "text",
  id: string,
  text: string,                                // user-visible label
  position: { x: number, y: number },          // absolute viewport coords (fallback)
  anchorOffset?: { x: number, y: number },     // preferred: offset from element top-left
  rotate?: number,                             // degrees
  entryAnimation?: EntryAnimation,
  style: {
    fontFamily: string,
    fontSize: number,                          // px, usually 14–20
    color: string,                             // CSS color
    bold: boolean,
    italic?: boolean,
    backgroundColor?: string,                  // 'transparent' or hex/rgb
    backgroundOpacity?: number,                // 0–1
    borderColor?: string                       // 'transparent' for no border
  }
}
```

#### `ArrowAnnotation`

```ts
{
  kind: "arrow",
  id: string,
  style: "excalidraw",                         // only kind in v0.1
  from: { x: number, y: number },              // absolute (fallback)
  to:   { x: number, y: number },
  fromAnchorOffset?: { x: number, y: number }, // preferred
  toAnchorOffset?:   { x: number, y: number },
  color: string,
  strokeWidth: number,                         // 2–6 typical
  entryAnimation?: EntryAnimation
}
```

#### `ShapeAnnotation`

```ts
{
  kind: "shape",
  id: string,
  shapeKind: "rectangle" | "ellipse" | "triangle" | "diamond"
           | "star"      | "callout" | "line"     | "block-arrow",
  bounds: { x: number, y: number, width: number, height: number },
  boundsAnchorOffset?: { x: number, y: number },  // preferred — w/h stay the same
  fill: string,                                   // 'transparent' = outline only
  stroke: string,
  strokeWidth: number,
  fillOpacity?: number,                           // 0–1
  rotate?: number,
  entryAnimation?: EntryAnimation
}
```

#### `FreeDrawAnnotation`

```ts
{
  kind: "freedraw",
  id: string,
  points: { x: number, y: number }[],
  pointsAnchorOffset?: { x: number, y: number }[],  // must be same length as points
  stroke: string,
  strokeWidth: number,
  strokeOpacity?: number,
  rotate?: number,
  entryAnimation?: EntryAnimation
}
```

### 5.5 `EntryAnimation`

```ts
{
  kind: "none" | "fade" | "slide-left" | "slide-right" | "slide-up"
      | "slide-down" | "bounce" | "zoom" | "rotate",
  durationMs: number,    // typically 400–800
  delayMs: number        // typically 0–400 (stagger across annotations)
}
```

---

## 6. Selector chain authoring (the 3-layer rule)

The chain has three layers because pages change. Layer 1 is precise but
brittle; layer 3 is broad but always available. **Fill all three** so
replay degrades gracefully.

### Layer 1 — stable attribute

Use, in priority order:

1. `[data-testid="…"]`
2. `[data-test="…"]`
3. `#some-id` (if not generated by a build hash — e.g. CSS Modules
   produce ids like `Section_root__a1b2`, those are not stable)
4. `[aria-label="…"]`
5. A structural class chain (`section.hero`, `#features`, etc.) when
   nothing better exists. Pick a class the design system clearly
   "owns".

If nothing stable exists, fall back to a structural `tag:nth-of-type`
path — but try hard to find a real attribute first.

```json
"layer1": { "kind": "stable-attr", "cssSelector": "[data-testid=\"invite-btn\"]" }
```

### Layer 2 — text + parent

Useful when the element has visible text:

```json
"layer2": {
  "kind": "text-parent",
  "text": "Invite team",
  "parentSelector": "header.bar .user",
  "tagName": "BUTTON"
}
```

`text` matches the trimmed text content (exact). `parentSelector`
should be a 1–2 level ancestor selector that is itself stable.

### Layer 3 — visual heuristic

Last-resort recovery. Capture viewport rect + a few nearby text
snippets so the resolver can `elementFromPoint` and confirm.

```json
"layer3": {
  "kind": "visual-heuristic",
  "x": 1056, "y": 14, "width": 92, "height": 32,
  "nearbyText": ["Invite team", "+ New report", "JK"]
}
```

If you can't actually load the page (HTML-only input), estimate rect
from element ordering and a 1280×800 viewport. Manuscript will scroll
to the element if needed.

### Iframe targets

Only fill `framePath` when the target lives inside an iframe:

```json
"framePath": [{ "index": 0, "url": "https://embed.example.com/widget" }]
```

Same-origin iframes only — cross-origin doesn't resolve in v0.1.

---

## 7. Annotation patterns

Annotations are optional. A clean spotlight + good narration often
beats clutter.

### When to add text

* **Inline label** — name the highlighted element ("1. Invite", "Quick
  start"). Use `fontSize: 14–18`, `bold: true`, dark background, light
  text. Position with `anchorOffset` so it sticks near the element on
  resize.
* **Tip / caption** — a short tip ≤ 8 words. Bigger font is fine
  (18–22).

Don't add a text annotation that just repeats the narration the user
will hear.

### When to add shape

* **Highlight area** — `rectangle` or `ellipse` outline around a
  region that the spotlight can't precisely outline (e.g., a group of
  cards). `fill: 'transparent'`, `stroke: '#c9445b'`, `strokeWidth: 3`.
* **Numbered callout** — `callout` shape with a number inside.

### When to use freedraw / arrow

* **Arrow** — point from a label to its target. Always anchored to
  both endpoints (`fromAnchorOffset`, `toAnchorOffset`). Use
  `style: "excalidraw"`, `strokeWidth: 3`, color matching the page
  accent.
* **Freedraw** — circle, underline, or freeform mark. Use when an
  arrow looks too "Pinterest" for the brand.

### `anchorOffset` rules

* Compute offset from the spotlight element's top-left.
* Above-left labels: negative y offset (e.g. `{ x: 12, y: -44 }`).
* Right-of labels: positive x offset wider than the element.
* Never set both `position` and `anchorOffset` to the same coords;
  `anchorOffset` wins when an anchor element resolves. Use `position`
  as the absolute fallback.

### Style defaults that look polished

```json
"style": {
  "fontFamily": "'EB Garamond', Garamond, serif",     // for labels — feels editorial
  "fontSize": 18,
  "color": "#ffffff",
  "bold": true,
  "backgroundColor": "#1a2438",
  "backgroundOpacity": 1,
  "borderColor": "transparent"
}
```

For body text or longer captions, switch to `'Pretendard Variable',
Pretendard, sans-serif` and a lighter background.

---

## 8. Narration & pacing

### Narration (`Step.description`)

Read aloud via Web Speech API during replay. Keep it:

* **One or two sentences.** ≤ 28 words is comfortable; ≤ 18 words is
  ideal.
* **Specific.** Name the element ("the Download button") rather than
  vague ("this thing").
* **In the user's language.** No mixed-language sentences unless
  explicitly requested.
* **Free of marketing fluff.** "Click to start" beats "Embark on
  your incredible journey".

### Step name (`Step.name`)

Shown in the prompter sidebar and as the floating-panel card title.
2–4 words. Title case for English, natural casing for Korean.

### `autoAdvanceMs`

Roughly **350 ms per spoken word** + 1 s buffer. Examples:

| Word count | autoAdvanceMs |
|---|---|
| 8 words | 4000 |
| 14 words | 6000 |
| 22 words | 8500 |

Set to `null` only if the user explicitly wants manual advance.

### Action steps (`waitForNavigation: true`)

Use when the step is "now click this and the page changes":

* The replay pauses at the spotlight, shows "Click or type in this
  area," and waits.
* If the click navigates to a new URL, Manuscript resumes on the next
  page automatically — *as long as the bridge is not running in
  standalone mode*. In standalone bridge playback, action steps still
  pause but won't auto-navigate.

### Cross-page steps (`pickedAtUrl`)

Set when the step's target lives on a different URL than the scenario's
top-level `url`. The replay engine handles navigation. Skip for
standalone bridge tours (they stay on one page by design).

---

## 9. Localization — same selectors, different language

When generating multiple languages:

* Selectors are **identical** across languages. The DOM doesn't change
  with language.
* `Scenario.name`, `Step.name`, `Step.description`, and any annotation
  `text` are translated.
* `Scenario.id` differs per language (`tour-xyz-en`, `tour-xyz-ko`).
* Keep file names parallel: `tour-en.json`, `tour-ko.json`.

If the target page itself has bilingual `[data-en]` / `[data-ko]`
markers, you can either:

a. Target the language-neutral container (e.g. `section.hero`) — both
   tours work for free.
b. Target language-specific elements (`h1[data-en]`, `h1[data-ko]`) —
   selectors then differ between files.

Prefer (a) when the container is visually distinct on its own.

---

## 10. Validation checklist

Before emitting, verify:

- [ ] Parses as JSON (no comments, no trailing commas).
- [ ] `schemaVersion === "0.1.1"`.
- [ ] `id`, `name`, `url`, `createdAt`, `updatedAt`, `steps` all present.
- [ ] Each step has `id`, `name`, `description`, `selectors`,
      `annotations` (array, may be empty), `autoAdvanceMs`,
      `waitForNavigation`.
- [ ] Every selector chain has `layer1`, `layer2`, `layer3` (all three).
- [ ] `text-parent` layer's `tagName` is uppercase
      (`BUTTON`, `SECTION`, `DIV`).
- [ ] Annotation `id`s are unique within the file.
- [ ] No annotation references a font that the page or browser cannot
      provide. Including `'Asta Sans'` or `sans-serif` as a fallback in
      the family chain is good defense.
- [ ] If you wrote `anchorOffset`, you also wrote `position` (or
      `from/to/bounds/points`) as the absolute fallback.
- [ ] Step ordering tells a coherent story — scroll direction is mostly
      monotonic.
- [ ] No step is dead silent — even empty annotations must have
      narration in `description`.

---

## 11. Worked example

See `tour-en.json` and `tour-ko.json` next to this file. They tour the
Manuscript landing page itself.

Annotated highlights:

```json
{
  "id": "step-1",
  "name": "Welcome",
  "description": "Welcome to Manuscript — a Chrome extension for authoring DOM-aware product tours and manuals. Let me show you around.",
  "selectors": {
    "layer1": { "kind": "stable-attr", "cssSelector": "section.hero" },
    "layer2": { "kind": "text-parent", "text": "DOM-aware",
                "parentSelector": "main", "tagName": "SECTION" },
    "layer3": { "kind": "visual-heuristic",
                "x": 0, "y": 0, "width": 1200, "height": 480,
                "nearbyText": ["Manuscript", "Closed beta"] }
  },
  "annotations": [{
    "kind": "text", "id": "ann-1-text", "text": "1. Welcome",
    "position":     { "x": 80, "y": 80 },
    "anchorOffset": { "x": 24, "y": -52 },
    "style": {
      "fontFamily": "'EB Garamond', Garamond, serif",
      "fontSize": 18, "color": "#ffffff", "bold": true,
      "backgroundColor": "#1a2438", "backgroundOpacity": 1,
      "borderColor": "transparent"
    }
  }],
  "autoAdvanceMs": 6000,
  "waitForNavigation": false
}
```

Reasoning:

* **Selector layer 1** uses `section.hero` because the landing page's
  hero section is a stable, semantic CSS hook. No `data-testid` exists
  for it.
* **Layer 2** picks "DOM-aware" because it's distinctive English copy
  that appears once in the page — a good text anchor.
* **Layer 3** estimates a 1200×480 rect at the page top with text
  hints. If both layers above fail, the resolver tries this region.
* **Annotation** uses `anchorOffset` so a label stays glued ~24 px right
  and 52 px above the section's top-left as the user resizes.
* **autoAdvanceMs: 6000** — 17 words × ~350 ms ≈ 6 s.
* **No action step** because the user shouldn't have to click during a
  marketing tour.

---

## 12. Generation pseudocode

```
function authorTour(url, opts):
    page    = fetchAndRender(url)
    intent  = opts.intent  or "marketing-walkthrough"
    lang    = opts.lang    or "en"
    nSteps  = opts.length  or 6

    targets = pickTargets(page, intent, nSteps)   // §4
    steps = []
    for i, target in enumerate(targets):
        chain   = buildSelectorChain(target)       // §6 — all 3 layers
        narrate = writeNarration(target, intent, lang)        // §8
        label   = composeInlineLabel(i+1, target, lang)       // §7 (optional)
        steps.append({
            id:                "step-" + (i+1),
            name:              shortName(target, lang),
            description:       narrate,
            thumbnailDataUrl:  null,
            selectors:         chain,
            annotations:       label ? [textAnnotation(label, target)] : [],
            autoAdvanceMs:     350 * wordCount(narrate) + 1000,
            waitForNavigation: target.requiresUserClick === true
        })

    scenario = {
        schemaVersion: "0.1.1",
        id:            slug("tour-" + page.host + "-" + lang),
        name:          tourTitle(page, intent, lang),
        url:           canonicalUrl(url),
        createdAt:     nowIso(),
        updatedAt:     nowIso(),
        steps:         steps,
        siteFonts:     guessFontStack(page)
    }

    runValidation(scenario)                                    // §10
    return JSON.stringify(scenario, null, 2)
```

When you produce the JSON, output **only the JSON** (no surrounding
explanation) unless the user explicitly asked for commentary.

---

*Schema version pinned to `0.1.1`. The bridge library and the
extension are independently versioned (file name `manuscript-bridge.0.1.2.js`,
extension `chrome.runtime.getManifest().version`) — they may move
forward without bumping the scenario schema, since v0.1.x changes are
additive.*
