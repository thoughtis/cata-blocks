<?php
/**
 * Render callback for the Fresh Post Dot block.
 *
 * This block wraps its inner blocks (typically core/post-date) and
 * conditionally adds an `is-fresh` class when the post was published
 * within the configured threshold.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Rendered inner block content.
 * @var WP_Block $block      Block instance.
 */

$fresh_post_dot_post_id = isset( $block->context['postId'] ) ? absint( $block->context['postId'] ) : get_the_ID();

if ( ! $fresh_post_dot_post_id ) {
	return;
}

$fresh_post_dot_threshold_hours = isset( $attributes['thresholdHours'] ) ? absint( $attributes['thresholdHours'] ) : 3;
$fresh_post_dot_post_timestamp  = get_post_time( 'U', true, $fresh_post_dot_post_id );

if ( false === $fresh_post_dot_post_timestamp ) {
	return;
}

$fresh_post_dot_current_timestamp = time();
$fresh_post_dot_diff_seconds      = $fresh_post_dot_current_timestamp - $fresh_post_dot_post_timestamp;

// Round to whole hours the same way human_time_diff() does, so the
// indicator stays in sync with the "N hours ago" label shown by the
// inner post-date block ("3 hours ago" is fresh until it becomes "4").
$fresh_post_dot_displayed_hours = (int) round( $fresh_post_dot_diff_seconds / HOUR_IN_SECONDS );
$fresh_post_dot_is_fresh        = $fresh_post_dot_diff_seconds >= 0 && $fresh_post_dot_displayed_hours <= $fresh_post_dot_threshold_hours;

$fresh_post_dot_wrapper_attributes = get_block_wrapper_attributes(
	$fresh_post_dot_is_fresh ? array( 'class' => 'is-fresh' ) : array()
);
?>
<div <?php echo $fresh_post_dot_wrapper_attributes; ?>>
	<?php echo $content; ?>
</div>