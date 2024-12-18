<?php
/**
 * Blocks > Globe Background
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

use Throwable;
use WP_Block;
/**
 * Register Globe Background Block
 */
function register_globe_animation_block() {
	if ( ! apply_filters( 'cata_blocks_support_globe_animation_block', true ) ) {
		return;
	}
	register_block_type( 
		__DIR__ . '/build',
		array(
			'render_callback' => __NAMESPACE__ . '\\cata_globe_animation_render_callback',
		)
	);
}
add_action( 'init', __NAMESPACE__ . '\\register_globe_animation_block' );


/**
 * Render Callback
 * Calls the real render function, wrapping it in try/catch.
 *
 * @param array $attribute
 * @param string $content
 * @param WP_Block $block
 * 
 * @return string
 */
function cata_globe_animation_render_callback( array $attributes, string $content, WP_Block $block ): string {
	try {
		return cata_globe_animation_render_block( $attributes, $content, $block );
	} catch( Throwable $e ) {
		do_action( 'qm/debug', $e );
		return $content;
	}	
}

/**
 * Render Block
 * 
 * @param array $attribute
 * @param string $content
 * @param WP_Block $block
 * 
 * @return string
 */
function cata_globe_animation_render_block( array $attributes, string $content, WP_Block $block ): string {
	$wrapper_attr = get_block_wrapper_attributes();	
	$globe_color  = $attributes['globeColor'] ?? '#000000';
	$inner_html   = '';
	
	foreach ( $block->inner_blocks as $inner_block ) {
		$inner_html .= $inner_block->render();
	}

	return sprintf('
		<div %s>
			<div class="wp-block-cata-globe-background__globe-svg" style="stroke: %s;">
				<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
					<circle cx="50%%" cy="50%%" r="50%%"></circle>
					<path d="M150,300A150,150,0,0,1,150,0" style="--globe-animation-order: 0"></path>
					<path d="M150,300A150,150,0,0,1,150,0" style="--globe-animation-order: 1"></path>
					<path d="M150,300A150,150,0,0,1,150,0" style="--globe-animation-order: 2"></path>
					<path d="M150,300A150,150,0,0,1,150,0" style="--globe-animation-order: 3"></path>
					<path d="M150,300A150,150,0,0,1,150,0" style="--globe-animation-order: 4"></path>
					<path d="M150,300A150,150,0,0,1,150,0" style="--globe-animation-order: 5"></path>
					<path d="M150,300A150,150,0,0,1,150,0" style="--globe-animation-order: 6"></path>
					<path d="M150,300A150,150,0,0,1,150,0" style="--globe-animation-order: 7"></path>
				</svg>
			</div>
			<div class="wp-block-cata-globe-background__inner-blocks">
				%s
			</div>
		</div>',
		$wrapper_attr,
		$globe_color,
		$inner_html
	);
}
