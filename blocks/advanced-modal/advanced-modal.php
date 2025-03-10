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

	$additional_attr = array(
		'data-wp-interactive' => 'cata-blocks-advanced-modal',
	);

	ob_start();
	?>
		<div 
			<?php echo get_block_wrapper_attributes( $additional_attr ); ?>
			<?php echo wp_interactivity_data_wp_context( array( 'dialogElementId' => $unique_id, 'isOpen' => false ) ); ?>
		>
			<button data-wp-on--click="actions.toggle">
				<?php echo get_open_icon(); ?>
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
 * @return string
 */
function get_open_icon(): string {
	$open_icon = '
		<svg xmlns="http://www.w3.org/2000/svg" width="35" height="14" viewBox="0 0 35 14">
			<rect width="35" height="2.80001"/>
			<rect y="11.2001" width="35" height="2.80001"/>
		</svg>';

	return apply_filters( 'cata_blocks_advanced_modal_block_open_icon', $open_icon );
}
