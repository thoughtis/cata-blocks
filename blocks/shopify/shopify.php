<?php
/**
 * Rest
 *
 * @package Cata\Blocks
 * @since 0.8.1
 */

namespace Cata\Blocks;

function register_shopify_block() : void {
	if ( ! apply_filters( 'cata_blocks_support_shopify_block', true ) ) {
		return;
	}
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => __NAMESPACE__ . '\\cata_shopify_render_block',
		)
	);
}
add_action( 'init', __NAMESPACE__ . '\\register_shopify_block' );

function cata_shopify_render_callback( array $attributes, string $content ) : string {
	try {
		return cata_rest_render_block( $attributes, $content );
	} catch( Throwable $e ) {
		do_action( 'qm/debug', $e );
		return $content;
	}	
}

function cata_shopify_render_block( array $attributes, string $content ) : string {
	$query = new Shopify\Feed\Query( $attributes );
	$cache = new Shopify\Feed\Cache( $query );
	$feed  = new Shopify\Feed( $cache, $query );

	return Shopify\Render::render_products(
		$attributes,
		$feed->get_posts_allow_side_effects()
	);
}
