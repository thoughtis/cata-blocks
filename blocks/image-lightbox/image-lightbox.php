<?php
/**
 * Blocks > Image Lightbox
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

use WP_HTML_Tag_Processor;

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
 * @return array{src: string, alt: string, id: int}|null
 */
function cata_image_lightbox_parse_image( array $block ): ?array {

	$tags = new WP_HTML_Tag_Processor( $block['innerHTML'] ?? '' );

	if ( ! $tags->next_tag( 'img' ) ) {
		return null;
	}

	$src = $tags->get_attribute( 'src' );

	if ( ! is_string( $src ) || '' === $src ) {
		return null;
	}

	$alt = $tags->get_attribute( 'alt' );

	return array(
		'src' => $src,
		'alt' => is_string( $alt ) ? $alt : '',
		'id'  => (int) ( $block['attrs']['id'] ?? 0 ),
	);
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
				'sizes'    => '(min-width: 1240px) 1000px, 90vw',
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
