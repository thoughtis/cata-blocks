<?php
/**
 * Render callback for the Moments Hero block.
 *
 * Renders one homepage hero slot: the Nth most recently published sticky
 * post, laid out according to the art the post actually carries (single
 * image, diptych, or 2x2 collage — see includes/selection.php).
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Rendered inner block content (unused).
 * @var WP_Block $block      Block instance.
 */

use function Cata\Blocks\Moments_Hero\get_slot_post;
use function Cata\Blocks\Moments_Hero\get_slot_layout;

$moments_hero_slot                = isset( $attributes['slot'] ) ? max( 1, absint( $attributes['slot'] ) ) : 1;
$moments_hero_fallback_categories = isset( $attributes['fallbackCategories'] ) ? (array) $attributes['fallbackCategories'] : array();
$moments_hero_threshold_hours     = isset( $attributes['thresholdHours'] ) ? absint( $attributes['thresholdHours'] ) : 3;

$moments_hero_post = get_slot_post( $moments_hero_slot, $moments_hero_fallback_categories );

if ( ! $moments_hero_post instanceof WP_Post ) {
	return;
}

$moments_hero_permalink = get_permalink( $moments_hero_post );
$moments_hero_selection = get_slot_layout( $moments_hero_slot, $moments_hero_post );
$moments_hero_layout    = $moments_hero_selection['layout'];
$moments_hero_images    = $moments_hero_selection['images'];

if ( ! has_post_thumbnail( $moments_hero_post ) && 'diptych' === $moments_hero_layout ) {
	// The diptych leads with the featured image; without one, fall back to
	// a single (possibly text-only) card rather than rendering nothing.
	$moments_hero_layout = 'single';
	$moments_hero_images = array();
}

// Freshness follows the Fresh Post Dot block: round to whole hours the same
// way human_time_diff() does, so the dot and the label change together.
$moments_hero_post_timestamp = get_post_time( 'U', true, $moments_hero_post );
$moments_hero_diff_seconds   = time() - $moments_hero_post_timestamp;
$moments_hero_is_fresh       = $moments_hero_diff_seconds >= 0 && (int) round( $moments_hero_diff_seconds / HOUR_IN_SECONDS ) <= $moments_hero_threshold_hours;

$moments_hero_image_attributes = static function ( string $aspect_ratio = '' ): array {
	$image_attributes = array( 'class' => 'cata-moments-hero__image' );

	if ( '' !== $aspect_ratio ) {
		$image_attributes['style'] = sprintf( 'aspect-ratio:%s;object-fit:cover;', $aspect_ratio );
	}

	return $image_attributes;
};

$moments_hero_media = '';

if ( 'diptych' === $moments_hero_layout && isset( $moments_hero_images[0] ) ) {
	$moments_hero_media = sprintf(
		'<div class="cata-moments-hero__media cata-moments-hero__media--diptych"><a class="cata-moments-hero__panel" href="%1$s">%2$s</a><a class="cata-moments-hero__panel" href="%1$s">%3$s</a></div>',
		esc_url( $moments_hero_permalink ),
		get_the_post_thumbnail( $moments_hero_post, 'large', $moments_hero_image_attributes( '3/4' ) ),
		wp_get_attachment_image( $moments_hero_images[0]['id'], 'large', false, $moments_hero_image_attributes( '3/4' ) )
	);
} elseif ( 'collage' === $moments_hero_layout && 4 === count( $moments_hero_images ) ) {
	$moments_hero_cell_ratio = 'portrait' === $moments_hero_images[0]['orientation'] ? '3/4' : '3/2';
	$moments_hero_cells      = '';

	foreach ( $moments_hero_images as $moments_hero_image ) {
		$moments_hero_cells .= sprintf(
			'<a class="cata-moments-hero__cell" href="%1$s">%2$s</a>',
			esc_url( $moments_hero_permalink ),
			wp_get_attachment_image( $moments_hero_image['id'], 'large', false, $moments_hero_image_attributes( $moments_hero_cell_ratio ) )
		);
	}

	$moments_hero_media = sprintf(
		'<div class="cata-moments-hero__media cata-moments-hero__media--collage">%s</div>',
		$moments_hero_cells
	);
} elseif ( has_post_thumbnail( $moments_hero_post ) ) {
	$moments_hero_media = sprintf(
		'<a class="cata-moments-hero__media cata-moments-hero__media--single" href="%1$s">%2$s</a>',
		esc_url( $moments_hero_permalink ),
		get_the_post_thumbnail( $moments_hero_post, 'large', $moments_hero_image_attributes() )
	);
}

$moments_hero_wrapper_attributes = get_block_wrapper_attributes(
	array( 'class' => sprintf( 'cata-moments-hero cata-moments-hero--slot-%d', $moments_hero_slot ) )
);

?>
<div <?php echo $moments_hero_wrapper_attributes; ?>>
	<?php echo $moments_hero_media; ?>
	<h3 class="cata-moments-hero__title">
		<a href="<?php echo esc_url( $moments_hero_permalink ); ?>"><?php echo esc_html( get_the_title( $moments_hero_post ) ); ?></a>
	</h3>
	<div class="cata-moments-hero__meta<?php echo $moments_hero_is_fresh ? ' is-fresh' : ''; ?>">
		<time datetime="<?php echo esc_attr( get_post_time( 'c', false, $moments_hero_post ) ); ?>">
			<?php
			echo esc_html(
				sprintf(
					/* translators: %s: Human-readable time difference. */
					__( '%s ago', 'cata' ),
					human_time_diff( $moments_hero_post_timestamp )
				)
			);
			?>
		</time>
	</div>
</div>
