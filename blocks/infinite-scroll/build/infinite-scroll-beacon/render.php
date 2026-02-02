<?php
if ( true !== cata_blocks_get_infinite_scroll_active() ) {
	return;
}

if ( ! is_singular('post') || get_the_ID() === cata_blocks_get_infinite_scroll_post_id() ) {
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
