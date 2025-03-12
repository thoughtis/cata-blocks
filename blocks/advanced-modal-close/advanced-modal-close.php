<?php
/**
 * Advanced Modal Close
 * Server-side rendering of the `cata/advanced-modal-close` block.
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

use WP_Block;

/**
 * Register Advanced Modal Close block
 */
function register_advanced_modal_close_block() {
	if ( ! apply_filters( 'cata_blocks_support_advanced_modal_close_block', true ) ) {
		return;
	}
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => __NAMESPACE__ . '\\render_advanced_modal_close_block'
		)
	);
}
add_action( 'init', __NAMESPACE__ . '\\register_advanced_modal_close_block' );

/**
 * Render Advanced Modal Close Block
 * 
 * @param array $attributes
 * @param string $content
 * 
 * @return string
 */
function render_advanced_modal_close_block( array $attributes, string $content ): string {
	ob_start();
	?>
		<div <?php echo get_block_wrapper_attributes(); ?>>
			<button data-wp-on--click="actions.toggle">
				<?php echo get_close_icon(); ?>
			</button>
		</div>
	<?php
	return ob_get_clean();
}

/**
 * Get Close Icon
 * 
 * @return string
 */
function get_close_icon(): string {	
	$close_icon = '
		<svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33">
			<rect x="-5.3" y="15" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -6.8108 16.4548)" width="43.6" height="3"/>
			<rect x="15" y="-5.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -6.8859 16.4785)" width="3" height="43.6"/>
		</svg>';


	return apply_filters( 'cata_blocks_advanced_modal_block_close_icon', $close_icon );
}
