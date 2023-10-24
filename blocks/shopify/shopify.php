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
			'render_callback' => __NAMESPACE__ . '\\render_shopify_block',
		)
	);
}
add_action( 'init', __NAMESPACE__ . '\\register_shopify_block' );


function render_shopify_block() {
	do_action('qm/debug', 'rendering shopify block');
	$default_attrs = array(
		'count' => 6,
	);

	$attributes = array_merge(
		$default_attrs,
		array(
			'store'        => get_option( Shopify\Options\Settings\Store::SETTING_NAME, '' ),
			'access_token' => get_option( Shopify\Options\Settings\Access_Token::SETTING_NAME, '' ),
		)
	);

	$query = new Shopify\Feed\Query( ...$attributes );
	$cache = new Shopify\Feed\Cache( $query );
	$feed  = new Shopify\Feed( $cache, $query );

	return Shopify\Shortcode\Render::render_products(
		$feed->get_posts_allow_side_effects()
	);
}
