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

$total = count( $images );

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

// The gallery is wired up imperatively by the view script rather than with
// Interactivity API directives: directives only bind while the page hydrates,
// and an infinitely scrolled article's gallery arrives long after that.
$wrapper_attributes = get_block_wrapper_attributes( array( 'style' => $styles ) );

// Button contents; filter to swap the defaults for an SVG icon, etc.
$close_icon = apply_filters( 'cata_blocks_image_lightbox_close_icon', '×' );
$prev_icon  = apply_filters( 'cata_blocks_image_lightbox_prev_icon', '←' );
$next_icon  = apply_filters( 'cata_blocks_image_lightbox_next_icon', '→' );

// Strip of thumbnails below the photo; filter to false for a bare gallery.
$show_thumbs = apply_filters( 'cata_blocks_image_lightbox_show_thumbnails', true );
?>

<div <?php echo $wrapper_attributes; ?>>
	<dialog
		class="wp-block-cata-image-lightbox__dialog"
		id="<?php echo esc_attr( wp_unique_id( 'cata-image-lightbox-' ) ); ?>"
		aria-label="<?php esc_attr_e( 'Image gallery', 'cata' ); ?>"
	>
		<?php // Focus target for the open action: focusing the panel rather than a
		// button means an Enter-opener can't immediately Enter again to close, and
		// no focus ring shows until the reader actually tabs. ?>
		<div class="wp-block-cata-image-lightbox__panel" tabindex="-1">
			<button
				type="button"
				class="wp-block-cata-image-lightbox__close"
				aria-label="<?php esc_attr_e( 'Close gallery', 'cata' ); ?>"
			><?php echo $close_icon; ?></button>

			<div class="wp-block-cata-image-lightbox__main">
				<div class="wp-block-cata-image-lightbox__viewport">
					<?php foreach ( $images as $index => $image ) : ?>
						<?php // The first slide starts active; the view script moves the class from there. ?>
						<figure class="wp-block-cata-image-lightbox__slide<?php echo 0 === $index ? ' is-active' : ''; ?>">
							<div class="wp-block-cata-image-lightbox__placeholder-frame" aria-hidden="true">
								<img class="wp-block-cata-image-lightbox__placeholder" alt="" />
							</div>
							<?php echo cata_image_lightbox_image_html( $image ); ?>
							<?php $caption = apply_filters( 'cata_blocks_image_lightbox_caption', $image['caption'], $image ); ?>
							<?php if ( '' !== $caption ) : ?>
								<figcaption class="wp-block-cata-image-lightbox__caption">
									<?php echo wp_kses_post( $caption ); ?>
								</figcaption>
							<?php endif; ?>
						</figure>
					<?php endforeach; ?>

					<?php // Whole-image navigation: the left half of the image steps back, the
					// right half steps forward. Redundant with the arrow buttons and arrow keys,
					// so these are mouse-only affordances (aria-hidden, not focusable). ?>
					<div class="wp-block-cata-image-lightbox__navzone wp-block-cata-image-lightbox__navzone--prev" aria-hidden="true" <?php echo $total > 1 ? '' : 'hidden'; ?>></div>
					<div class="wp-block-cata-image-lightbox__navzone wp-block-cata-image-lightbox__navzone--next" aria-hidden="true" <?php echo $total > 1 ? '' : 'hidden'; ?>></div>
				</div>

				<div class="wp-block-cata-image-lightbox__nav" <?php echo $total > 1 ? '' : 'hidden'; ?>>
					<button
						type="button"
						class="wp-block-cata-image-lightbox__prev"
						aria-label="<?php esc_attr_e( 'Previous image', 'cata' ); ?>"
					><?php echo $prev_icon; ?></button>
					<?php // Live region so navigating announces the new position; the buttons
					// themselves keep the same labels slide to slide. ?>
					<span class="wp-block-cata-image-lightbox__counter" role="status"><?php echo esc_html( sprintf( '1 / %d', $total ) ); ?></span>
					<button
						type="button"
						class="wp-block-cata-image-lightbox__next"
						aria-label="<?php esc_attr_e( 'Next image', 'cata' ); ?>"
					><?php echo $next_icon; ?></button>
				</div>

				<?php if ( $show_thumbs ) : ?>
					<?php // Roving tabindex: only the current thumbnail is a tab stop, so a
					// 30 photo gallery doesn't put 30 stops between the reader and the end
					// of the dialog. The view script moves it along with the slide. ?>
					<div class="wp-block-cata-image-lightbox__thumbs" <?php echo $total > 1 ? '' : 'hidden'; ?>>
						<?php foreach ( $images as $index => $image ) : ?>
							<?php $thumb_url = cata_image_lightbox_thumb_url( $image ); ?>
							<?php if ( '' !== $thumb_url ) : ?>
								<button
									type="button"
									class="wp-block-cata-image-lightbox__thumb<?php echo 0 === $index ? ' is-active' : ''; ?>"
									data-cata-image-lightbox-index="<?php echo esc_attr( $index ); ?>"
									tabindex="<?php echo 0 === $index ? '0' : '-1'; ?>"
									<?php echo 0 === $index ? 'aria-current="true"' : ''; ?>
									aria-label="<?php echo esc_attr( sprintf( /* translators: 1: slide number, 2: total slides */ __( 'Go to image %1$d of %2$d', 'cata' ), $index + 1, $total ) ); ?>"
								><?php // Lazy: a closed dialog gives its thumbnails no geometry, so a
								// 30 photo gallery fires nothing until it opens and then only for the
								// part of the strip the reader has scrolled to. Empty alt because the
								// button around it is already labeled. ?><img class="wp-block-cata-image-lightbox__thumb-image" src="<?php echo esc_url( $thumb_url ); ?>" alt="" loading="lazy" decoding="async" /></button>
							<?php endif; ?>
						<?php endforeach; ?>
					</div>
				<?php endif; ?>
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
