<?php
/**
 * Blocks > Art Direction > Selection
 *
 * Image-selection rules shared by the block's render template and the
 * cata_art_direction REST field, so the editor previews the same decisions
 * the server makes.
 *
 * @package Cata\Blocks
 * @since 0.13.0
 */

namespace Cata\Blocks\Art_Direction;

use WP_Post;

/**
 * Layout preferences the block accepts.
 *
 * @var string[]
 */
const LAYOUTS = array( 'auto', 'single', 'diptych', 'collage' );

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
 * Get the second panel image for a diptych.
 *
 * The diptych leads with the featured image, so a post without one has no
 * diptych. The best second image is the first portrait good image, or the
 * first good image when the post has no portraits.
 *
 * @param WP_Post $post        Post to lay out.
 * @param array[] $good_images Good images from get_good_images().
 * @return array|null Image array, or null when the post can't diptych.
 */
function get_diptych_image( WP_Post $post, array $good_images ): ?array {
	if ( ! has_post_thumbnail( $post ) || empty( $good_images ) ) {
		return null;
	}

	foreach ( $good_images as $image ) {
		if ( 'portrait' === $image['orientation'] ) {
			return $image;
		}
	}

	return $good_images[0];
}

/**
 * Get the four cells of a 2x2 collage.
 *
 * A collage needs at least four good images of the same orientation,
 * landscape preferred.
 *
 * @param array[] $good_images Good images from get_good_images().
 * @return array[] Exactly four images, or an empty array when the post can't collage.
 */
function get_collage_images( array $good_images ): array {
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
			return array_slice( $oriented, 0, 4 );
		}
	}

	return array();
}

/**
 * Resolve a layout preference against the art a post actually carries.
 *
 * Preferences degrade gracefully: a diptych without a usable second image
 * and a collage without four same-orientation images both render single.
 * Auto renders a two-vertical diptych when the post carries one (portrait
 * featured image + a portrait content image), then a collage, then single.
 * An explicit 'diptych' preference is looser than auto's — it pairs the
 * featured image with the best second image of any orientation.
 *
 * @param string  $preference One of LAYOUTS.
 * @param WP_Post $post       Post to lay out.
 * @return array Array: layout (single|diptych|collage), images (array[]).
 */
function resolve_layout( string $preference, WP_Post $post ): array {
	$good_images = get_good_images( $post );

	if ( 'diptych' === $preference ) {
		$second = get_diptych_image( $post, $good_images );

		if ( null !== $second ) {
			return array(
				'layout' => 'diptych',
				'images' => array( $second ),
			);
		}
	}

	if ( 'auto' === $preference ) {
		// Two vertical images auto-diptych: a portrait featured image beside
		// the post's first portrait content image. (An explicit 'diptych'
		// preference, handled above, is looser — it pairs the featured image
		// with the best available second image regardless of orientation.)
		$featured_id       = (int) get_post_thumbnail_id( $post );
		$featured_metadata = $featured_id ? wp_get_attachment_metadata( $featured_id ) : false;
		$featured_portrait = is_array( $featured_metadata )
			&& ! empty( $featured_metadata['width'] )
			&& ! empty( $featured_metadata['height'] )
			&& (int) $featured_metadata['height'] > (int) $featured_metadata['width'];

		if ( $featured_portrait ) {
			foreach ( $good_images as $image ) {
				if ( 'portrait' === $image['orientation'] ) {
					return array(
						'layout' => 'diptych',
						'images' => array( $image ),
					);
				}
			}
		}
	}

	if ( in_array( $preference, array( 'collage', 'auto' ), true ) ) {
		$cells = get_collage_images( $good_images );

		if ( ! empty( $cells ) ) {
			return array(
				'layout' => 'collage',
				'images' => $cells,
			);
		}
	}

	return array(
		'layout' => 'single',
		'images' => array(),
	);
}

/**
 * Add a preview URL to an image array.
 *
 * @param array $image Image array from get_good_images().
 * @return array Image array with a src key.
 */
function add_image_src( array $image ): array {
	$src          = wp_get_attachment_image_src( $image['id'], 'large' );
	$image['src'] = $src ? $src[0] : '';

	return $image;
}

/**
 * Get the featured image of a post in the same shape as a good image.
 *
 * @param WP_Post $post Post to inspect.
 * @return array|null Image array with src, or null when the post has no featured image.
 */
function get_featured_image_data( WP_Post $post ): ?array {
	$featured_id = (int) get_post_thumbnail_id( $post );

	if ( 0 === $featured_id ) {
		return null;
	}

	$metadata = wp_get_attachment_metadata( $featured_id );
	$width    = (int) ( $metadata['width'] ?? 0 );
	$height   = (int) ( $metadata['height'] ?? 0 );

	return add_image_src(
		array(
			'id'          => $featured_id,
			'width'       => $width,
			'height'      => $height,
			'alt'         => trim( (string) get_post_meta( $featured_id, '_wp_attachment_image_alt', true ) ),
			'orientation' => $height > $width ? 'portrait' : 'landscape',
		)
	);
}

/**
 * Get the art direction data exposed on the REST API.
 *
 * The editor uses this to preview layouts with the same selection logic the
 * render template runs: diptych/collage hold the exact images each layout
 * would use (empty when unavailable), and auto names the layout the auto
 * preference resolves to.
 *
 * @param WP_Post $post Post to inspect.
 * @return array
 */
function get_art_direction_data( WP_Post $post ): array {
	$good_images = get_good_images( $post );
	$diptych     = get_diptych_image( $post, $good_images );
	$collage     = get_collage_images( $good_images );

	return array(
		'featured' => get_featured_image_data( $post ),
		'images'   => array_map( __NAMESPACE__ . '\\add_image_src', $good_images ),
		'diptych'  => null !== $diptych ? array( add_image_src( $diptych ) ) : array(),
		'collage'  => array_map( __NAMESPACE__ . '\\add_image_src', $collage ),
		'auto'     => ! empty( $collage ) ? 'collage' : 'single',
	);
}
