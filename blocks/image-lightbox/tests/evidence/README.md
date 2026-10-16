# Metadata-only gallery verification, 2026-10-16

The public Becoming article `/the-fight-over-charlize-therons-appearance-in-monster/`
(WordPress 1956) had no body images. Its six saved `cata_lightbox_image_ids`
produced no gallery markup or slides. Authenticated read-only REST checks
confirmed active Cata Blocks 0.19.4 and a custom `goth//single` template with
`<!-- wp:cata/image-lightbox /-->` immediately after post content. The failure
is the collector's early return on an empty in-content image list.

The local browser fixture uses that article's public HTML with external
scripts removed, the actual modified PHP renderer, the built plugin assets,
and the article's two existing Monster attachments (1950 and 1951). Its
sample captions come from the test fixture. This is a local render check;
the plugin and article have not been deployed or updated by this change.

CEL Depot, desktop viewport:

- [Visible opener](meta-only-opener.png): “View 2 photos” appears after the article.
- [Gallery](meta-only-gallery.png): clicking opens the existing dialog and
  displays the outdoor smoking still. Both selected attachment images loaded
  (`complete` and `naturalWidth > 0`; source width 977 pixels).
- Next changes the fragment from `#slide-1` to `#slide-2` and the counter to
  `2 / 2`; [the DOM receipt](gallery-dom.json) records both loaded sources.
- Escape closes the dialog and returns focus to “View 2 photos”.

The PHP regression harness passes 15 checks. Independently restoring the old
empty-body return, removing the opener, or allowing the featured ID each
fails a relevant assertion. The block build and source/build PHP comparison
pass. Native PHP is absent on the verification machine, so the actual PHP
test ran on WordPress PHP-Wasm 8.3; the PR workflow runs it on native PHP.

Rollout: deploy Cata Blocks 0.19.5 through the site's normal plugin release
or parent-repository dependency update, clear affected page caches, and check
the public article again. The active Becoming template already has the
required block; no theme or template change is needed. Verify the displayed
photos by opening the gallery and inspecting loaded images, rather than
treating stored gallery metadata as rendering evidence.
