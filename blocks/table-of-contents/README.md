# Table Of Contents

Registered as `cata/toc`, the block produces a linked list of a post's H2 headings. The saved markup is only a shell — a titled `<details>`/`<summary>` (or `div` pair) — and the link list is built in the browser by a `viewScriptModule`, so the TOC always reflects the headings actually on the page. The editor shows a placeholder list; the block description says to Preview or Publish to see the real thing.

## Front-end script

`src/script.js` runs on every `.wp-block-cata-toc`:

- It collects `<h2>`s from the surrounding content container (`.wp-site-blocks` or `.entry__content`); if none, the block removes itself from the DOM.
- Headings without an `id` get one generated from their text (lowercased, non-alphanumerics collapsed to hyphens, capped at 64 chars). Existing anchors are respected — the PHP enables the editor's `generateAnchors` setting, so editor-written headings already carry stable anchors.
- Optional `data-regex-pattern` / `data-regex-append` attributes on the wrapper let a theme rewrite or split link text via regex; the block never sets these itself.
- The generated `<nav><ul>…` is appended inside the `<details>` (with a fallback for pre-0.7.6 markup that created `<details>` client-side), and a `tocBlocksRendered` event is dispatched on `document`.

## Attributes and supports

- `summary` — the TOC title, a locked inner paragraph (default "Table of Contents").
- `behavior` — `alwaysOpen` (plain `div`s), `startOpen`, or `startClosed` (`<details>`, open or closed), an Inspector toggle group.

Supports typography, text/background/link color, border, and margin/padding; cannot be made reusable. The `cata_blocks_support_table-of-contents_block` filter disables registration.
