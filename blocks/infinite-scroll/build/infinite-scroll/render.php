<?php
function cata_blocks_get_load_more_config(): array {

	$options = get_option( 'cata_blocks' );
	$adjacent_post = get_post( absint(  $options['post_id']) );
	$post_urls = is_a( $adjacent_post, 'WP_Post' ) ? [get_permalink( $adjacent_post )] : []; 

	return [
		'postUrls' => $post_urls,
		'index'    => 0
	];
}

wp_interactivity_state(
	'cata-blocks-infinite-scroll',
	cata_blocks_get_load_more_config()
);

?>
<div <?php echo get_block_wrapper_attributes( [
	'data-wp-interactive' => 'cata-blocks-infinite-scroll',
	'data-wp-init'        => 'actions.init'
	] );
?>>
	<?php echo $content ?>
</div>
