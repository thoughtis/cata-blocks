<?php
/**
 * Execute the actual PHP collector and renderer without a WordPress database.
 * Run: php blocks/image-lightbox/tests/meta-only.php
 * Optional: CATA_LIGHTBOX_FIXTURE=/path/gallery.html to retain rendered markup.
 */

class WP_Post {
	public $ID;
	public $post_content = '';
	public function __construct( int $id ) { $this->ID = $id; }
}

class WP_HTML_Tag_Processor {
	private $html;
	private $tag;
	public function __construct( $html ) { $this->html = $html; }
	public function next_tag( $tag ) { $this->tag = $tag; return 1 === preg_match( '/<' . $tag . '\\b/i', $this->html ); }
	public function get_attribute( $name ) {
		return preg_match( '/' . $name . '="([^"]*)"/', $this->html, $matches ) ? $matches[1] : null;
	}
	public function add_class( $class ) { $this->set_attribute( 'class', trim( ( $this->get_attribute( 'class' ) ?? '' ) . ' ' . $class ) ); }
	public function set_attribute( $name, $value ) {
		$this->html = preg_replace_callback( '/<' . $this->tag . '\b[^>]*>/', function ( $match ) use ( $name, $value ) {
			$tag = preg_replace( '/\s' . $name . '="[^"]*"/', '', $match[0] );
			return substr( $tag, 0, -1 ) . ' ' . $name . '="' . esc_attr( $value ) . '">';
		}, $this->html, 1 );
	}
	public function get_updated_html() { return $this->html; }
}

$filters     = array();
$meta        = array();
$parsed_blocks = array();
$attachments = array(
	1949 => 'https://becoming.is/wp-content/uploads/sites/9/2026/10/charlize-golden-globes.jpg',
	1950 => 'https://becoming.is/wp-content/uploads/sites/9/2026/10/monster-smoking.jpg',
	1951 => 'https://becoming.is/wp-content/uploads/sites/9/2026/10/monster-close-up.jpg',
);
$post = new WP_Post( 1956 );
$video_attachments = array( 2112 => 'https://example.test/sabrina-loop.mp4', 2135 => 'https://example.test/taylor-loop.mp4', 2136 => false );
$posters = array( 2112 => 1950, 2135 => 9999 );
$registered_meta = array();
$registered_meta_types = array();
function register_post_meta( $type, $key, $args ) { $GLOBALS['registered_meta'][ $key ] = $args; $GLOBALS['registered_meta_types'][ $key ] = $type; }
function absint( $value ) { return abs( (int) $value ); }
function get_post_type( $id ) { return isset( $GLOBALS['attachments'][$id] ) || array_key_exists( $id, $GLOBALS['video_attachments'] ) ? 'attachment' : 'post'; }
function wp_attachment_is( $type, $id ) { return 'video' === $type && array_key_exists( $id, $GLOBALS['video_attachments'] ); }
function wp_get_attachment_url( $id ) { return $GLOBALS['video_attachments'][$id] ?? false; }
function get_post_mime_type( $id ) { return wp_attachment_is( 'video', $id ) ? 'video/mp4' : 'image/jpeg'; }
function wp_strip_all_tags( $value ) { return strip_tags( $value ); }
function get_the_title( $id ) { return 'Academy Museum Gala'; }
function current_user_can( $permission, $id ) { return 'edit_post' === $permission && in_array( $id, array( 2111, 2112 ), true ); }
function is_admin() { return false; }
function is_singular() { return true; }


