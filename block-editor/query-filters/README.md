# Query Filters

Custom Query Loop options for hybrid themes: a "Custom Query Filters"
inspector panel on `core/query` with three independent boolean toggles. The
editor side (`src/index.js`) only registers the attributes and controls; all
behavior is server-side in `query-filters.php`.

## Inherit Query (`cataInheritQuery`)

Forces the loop's `query.inherit` to true at render time, so it shows the main
query's posts — for a Latest/Posts page in a hybrid theme where core's own
inherit option isn't available. Applied via both `render_block_data` and
`render_block_context` (for `core/post-template` / `core/query-pagination`)
because on some hosts (WP VIP) the former is ineffective.

## Filter by current term (`cataTermFromRequest`)

Adds a `tax_query` for the current request's taxonomy term —
`get_queried_object()` by default, replaceable via the
`cata_query_filters_term_from_request` filter — so one saved layout serves
every archive. Runs through `query_loop_block_query_vars`, i.e. only for
non-inherited queries (the ones that honor `offset`).

## Exclude already-shown posts (`cataExcludeRendered`)

De-duplicates posts across the page's Query Loops: each participating loop
excludes (`post__not_in`) what participating loops above it rendered — blocks
render in document order — and records its own results in a per-request
static registry. Only the `core/post-template` query records results; sibling
query-builders (`core/query-no-results`, pagination) run check queries with
the same vars, and recording those would hide posts that never displayed.
`post__in` queries (e.g. sticky "only") ignore `post__not_in` and cannot
participate.

## Attribute plumbing

Attributes are defined client-side on `core/query` and mirrored server-side
via `block_type_metadata`, so `core/query` provides them as context and the
query-building inner blocks (`core/post-template`, pagination,
`core/query-no-results`) consume them — every part of one loop sees the same
settings.
