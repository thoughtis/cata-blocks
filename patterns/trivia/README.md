# Trivia

The Trivia pattern (`cata/trivia`) is a trivia-question call-out: a Cata Aside block wrapping a Kicker (preset to small, uppercase, reading "Trivia Question"), a **Question:** paragraph, and an **Answer:** paragraph. It is pure `register_block_pattern()` content — a serialized block string in `trivia.php` with no assets of its own — so it depends on this plugin's `cata/aside` and `cata/kicker` blocks being registered.

The answer text is wrapped in `<span class="tap-reveal">`, the markup used by the Tap To Reveal format that hides the answer until tapped. That format still needs to be moved into Cata Blocks from Creepy Catalog; until then the class only has an effect on sites where Creepy Catalog provides the format's script and styles.

Registration can be disabled via the `cata_blocks_support_trivia_pattern` filter; the pattern appears under the "text" category in the inserter.
