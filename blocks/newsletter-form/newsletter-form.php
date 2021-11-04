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
 * Text Domain:       newsletter-form
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


function insert_privacy_link( $block_content, $block ) {

	$privacy_policy = get_the_privacy_policy_link();

	if ( '' === $privacy_policy ) {
		$privacy_policy = 'Privacy Policy';
	}

	$new_html = str_replace( '%%Privacy Policy%%', $privacy_policy, $block_content );

	return $new_html;
}
add_filter( "render_block_cata/newsletter-form", __NAMESPACE__ . '\\insert_privacy_link', 10, 2);
