<?php
/**
 * Blocks > Moments Hero > Selection
 *
 * Post targeting and image-selection rules for the Moments Hero block.
 *
 * @package Cata\Blocks
 * @since 0.13.0
 */

namespace Cata\Blocks\Moments_Hero;

use WP_Post;

/**
 * Get the post a given hero slot should display.
 *
 * Slot N shows the Nth most recently published sticky post. When no sticky
 * post is available for slot 1, the latest post from the fallback categories
 * (or site-wide when none are configured) is used so the top of the page is
 * never empty.
 *
 * @param int   $slot 1-indexed hero slot.
 * @param int[] $fallback_categories Category term IDs used by the slot 1 fallback.
 * @return WP_Post|null
 */
function get_slot_post( int $slot, array $fallback_categories = array() ): ?WP_Post {
	$sticky_ids = array_filter( array_map( 'absint', (array) get_option( 'sticky_posts', array() ) ) );

	if ( ! empty( $sticky_ids ) ) {
		$sticky_posts = get_posts(
			array(
				'post__in'            => $sticky_ids,
				'post_type'           => 'post',
				'post_status'         => 'publish',
				'orderby'             => 'date',
				'order'               => 'DESC',
				'posts_per_page'      => $slot,
				'ignore_sticky_posts' => true,
				'no_found_rows'       => true,
			)
		);

		if ( isset( $sticky_posts[ $slot - 1 ] ) ) {
			return $sticky_posts[ $slot - 1 ];
		}
	}

	if ( 1 !== $slot ) {
		return null;
	}

	$fallback_query = array(
		'post_type'           => 'post',
		'post_status'         => 'publish',
		'orderby'             => 'date',
		'order'               => 'DESC',
		'posts_per_page'      => 1,
		'ignore_sticky_posts' => true,
		'no_found_rows'       => true,
		// The fallback exists to keep the hero visual — skip art-less posts.
		'meta_key'            => '_thumbnail_id',
	);

	if ( ! empty( $fallback_categories ) ) {
		$fallback_query['category__in'] = array_map( 'absint', $fallback_categories );
	}

	$fallback_posts = get_posts( $fallback_query );

	return $fallback_posts[0] ?? null;
}

/**
 * Collect the "good" content images of a post.
 *
 * A good image is an in-content attachment that can stand as editorial art:
 * it has alt text, is not a PNG (social share graphics with burned-in
 * headlines are PNGs with empty alt text), and is not a duplicate of the
 * featured image (same attachment or same source file).
 *
 * @param WP_Post $post Post to inspect.
 * @return array[] List of arrays: id, width, height, alt, orientation.
 */
function get_good_images( WP_Post $post ): array {
	$featured_id   = (int) get_post_thumbnail_id( $post );
	$featured_file = $featured_id ? pathinfo( (string) get_attached_file( $featured_id ), PATHINFO_FILENAME ) : '';

	if ( ! preg_match_all( '/wp-image-(\d+)/', (string) $post->post_content, $matches ) ) {
		return array();
	}

	$good = array();

	foreach ( array_unique( array_map( 'absint', $matches[1] ) ) as $attachment_id ) {
		if ( 0 === $attachment_id || $attachment_id === $featured_id ) {
			continue;
		}

		if ( 'image/png' === get_post_mime_type( $attachment_id ) ) {
			continue;
		}

		$alt = trim( (string) get_post_meta( $attachment_id, '_wp_attachment_image_alt', true ) );

		if ( '' === $alt ) {
			continue;
		}

		if ( '' !== $featured_file && pathinfo( (string) get_attached_file( $attachment_id ), PATHINFO_FILENAME ) === $featured_file ) {
			continue;
		}

		$metadata = wp_get_attachment_metadata( $attachment_id );

		if ( empty( $metadata['width'] ) || empty( $metadata['height'] ) ) {
			continue;
		}

		$good[] = array(
			'id'          => $attachment_id,
			'width'       => (int) $metadata['width'],
			'height'      => (int) $metadata['height'],
			'alt'         => $alt,
			'orientation' => $metadata['height'] > $metadata['width'] ? 'portrait' : 'landscape',
		);
	}

	return $good;
}

/**
 * Choose a layout for a slot's post.
 *
 * Rules:
 * - Slot 2 favors the diptych (featured image beside the best second image,
 *   preferring portrait art) and falls back to single when the post has no
 *   usable second image.
 * - Other slots use the 2x2 collage when a post carries at least four good
 *   images of the same orientation, and single otherwise.
 *
 * @param int     $slot 1-indexed hero slot.
 * @param WP_Post $post Post to lay out.
 * @return array Array: layout (single|diptych|collage), images (array[]).
 */
function get_slot_layout( int $slot, WP_Post $post ): array {
	$good_images = get_good_images( $post );

	if ( 2 === $slot ) {
		if ( empty( $good_images ) ) {
			return array(
				'layout' => 'single',
				'images' => array(),
			);
		}

		$portraits = array_values(
			array_filter(
				$good_images,
				static function ( array $image ): bool {
					return 'portrait' === $image['orientation'];
				}
			)
		);

		return array(
			'layout' => 'diptych',
			'images' => array( $portraits[0] ?? $good_images[0] ),
		);
	}

	foreach ( array( 'landscape', 'portrait' ) as $orientation ) {
		$oriented = array_values(
			array_filter(
				$good_images,
				static function ( array $image ) use ( $orientation ): bool {
					return $orientation === $image['orientation'];
				}
			)
		);

		if ( count( $oriented ) >= 4 ) {
			return array(
				'layout' => 'collage',
				'images' => array_slice( $oriented, 0, 4 ),
			);
		}
	}

	return array(
		'layout' => 'single',
		'images' => array(),
	);
}
