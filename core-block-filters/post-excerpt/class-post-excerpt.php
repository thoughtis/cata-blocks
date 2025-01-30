<?php
/**
 * Post Excerpt
 * 
 * @package Cata_Blocks\Core_Block_Filters
 */

namespace Cata\Blocks\Core_Block_Filters;

use WP_Block;

/**
 * Post Excerpt
 */
class Post_Excerpt {
	/**
	 * Construct
	 */
	public function __construct() {
		add_filter( 'render_block_core/post-excerpt',  [ __CLASS__, 'hide_empty_excerpt_on_single_post_template' ], accepted_args: 3 );
	}

	/**
	 * Hide Empty Post Excerpt on Single Post Template
	 * 
	 * @param string $block_content
	 * @param array $block
	 * @param WP_Block $instance
	 * @return string
	 */
	public static function hide_empty_excerpt_on_single_post_template( string $block_content, array $block, WP_Block $instance ): string {

		if ( ! self::instance_has_post_context( $instance ) ) {
			return $block_content;
		}

		if ( ! self::post_context_matches_request( $instance->context ) ) {
			return $block_content;
		}

		$post = get_post( $instance->context['postId'] );

		if ( '' === trim( $post->post_excerpt ) ) {
			return '';
		}

		return $block_content;

	}

	/**
	 * Instance Has Post Content
	 *
	 * @param WP_Block $instance
	 * @return bool
	 */
	private static function instance_has_post_context( WP_Block $instance ): bool {
		$context = $instance->context ?? [];

		error_log( print_r( $context, true ) );

		return array_key_exists( 'postId', $context ) && array_key_exists( 'postType', $context );
	}

	/**
	 * Post Context Matches Request
	 *
	 * @param array $context
	 * @return bool
	 */
	private static function post_context_matches_request( array $context ): bool {

		if ( ! is_singular( $context['postType'] ) ) {
			return false;
		}
	
		if ( ! is_a( get_queried_object(), 'WP_Post' ) ) {
			return false;
		}
	
		if ( get_queried_object_id() !== $context['postId'] ) {
			return false;
		}

		return true;
	}
}
