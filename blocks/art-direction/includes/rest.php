<?php
/**
 * Blocks > Art Direction > REST
 *
 * Exposes each post's art direction data (featured image, good content
 * images, per-layout image picks) on the REST API so the block's editor
 * preview shows the same decisions the render template makes.
 *
 * @package Cata\Blocks
 * @since 0.13.0
 */

namespace Cata\Blocks\Art_Direction;

use WP_Post;
use WP_REST_Request;

/**
 * Register the cata_art_direction REST field.
 */
function register_art_direction_rest_field(): void {
	if ( ! apply_filters( 'cata_blocks_support_art_direction_block', true ) ) {
		return;
	}

	register_rest_field(
		'post',
		'cata_art_direction',
		array(
			'get_callback' => __NAMESPACE__ . '\\get_art_direction_field',
			'schema'       => array(
				'description' => __( 'Art direction data: featured image, good content images, and the images each layout would use.', 'cata' ),
				'type'        => array( 'object', 'null' ),
				'context'     => array( 'edit' ),
				'readonly'    => true,
			),
		)
	);
}
add_action( 'rest_api_init', __NAMESPACE__ . '\\register_art_direction_rest_field' );

/**
 * Get the cata_art_direction field value.
 *
 * Computed for edit-context requests only (the block editor asks for
 * context=edit): scanning post content and attachment meta on public list
 * responses would add cost to every anonymous API consumer for data only
 * the editor preview needs.
 *
 * @param array           $post_data Prepared post data.
 * @param string          $field_name Field name.
 * @param WP_REST_Request $request Current request.
 * @return array|null
 */
function get_art_direction_field( array $post_data, string $field_name, WP_REST_Request $request ): ?array {
	if ( 'edit' !== $request['context'] ) {
		return null;
	}

	$post = get_post( $post_data['id'] ?? 0 );

	if ( ! $post instanceof WP_Post ) {
		return null;
	}

	return get_art_direction_data( $post );
}
