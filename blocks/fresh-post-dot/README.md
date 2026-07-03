# Fresh Post Dot

The Fresh Post Dot block replaces inline-script-based freshness markers with a clean, server-rendered solution. It displays the post's publish date in a human-readable relative format (e.g. "44 min ago") and conditionally shows a red dot indicator when the post was published within a configurable time threshold (default: 3 hours).

## Key features

- **Server-side freshness check** — no client-side JavaScript required. The comparison happens at render time in PHP, making it secure, portable, and compatible with full-page caching.
- **Configurable threshold** — editors can adjust the freshness window (in hours) directly from the block's Inspector panel in the editor.
- **Live editor preview** — the freshness indicator is visible while editing, using the actual post date so you see exactly what visitors will see.
- **Semantic HTML** — renders a `<time>` element with a proper `datetime` attribute for accessibility and SEO.
- **Minimal footprint** — a single CSS `::before` pseudo-element for the dot indicator, no extra DOM elements or JavaScript bundles.
