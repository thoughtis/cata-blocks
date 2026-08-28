<?php
/**
 * Post Date
 *
 * @package Cata_Blocks\Block_Filters
 */

namespace Cata\Blocks\Block_Filters;

use WP_Block;

/**
 * Post Date
 */
class Post_Date {
	/**
	 * Construct
	 */
	public function __construct() {
		add_filter( 'block_bindings_source_value', array( __CLASS__, 'fallback_to_published_date' ), 10, 4 );
	}

	/**
	 * Fallback to Published Date
	 *
	 * Since WordPress 6.9 the Post Date block reads its date through the
	 * `core/post-data` block binding. For the `modified` field that source
	 * returns an empty string when a post hasn't been updated since it was
	 * published, which leaves the Modified Date block blank. Fall back to the
	 * published date so the block always renders a date.
	 *
	 * @param mixed    $value          Value resolved by the binding source.
	 * @param string   $source_name    Binding source name.
	 * @param array    $source_args    Binding source arguments.
	 * @param WP_Block $block_instance Block being rendered.
	 * @return mixed
	 */
	public static function fallback_to_published_date( $value, string $source_name, array $source_args, WP_Block $block_instance ) {
		if ( 'core/post-data' !== $source_name || '' !== $value ) {
			return $value;
		}

		$field = $source_args['field'] ?? $source_args['key'] ?? '';

		if ( 'modified' !== $field ) {
			return $value;
		}

		$post_id = $block_instance->context['postId'] ?? 0;

		if ( empty( $post_id ) ) {
			return $value;
		}

		return esc_attr( get_the_date( 'c', $post_id ) );
	}
}
