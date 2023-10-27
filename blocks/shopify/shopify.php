<?php
/**
 * Shopify
 *
 * @package Cata\Blocks
 * @since 0.8.2
 */

namespace Cata\Blocks;

/**
 * Register Shopify Block
 */
function register_shopify_block() : void {
	if ( ! apply_filters( 'cata_blocks_support_shopify_block', true ) ) {
		return;
	}
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => __NAMESPACE__ . '\\shopify_render_block',
		)
	);
}
add_action( 'init', __NAMESPACE__ . '\\register_shopify_block' );

/**
 * Shopify Render Callback
 * 
 * @param array $attributes Block attributes
 * @param array $content Block content
 * @return string
 */
function shopify_render_callback( array $attributes, string $content ) : string {
	try {
		return shopify_render_block( $attributes );
	} catch( Throwable $e ) {
		do_action( 'qm/debug', $e );
		return $content;
	}	
}

/**
 * Shopify Render Block
 * 
 * @param array $attributes Block attributes
 * @return string
 */
function shopify_render_block( array $attributes ) : string {
	$query = new Shopify\Feed\Query( $attributes );
	$cache = new Shopify\Feed\Cache( $query );
	$feed  = new Shopify\Feed( $cache, $query );

	return Shopify\Render::render_products(
		$attributes,
		$feed->get_posts_allow_side_effects()
	);
}
