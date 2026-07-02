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
		$images   = cata_image_lightbox_get_images( parse_blocks( $post->post_content ) );
		$featured = cata_image_lightbox_featured_image( $post );

		// Lead with the featured image.
		if ( null !== $featured ) {
			array_unshift( $images, $featured );
		}

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

	return $cache[ $post->ID ];
}

/**
 * Featured image
 *
 * Build the featured image's slide entry so the most prominent image on the
 * page can lead the gallery.
 *
 * @param WP_Post $post
 *
 * @return array{src: string, alt: string, id: int, caption: string}|null
 */
function cata_image_lightbox_featured_image( WP_Post $post ): ?array {

	$id = (int) get_post_thumbnail_id( $post );

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
		if ( 'core/image' === $block['blockName'] ) {
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

	return array(
		'src'     => $src,
		'alt'     => is_string( $alt ) ? $alt : '',
		'id'      => (int) ( $block['attrs']['id'] ?? 0 ),
		'caption' => cata_image_lightbox_caption( $inner_html ),
	);
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
				'sizes'    => '(min-width: 1450px) 990px, (min-width: 1240px) calc(89vw - 304px), calc(95vw - 2rem)',
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
 * Match an image block to its slide by attachment id, which survives URL
 * rewrites and duplicate sources, falling back to a normalized source
 * comparison for images without an id.
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

	$src = cata_image_lightbox_normalize_src( $image['src'] );

	foreach ( $images as $index => $candidate ) {
		if ( cata_image_lightbox_normalize_src( $candidate['src'] ) === $src ) {
			return $index;
		}
	}

	return null;
}

/**
 * Normalize src
 *
 * Reduce an image URL to a form that survives scheme changes and appended
 * query args, so sources parsed from post content compare reliably.
 *
 * @param string $src
 *
 * @return string
 */
function cata_image_lightbox_normalize_src( string $src ): string {

	$src = (string) preg_replace( '#^https?:#i', '', $src );

	return explode( '?', $src, 2 )[0];
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
 * Add badge to featured image
 *
 * Filter the queried post's thumbnail markup so the featured image opens the
 * lightbox like the content images do. Post thumbnails don't carry the
 * wp-image-{id} class, so the slide is matched here by attachment id and the
 * wrapper ships the index for the view script.
 *
 * @param string $html
 * @param int    $post_id
 * @param int    $post_thumbnail_id
 *
 * @return string
 */
function cata_image_lightbox_add_featured_badge( string $html, int $post_id, int $post_thumbnail_id ): string {

	if ( ! apply_filters( 'cata_blocks_support_image_lightbox_block', true ) ) {
		return $html;
	}

	if ( '' === $html || is_admin() || ! is_singular() ) {
		return $html;
	}

	$post = get_queried_object();

	// Leave thumbnails of other posts (related-post loops, etc.) alone.
	if ( ! $post instanceof WP_Post || $post->ID !== $post_id ) {
		return $html;
	}

	// Leave thumbnails the theme made into links.
	if ( preg_match( '#<a\b#i', $html ) ) {
		return $html;
	}

	$images = cata_image_lightbox_get_post_images( $post );

	if ( empty( $images ) ) {
		return $html;
	}

	$index = cata_image_lightbox_find_index(
		array(
			'id'  => (int) $post_thumbnail_id,
			'src' => '',
		),
		$images
	);

	if ( null === $index ) {
		return $html;
	}

	return cata_image_lightbox_wrap_trigger( $html, $index, count( $images ) );
}
add_filter( 'post_thumbnail_html', __NAMESPACE__ . '\\cata_image_lightbox_add_featured_badge', 10, 3 );

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
