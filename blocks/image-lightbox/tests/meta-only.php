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
	public function __construct( $html ) { $this->html = $html; }
	public function next_tag( $tag ) { return 1 === preg_match( '/<' . $tag . '\\b/i', $this->html ); }
	public function get_attribute( $name ) {
		return preg_match( '/' . $name . '="([^"]*)"/', $this->html, $matches ) ? $matches[1] : null;
	}
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
function get_post_thumbnail_id() { return 1949; }
function wp_attachment_is_image( $id ) { return isset( $GLOBALS['attachments'][ $id ] ); }
function wp_get_attachment_image_url( $id, $size ) { return $GLOBALS['attachments'][ $id ] ?? false; }
function wp_get_attachment_caption( $id ) { return 'Film still from Monster.'; }
function wp_get_attachment_metadata() { return array( 'width' => 1920 ); }
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

if ( getenv( 'CATA_LIGHTBOX_FIXTURE' ) ) {
	file_put_contents( getenv( 'CATA_LIGHTBOX_FIXTURE' ), $html );
}
echo 'Meta-only lightbox: ' . $checks . " checks passed.\n";
