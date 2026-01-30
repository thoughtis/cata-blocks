<?php
/**
 * Infinite Scroll Render
 * 
 * @package Cata_Blocks
 * @since
 */

wp_interactivity_state(
	'cata-blocks-infinite-scroll',
	cata_blocks_get_infinite_scroll_config()
);

?>
<div <?php echo get_block_wrapper_attributes( [
	'data-wp-interactive' => 'cata-blocks-infinite-scroll',
	'data-wp-init'        => 'actions.init'
	] );
?>>
	<?php echo $content ?>
</div>