function add_action() {}
function add_filter( $name, $callback, $priority = 10, $accepted_args = 1 ) {
	$GLOBALS['filters'][ $name ][] = $callback;
}
function apply_filters( $name, $value, ...$args ) {
	if ( in_array( $name, array( 'cata_blocks_image_lightbox_show_related_content', 'cata_blocks_image_lightbox_show_ad' ), true ) ) {
		return false;
	}
	foreach ( $GLOBALS['filters'][ $name ] ?? array() as $callback ) {
		$value = $callback( $value, ...$args );
	}
	return $value;
}
function get_post_meta( $id, $key, $single = true ) { return $GLOBALS['meta'][ $id ][ $key ] ?? ( 'cata_lightbox_image_ids' === $key ? array() : '' ); }
function get_post_thumbnail_id( $post ) { return $post instanceof WP_Post ? ( $GLOBALS['posters'][$post->ID] ?? 1949 ) : ( $GLOBALS['posters'][$post] ?? 0 ); }
function wp_attachment_is_image( $id ) { return isset( $GLOBALS['attachments'][ $id ] ); }
function wp_get_attachment_image_url( $id, $size ) { return $GLOBALS['attachments'][ $id ] ?? false; }
function wp_get_attachment_caption( $id ) { return wp_attachment_is( 'video', $id ) ? 'Adam Jason Finmann/Getty Images' : 'Film still from Monster.'; }
function wp_get_attachment_metadata( $id ) { return 2135 === $id ? array( 'width' => 720, 'height' => 1280 ) : array( 'width' => 1280, 'height' => 720 ); }
function parse_blocks() { return $GLOBALS['parsed_blocks']; }
function get_queried_object() { return $GLOBALS['post']; }
function get_block_wrapper_attributes() { return 'class="wp-block-cata-image-lightbox"'; }
function wp_unique_id( $prefix ) { static $id = 0; return $prefix . ++$id; }
function __( $text, $domain = '' ) { return $text; }
function _n( $one, $many, $count, $domain = '' ) { return 1 === $count ? $one : $many; }
function esc_attr( $value ) { return htmlspecialchars( (string) $value, ENT_QUOTES ); }
function esc_html( $value ) { return htmlspecialchars( (string) $value, ENT_QUOTES ); }
function esc_url( $value ) { return htmlspecialchars( (string) $value, ENT_QUOTES ); }
function esc_attr_e( $value, $domain = '' ) { echo esc_attr( $value ); }
function esc_html_e( $value, $domain = '' ) { echo esc_html( $value ); }
function wp_kses_post( $value ) { return $value; }
function remove_query_arg( $keys, $url ) { return preg_replace( '/\?.*$/', '', $url ); }
function add_query_arg( $key, $value, $url ) { return $url . '?' . $key . '=' . $value; }

require dirname( __DIR__ ) . '/image-lightbox.php';

$checks = 0;
function check( $condition, $message ) {
	if ( ! $condition ) {
		throw new RuntimeException( $message );
	}
	$GLOBALS['checks']++;
}
function render_gallery() {
	$attributes = array();
	ob_start();
	require dirname( __DIR__ ) . '/src/render.php';
	return ob_get_clean();
}

$meta[1956]['cata_lightbox_image_ids'] = array( 1950, 1951 );
$images = Cata\Blocks\cata_image_lightbox_get_post_images( $post );
check( array( 1950, 1951 ) === array_column( $images, 'id' ), 'Meta-only photos must survive in their saved order.' );
$html = render_gallery();
check( 2 === substr_count( $html, 'aria-roledescription="slide"' ), 'The actual renderer must emit both gallery-only photos.' );
check( str_contains( $html, 'View 2 photos' ), 'A gallery with no content image needs a visible opener.' );
check( str_contains( $html, 'data-cata-image-lightbox-index="0"' ), 'The opener must use the existing delegated trigger contract.' );
check( str_contains( $html, 'monster-smoking.jpg' ) && str_contains( $html, 'monster-close-up.jpg' ), 'Slides must resolve the selected attachments.' );
check( ! str_contains( $html, 'wp-image-1949' ), 'The featured photo must not be synthesized into the gallery.' );

$meta[1957]['cata_lightbox_image_ids'] = array( 1949, 1951, 9999, 1951, 1950 );
$with_body = Cata\Blocks\cata_image_lightbox_add_meta_images( array( $images[0] ), new WP_Post( 1957 ) );
check( array( 1950, 1951 ) === array_column( $with_body, 'id' ), 'Body duplicates, repeated IDs, unavailable attachments and the featured photo must not create slides.' );
$without_body = Cata\Blocks\cata_image_lightbox_add_meta_images( array(), new WP_Post( 1957 ) );
check( array( 1951, 1950 ) === array_column( $without_body, 'id' ), 'Meta-only collection must apply the same exclusions without reordering valid photos.' );

