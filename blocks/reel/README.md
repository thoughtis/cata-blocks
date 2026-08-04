# Reel

The Reel block is a horizontal scroll container the reader swipes through sideways. It only accepts Reel Clip (`cata/reel-clip`) children — each clip is one "slide" — and the two blocks are a pair: Reel provides the scrolling flex track (`.wp-block-cata-reel__inner-container`, `display: flex` with `overflow: auto`, gapped by the theme's block gap), Clips provide the sized items inside it.

The block is static (`reel.php` just registers the build and offers a `cata_blocks_support_reel_block` opt-out filter) and supports wide/full alignment and margin controls.

An **Auto Slider** variation (`is-style-auto-slider`) turns the strip into a self-animating marquee: overflow is hidden and the track slides back and forth on a 15s CSS animation, with travel distance computed from the content/wide/full width so it works at any alignment. In the editor the animation is disabled and the strip stays manually scrollable.

The plugin ships these structural styles for both editor and front end; scrollbar treatment and everything cosmetic is left to the theme.
