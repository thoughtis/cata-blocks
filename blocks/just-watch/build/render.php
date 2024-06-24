<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$url = trim( $attributes['url'] ?? '' );

if ( '' === $url || ! wp_http_validate_url( $url ) ) {
	return;
}

$token = Cata\Blocks\just_watch_get_api_token();

if ( '' === $token ) {
	return;
}

$theme  = $attributes['theme'] ?? 'dark'; 
$offers = absint( $attributes['max_offers'] ?? 4 );

wp_enqueue_script( 'cata-blocks-just-watch' );
?>
<figure <?php echo get_block_wrapper_attributes(); ?>>
	<div
		data-jw-widget
		data-api-key="<?php echo esc_attr( $token ); ?>"
		data-url-path="<?php echo esc_attr( wp_parse_url( $url, PHP_URL_PATH ) ); ?>"
		data-theme="<?php echo esc_attr( $theme ); ?>"
		data-max-offers="<?php echo esc_attr( $offers ); ?>"
	>
		<!-- JustWatch Widget Goes Here -->
	</div>
	<figcaption>
		<a rel="nofollow" href="<?php echo esc_url( $url ); ?>">
			 <img width="79" height="12" src="<?php echo esc_url( Cata\Blocks\just_watch_get_asset_url( 'just-watch-logo.svg' ) ); ?>" alt="JustWatch">
		</a>
	</figcaption>
</figure>
