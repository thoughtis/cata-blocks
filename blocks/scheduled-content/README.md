# Scheduled Content

A wrapper that shows or hides its inner blocks based on a start and/or end date, so promos, event banners, and seasonal notices can be scheduled in a post or template rather than published and removed by hand. Inner blocks are saved statically, but visibility is decided server-side on every render: outside the window the `render_callback` returns an empty string.

## Scheduling attributes

- **hasStartDate** / **startDate** — content stays hidden until past the start date (`now <= start` → hidden), so it appears strictly *after* the chosen moment.
- **hasEndDate** / **endDate** — content is hidden once the end date is reached (`now >= end` → hidden), so the end moment itself is already outside the window.

Each date has its own Inspector checkbox and `DateTimePicker` and is enforced only while its checkbox is on. The editor warns inline when the start date isn't before the end date — warning only; the invalid range still saves.

## Timezone behavior

Dates are stored as the site-local wall-clock strings the picker produces (no timezone offset). At render time PHP compares them to `current_datetime()` — now in the site's configured timezone — reformatted to a naive string, both sides passing through `strtotime()`, so the schedule follows the site's timezone setting, not the visitor's or UTC.

Because visibility is evaluated at render time, content flips exactly on schedule only as often as pages render; full-page caching can delay a transition until the cache expires. The `cata_blocks_support_scheduled_content_block` filter disables registration.
