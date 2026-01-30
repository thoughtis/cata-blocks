<?php
if ( true !== cata_blocks_get_infinite_scroll_active() ) {
	return;
}
?>
<div <?php echo get_block_wrapper_attributes( [
	'data-wp-interactive' => 'cata-blocks-infinite-scroll',
	'data-wp-run'         => 'callbacks.onInView'
	] );
?>>
	<!-- Inifnite Scroll Beacon -->
</div>
