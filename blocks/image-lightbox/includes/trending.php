<?php
/**
 * Blocks > Image Lightbox > Trending content
 *
 * Selects recent posts by the theme's cached Jetpack pageview totals. The
 * theme stores those totals inside object-typed post meta, so SQL cannot sort
 * them numerically; this file deliberately ranks a bounded, cached pool in
 * PHP instead.
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks\Image_Lightbox\Trending;

use WP_Post;
use WP_Query;

/**
 * How many recent days qualify. Fifteen days came directly from the owner's
 * request; the matching filter lets the site change the window deliberately.
 *
 * @var int
 */
const WINDOW_DAYS = 15;

/**
 * Maximum recent posts to rank. At the current roughly 40-post daily cadence,
 * 600 covers the requested 15-day window while keeping the meta-cache fill
 * bounded. The matching filter is the escape hatch if that cadence changes.
 *
 * @var int
 */
const CANDIDATE_POOL = 600;

/**
 * Keep enough ranked fallbacks for the current post and posts unpublished
 * during the cache lifetime; the lightbox itself renders only the first one.
 *
 * @var int
 */
const RANKED_CACHE_SIZE = 10;

/**
 * Matches the shipped Related Content block's cache lifetime. Pageview totals
 * update no faster than every four hours, so a shorter refresh would add work
 * without producing fresher ranking data.
 *
 * @var int
 */
const CACHE_MINUTES = 45;

/**
 * Get the highest-ranked eligible post for a lightbox.
 *
 * The theme class is optional by design. A site using the plugin with another
 * theme gets no module rather than a mislabeled recency fallback or a fatal.
 *
 * @param int $post_id Current post ID, excluded from its own recommendation.
 * @return WP_Post|null Trending post, or null when traffic data is unavailable.
 */
function get_trending_post( int $post_id ): ?WP_Post {
	foreach ( get_ranked_post_ids() as $candidate_id ) {
		if ( $candidate_id === $post_id ) {
			continue;
		}

		$candidate = get_post( $candidate_id );

		// A transient can outlive a post's published status.
		if (
			$candidate instanceof WP_Post &&
			'post' === $candidate->post_type &&
			'publish' === $candidate->post_status
		) {
			return $candidate;
		}
	}

	return null;
}

/**
 * Get globally ranked recent post IDs, cached across gallery pages.
 *
 * @return int[] Ranked post IDs.
 */
function get_ranked_post_ids(): array {
	$stats_class = '\\Thought_Catalog\\Pageview_Stats';

	if (
		! class_exists( $stats_class ) ||
		! is_callable( array( $stats_class, 'get' ) ) ||
		! defined( $stats_class . '::DISPLAY_THRESHOLD' )
	) {
		return array();
	}

	/**
	 * Filter the recent publishing window requested for lightbox trending posts.
	 *
	 * @param int $window_days Number of recent days. Default 15.
	 */
	$window_days = max(
		1,
		(int) apply_filters( 'cata_blocks_image_lightbox_trending_window_days', WINDOW_DAYS )
	);

	/**
	 * Filter the bounded pool ranked in PHP. Raise this if publishing cadence
	 * grows beyond the default pool's coverage of the 15-day window.
	 *
	 * @param int $candidate_pool Maximum number of recent post IDs. Default 600.
	 */
	$candidate_pool = max(
		1,
		(int) apply_filters( 'cata_blocks_image_lightbox_trending_candidate_pool', CANDIDATE_POOL )
	);

	/**
	 * Filter the minimum total pageviews required to call a post trending. The
	 * default comes from Pageview_Stats::DISPLAY_THRESHOLD in the active theme.
	 *
	 * @param int $minimum_views Minimum cumulative pageviews.
	 */
	$minimum_views = max(
		0,
		(int) apply_filters(
			'cata_blocks_image_lightbox_trending_minimum_views',
			constant( $stats_class . '::DISPLAY_THRESHOLD' )
		)
	);

	$transient_key = sprintf(
		'cata_lightbox_trending_%s',
		md5( $window_days . ':' . $candidate_pool . ':' . $minimum_views )
	);
	$cached        = get_transient( $transient_key );

	if ( is_array( $cached ) ) {
		return array_map( 'intval', $cached );
	}

	$post_ids = query_ranked_post_ids( $stats_class, $window_days, $candidate_pool, $minimum_views );

	set_transient( $transient_key, $post_ids, CACHE_MINUTES * MINUTE_IN_SECONDS );

	return $post_ids;
}

/**
 * Query recent candidates and rank their object-meta totals in PHP.
 *
 * Recency is the stable tie-breaker because WP_Query returns the candidate IDs
 * newest first. Priming post meta turns the theme class's per-post get() calls
 * into one bounded cache fill rather than hundreds of individual queries.
 *
 * @param string $stats_class    Guarded theme stats class name.
 * @param int    $window_days    Recent publishing window.
 * @param int    $candidate_pool Maximum candidate IDs.
 * @param int    $minimum_views  Minimum pageview total.
 * @return int[] Ranked post IDs.
 */
function query_ranked_post_ids(
	string $stats_class,
	int $window_days,
	int $candidate_pool,
	int $minimum_views
): array {
	$query = new WP_Query(
		array(
			'post_type'              => 'post',
			'post_status'            => 'publish',
			'posts_per_page'         => $candidate_pool,
			'orderby'                => 'date',
			'order'                  => 'DESC',
			'fields'                 => 'ids',
			'no_found_rows'          => true,
			'ignore_sticky_posts'    => true,
			'update_post_meta_cache' => false,
			'update_post_term_cache' => false,
			'date_query'             => array(
				array(
					'after'     => $window_days . ' days ago',
					'inclusive' => true,
				),
			),
		)
	);

	$candidate_ids = array_map( 'intval', $query->posts );

	if ( empty( $candidate_ids ) ) {
		return array();
	}

	update_meta_cache( 'post', $candidate_ids );

	$ranked = array();

	foreach ( $candidate_ids as $recency => $candidate_id ) {
		$stats = call_user_func( array( $stats_class, 'get' ), $candidate_id );
		$total = is_array( $stats ) && isset( $stats['total'] ) ? (int) $stats['total'] : 0;

		if ( $total < $minimum_views ) {
			continue;
		}

		$ranked[] = array(
			'id'      => $candidate_id,
			'total'   => $total,
			'recency' => $recency,
		);
	}

	usort(
		$ranked,
		static function ( array $first, array $second ): int {
			if ( $first['total'] === $second['total'] ) {
				return $first['recency'] <=> $second['recency'];
			}

			return $second['total'] <=> $first['total'];
		}
	);

	return array_map(
		'intval',
		array_column( array_slice( $ranked, 0, RANKED_CACHE_SIZE ), 'id' )
	);
}