$post = new WP_Post( 1958 );
$meta[1958]['cata_lightbox_image_ids'] = array( 9999, 1949 );
check( array() === Cata\Blocks\cata_image_lightbox_get_post_images( $post ), 'Invalid or featured-only metadata must not create an empty gallery.' );
check( '' === render_gallery(), 'An entirely unusable selection must render no dialog or opener.' );

$post = new WP_Post( 1959 );
check( array() === Cata\Blocks\cata_image_lightbox_get_post_images( $post ), 'A post without content images or curated photos must remain ungalleried.' );

$post = new WP_Post( 1960 );
$parsed_blocks = array( array( 'blockName' => 'core/image', 'attrs' => array( 'id' => 1950 ), 'innerHTML' => '<figure><img src="' . $attachments[1950] . '" alt="Film still" /></figure>' ) );
$meta[1960]['cata_lightbox_image_ids'] = array( 1950, 1951 );
check( array( 1950, 1951 ) === array_column( Cata\Blocks\cata_image_lightbox_get_post_images( $post ), 'id' ), 'Mixed body/gallery photos must keep the body first and deduplicate metadata.' );
$mixed_html = render_gallery();
check( ! str_contains( $mixed_html, 'View 2 photos' ), 'Existing body-image galleries must retain their image-badge opener.' );
check( 2 === substr_count( $mixed_html, 'aria-roledescription="slide"' ), 'Mixed galleries must keep both slides.' );

$post = new WP_Post( 1961 );
check( array() === Cata\Blocks\cata_image_lightbox_get_post_images( $post ), 'An uncurated post below the existing six-image minimum must remain ungalleried.' );

Cata\Blocks\register_image_lightbox_meta();
$image_registration = $registered_meta['cata_lightbox_image_ids'];
$video_registration = $registered_meta['cata_lightbox_video_ids'];
check( 'array' === $video_registration['type'] && $video_registration['single'] && array() === $video_registration['default'], 'Video meta must retain the image field storage shape.' );
check( $image_registration['show_in_rest'] === $video_registration['show_in_rest'] && $image_registration['auth_callback'] === $video_registration['auth_callback'], 'Video REST schema and authorization must match image metadata.' );
check( call_user_func( $video_registration['auth_callback'], false, 'cata_lightbox_video_ids', 2111 ), 'An editor of the post may update video ids.' );
check( ! call_user_func( $video_registration['auth_callback'], false, 'cata_lightbox_video_ids', 2134 ), 'A user without edit permission may not update video ids.' );
check( array( 2112, 2135 ) === call_user_func( $video_registration['sanitize_callback'], array( 2112, '2135', 1950, 9999, 2112, 0 ) ), 'Video sanitization must preserve order while dropping duplicates, non-videos and non-attachments.' );
check( array() === Cata\Blocks\cata_image_lightbox_sanitize_video_ids( '2112' ), 'Non-array video metadata must be ignored.' );

check( 'attachment' === ( $registered_meta_types['cata_lightbox_poster_id'] ?? null ), 'Poster meta must be registered on attachments for the media REST endpoint.' );
$poster_registration = $registered_meta['cata_lightbox_poster_id'];
check( 'integer' === $poster_registration['type'] && true === $poster_registration['single'] && 0 === $poster_registration['default'], 'Poster meta must be a single integer with an unset value of zero.' );
check( true === $poster_registration['show_in_rest'], 'Poster meta must be exposed in REST.' );
check( call_user_func( $poster_registration['auth_callback'], false, 'cata_lightbox_poster_id', 2112 ), 'An editor of the video attachment may update its poster.' );
check( ! call_user_func( $poster_registration['auth_callback'], true, 'cata_lightbox_poster_id', 2135 ), 'Editing the post must not authorize a poster write to another attachment.' );
check( 1951 === call_user_func( $poster_registration['sanitize_callback'], '1951' ), 'Poster sanitization must accept an image attachment ID as an integer.' );
foreach ( array( 0, 2112, 2111, 9999, '', array( 1951 ), new stdClass() ) as $invalid_poster ) {
	check( 0 === call_user_func( $poster_registration['sanitize_callback'], $invalid_poster ), 'Invalid, non-image and non-attachment posters must sanitize to zero.' );
}

