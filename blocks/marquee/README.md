# Marquee

Renders a title as an infinitely scrolling horizontal ticker — the old `<marquee>` element redone as a CSS animation. It holds a single inner block: `core/post-title` by default (the template); `core/query-title`, `core/heading`, and `core/paragraph` are also allowed.

The saved markup is a static wrapper around `InnerBlocks.Content`; a `render_callback` adds the motion:

1. The inner heading/paragraph text is regex-extracted and stripped of tags.
2. `WP_HTML_Tag_Processor` adds the `wp-block-cata-marquee__inner` class and a `data-text` attribute (the extracted title) to the first tag inside the wrapper; if no title text is found the content is returned untouched.
3. CSS animates the inner element with a `translate3d` keyframe loop, and an `::after` pseudo-element reading `content: attr(data-text)` provides the seamless second copy.

The animation is disabled (and the duplicate text hidden) under `prefers-reduced-motion`; the editor stylesheet turns it off while editing so the title stays legible. The callback is wrapped in try/catch — failures report via the Query Monitor `qm/debug` action and fall back to the unmodified content.

Supports wide/full alignment, background/gradient/text color, and padding/margin. The `cata_blocks_support_marquee_block` filter disables registration.
