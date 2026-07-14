<?php
/**
 * Render callback for the Related Content block.
 *
 * Renders 1-2 recently published posts that share a headline subject with
 * the context post (see includes/matching.php) — a single feature card for
 * one match, an even two-up grid for two. Renders nothing when no posts
 * qualify, so the widget only appears when it has earned its spot.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Rendered inner block content (unused).
 * @var WP_Block $block      Block instance.
 */

use function Cata\Blocks\Related_Content\get_related_post_ids;

$related_content_post_id = isset( $block->context['postId'] ) ? absint( $block->context['postId'] ) : get_the_ID();

if ( ! $related_content_post_id ) {
	return;
}

// Cached IDs can outlive a candidate's published status, so re-check here.
$related_content_posts = array_filter(
	array_map( 'get_post', get_related_post_ids( $related_content_post_id ) ),
	static function ( $related_content_post ): bool {
		return $related_content_post instanceof WP_Post && 'publish' === $related_content_post->post_status;
	}
);

if ( empty( $related_content_posts ) ) {
	return;
}

$related_content_layout = 1 === count( $related_content_posts ) ? 'feature' : 'pair';
$related_content_items  = '';

foreach ( $related_content_posts as $related_content_post ) {
	$related_content_permalink = get_permalink( $related_content_post );
	$related_content_thumbnail = get_the_post_thumbnail(
		$related_content_post,
		'large',
		array( 'class' => 'cata-related-content__image' )
	);

	$related_content_media = '' !== $related_content_thumbnail
		? sprintf(
			'<a class="cata-related-content__media" href="%s" tabindex="-1" aria-hidden="true">%s</a>',
			esc_url( $related_content_permalink ),
			$related_content_thumbnail
		)
		: '';

	$related_content_items .= sprintf(
		'<article class="cata-related-content__item">%1$s<h3 class="cata-related-content__title"><a class="cata-related-content__link" href="%2$s">%3$s</a></h3></article>',
		$related_content_media,
		esc_url( $related_content_permalink ),
		esc_html( get_the_title( $related_content_post ) )
	);
}

$related_content_wrapper_attributes = get_block_wrapper_attributes(
	array( 'class' => sprintf( 'cata-related-content--%s', $related_content_layout ) )
);

?>
<aside <?php echo $related_content_wrapper_attributes; ?>>
	<h2 class="cata-related-content__heading"><?php echo esc_html__( 'Related Stories', 'cata' ); ?></h2>
	<div class="cata-related-content__items">
		<?php echo $related_content_items; ?>
	</div>
</aside>
