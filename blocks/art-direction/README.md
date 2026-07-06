# Art Direction

Renders the context post's art — server-side, on every request — as a single
image, diptych, or 2×2 collage, chosen from the images the post actually
carries. Designed to sit inside a Query Loop post template next to
`core/post-title`, `core/post-date`, and `cata/fresh-post-dot`, so typography
and color stay with the theme.

## Layout preference (`layout` attribute)

| Value | Renders | Degrades to |
| --- | --- | --- |
| `auto` (default) | 2×2 collage when the post carries ≥4 good same-orientation images | Single |
| `single` | Featured image at its natural ratio | Nothing when there is no featured image |
| `diptych` | Featured image beside the post's best second image (portrait preferred) | Single |
| `collage` | 2×2 grid of four good same-orientation images | Single |

When nothing is renderable (no featured image, layout resolved to single),
the block outputs nothing — surrounding title/date blocks form a text-only
card naturally.

**Good image rules:** in-content attachments with alt text, excluding PNGs
(social share graphics carry burned-in headlines and empty alt text) and
duplicates of the featured image (same attachment or same source file). See
`includes/selection.php`.

## Editor preview

The block previews real layouts in the editor using the `cata_art_direction`
REST field (`includes/rest.php`), which shares selection logic with the
render template: it exposes the featured image, the good images, the exact
images the diptych and collage would use, and the layout `auto` resolves to.
The field is computed for `context=edit` requests only, so public API
responses pay nothing.

## Homepage hero pattern

Three Query Loops replace the hand-maintained homepage hero markup. Each
shows the Nth newest pinned post ("Only pinned posts" + offset); the first
uses the query-filters pinned fallback so the top of the page is never empty.
Title and date styling belong to the theme pattern, not the block.

```html
<!-- wp:query {"query":{"perPage":1,"offset":0,"postType":"post","order":"desc","orderBy":"date","sticky":"only","inherit":false},"cataPinnedFallback":true,"cataPinnedFallbackCategories":[603230776,603203627,603230771,603230990,603230991],"align":"wide"} -->
<div class="wp-block-query alignwide"><!-- wp:post-template -->
<!-- wp:cata/art-direction {"layout":"auto"} /-->
<!-- wp:post-title {"isLink":true,"level":3} /-->
<!-- wp:cata/fresh-post-dot -->
<!-- wp:post-date {"format":"human-diff","isLink":false} /-->
<!-- /wp:cata/fresh-post-dot -->
<!-- /wp:post-template --></div>
<!-- /wp:query -->

<!-- wp:query {"query":{"perPage":1,"offset":1,"postType":"post","order":"desc","orderBy":"date","sticky":"only","inherit":false},"align":"wide"} -->
<div class="wp-block-query alignwide"><!-- wp:post-template -->
<!-- wp:cata/art-direction {"layout":"diptych"} /-->
<!-- wp:post-title {"isLink":true,"level":3} /-->
<!-- wp:cata/fresh-post-dot -->
<!-- wp:post-date {"format":"human-diff","isLink":false} /-->
<!-- /wp:cata/fresh-post-dot -->
<!-- /wp:post-template --></div>
<!-- /wp:query -->

<!-- wp:query {"query":{"perPage":1,"offset":2,"postType":"post","order":"desc","orderBy":"date","sticky":"only","inherit":false},"align":"wide"} -->
<div class="wp-block-query alignwide"><!-- wp:post-template -->
<!-- wp:cata/art-direction {"layout":"auto"} /-->
<!-- wp:post-title {"isLink":true,"level":3} /-->
<!-- wp:cata/fresh-post-dot -->
<!-- wp:post-date {"format":"human-diff","isLink":false} /-->
<!-- /wp:cata/fresh-post-dot -->
<!-- /wp:post-template --></div>
<!-- /wp:query -->
```

Core's "Only pinned posts" resolves an empty pin list to no results, so the
second and third loops render nothing when fewer posts are pinned — no
custom code involved.