$post = new WP_Post( 2111 );
$parsed_blocks = array();
$meta[2111]['cata_lightbox_video_ids'] = array( 2112, 2135, 1950, 9999, 2136, 2112 );
$meta[2111]['cata_lightbox_image_ids'] = array( 1950, 1951 );
$meta[1950]['_wp_attachment_image_alt'] = 'Sabrina Carpenter at the gala';
$videos = Cata\Blocks\cata_image_lightbox_get_post_videos( $post );
check( array( 2112, 2135 ) === array_column( $videos, 'id' ), 'Reads must revalidate videos, unavailable sources and duplicates.' );
check( $attachments[1950] === $videos[0]['poster'] && $attachments[1949] === $videos[1]['poster'], 'The own attachment poster leads; a missing poster falls back to the post featured image.' );
check( 'Sabrina Carpenter at the gala' === $videos[0]['alt'], 'Poster alt text must describe the moving image.' );
check( 'video/mp4' === $videos[0]['type'] && 720 === $videos[1]['width'] && 1280 === $videos[1]['height'], 'The theme contract must include MIME type and true clip dimensions.' );
$meta[2112]['cata_lightbox_poster_id'] = 1951;
$meta[1951]['_wp_attachment_image_alt'] = 'REST-supplied loop poster';
$rest_videos = Cata\Blocks\cata_image_lightbox_get_post_videos( $post );
check( 1951 === $rest_videos[0]['poster_id'] && $attachments[1951] === $rest_videos[0]['poster'], 'Explicit poster meta must beat both the video and post featured images.' );
check( 'REST-supplied loop poster' === $rest_videos[0]['alt'], 'Alt text must come from the selected REST poster.' );
$meta[2112]['cata_lightbox_poster_id'] = 0;
$rest_videos = Cata\Blocks\cata_image_lightbox_get_post_videos( $post );
check( 1950 === $rest_videos[0]['poster_id'], 'Clearing poster meta to zero must restore the video featured image.' );
$meta[2112]['cata_lightbox_poster_id'] = 2112;
$rest_videos = Cata\Blocks\cata_image_lightbox_get_post_videos( $post );
check( 1950 === $rest_videos[0]['poster_id'], 'An invalid stored poster must fall back to the video featured image.' );
$meta[2112]['cata_lightbox_poster_id'] = 1951;
$poster_src = $attachments[1951];
$attachments[1951] = '';
$rest_videos = Cata\Blocks\cata_image_lightbox_get_post_videos( $post );
check( 1950 === $rest_videos[0]['poster_id'], 'A poster with no usable image URL must fall back to the video featured image.' );
$posters[2112] = 9999;
$rest_videos = Cata\Blocks\cata_image_lightbox_get_post_videos( $post );
check( 1949 === $rest_videos[0]['poster_id'], 'An unusable explicit poster and video thumbnail must fall back to the post featured image.' );
$attachments[1951] = $poster_src;
$posters[2112] = 1950;
unset( $meta[2112]['cata_lightbox_poster_id'] );
$slides = Cata\Blocks\cata_image_lightbox_get_post_slides( $post );
check( array( 2112, 2135, 1950, 1951 ) === array_column( $slides, 'id' ), 'Each video must be one leading slide before the photo sequence.' );
check( array( 1950, 1951 ) === array_column( Cata\Blocks\cata_image_lightbox_get_post_images( $post ), 'id' ), 'The existing photo helper must remain photo-only.' );
$video_html = render_gallery();
check( 4 === substr_count( $video_html, 'aria-roledescription="slide"' ) && str_contains( $video_html, '1 / 4' ) && str_contains( $video_html, 'View 4 items' ), 'Video gallery counter and opener must count the same four items.' );
check( 2 === substr_count( $video_html, '<video ' ) && 2 === substr_count( $video_html, 'muted loop playsinline preload="none"' ), 'Loops must have silent inline playback with no initial download.' );
check( ! preg_match( '/<video[^>]*\ssrc=/', $video_html ) && ! preg_match( '/<video[^>]*\s(?:autoplay|controls)(?:\s|>)/', $video_html ), 'Video bytes must stay inert until the current slide activates; no player chrome.' );
check( 2 === substr_count( $video_html, 'data-becoming-loop-gallery' ) && str_contains( $video_html, 'Pause motion' ) && str_contains( $video_html, 'Play motion' ), 'Shared playback and accessible pause/play controls must ship with every loop.' );
check( 2 === substr_count( $video_html, 'class="wp-block-cata-image-lightbox__motion-glyph"' ) && str_contains( $video_html, 'All items' ), 'Video thumbnails must show a motion marker without calling all items photos.' );
check( str_contains( $video_html, 'Adam Jason Finmann/Getty Images' ), 'Video attachment credits must remain in the existing caption disclosure.' );
check( 2 === Cata\Blocks\cata_image_lightbox_find_index( $slides[2], $slides ), 'Body-image indices must account for the leading videos.' );
$body_block = array( 'blockName' => 'core/image', 'attrs' => array( 'id' => 1950 ), 'innerHTML' => '<figure><img src="' . $attachments[1950] . '" alt="Photo" /></figure>' );
$badge = Cata\Blocks\cata_image_lightbox_add_badge( $body_block['innerHTML'], $body_block );
check( str_contains( $badge, 'data-cata-image-lightbox-index="2"' ) && str_contains( $badge, '>+4<' ), 'The body badge must open its shifted photo and count all four media items.' );

