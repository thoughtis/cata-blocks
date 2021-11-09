<?php
/**
 * Plugin Name:       Newsletter Form
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 *
 * @package           Cata\Blocks
 */

namespace Cata\Blocks;

/**
 * Register Newsletter Sign-Up Form block
 *
 * @return void
 */
function register_newsletter_block() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', __NAMESPACE__ . '\\register_newsletter_block' );


/** 
 * Insert Privacy Policy Link
 * 
 * This replaces the privacy policy placeholder %%Privacy Policy%% with the themes privacy policy link.
 *
 * @param string $block_content The block content about to be appended.
 * @param array  $block The full block, including name and attributes.
 * @return string $new_html The modified block.
 */
function insert_privacy_link( $block_content, $block ) {

	$privacy_policy = get_the_privacy_policy_link();

	if ( '' === $privacy_policy ) {
		$privacy_policy = 'Privacy Policy';
	}

	$new_html = str_replace( '%%Privacy Policy%%', $privacy_policy, $block_content );

	return $new_html;
}
add_filter( 'render_block_cata/newsletter', __NAMESPACE__ . '\\insert_privacy_link', 10, 2 );

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
