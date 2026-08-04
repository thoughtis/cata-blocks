# Globe Background

A grouping container that draws an animated wireframe globe behind its inner blocks — a decorative backdrop for hero sections and promos. The globe is a small inline SVG (a circle plus eight arcs) animated purely in CSS: each arc rotates on the Y axis on a 12-second loop with staggered delays. Under `prefers-reduced-motion` it becomes a static fan of arcs.

Inner blocks are saved statically but render dynamically: the `render_callback` re-renders them and rebuilds the wrapper, injecting the globe SVG (absolutely positioned to fill the container, centered, clipped) behind an `__inner-blocks` layer. A try/catch logs render failures to Query Monitor (`qm/debug`) and falls back to the bare content, so a render error can never take down the page.

The only custom attribute is **globeColor** (default `#000`), chosen from the theme palette in the Inspector and applied as the SVG's `stroke`. It also supports wide/full alignment, text color, and padding/margin; the `cata_blocks_support_globe_animation_block` filter disables registration. Layout of the content in front of the globe is left to the inner blocks and theme.
