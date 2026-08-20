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
use function Cata\Blocks\Image_Lightbox\Trending\get_trending_post;

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

/**
 * Filter whether a cached trending card may be rendered into the final photo.
 * Client-side geometry still decides whether the phone has room to reveal it.
 *
 * @param bool    $show_related Whether to query and render the card. Default true.
 * @param WP_Post $post         Current gallery post.
 */
$show_related = apply_filters( 'cata_blocks_image_lightbox_show_related_content', true, $post );
$related_post = $show_related ? get_trending_post( $post->ID ) : null;

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
// The data attributes carry translated strings for the phone ad break the
// view script builds client-side.
$wrapper_attributes = get_block_wrapper_attributes(
	array(
		'style'                => $styles,
		'data-cata-ad-label'   => __( 'Advertisement', 'cata' ),
		'data-cata-ad-counter' => __( 'Ad', 'cata' ),
	)
);

// Button contents; filter to swap the defaults for an SVG icon, etc.
$close_icon = apply_filters( 'cata_blocks_image_lightbox_close_icon', '×' );
$prev_icon  = apply_filters( 'cata_blocks_image_lightbox_prev_icon', '←' );
$next_icon  = apply_filters( 'cata_blocks_image_lightbox_next_icon', '→' );

// Strip of thumbnails below the photo; filter to false for a bare gallery.
$show_thumbs = apply_filters( 'cata_blocks_image_lightbox_show_thumbnails', true );
$thumbs_id   = $show_thumbs ? wp_unique_id( 'cata-image-lightbox-thumbs-' ) : '';
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
			<?php if ( $show_thumbs ) : ?>
				<button
					type="button"
					class="wp-block-cata-image-lightbox__all-photos"
					aria-controls="<?php echo esc_attr( $thumbs_id ); ?>"
					aria-expanded="false"
					aria-label="<?php echo esc_attr( sprintf( /* translators: %d: total photos */ _n( 'Show all %d photo', 'Show all %d photos', $total, 'cata' ), $total ) ); ?>"
				>
					<span class="wp-block-cata-image-lightbox__all-photos-icon" aria-hidden="true">▦</span>
					<?php echo esc_html( sprintf( /* translators: %d: total photos */ __( 'All %d', 'cata' ), $total ) ); ?>
				</button>
			<?php endif; ?>

			<button
				type="button"
				class="wp-block-cata-image-lightbox__close"
				aria-label="<?php esc_attr_e( 'Close gallery', 'cata' ); ?>"
			><?php echo $close_icon; ?></button>

			<div class="wp-block-cata-image-lightbox__main">
				<div class="wp-block-cata-image-lightbox__viewport">
					<?php foreach ( $images as $index => $image ) : ?>
						<?php // The first slide starts active; the view script moves the class from there. ?>
						<figure
							class="wp-block-cata-image-lightbox__slide<?php echo 0 === $index ? ' is-active' : ''; ?>"
							role="group"
							aria-roledescription="<?php esc_attr_e( 'slide', 'cata' ); ?>"
							aria-label="<?php echo esc_attr( sprintf( /* translators: 1: image number, 2: total images */ __( 'Image %1$d of %2$d', 'cata' ), $index + 1, $total ) ); ?>"
						>
							<div class="wp-block-cata-image-lightbox__placeholder-frame" aria-hidden="true">
								<img class="wp-block-cata-image-lightbox__placeholder" alt="" />
							</div>
							<?php echo cata_image_lightbox_image_html( $image ); ?>
							<?php $caption = apply_filters( 'cata_blocks_image_lightbox_caption', $image['caption'], $image ); ?>
							<?php if ( '' !== $caption ) : ?>
								<?php $caption_id = wp_unique_id( 'cata-image-lightbox-caption-' ); ?>
								<button
									type="button"
									class="wp-block-cata-image-lightbox__info"
									aria-controls="<?php echo esc_attr( $caption_id ); ?>"
									aria-expanded="false"
									data-cata-open-label="<?php esc_attr_e( 'Info', 'cata' ); ?>"
									data-cata-close-label="<?php esc_attr_e( 'Close info', 'cata' ); ?>"
								><?php esc_html_e( 'Info', 'cata' ); ?></button>
								<figcaption id="<?php echo esc_attr( $caption_id ); ?>" class="wp-block-cata-image-lightbox__caption">
									<?php echo wp_kses_post( $caption ); ?>
								</figcaption>
							<?php endif; ?>

							<?php // One exit, at the natural end of the gallery. Repeating the same
							// global trend on every landscape slide would compete with both the
							// photos and the in-stream ad before a reader reaches either endpoint. ?>
							<?php if ( $related_post instanceof WP_Post && $index === $total - 1 ) : ?>
								<?php
								$related_permalink  = get_permalink( $related_post );
								$related_image_id   = get_post_thumbnail_id( $related_post );
								$related_image      = $related_image_id ? wp_get_attachment_image_src( $related_image_id, 'full' ) : false;
								$related_src        = '';
								$related_src_width  = 0;
								$related_src_height = 0;

								if ( is_array( $related_image ) && (int) $related_image[1] > 0 ) {
									// The card paints at 6rem (96px); 288px covers that slot through
									// DPR 3 without loading a full feed-card image.
									$related_src_width  = min( 288, (int) $related_image[1] );
									$related_src_height = (int) round( $related_image[2] * $related_src_width / $related_image[1] );
									$related_src        = cata_image_lightbox_sized_url( $related_image[0], $related_src_width );
								}
								?>
								<aside
									class="wp-block-cata-image-lightbox__related"
									aria-label="<?php esc_attr_e( 'Trending now', 'cata' ); ?>"
									hidden
								>
									<a class="wp-block-cata-image-lightbox__related-link" href="<?php echo esc_url( $related_permalink ); ?>">
										<?php // The source stays inert until runtime geometry proves the card fits. ?>
										<?php if ( '' !== $related_src ) : ?>
											<span class="wp-block-cata-image-lightbox__related-media" aria-hidden="true">
												<img
													class="wp-block-cata-image-lightbox__related-image"
													data-cata-related-src="<?php echo esc_url( $related_src ); ?>"
													width="<?php echo esc_attr( $related_src_width ); ?>"
													height="<?php echo esc_attr( $related_src_height ); ?>"
													alt=""
													loading="lazy"
													decoding="async"
												/>
											</span>
										<?php endif; ?>
										<span class="wp-block-cata-image-lightbox__related-copy">
											<span class="wp-block-cata-image-lightbox__related-label" aria-hidden="true">
												<?php esc_html_e( 'Trending now', 'cata' ); ?>
											</span>
											<span class="wp-block-cata-image-lightbox__related-title">
												<?php echo esc_html( get_the_title( $related_post ) ); ?>
											</span>
										</span>
									</a>
								</aside>
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
					<div class="wp-block-cata-image-lightbox__progress">
						<span class="wp-block-cata-image-lightbox__dots" aria-hidden="true">
							<?php for ( $dot = 0; $dot < min( 7, $total ); $dot++ ) : ?>
								<span class="wp-block-cata-image-lightbox__dot<?php echo 0 === $dot ? ' is-active' : ''; ?>"></span>
							<?php endfor; ?>
						</span>
						<span class="wp-block-cata-image-lightbox__progress-label" aria-hidden="true"><?php esc_html_e( 'Advertisement', 'cata' ); ?></span>
						<?php // Exact position remains the single polite live status; dots are visual only. ?>
						<span class="wp-block-cata-image-lightbox__counter" role="status" aria-live="polite" aria-atomic="true"><?php echo esc_html( sprintf( '1 / %d', $total ) ); ?></span>
					</div>
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
					<div
						class="wp-block-cata-image-lightbox__thumbs"
						id="<?php echo esc_attr( $thumbs_id ); ?>"
						aria-label="<?php esc_attr_e( 'All photos', 'cata' ); ?>"
						<?php echo $total > 1 ? '' : 'hidden'; ?>
					>
						<?php foreach ( $images as $index => $image ) : ?>
							<?php $thumb_url = cata_image_lightbox_thumb_url( $image ); ?>
							<?php if ( '' !== $thumb_url ) : ?>
								<?php $thumb_widths = cata_image_lightbox_thumb_widths( $image ); ?>
								<button
									type="button"
									class="wp-block-cata-image-lightbox__thumb<?php echo 0 === $index ? ' is-active' : ''; ?>"
									data-cata-image-lightbox-index="<?php echo esc_attr( $index ); ?>"
									tabindex="<?php echo 0 === $index ? '0' : '-1'; ?>"
									<?php echo 0 === $index ? 'aria-current="true"' : ''; ?>
									aria-label="<?php echo esc_attr( sprintf( /* translators: 1: slide number, 2: total slides */ __( 'Go to image %1$d of %2$d', 'cata' ), $index + 1, $total ) ); ?>"
								><?php // Lazy: a closed dialog gives its thumbnails no geometry, so a
								// 30 photo gallery fires nothing on page load. On phones the strip stays
								// geometry-free through gallery open and loads only when All photos opens.
								// Empty alt because the button is labeled. Candidate widths are inert data:
								// the phone solver chooses one before the grid's first lazy request, and
								// desktop keeps the sharp 144px fallback unless DPR needs more. ?><img class="wp-block-cata-image-lightbox__thumb-image" src="<?php echo esc_url( $thumb_url ); ?>" data-cata-image-lightbox-widths="<?php echo esc_attr( implode( ',', $thumb_widths ) ); ?>" alt="" loading="lazy" decoding="async" /></button>
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
