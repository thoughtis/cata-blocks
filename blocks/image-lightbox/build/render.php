<?php
/**
 * Image Lightbox Render
 *
 * Variables in scope: $attributes, $content, $block.
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

use WP_Post;

$post = get_queried_object();

// Bail unless we're on a singular post-type view with content to scan.
if ( ! $post instanceof WP_Post ) {
	return;
}

$images = cata_image_lightbox_get_post_images( $post );

// Nothing to show without images; render nothing rather than an empty dialog.
if ( empty( $images ) ) {
	return;
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
	cata_image_lightbox_supports_color( $attributes, 'backgroundColor', 'background', 'light-dark( #ffffff, #1a1a1a )' ),
	cata_image_lightbox_supports_color( $attributes, 'textColor', 'text', 'light-dark( #1a1a1a, #ffffff )' )
);

// Apply the per-block Color Scheme control to the wrapper; the dialog inherits it.
$color_scheme = $attributes['cataBlocksColorScheme'] ?? '';
if ( in_array( $color_scheme, array( 'light only', 'dark only' ), true ) ) {
	$styles .= sprintf( ' color-scheme: %s;', $color_scheme );
}

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
?>

<div <?php echo $wrapper_attributes; ?>>
	<dialog
		class="wp-block-cata-image-lightbox__dialog"
		id="<?php echo esc_attr( 'cata-image-lightbox-' . $post->ID ); ?>"
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
							<?php $caption = apply_filters( 'cata_blocks_image_lightbox_caption', $image['caption'], $image ); ?>
							<?php if ( '' !== $caption ) : ?>
								<figcaption class="wp-block-cata-image-lightbox__caption">
									<?php echo wp_kses_post( $caption ); ?>
								</figcaption>
							<?php endif; ?>
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

			<?php if ( apply_filters( 'cata_blocks_image_lightbox_show_ad', true ) ) : ?>
				<aside
					class="wp-block-cata-image-lightbox__ad"
					id="cata-image-lightbox-ad"
					aria-label="<?php esc_attr_e( 'Advertisement', 'cata' ); ?>"
				></aside>
			<?php endif; ?>
		</div>
	</dialog>
</div>
