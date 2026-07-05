# Moments Hero

Renders one homepage hero slot, server-side, on every request.

## What it does

- **Slot targeting:** `slot` (1–3) selects the Nth most recently published
  sticky ("pinned") post. Editors curate the top of the homepage by pinning —
  no page edits required. When nothing is pinned, slot 1 falls back to the
  latest post from `fallbackCategories` (or site-wide when empty) so the hero
  is never blank; slots 2–3 render nothing.
- **Layout by available art:**
  - Slot 2 renders a **diptych** — featured image beside the post's best
    second image (portrait preferred) — falling back to single when the post
    has no usable second image.
  - Slots 1 and 3 render a **2×2 collage** when the post carries at least
    four good same-orientation content images, and a natural-ratio single
    featured image otherwise.
- **Good image rules:** in-content attachments with alt text, excluding PNGs
  (social share graphics carry burned-in headlines and empty alt text) and
  duplicates of the featured image (same attachment or same source file).
- **Freshness:** the meta line gets an `is-fresh` red dot within
  `thresholdHours` (default 3), using the same whole-hour rounding as the
  Fresh Post Dot block so the dot and the "N hours ago" label change together.

## Attributes

| Attribute | Type | Default | Notes |
| --- | --- | --- | --- |
| `slot` | number | `1` | Which pinned post (1 = newest). |
| `fallbackCategories` | number[] | `[]` | Category IDs for the slot 1 fallback query. |
| `thresholdHours` | number | `3` | Fresh-dot window. |

## Usage

Three consecutive blocks replace the homepage hero query loops:

```html
<!-- wp:cata/moments-hero {"slot":1,"align":"wide","fallbackCategories":[603230776,603203627,603230771,603230990,603230991]} /-->
<!-- wp:cata/moments-hero {"slot":2,"align":"wide"} /-->
<!-- wp:cata/moments-hero {"slot":3,"align":"wide"} /-->
```
