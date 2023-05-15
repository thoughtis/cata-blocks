<?php
/**
 * Blocks > FAQ
 * 
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

/**
 * Register Scheduled Content block
 */
function register_scheduled_content_block() {
	if( ! apply_filters( 'cata_blocks_support_scheduled_content_block', true ) ) {
		return;
	}

	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => __NAMESPACE__ . '\\render_scheduled_content_block',
		)
	);
}
add_action( 'init', __NAMESPACE__ . '\\register_scheduled_content_block' );


function render_scheduled_content_block( array $attributes, string $content ) : string {	
	$start_date = isset( $attributes['startDate'] ) ? strtotime( $attributes['startDate'] ) : '';
	$end_date = isset( $attributes['endDate'] ) ? strtotime( $attributes['endDate'] ) : '' ;
	$today = strtotime( date("Y-m-d G:i:s") );

	if( '' !== $start_date && $today <= $start_date ) {
		return '';
	}
	
	if( '' !== $end_date && $today >= $end_date ) {
		return '';
	}

	return $content;
}
