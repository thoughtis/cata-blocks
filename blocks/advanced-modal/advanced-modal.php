<?php
/**
 * Advanced Modal
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

/**
 * Register Advanced Modal block
 *
 * @return void
 */
function register_advanced_modal_block() : void {
	if ( ! apply_filters( 'cata_blocks_support_advanced_modal_block', true ) ) {
		return;
	}
	register_block_type( 
		__DIR__ . '/build',
		array(
			'render_callback' => __NAMESPACE__ . '\\render_advanced_modal_block'
		)
	);
}
add_action( 'init', __NAMESPACE__ . '\\register_advanced_modal_block' );

/**
 * Render Advanced Modal Block
 * 
 * @param array $attributes
 * @param string $content
 * 
 * @return string
 */
function render_advanced_modal_block( array $attributes, string $content ): string {
	$unique_id = wp_unique_id( 'cata-blocks-advanced-modal-' );

	$backdrop_opacity      = $attributes['backdropOpacity'] ?? 70;
	$backdrop_color_slug   = $attributes['backdropColor'] ?? '';
	$backdrop_color_custom = $attributes['customBackdropColor'] ?? '';
	$backdrop_color        = $backdrop_color_slug ? "var( --wp--preset--color--$backdrop_color_slug, #000000 )" : $backdrop_color_custom;
	$icon                  = $attributes['icon'] ?? '';

	$additional_attr = array(
		'data-wp-interactive' => 'cata-blocks-advanced-modal',
		'style' => "--cata-advanced-modal-backdrop-color: $backdrop_color; --cata-advanced-modal-backdrop-opacity: $backdrop_opacity;",
	);

	ob_start();
	?>
		<div 
			<?php echo get_block_wrapper_attributes( $additional_attr ); ?>
			<?php echo wp_interactivity_data_wp_context( array( 'dialogElementId' => $unique_id, 'isOpen' => false ) ); ?>
		>
			<button data-wp-on--click="actions.toggle">
				<?php echo get_open_icon( $icon ); ?>
			</button>
			<dialog id="<?php echo esc_attr($unique_id); ?>">
				<?php echo $content; ?>
			</dialog>
		</div>
	<?php
	return ob_get_clean();
}

/**
 * Get Open Icon
 * 
 * @param string $icon
 * 
 * @return string
 */
function get_open_icon( string $icon ): string {
	if ( 'search' === $icon ) {
		$search_icon = '
			<svg viewBox="0 0 24.5 25" width="24.5" height="25" xmlns="http://www.w3.org/2000/svg">
				<path d="M24.14,22.89l-6.29-6.27c1.5-1.76,2.4-4.03,2.4-6.52C20.25,4.53,15.71,0,10.13,0S0,4.53,0,10.1s4.54,10.1,10.13,10.1c2.2,0,4.23-.71,5.9-1.91l6.36,6.34c.24,.24,.56,.36,.88,.36s.63-.12,.88-.36c.48-.48,.48-1.27,0-1.75ZM2.48,10.1c0-4.2,3.43-7.62,7.64-7.62s7.64,3.42,7.64,7.62-3.43,7.62-7.64,7.62-7.64-3.42-7.64-7.62Z"/>
			</svg>';

		return apply_filters( 'cata_blocks_advanced_modal_block_search_icon', $search_icon );
	}

	$hamburger_icon = '
		<svg xmlns="http://www.w3.org/2000/svg" width="35" height="14" viewBox="0 0 35 14">
			<rect width="35" height="2.80001"/>
			<rect y="11.2001" width="35" height="2.80001"/>
		</svg>';

	return apply_filters( 'cata_blocks_advanced_modal_block_hamburger_icon', $hamburger_icon );
}
