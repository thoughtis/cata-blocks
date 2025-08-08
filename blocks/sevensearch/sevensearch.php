<?php
/**
 * Blocks > 7Search
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

use WP_Block;

/**
 * Register 7Search Block
 */
function register_sevensearch_block() {

	if ( ! apply_filters( 'cata_blocks_support_sevensearch_block', true ) ) {
		return;
	}

	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => __NAMESPACE__ . '\\cata_sevensearch_render_callback',
		)
	);

	cata_sevensearch_register_scripts();
}
add_action( 'init', __NAMESPACE__ . '\\register_sevensearch_block' );

/**
 * Render Callback
 *
 * @param array    $attribute
 * @param string   $content
 * @param WP_Block $block
 * 
 * @return string
 */
function cata_sevensearch_render_callback( array $attributes, string $content, WP_Block $block ): string {
	
	if ( ! is_singular( 'post' ) ) {
		return '';
	}

	$ad_id = $attributes['adId'] ?: '';
	$ad_type = $attributes['adType'] ?: '';
	
	if ( '' === $ad_id || '' === $ad_type ) {
		return '';
	}

	$function_name = cata_sevensearch_get_function_name( $ad_type );

	if ( '' === $function_name ) {
		return '';
	}

	$layout = $attributes['layout'] ?: 1;
	$script_handle = "cata-sevensearch-$ad_type";

	wp_enqueue_script( $script_handle );
	wp_add_inline_script(
		$script_handle, 
		'( function() { ' . esc_attr( $function_name ) . '([ \'' . esc_attr( $ad_id ) . '\', \'' . esc_attr( $ad_type ) . '\', ' . esc_attr( $layout ) . ' ]) } () )'
	);

	$wrapper_attributes = get_block_wrapper_attributes(
		[
			'id'          => esc_attr( $ad_id ),
			'data-7pub'   => esc_attr( $ad_id ),
		]
	);

	return "<div {$wrapper_attributes}></div>";
}

/**
 * Get Function Name
 * 
 * @param string $ad_type
 * 
 * @return string
 */
function cata_sevensearch_get_function_name( string $ad_type ) {
	switch ( $ad_type ) {
		case 'text':
			return 'initTextAd';
		case 'banner':
			return 'initBannerAd';
		case 'native':
			return 'initNativeAd';
		default:
			return '';
	}
}

/**
 * Register Scripts
 */
function cata_sevensearch_register_scripts() {

	// Text Ad Script
	wp_register_script(
		'cata-sevensearch-text',
		'https://code.adclickppc.com/7s-text-ad.js',
		args: [
			'strategy'  => 'async',
			'in_footer' => true,
		]
	);

	// Banner Ad Script
	wp_register_script(
		'cata-sevensearch-banner',
		'https://code.adclickppc.com/7s-banner-ad.js',
		args: [
			'strategy'  => 'async',
			'in_footer' => true,
		]
	);

	// Native Ad Script
	wp_register_script(
		'cata-sevensearch-native',
		'https://code.adclickppc.com/7s-native-ad.js',
		args: [
			'strategy'  => 'async',
			'in_footer' => true,
		]
	);
}
