<?php
/**
 * Subtack Social Link Variation
 *
 * @package Cata\Blocks
 * @since 0.8.6
 */

namespace Cata\Blocks\Variations;

/**
 * Register Substack Social Link Assets
 */
function register_substack_social_link_assets(): void {

	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	wp_register_script(
		'cata-substack-social-link-variation',
		plugins_url( '/build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	wp_register_style(
		'cata-substack-social-link-variation',
		plugins_url( '/build/index.css', __FILE__ ),
		array('wp-block-library'),
		$asset_file['version']
	);
}
add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\\register_substack_social_link_assets' );
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\register_substack_social_link_assets' );

/**
 * Enqueue Substack Social Link Editor Assets
 */
function enqueue_substack_social_link_variation_editor_assets(): void {
	wp_enqueue_script('cata-substack-social-link-variation');
	wp_enqueue_style('cata-substack-social-link-variation');
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\enqueue_substack_social_link_variation_editor_assets' );

/**
 * Render Block Substack Social Link Variation
 *
 * @param string $content
 * @param array  $block_data
 * @return string $content
 */
function render_block_substack_social_link_variation( string $content, array $block_data ): string {

	if ( 'core/social-link' !== $block_data['blockName'] ) {
		return $content;
	}

	if ( 'substack' !== $block_data['attrs']['service'] ) {
		return $content;
	}

	if ( empty( $block_data['attrs']['url'] ?? '' ) ) {
		return $content;
	}

	$icon = find_share_icon( $content );

	if ( '' === $icon ) {
		return $content;
	}

	// Enqueue the style to use the Substack colors.
	wp_enqueue_style( 'cata-substack-social-link-variation' );

	// Replace the inner content of the SVG icon.
	$content = str_replace(
		$icon,
		'<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.8,6.5H3.2v2.4h17.6V6.5z M3.2,11v11l8.8-4.9l8.8,4.9V11H3.2z M20.8,2H3.2v2.4h17.6V2z"/></svg>',
		$content
	);

	// Replace the label / screen reader text.
	$content = str_replace(
		'Share Icon',
		'Substack',
		$content
	);

	return $content;
}
add_filter( 'render_block', __NAMESPACE__ . '\\render_block_substack_social_link_variation', 10, 2 );

/**
 * Find Share Icon
 * 
 * @param string $content
 * @return string
 */
function find_share_icon( string $content ): string {

	$matches = array();
	$has_match = preg_match( '/<svg[^>]*>.*<\/svg>/', $content, $matches );

	if ( 1 !== $has_match || empty( $matches ) ) {
		return '';
	}

	return $matches[0];
}
