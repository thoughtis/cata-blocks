# Related Content

The Related Content block shows 1–2 recently published posts that share a real subject with the post being read. It is rendered entirely server-side (`WP_Query` + `render.php`) with no external API or dashboard dependency, and it renders nothing at all when no posts qualify — the widget either earns its spot or doesn't appear.

## How matching works

- **Subjects come from the headline, not taxonomy.** The post title is scanned for runs of two or more consecutive capitalized words, broken by a small stopword list (articles, prepositions, common Title-Case headline verbs). A run like "Taylor Swift" or "Full House" is a candidate subject; single capitalized words are too noisy and are dropped. No shorter alias is ever derived from part of a matched phrase.
- **Candidates are posts published within the last 30 days** relative to when the page renders — a moving window, so an evergreen post picks up the block when something fresh publishes on the same subject and loses it once nothing recent qualifies.
- **Backgrid-credited posts sort first.** Candidates whose featured image carries `photo_credit_name` = "Backgrid" attachment meta move to the front; the rest keep recency order.
- **The result is capped at 2 posts** and cached in a 45-minute transient keyed on the post ID.

## Layouts

- **1 match** — a single feature-style card with more visual weight.
- **2 matches** — an even two-up grid (stacked on small screens).

## Usage

The block is hidden from the inserter — it's template-level, not something to drop mid-article.

- **Hybrid themes**: `do_blocks( '<!-- wp:cata/related-content /-->' )` after the post content, before comments.
- **FSE themes**: add `<!-- wp:cata/related-content /-->` to the single template.

The anchor post ID comes from block context (`postId`), falling back to `get_the_ID()`, so both placements work.
