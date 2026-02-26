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
			<div class="wp-block-cata-globe-background__globe-svg" style="stroke: var(--cata-globe-color, gray); --cata-globe-color: %s;">
				<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">				
					
					<defs>
						<!-- Globe surface: lit from upper-left, dark blue-gray at edges -->
						<radialGradient id="globeGradient" cx="38%%" cy="32%%" r="65%%" fx="38%%" fy="32%%">
							<stop offset="0%%"   stop-color="white" stop-opacity="0.2" />
							<stop offset="35%%"  stop-color="color-mix( in srgb, white, transparent 5%% )" stop-opacity="0.2" />
							<stop offset="75%%"  stop-color="color-mix( in srgb, white, transparent 75%% )" stop-opacity="0.15" />
							<stop offset="100%%" stop-color="color-mix( in srgb, white, transparent 95%% )" stop-opacity="0.1" />
						</radialGradient>

						<!-- Specular highlight: bright spot in upper-left -->
						<radialGradient id="specularGradient" cx="30%%" cy="25%%" r="30%%">
							<stop offset="0%%"   stop-color="#ffffff" stop-opacity="0.18" />
							<stop offset="100%%" stop-color="#ffffff" stop-opacity="0" />
						</radialGradient>
						
						<!-- Clip to circle so gradients don\'t bleed outside -->
						<clipPath id="globeClip">
							<circle cx="150" cy="150" r="150" />
						</clipPath>
						<!-- Meridian line gradient: bright in the middle, fade near poles -->
						<linearGradient id="meridianGradient" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%%"   stop-color="var(--cata-globe-color)" stop-opacity="0.1" />
							<stop offset="30%%"  stop-color="var(--cata-globe-color)" stop-opacity="0.75" />
							<stop offset="50%%"  stop-color="var(--cata-globe-color)" stop-opacity="0.95" />
							<stop offset="70%%"  stop-color="var(--cata-globe-color)" stop-opacity="0.75" />
							<stop offset="100%%" stop-color="var(--cata-globe-color)" stop-opacity="0.1" />
						</linearGradient>
					</defs>

					<circle cx="150" cy="150" r="150" fill="none" stroke="var(--cata-globe-color)" stroke-width="1.5" />

					<!-- Atmospheric rim glow (slightly larger, transparent) -->
					<circle cx="150" cy="150" r="150" fill="none" stroke="var(--cata-globe-color)" stroke-width="6" stroke-opacity="0.15" />

					<!-- Base lit surface -->
					<circle cx="150" cy="150" r="150" fill="url(#globeGradient)" clip-path="url(#globeClip)" />
						
					<!-- Specular highlight on top -->
					<circle cx="150" cy="150" r="150" fill="url(#specularGradient)" clip-path="url(#globeClip)" />
						
					<g fill="none" stroke="var(--cata-globe-color)" stroke-opacity="0.2" stroke-width="0.8">
						<path d="M2.41,123.87c148.07,78.32,295,0,295,0" />
						<path d="M16,81.55c130.49,63.27,268,.2,268,.2" />
						<path d="M46.64,41.27c101.4,47.58,202.81-3.27,202.81-3.27" />
						<path d="M15.5,216.66c130.97,63.51,269,.2,269,.2" />
						<path d="M51,262.71c100.63,46.45,201.26-3.19,201.26-3.19" />
						<path d="M1.5,173.75c149.07,78.85,297,0,297,0" />
					</g>

					<g class="wp-block-cata-globe-background__globe-rotate">
						<path d="M150,300A150,150,0,0,1,150,0" style="--globe-animation-order: 0"></path>
						<path d="M150,300A150,150,0,0,1,150,0" style="--globe-animation-order: 1"></path>
						<path d="M150,300A150,150,0,0,1,150,0" style="--globe-animation-order: 2"></path>
						<path d="M150,300A150,150,0,0,1,150,0" style="--globe-animation-order: 3"></path>
						<path d="M150,300A150,150,0,0,1,150,0" style="--globe-animation-order: 4"></path>
						<path d="M150,300A150,150,0,0,1,150,0" style="--globe-animation-order: 5"></path>
						<path d="M150,300A150,150,0,0,1,150,0" style="--globe-animation-order: 6"></path>
						<path d="M150,300A150,150,0,0,1,150,0" style="--globe-animation-order: 7"></path>
					</g>
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
