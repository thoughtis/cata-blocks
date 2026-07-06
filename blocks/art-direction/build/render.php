<?php
/**
 * Render callback for the Art Direction block.
 *
 * Renders the context post's art in the layout the block's preference
 * resolves to (see includes/selection.php). Outputs nothing when the post
 * has no renderable media, so surrounding title/date blocks form a
 * text-only card naturally.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Rendered inner block content (unused).
 * @var WP_Block $block      Block instance.
 */

use function Cata\Blocks\Art_Direction\resolve_layout;
use const Cata\Blocks\Art_Direction\LAYOUTS;

$art_direction_post_id = isset( $block->context['postId'] ) ? absint( $block->context['postId'] ) : get_the_ID();
$art_direction_post    = $art_direction_post_id ? get_post( $art_direction_post_id ) : null;

if ( ! $art_direction_post instanceof WP_Post ) {
	return;
}

$art_direction_preference = isset( $attributes['layout'] ) && in_array( $attributes['layout'], LAYOUTS, true )
	? $attributes['layout']
	: 'auto';

$art_direction_selection = resolve_layout( $art_direction_preference, $art_direction_post );
$art_direction_layout    = $art_direction_selection['layout'];
$art_direction_images    = $art_direction_selection['images'];
$art_direction_permalink = get_permalink( $art_direction_post );

$art_direction_image_attributes = static function ( string $aspect_ratio = '' ): array {
	$image_attributes = array( 'class' => 'cata-art-direction__image' );

	if ( '' !== $aspect_ratio ) {
		$image_attributes['style'] = sprintf( 'aspect-ratio:%s;object-fit:cover;', $aspect_ratio );
	}

	return $image_attributes;
};

$art_direction_media = '';

if ( 'diptych' === $art_direction_layout && isset( $art_direction_images[0] ) ) {
	$art_direction_media = sprintf(
		'<div class="cata-art-direction__media cata-art-direction__media--diptych"><a class="cata-art-direction__panel" href="%1$s">%2$s</a><a class="cata-art-direction__panel" href="%1$s">%3$s</a></div>',
		esc_url( $art_direction_permalink ),
		get_the_post_thumbnail( $art_direction_post, 'large', $art_direction_image_attributes( '8/7' ) ),
		wp_get_attachment_image( $art_direction_images[0]['id'], 'large', false, $art_direction_image_attributes( '8/7' ) )
	);
} elseif ( 'collage' === $art_direction_layout && 4 === count( $art_direction_images ) ) {
	$art_direction_cell_ratio = 'portrait' === $art_direction_images[0]['orientation'] ? '3/4' : '3/2';
	$art_direction_cells      = '';

	foreach ( $art_direction_images as $art_direction_image ) {
		$art_direction_cells .= sprintf(
			'<a class="cata-art-direction__cell" href="%1$s">%2$s</a>',
			esc_url( $art_direction_permalink ),
			wp_get_attachment_image( $art_direction_image['id'], 'large', false, $art_direction_image_attributes( $art_direction_cell_ratio ) )
		);
	}

	$art_direction_media = sprintf(
		'<div class="cata-art-direction__media cata-art-direction__media--collage">%s</div>',
		$art_direction_cells
	);
} elseif ( has_post_thumbnail( $art_direction_post ) ) {
	$art_direction_media = sprintf(
		'<a class="cata-art-direction__media cata-art-direction__media--single" href="%1$s">%2$s</a>',
		esc_url( $art_direction_permalink ),
		get_the_post_thumbnail( $art_direction_post, 'large', $art_direction_image_attributes() )
	);
}

if ( '' === $art_direction_media ) {
	return;
}

$art_direction_wrapper_attributes = get_block_wrapper_attributes(
	array( 'class' => sprintf( 'cata-art-direction--%s', $art_direction_layout ) )
);

?>
<div <?php echo $art_direction_wrapper_attributes; ?>>
	<?php echo $art_direction_media; ?>
</div>
