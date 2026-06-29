<?php
/**
 * Blocks > Image Lightbox
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

use Throwable;
use WP_Block;
use WP_HTML_Tag_Processor;
use WP_Post;

/**
 * Register Image Lightbox Block
 */
function register_image_lightbox_block() {

	if ( ! apply_filters( 'cata_blocks_support_image_lightbox_block', true ) ) {
		return;
	}
	register_block_type( 
		__DIR__ . '/build',
		array(
			'render_callback' => __NAMESPACE__ . '\\cata_image_lightbox_render_callback',
		)
	);
}
add_action( 'init', __NAMESPACE__ . '\\register_image_lightbox_block' );


/**
 * Render Callback
 * Calls the real render function, wrapping it in try/catch.
 *
 * @param array $attribute
 * @param string $content
 * @param WP_Block $block
 * 
 * @return string
 */
function cata_image_lightbox_render_callback( array $attributes, string $content, WP_Block $block ): string {
	
	try {
		return cata_image_lightbox_render_block( $attributes, $content, $block );
	} catch( Throwable $e ) {
		do_action( 'qm/debug', $e );
		return $content;
	}	
}

/**
 * Render Block
 *
 * @param array $attribute
 * @param string $content
 * @param WP_Block $block
 *
 * @return string
 */
function cata_image_lightbox_render_block( array $attributes, string $content, WP_Block $block ): string {
	
	$post = get_queried_object();

	// Only render on singular views
	if ( ! $post instanceof WP_Post ) {
		return '';
	}

	$images = cata_image_lightbox_get_images( parse_blocks( $post->post_content ) );

	// Don't display anything if no images
	if ( empty( $images ) ) {
		return '';
	}

	wp_interactivity_state(
		'cata-blocks-image-lightbox',
		array(
			'images'          => $images,
			'currentIndex'    => 0,
			// Scope for the clickable content images; falls back to the whole
			// document client-side when no match is found.
			'contentSelector' => apply_filters(
				'cata_blocks_image_lightbox_content_selector',
				'.wp-block-post-content, .entry-content'
			),
		)
	);

	// Editor color settings, emitted as the custom properties the styles consume.
	$styles = sprintf(
		'--cata-image-lightbox-backdrop-color: %s; --cata-image-lightbox-backdrop-opacity: %d; --cata-image-lightbox-background: %s; --cata-image-lightbox-text: %s;',
		cata_image_lightbox_color( $attributes, 'backdropColor', 'customBackdropColor', '#000000' ),
		$attributes['backdropOpacity'] ?? 80,
		cata_image_lightbox_supports_color( $attributes, 'backgroundColor', 'background', '#ffffff' ),
		cata_image_lightbox_supports_color( $attributes, 'textColor', 'text', '#1a1a1a' )
	);

	$wrapper_attributes = get_block_wrapper_attributes(
		array(
			'data-wp-interactive' => 'cata-blocks-image-lightbox',
			'data-wp-init'        => 'callbacks.init',
			'style'               => $styles,
		)
	);

	// Button contents; filter to swap the defaults for an SVG icon, etc.
	$close_icon = apply_filters( 'cata_blocks_image_lightbox_close_icon', '×' );
	$prev_icon  = apply_filters( 'cata_blocks_image_lightbox_prev_icon', '←' );
	$next_icon  = apply_filters( 'cata_blocks_image_lightbox_next_icon', '→' );

	ob_start();
	?>
	<div <?php echo $wrapper_attributes; ?>>
		<dialog
			class="wp-block-cata-image-lightbox__dialog"
			aria-label="<?php esc_attr_e( 'Image gallery', 'cata' ); ?>"
			data-wp-on--keydown="actions.onKeydown"
			data-wp-on--click="actions.onBackdropClick"
		>
			<div class="wp-block-cata-image-lightbox__panel">
				<button
					type="button"
					class="wp-block-cata-image-lightbox__close"
					aria-label="<?php esc_attr_e( 'Close gallery', 'cata' ); ?>"
					data-wp-on--click="actions.close"
				><?php echo $close_icon; ?></button>

				<div class="wp-block-cata-image-lightbox__main">
					<div class="wp-block-cata-image-lightbox__viewport">
						<?php foreach ( $images as $index => $image ) : ?>
							<figure
								class="wp-block-cata-image-lightbox__slide"
								data-wp-class--is-active="callbacks.isActive"
								<?php echo wp_interactivity_data_wp_context( array( 'index' => $index ) ); ?>
							>
								<?php echo cata_image_lightbox_image_html( $image ); ?>
							</figure>
						<?php endforeach; ?>
					</div>

					<div class="wp-block-cata-image-lightbox__nav" data-wp-bind--hidden="!state.hasMultiple">
						<button
							type="button"
							class="wp-block-cata-image-lightbox__prev"
							aria-label="<?php esc_attr_e( 'Previous image', 'cata' ); ?>"
							data-wp-on--click="actions.prev"
						><?php echo $prev_icon; ?></button>
						<span class="wp-block-cata-image-lightbox__counter" data-wp-text="state.position"></span>
						<button
							type="button"
							class="wp-block-cata-image-lightbox__next"
							aria-label="<?php esc_attr_e( 'Next image', 'cata' ); ?>"
							data-wp-on--click="actions.next"
						><?php echo $next_icon; ?></button>
					</div>
				</div>
			</div>
		</dialog>
	</div>
	<?php
	return ob_get_clean();
}

/**
 * Resolve a colour attribute to a CSS value.
 *
 * A preset palette colour is stored as a slug and becomes a preset var; a custom
 * colour is used as-is. Falls back to the given default.
 *
 * @param array  $attributes
 * @param string $slug_key    Attribute holding a preset colour slug.
 * @param string $custom_key  Attribute holding a custom colour value.
 * @param string $default     Fallback colour.
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
 * Resolve a native block-supports colour (text or background) to a CSS value.
 *
 * Presets are stored as a slug and become a preset var; a custom colour lives
 * under style.color. Falls back to the given default.
 *
 * @param array  $attributes
 * @param string $preset_key  Attribute holding a preset slug ('textColor'/'backgroundColor').
 * @param string $style_key   style.color key for a custom value ('text'/'background').
 * @param string $default     Fallback colour.
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
