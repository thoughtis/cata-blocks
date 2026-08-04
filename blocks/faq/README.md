# FAQ

A question-and-answer container for article content. Each block holds one Q&A pair: the inner-blocks template starts with a locked heading (class `wp-block-cata-faq__question`, the question) followed by a paragraph (the answer), and only headings, paragraphs, and lists are allowed inside. Pressing Enter at the end exits the container (`__experimentalOnEnter`). The block is static — a wrapper div plus inner blocks — and an **Inline** block style collapses the question and its first paragraph onto one line for compact "Q: A." formatting.

## FAQPage structured data

Any page containing at least one FAQ block automatically gets [FAQPage](https://schema.org/FAQPage) JSON-LD — no separate plugin or manual schema entry. The machinery lives in `includes/structured-data/`:

- `FAQ_Data_Collector` hooks `render_block` and, for each `cata/faq` block rendered, extracts the question (text of the heading carrying the class above) and the answer (the remaining content, run through a `wp_kses` allow-list of headings, paragraphs, links, lists, and inline emphasis). Pairs with either half empty are skipped.
- `Render_FAQ_Data` prints a single `<script type="application/ld+json">` FAQPage schema at `wp_footer`, with the collected Question/Answer objects as `mainEntity` — or nothing if nothing was collected.

`faq.php` wires the pair up only when needed, checking `has_block( 'cata/faq' )` at `wp_body_open`, so the `render_block` filter costs nothing on FAQ-free pages. The `cata_blocks_support_faq_block` filter disables the block entirely.

The plugin ships the editor experience, markup, Inline style, and structured data; front-end typography and spacing come from the theme.
