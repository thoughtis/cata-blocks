<?php
/**
 * Optional silent-loop attachments. No meta means no video behavior.
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

use WP_Post;

/** Keep positive, unique video attachment ids in the editor's order. */
function cata_image_lightbox_sanitize_video_ids( $ids ): array {

	return array_values(
		array_unique(
			array_filter(
				cata_image_lightbox_sanitize_image_ids( $ids ),
				static function ( $id ) {
					return 'attachment' === get_post_type( $id ) && wp_attachment_is( 'video', $id );
				}
			)
		)
	);
}

/** Keep an image attachment id for the loop's REST-writable poster, or zero. */
function cata_image_lightbox_sanitize_poster_id( $id ): int {

	$id = is_scalar( $id ) ? absint( $id ) : 0;
	return 'attachment' === get_post_type( $id ) && wp_attachment_is_image( $id ) ? $id : 0;
}

/**
 * Theme contract: loops with a usable source and still fallback, in meta order.
 *
 * Explicit poster meta leads, then the video's featured image, then the
 * article's featured image. Without a usable still, the attachment stays out.
 * Dimensions describe the clip; poster_id and caption support the gallery.
 *
 * @return array<int, array{id: int, src: string, type: string, width: int, height: int, poster: string, alt: string, poster_id: int, caption: string, media_type: string}>
 */
function cata_image_lightbox_get_post_videos( WP_Post $post ): array {

	$videos = array();
	$ids    = cata_image_lightbox_sanitize_video_ids( get_post_meta( $post->ID, 'cata_lightbox_video_ids', true ) );

	foreach ( $ids as $id ) {
		$src = wp_get_attachment_url( $id );
		if ( ! is_string( $src ) || '' === $src ) {
			continue;
		}

		$poster_id = cata_image_lightbox_sanitize_poster_id( get_post_meta( $id, 'cata_lightbox_poster_id', true ) );
		$poster    = $poster_id ? wp_get_attachment_image_url( $poster_id, 'full' ) : false;
		if ( ! $poster ) {
			$poster_id = (int) get_post_thumbnail_id( $id );
			$poster    = $poster_id ? wp_get_attachment_image_url( $poster_id, 'full' ) : false;
		}
		if ( ! $poster ) {
			$poster_id = (int) get_post_thumbnail_id( $post );
			$poster    = $poster_id ? wp_get_attachment_image_url( $poster_id, 'full' ) : false;
		}
		if ( ! $poster ) {
			continue;
		}

		$metadata = wp_get_attachment_metadata( $id );
		$alt      = (string) get_post_meta( $poster_id, '_wp_attachment_image_alt', true );
		$videos[] = array(
			'id'         => $id,
			'src'        => $src,
			'type'       => (string) get_post_mime_type( $id ),
			'width'      => max( 0, (int) ( $metadata['width'] ?? 0 ) ),
			'height'     => max( 0, (int) ( $metadata['height'] ?? 0 ) ),
			'poster'     => $poster,
			'poster_id'  => $poster_id,
			'alt'        => '' !== $alt ? $alt : wp_strip_all_tags( get_the_title( $id ) ),
			'caption'    => (string) wp_get_attachment_caption( $id ),
			'media_type' => 'video',
		);
	}

	return $videos;
}

/** Video slides lead the unchanged, curated photo sequence. */
function cata_image_lightbox_get_post_slides( WP_Post $post ): array {
	return array_merge( cata_image_lightbox_get_post_videos( $post ), cata_image_lightbox_get_post_images( $post ) );
}

/** Adapt a video poster to the existing image and thumbnail helpers. */
function cata_image_lightbox_video_poster( array $video ): array {
	return array(
		'id'      => $video['poster_id'],
		'src'     => $video['poster'],
		'alt'     => $video['alt'],
		'caption' => '',
	);
}
