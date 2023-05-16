<?php
/**
 * Blocks > Scheduled Content
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

/**
 * Render Scheduled Content Block
 *
 * @param array  $attributes
 * @param string $content
 * @return string
 */
function render_scheduled_content_block( array $attributes, string $content ) : string {
	$start_date = ( $attributes['hasStartDate'] && isset( $attributes['startDate'] ) ) ? strtotime( $attributes['startDate'] ) : '';
	$end_date = ( $attributes['hasEndDate'] && isset( $attributes['endDate'] ) ) ? strtotime( $attributes['endDate'] ) : '' ;
	$today = strtotime( current_datetime()->format('Y-m-d H:i:s') );

	if( '' !== $start_date && $today <= $start_date ) {
		return '';
	}
	
	if( '' !== $end_date && $today >= $end_date ) {
		return '';
	}

	return $content;
}
