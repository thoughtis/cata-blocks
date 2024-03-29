<?php
/**
 * Newsletter
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

use Cata\Blocks\Newsletter\Renderer;

/**
 * Register Newsletter Sign-Up Form block
 *
 * @return void
 */
function register_newsletter_block() : void {
	if ( ! apply_filters( 'cata_blocks_support_newsletter_block', true ) ) {
		return;
	}
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => __NAMESPACE__ . '\\render_newsletter_block'
		)
	);
}
add_action( 'init', __NAMESPACE__ . '\\register_newsletter_block' );

/**
 * Render Newsletter Block
 * 
 * @param array $block_attributes
 * @return string
 */
function render_newsletter_block( array $block_attributes ) : string {
	return ( new Renderer( $block_attributes ) )->get_content();
}

/**
 * Add defer attribute to the Newsletter Signup Form script tag
 * 
 * The script enqueued by the block editor runs before the DOM is fully built; this deferment ensures the script can parse the DOM after it's built.
 *
 * @param string $tag - The <script> tag of the enqueued script being filtered.
 * @param string $handle - The registered handle of the enqueued script being filtered.
 * @param string $src - The src URL of the enqueued script being filtered.
 * @return string - Returns the script tag either unmodified or, if it is the Newsletter Signup Form script it adds the defer tag.
 */
function add_defer_to_newsletter_script( $tag, $handle, $src ) {
	if ( 'cata-newsletter-script' !== $handle ) {
		return $tag;
	}
	return '<script defer="defer" type="text/javascript" src="' . $src . '"></script>';
}

add_filter( 'script_loader_tag', __NAMESPACE__ . '\\add_defer_to_newsletter_script', 10, 3 );

/**
 * Remove Newsletter Signup Form from Block Editor
 * 
 * Prevents Newsletter Signup Form script from running in the block editor without affecting the front end execution.
 *
 * @return void
 */
function remove_editor_newsletter_script() {
	wp_dequeue_script( 'cata-newsletter-script' );
	wp_deregister_script( 'cata-newsletter-script' );
}

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\remove_editor_newsletter_script', 10, 0 );

/**
 * Conditionally Remove Script
 * Remove block script.
 * 
 * @return void
 */
function remove_newsletter_script() {
	wp_dequeue_script( 'cata-newsletter-script' );
}

add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\remove_newsletter_script', 10, 0 ); 

/**
 * Conditionally Add Script
 * Add block script if the post or page contains the cata newsletter block.
 * 
 * @return void
 */
function conditionally_add_newsletter_script() : void {
	if ( ! is_singular() ) {
		return;
	}
	if ( ! has_block( 'cata/newsletter' ) ) {
		return;
	}
	wp_enqueue_script( 'cata-newsletter-script' );
}

add_action( 'wp_body_open', __NAMESPACE__ . '\\conditionally_add_newsletter_script', 10, 0 );

/**
 * Sidebar Function
 * 
 * Filter function whcih causes a side effect to conditionally enqueue newsletter script.
 *
 * @param string $content
 * @param array $instance
 * @return string
 */
function sidebar_function( string $content, array $instance ) : string {
	if ( ! has_block( 'cata/newsletter', $instance[ 'content' ] ) ) {
		return $content;
	}
	wp_enqueue_script( 'cata-newsletter-script' );

	return $content;
}

add_filter( 'widget_block_content', __NAMESPACE__ .  '\\sidebar_function', 10, 2 );