$post = new WP_Post( 2134 );
$meta[2134]['cata_lightbox_video_ids'] = array( 2135 );
check( 1 === count( Cata\Blocks\cata_image_lightbox_get_post_slides( $post ) ) && str_contains( render_gallery(), 'View 1 item' ), 'A video-only article must have a usable first-slide opener.' );
$post = new WP_Post( 2137 );
$parsed_blocks = array( $body_block );
$meta[2137]['cata_lightbox_video_ids'] = array( 2112 );
check( array( 2112, 1950 ) === array_column( Cata\Blocks\cata_image_lightbox_get_post_slides( $post ), 'id' ), 'A valid loop must admit the below-minimum body photos too.' );
$post = new WP_Post( 2138 );
$meta[2138]['cata_lightbox_video_ids'] = array( 1950, 9999 );
check( array() === Cata\Blocks\cata_image_lightbox_get_post_slides( $post ) && '' === render_gallery(), 'Invalid video metadata must not force a below-minimum gallery.' );
$post = new WP_Post( 2139 );
$posters[2139] = 0;
$meta[2139]['cata_lightbox_video_ids'] = array( 2135 );
check( array() === Cata\Blocks\cata_image_lightbox_get_post_videos( $post ), 'A video without any usable still must wait for a poster.' );
$meta[2135]['cata_lightbox_poster_id'] = 1951;
$rest_videos = Cata\Blocks\cata_image_lightbox_get_post_videos( $post );
check( 1 === count( $rest_videos ) && 1951 === $rest_videos[0]['poster_id'], 'A REST poster alone must admit a video without either featured image.' );
unset( $meta[2135]['cata_lightbox_poster_id'] );
$post = new WP_Post( 2140 );
check( array() === Cata\Blocks\cata_image_lightbox_get_post_slides( $post ), 'Other sites and child themes without video metadata keep the existing minimum.' );

if ( getenv( 'CATA_LIGHTBOX_VIDEO_FIXTURE' ) ) {
	file_put_contents( getenv( 'CATA_LIGHTBOX_VIDEO_FIXTURE' ), $video_html );
}

if ( getenv( 'CATA_LIGHTBOX_FIXTURE' ) ) {
	file_put_contents( getenv( 'CATA_LIGHTBOX_FIXTURE' ), $html );
}
echo 'Meta-only lightbox: ' . $checks . " checks passed.\n";
