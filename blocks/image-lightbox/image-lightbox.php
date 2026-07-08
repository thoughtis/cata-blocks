<?php
/**
 * Blocks > Image Lightbox
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

use WP_HTML_Tag_Processor;
use WP_Post;

/**
 * Register Image Lightbox Block
 */
function register_image_lightbox_block() {

	if ( ! apply_filters( 'cata_blocks_support_image_lightbox_block', true ) ) {
		return;
	}
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', __NAMESPACE__ . '\\register_image_lightbox_block' );

/**
 * Version the block's stylesheet by its own content hash.
 *
 * WordPress versions a block's `style` with the static block.json `version`,
 * so CSS changes never bust returning visitors' caches. The generated
 * `*.asset.php` version can't stand in for it either: wp-scripts extracts the
 * CSS to its own file, so that hash only tracks the JS and a CSS-only change
 * leaves it unchanged. Hash the built stylesheet instead, so its `?ver`
 * changes exactly when the CSS does — automatically, on every build.
 *
 * @param array $metadata Parsed block.json metadata.
 * @return array Metadata, with a content-derived version for this block.
 */
function version_image_lightbox_style( array $metadata ): array {
	if ( 'cata/image-lightbox' !== ( $metadata['name'] ?? '' ) ) {
		return $metadata;
	}

	$stylesheet = __DIR__ . '/build/style-index.css';

	if ( is_readable( $stylesheet ) ) {
		$metadata['version'] = substr( md5_file( $stylesheet ), 0, 20 );
	}

	return $metadata;
}
add_filter( 'block_type_metadata', __NAMESPACE__ . '\\version_image_lightbox_style' );

/**
 * Register Image Lightbox Meta
 *
 * Lightbox-only images: attachment ids stored on the post, appended to the
 * gallery as slides without appearing in the post content. Exposed in REST so
 * posts can be given extra images programmatically, e.g.
 * `{ "meta": { "cata_lightbox_image_ids": [ 123, 456 ] } }` on wp/v2/posts.
 */
function register_image_lightbox_meta() {

	if ( ! apply_filters( 'cata_blocks_support_image_lightbox_block', true ) ) {
		return;
	}

	$post_types = apply_filters( 'cata_blocks_image_lightbox_meta_post_types', array( 'post' ) );

	foreach ( $post_types as $post_type ) {
		register_post_meta(
			$post_type,
			'cata_lightbox_image_ids',
			array(
				'type'              => 'array',
				'single'            => true,
				'default'           => array(),
				'show_in_rest'      => array(
					'schema' => array(
						'type'  => 'array',
						'items' => array( 'type' => 'integer' ),
					),
				),
				'sanitize_callback' => __NAMESPACE__ . '\\cata_image_lightbox_sanitize_image_ids',
				'auth_callback'     => __NAMESPACE__ . '\\cata_image_lightbox_meta_auth',
			)
		);
	}
}
add_action( 'init', __NAMESPACE__ . '\\register_image_lightbox_meta' );

/**
 * Sanitize image ids
 *
 * Keep the stored value a flat list of positive integers; anything else is
 * discarded rather than saved.
 *
 * @param mixed $ids
 *
 * @return array<int, int>
 */
function cata_image_lightbox_sanitize_image_ids( $ids ): array {

	if ( ! is_array( $ids ) ) {
		return array();
	}

	return array_values( array_filter( array_map( 'absint', $ids ) ) );
}

/**
 * Meta auth
 *
 * Allow editing the lightbox image ids for anyone who can edit the post.
 *
 * @param bool   $allowed
 * @param string $meta_key
 * @param int    $object_id
 *
 * @return bool
 */
function cata_image_lightbox_meta_auth( bool $allowed, string $meta_key, int $object_id ): bool {
	return current_user_can( 'edit_post', $object_id );
}

/**
 * Resolve a color attribute to a CSS value.
 *
 * A preset palette color is stored as a slug and becomes a preset var; a custom
 * color is used as-is. Falls back to the given default.
 *
 * @param array  $attributes
 * @param string $slug_key    Attribute holding a preset color slug.
 * @param string $custom_key  Attribute holding a custom color value.
 * @param string $default     Fallback color.
 *
 * @return string
 */
function cata_image_lightbox_color( array $attributes, string $slug_key, string $custom_key, string $default ): string {
	if ( ! empty( $attributes[ $slug_key ] ) ) {
		return sprintf( 'var( --wp--preset--color--%s )', $attributes[ $slug_key ] );
	}

	return $attributes[ $custom_key ] ?? $default;
}

/**
 * Resolve a native block-supports color (text or background) to a CSS value.
 *
 * Presets are stored as a slug and become a preset var; a custom color lives
 * under style.color. Falls back to the given default.
 *
 * @param array  $attributes
 * @param string $preset_key  Attribute holding a preset slug ('textColor'/'backgroundColor').
 * @param string $style_key   style.color key for a custom value ('text'/'background').
 * @param string $default     Fallback color.
 *
 * @return string
 */
function cata_image_lightbox_supports_color( array $attributes, string $preset_key, string $style_key, string $default ): string {
	if ( ! empty( $attributes[ $preset_key ] ) ) {
		return sprintf( 'var( --wp--preset--color--%s )', $attributes[ $preset_key ] );
	}

	$custom = $attributes['style']['color'][ $style_key ] ?? '';

	return '' !== $custom ? $custom : $default;
}

/**
 * Get post images
 *
 * Collect the lightbox images for a post, cached per post so the block render
 * and the image-block badge filter share one parse per request.
 *
 * @param WP_Post $post
 *
 * @return array<int, array{src: string, alt: string, id: int, caption: string}>
 */
function cata_image_lightbox_get_post_images( WP_Post $post ): array {

	static $cache = array();

	if ( ! array_key_exists( $post->ID, $cache ) ) {
		$images = cata_image_lightbox_get_images( parse_blocks( $post->post_content ) );

		/**
		 * Minimum in-content photos before a post becomes a lightbox gallery.
		 * Image-light posts (fewer than this) stay ungalleried unless an editor
		 * curates lightbox images to force one on. The featured image is never a
		 * slide, so only in-content photos count toward this minimum.
		 *
		 * @param int $minimum Minimum in-content image count. Default 6.
		 */
		$minimum = (int) apply_filters( 'cata_blocks_image_lightbox_minimum_images', 6 );

		// Curated lightbox images (the cata_lightbox_image_ids meta) force the
		// gallery on no matter how few in-content photos the post has.
		$forced = array() !== (array) get_post_meta( $post->ID, 'cata_lightbox_image_ids', true );

		if ( count( $images ) < $minimum && ! $forced ) {
			$cache[ $post->ID ] = array();
		} else {
			/**
			 * Filter the collected lightbox images so themes can add slides.
			 *
			 * Each entry must have src, alt, id, and caption keys; id may be 0 for
			 * images that are not attachments.
			 *
			 * @param array<int, array{src: string, alt: string, id: int, caption: string}> $images
			 * @param WP_Post                                                               $post
			 */
			$cache[ $post->ID ] = apply_filters( 'cata_blocks_image_lightbox_images', $images, $post );
		}
	}

	return $cache[ $post->ID ];
}

/**
 * Attachment image
 *
 * Build a slide entry from an attachment, or null when the attachment has no
 * usable image source.
 *
 * @param int $id Attachment id.
 *
 * @return array{src: string, alt: string, id: int, caption: string}|null
 */
function cata_image_lightbox_attachment_image( int $id ): ?array {

	if ( 0 === $id ) {
		return null;
	}

	$src = wp_get_attachment_image_url( $id, 'large' );

	if ( false === $src ) {
		return null;
	}

	return array(
		'src'     => $src,
		'alt'     => (string) get_post_meta( $id, '_wp_attachment_image_alt', true ),
		'id'      => $id,
		'caption' => (string) wp_get_attachment_caption( $id ),
	);
}

/**
 * Add meta images
 *
 * Append the post's lightbox-only images to the collected slides. Appending
 * keeps every trigger index on the page stable.
 *
 * @param array<int, array{src: string, alt: string, id: int, caption: string}> $images Collected slide images.
 * @param WP_Post                                                               $post
 *
 * @return array<int, array{src: string, alt: string, id: int, caption: string}>
 */
function cata_image_lightbox_add_meta_images( array $images, WP_Post $post ): array {

	// Extras extend a gallery the reader can already open; without other
	// slides there is no trigger on the page, so add nothing.
	if ( empty( $images ) ) {
		return $images;
	}

	$ids = get_post_meta( $post->ID, 'cata_lightbox_image_ids', true );

	if ( ! is_array( $ids ) ) {
		return $images;
	}

	$existing = array_map( 'intval', array_column( $images, 'id' ) );

	foreach ( $ids as $id ) {
		$id = (int) $id;

		// Skip duplicates of slides already collected from the page.
		if ( in_array( $id, $existing, true ) ) {
			continue;
		}

		if ( ! wp_attachment_is_image( $id ) ) {
			continue;
		}

		$image = cata_image_lightbox_attachment_image( $id );

		if ( null === $image ) {
			continue;
		}

		$images[]   = $image;
		$existing[] = $id;
	}

	return $images;
}
add_filter( 'cata_blocks_image_lightbox_images', __NAMESPACE__ . '\\cata_image_lightbox_add_meta_images', 10, 2 );

/**
 * Get images
 *
 * Collect images from image blocks, recursing through nested blocks.
 *
 * @param array $blocks Parsed blocks, e.g. from parse_blocks( $post->post_content ).
 *
 * @return array<int, array{src: string, alt: string, id: int}>
 */
function cata_image_lightbox_get_images( array $blocks ): array {

	$images = array();

	foreach ( $blocks as $block ) {
		if ( 'core/image' === $block['blockName'] && ! cata_image_lightbox_is_excluded( $block ) ) {
			$image = cata_image_lightbox_parse_image( $block );

			if ( null !== $image ) {
				$images[] = $image;
			}
		}

		if ( ! empty( $block['innerBlocks'] ) ) {
			$images = array_merge( $images, cata_image_lightbox_get_images( $block['innerBlocks'] ) );
		}
	}

	return $images;
}

/**
 * Is excluded
 *
 * Whether an image block opted out of the lightbox. The attribute lives in the
 * block-comment JSON, so it works for posts written programmatically as well
 * as in the editor.
 *
 * @param array $block A parsed image block.
 *
 * @return bool
 */
function cata_image_lightbox_is_excluded( array $block ): bool {
	return ! empty( $block['attrs']['excludeFromLightbox'] );
}

/**
 * Parse Image
 *
 * Read the first image out of an image block: its source/alt from the saved
 * markup, plus the attachment id (when set) so a srcset can be built for it.
 *
 * @param array $block A parsed image block.
 *
 * @return array{src: string, alt: string, id: int, caption: string}|null
 */
function cata_image_lightbox_parse_image( array $block ): ?array {

	$inner_html = $block['innerHTML'] ?? '';
	$tags       = new WP_HTML_Tag_Processor( $inner_html );

	if ( ! $tags->next_tag( 'img' ) ) {
		return null;
	}

	$src = $tags->get_attribute( 'src' );

	if ( ! is_string( $src ) || '' === $src ) {
		return null;
	}

	$alt = $tags->get_attribute( 'alt' );
	$id  = (int) ( $block['attrs']['id'] ?? 0 );

	if ( 0 === $id ) {
		$id = cata_image_lightbox_resolve_image_id( $tags, $src );
	}

	return array(
		'src'     => $src,
		'alt'     => is_string( $alt ) ? $alt : '',
		'id'      => $id,
		'caption' => cata_image_lightbox_caption( $inner_html ),
	);
}

/**
 * Resolve image id
 *
 * Recover the attachment id for an image block that saved without one, first
 * from the wp-image-{id} class in its markup, then by looking the image URL up
 * in the media library. Returns 0 when the image is not a local attachment.
 *
 * @param WP_HTML_Tag_Processor $tags Processor with its cursor on the img tag.
 * @param string                $src  The img src.
 *
 * @return int Attachment id, or 0 when none could be resolved.
 */
function cata_image_lightbox_resolve_image_id( WP_HTML_Tag_Processor $tags, string $src ): int {

	$class = $tags->get_attribute( 'class' );

	if ( is_string( $class ) && preg_match( '/\bwp-image-(\d+)\b/', $class, $matches ) ) {
		return (int) $matches[1];
	}

	return cata_image_lightbox_url_to_id( $src );
}

/**
 * URL to id
 *
 * Look up an attachment id from an image URL. Sized renditions point at the
 * original file once the dimensions suffix is removed, so that candidate is
 * tried first. Results are cached per URL for the request because each image
 * is parsed twice: once for the slides and once for its badge.
 *
 * @param string $src The img src.
 *
 * @return int Attachment id, or 0 when the URL is not a local attachment.
 */
function cata_image_lightbox_url_to_id( string $src ): int {

	static $cache = array();

	if ( array_key_exists( $src, $cache ) ) {
		return $cache[ $src ];
	}

	$url = preg_replace( '/[?#].*$/', '', $src );

	$candidates = array_unique(
		array(
			preg_replace( '/-\d+x\d+(?=\.\w{3,4}$)/', '', $url ),
			$url,
		)
	);

	$id = 0;

	foreach ( $candidates as $candidate ) {
		// Prefer the cached VIP wrapper; core's lookup is an uncached query.
		$id = function_exists( 'wpcom_vip_attachment_url_to_postid' )
			? (int) wpcom_vip_attachment_url_to_postid( $candidate )
			: (int) attachment_url_to_postid( $candidate );

		if ( 0 !== $id ) {
			break;
		}
	}

	$cache[ $src ] = $id;

	return $id;
}

/**
 * Caption
 *
 * Pull the figcaption out of an image block's saved markup so the same caption
 * shown in the content can be repeated in the lightbox.
 *
 * @param string $inner_html The image block's inner HTML.
 *
 * @return string Caption HTML (inline formatting preserved), or '' when absent.
 */
function cata_image_lightbox_caption( string $inner_html ): string {

	if ( ! preg_match( '#<figcaption[^>]*>(.*?)</figcaption>#is', $inner_html, $matches ) ) {
		return '';
	}

	return trim( $matches[1] );
}

/**
 * Image HTML
 *
 * Build the <img> for a slide. Attachment images get a srcset so the browser
 * can pick the best candidate. Images without an attachment (e.g. external
 * URLs) fall back to their single source.
 *
 * @param array  $image
 *
 * @return string
 */
function cata_image_lightbox_image_html( array $image ): string {

	if ( $image['id'] ) {
		$html = wp_get_attachment_image(
			$image['id'],
			'large',
			false,
			array(
				'class'    => 'wp-block-cata-image-lightbox__image',
				// Rendered width inside the panel: 95vw panel minus its padding,
				// less the ad column and gap once they sit alongside at 1240px,
				// capped where the panel stops growing.
				'sizes'    => '(min-width: 1620px) 1150px, (min-width: 1240px) calc(89vw - 304px), calc(95vw - 2rem)',
				'alt'      => $image['alt'],
				'loading'  => 'lazy',
				'decoding' => 'async',
			)
		);

		if ( '' !== $html ) {
			return $html;
		}
	}

	return sprintf(
		'<img class="wp-block-cata-image-lightbox__image" src="%s" alt="%s" loading="lazy" decoding="async" />',
		esc_url( $image['src'] ),
		esc_attr( $image['alt'] )
	);
}

/**
 * Badge icon
 *
 * Camera icon shown at the start of the count badge.
 *
 * @return string
 */
function cata_image_lightbox_badge_icon(): string {
	return '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.05l1.83-2h4.24l1.83 2H20v12zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/></svg>';
}

/**
 * Badge tooltip
 *
 * Hint shown on each clickable content image and used as the badge label.
 *
 * @return string
 */
function cata_image_lightbox_tooltip(): string {
	return __( 'Click to open the image gallery', 'cata' );
}

/**
 * Badge HTML
 *
 * Image count badge that doubles as an accessible button for opening the
 * lightbox.
 *
 * @param int $total Total number of images in the gallery.
 *
 * @return string
 */
function cata_image_lightbox_badge_html( int $total ): string {

	$icon    = apply_filters( 'cata_blocks_image_lightbox_badge_icon', cata_image_lightbox_badge_icon() );
	$tooltip = cata_image_lightbox_tooltip();

	// Optional text below the icon and count; rendered only when a filter
	// supplies it.
	$text      = apply_filters( 'cata_blocks_image_lightbox_badge_text', '' );
	$text_html = '' === $text
		? ''
		: sprintf( '<span class="cata-image-lightbox-badge__text">%s</span>', esc_html( $text ) );

	return sprintf(
		'<button type="button" class="cata-image-lightbox-badge" title="%1$s" aria-label="%1$s"><span class="cata-image-lightbox-badge__count">%2$s<span class="cata-image-lightbox-badge__number">+%3$d</span></span>%4$s</button>',
		esc_attr( $tooltip ),
		$icon,
		$total,
		$text_html
	);
}

/**
 * Find slide index
 *
 * Match an image block to its slide by attachment id, falling back to source
 * comparison for images without an id. Both sources are parsed from the raw
 * post content, so they compare exactly. First occurrence wins when the same
 * image appears more than once.
 *
 * @param array $image  Parsed image, from cata_image_lightbox_parse_image().
 * @param array $images Collected slide images.
 *
 * @return int|null
 */
function cata_image_lightbox_find_index( array $image, array $images ): ?int {

	if ( 0 !== $image['id'] ) {
		foreach ( $images as $index => $candidate ) {
			if ( $image['id'] === (int) $candidate['id'] ) {
				return $index;
			}
		}
	}

	foreach ( $images as $index => $candidate ) {
		if ( $candidate['src'] === $image['src'] ) {
			return $index;
		}
	}

	return null;
}

/**
 * Add badge to image block
 *
 * Filter core/image output on singular views so the count badge and trigger
 * class ship in the initial HTML, present and visible before (or without) the
 * view script.
 *
 * @param string $block_content
 * @param array  $block
 *
 * @return string
 */
function cata_image_lightbox_add_badge( string $block_content, array $block ): string {

	if ( ! apply_filters( 'cata_blocks_support_image_lightbox_block', true ) ) {
		return $block_content;
	}

	if ( is_admin() || ! is_singular() ) {
		return $block_content;
	}

	$post = get_queried_object();

	if ( ! $post instanceof WP_Post ) {
		return $block_content;
	}

	$images = cata_image_lightbox_get_post_images( $post );

	if ( empty( $images ) ) {
		return $block_content;
	}

	// Leave images that already have their own click behavior:
	// core's "enlarge on click" lightbox or a link around the image.
	if ( ! empty( $block['attrs']['lightbox']['enabled'] ) || str_contains( $block_content, 'lightbox-trigger' ) ) {
		return $block_content;
	}

	if ( preg_match( '#<a\b[^>]*>\s*<img\b#i', $block_content ) ) {
		return $block_content;
	}

	// Excluded images have no slide of their own but still open the gallery,
	// at its first slide. The marker class flags the exclusion in the markup
	// and tells the view script not to seed the slide from this image.
	if ( cata_image_lightbox_is_excluded( $block ) ) {
		return cata_image_lightbox_wrap_trigger(
			cata_image_lightbox_mark_excluded( $block_content ),
			0,
			count( $images )
		);
	}

	$image = cata_image_lightbox_parse_image( $block );

	if ( null === $image ) {
		return $block_content;
	}

	$index = cata_image_lightbox_find_index( $image, $images );

	if ( null === $index ) {
		return $block_content;
	}

	return cata_image_lightbox_wrap_trigger( $block_content, $index, count( $images ) );
}
add_filter( 'render_block_core/image', __NAMESPACE__ . '\\cata_image_lightbox_add_badge', 10, 2 );

/**
 * Mark excluded
 *
 * Add the exclusion class to an image block's figure so external tooling can
 * see the opt-out in the rendered markup.
 *
 * @param string $html The image block's markup.
 *
 * @return string
 */
function cata_image_lightbox_mark_excluded( string $html ): string {

	$tags = new WP_HTML_Tag_Processor( $html );

	if ( $tags->next_tag( 'figure' ) ) {
		$tags->add_class( 'cata-image-lightbox-exclude' );
	}

	return $tags->get_updated_html();
}

/**
 * Wrap trigger
 *
 * Mark an image as a lightbox trigger: trigger class and tooltip on the img,
 * badge-carrying wrapper with the slide index around it.
 *
 * @param string $html  Markup containing the image.
 * @param int    $index Slide index the trigger opens.
 * @param int    $total Total number of slides.
 *
 * @return string
 */
function cata_image_lightbox_wrap_trigger( string $html, int $index, int $total ): string {

	$tags = new WP_HTML_Tag_Processor( $html );

	if ( ! $tags->next_tag( 'img' ) ) {
		return $html;
	}

	$tags->add_class( 'is-cata-image-lightbox-trigger' );

	// Native tooltip on the image itself for mouse users.
	if ( null === $tags->get_attribute( 'title' ) ) {
		$tags->set_attribute( 'title', cata_image_lightbox_tooltip() );
	}

	$html = $tags->get_updated_html();

	// WP_HTML_Tag_Processor can only change attributes, so the wrapper and
	// badge are added around the img tag by string replacement.
	if ( ! preg_match( '#<img\b[^>]*>#i', $html, $matches, PREG_OFFSET_CAPTURE ) ) {
		return $html;
	}

	list( $img, $offset ) = $matches[0];

	$replacement = sprintf(
		'<span class="cata-image-lightbox-figure" data-cata-image-lightbox-index="%d">%s%s</span>',
		$index,
		$img,
		cata_image_lightbox_badge_html( $total )
	);

	return substr_replace( $html, $replacement, $offset, strlen( $img ) );
}

/**
 * Enqueue badge styles
 *
 * The block's stylesheet normally enqueues when the block renders, which can
 * land in the footer. Badges render inside the content, so enqueue early
 * whenever they will appear, keeping them styled at first paint.
 */
function cata_image_lightbox_enqueue_badge_styles() {

	if ( ! apply_filters( 'cata_blocks_support_image_lightbox_block', true ) ) {
		return;
	}

	if ( ! is_singular() ) {
		return;
	}

	$post = get_queried_object();

	if ( ! $post instanceof WP_Post ) {
		return;
	}

	if ( empty( cata_image_lightbox_get_post_images( $post ) ) ) {
		return;
	}

	wp_enqueue_style( 'cata-image-lightbox-style' );
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\cata_image_lightbox_enqueue_badge_styles' );
