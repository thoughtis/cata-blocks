<?php
/**
 * Blocks > Related Content > Matching
 *
 * Subject extraction and candidate selection for the Related Content block.
 * Subjects come from the post headline, not taxonomy: runs of two or more
 * consecutive capitalized words, broken by a small stopword list.
 *
 * @package Cata\Blocks
 * @since 0.14.0
 */

namespace Cata\Blocks\Related_Content;

use WP_Query;

/**
 * Maximum number of related posts the block renders.
 *
 * @var int
 */
const MAX_POSTS = 2;

/**
 * How many recent days of publishing qualify as related. The window moves
 * with the current time, not the anchor post's publish date, so evergreen
 * posts pick up fresh matches and lose stale ones.
 *
 * @var int
 */
const WINDOW_DAYS = 30;

/**
 * How many candidates to pull before the Backgrid-priority sort. Larger
 * than MAX_POSTS so a credited post further down recency order can still
 * be sorted to the front.
 *
 * @var int
 */
const CANDIDATE_POOL = 10;

/**
 * Words that break a run of capitalized words during subject extraction.
 *
 * Articles, conjunctions, prepositions, pronouns, auxiliaries, and verbs
 * that show up Title-Cased in headlines but are not part of a name.
 *
 * @var string[]
 */
const STOPWORDS = array(
	'a', 'an', 'the',
	'and', 'but', 'or', 'nor', 'so', 'yet',
	'about', 'after', 'against', 'amid', 'among', 'around', 'at', 'before',
	'behind', 'between', 'by', 'during', 'for', 'from', 'in', 'inside',
	'into', 'near', 'of', 'off', 'on', 'onto', 'out', 'over', 'past',
	'since', 'through', 'to', 'under', 'until', 'up', 'upon', 'with', 'without',
	'all', 'are', 'as', 'be', 'been', 'being', 'can', 'could', 'did', 'do',
	'does', 'each', 'had', 'has', 'have', 'he', 'her', 'here', 'his', 'how',
	'i', 'if', 'is', 'it', 'its', 'may', 'might', 'my', 'no', 'not', 'now',
	'our', 'she', 'should', 'some', 'than', 'that', 'their', 'them', 'then',
	'there', 'these', 'they', 'this', 'those', 'was', 'we', 'were', 'what',
	'when', 'where', 'which', 'while', 'who', 'why', 'will', 'would', 'you', 'your',
	'again', 'always', 'ever', 'finally', 'just', 'later', 'never',
	'officially', 'really', 'reportedly', 'still', 'years',
	'album', 'albums', 'ending', 'episode', 'explained', 'finale',
	'premiere', 'ranked', 'recap', 'season', 'trailer',
	'admits', 'announced', 'announces', 'arrives', 'breaks', 'calls',
	'celebrates', 'claims', 'confirms', 'date', 'dates', 'debuts', 'denies',
	'drops', 'enjoys', 'explains',
	'gets', 'gives', 'goes', 'hits', 'holds', 'joins', 'keeps', 'knew',
	'know', 'leaves', 'looks', 'makes', 'marks', 'matters', 'meets', 'opens',
	'plans', 'posts', 'praises', 'puts', 'reach', 'reached', 'reacts',
	'responds', 'returns', 'revealed', 'reveals', 'rocks', 'said', 'say', 'says', 'seen',
	'sells', 'sends', 'sets', 'shares', 'shows', 'shuts', 'signs', 'sits',
	'slams', 'sparks', 'spotted', 'step', 'stepped', 'steps', 'stuns',
	'takes', 'talks', 'teases', 'tells', 'think', 'thinks', 'thought',
	'turns', 'unveils', 'visits', 'wants', 'wear', 'wearing', 'wears',
	'wins', 'wore',
);

/**
 * Strip edge punctuation from a headline word.
 *
 * Internal punctuation survives, so hyphenated and apostrophized names
 * ("Jay-Z", "O'Brien") stay whole.
 *
 * @param string $word Raw whitespace-delimited token.
 * @return string Normalized word, possibly empty.
 */
function normalize_word( string $word ): string {
	return (string) preg_replace( '/^[\p{P}\p{S}]+|[\p{P}\p{S}]+$/u', '', $word );
}

/**
 * Whether a normalized word can be part of a subject run.
 *
 * @param string $word Normalized word.
 * @return bool
 */
function is_subject_word( string $word ): bool {
	if ( '' === $word || ! preg_match( '/^\p{Lu}/u', $word ) ) {
		return false;
	}

	return ! in_array( strtolower( $word ), STOPWORDS, true );
}

/**
 * Extract candidate subjects from a post headline.
 *
 * A subject is a run of two or more consecutive capitalized words, broken
 * by stopwords, lowercase words, and numbers. Single capitalized words are
 * too noisy to match on ("House", "Love") and are dropped. A run matches
 * whole or not at all — no shorter alias is ever derived from part of a
 * matched phrase, because a derived "surname" is often an ordinary English
 * word that silently matches unrelated posts.
 *
 * @param string $title Post title.
 * @return string[] Unique subjects, e.g. array( 'Taylor Swift', 'Full House' ).
 */
function extract_subjects( string $title ): array {
	$words    = preg_split( '/\s+/u', wp_strip_all_tags( $title ), -1, PREG_SPLIT_NO_EMPTY );
	$subjects = array();
	$run      = array();

	foreach ( $words as $word ) {
		$word       = normalize_word( $word );
		$possessive = (bool) preg_match( '/[\'\x{2019}]s$/u', $word );

		if ( $possessive ) {
			$word = (string) preg_replace( '/[\'\x{2019}]s$/u', '', $word );
		}

		if ( is_subject_word( $word ) ) {
			$run[] = $word;

			// A possessive ends its noun phrase — "Taylor Swift's New Album"
			// is about Taylor Swift, not a "Taylor Swift New Album" — so the
			// word it completes also closes the run.
			if ( ! $possessive ) {
				continue;
			}
		}

		if ( count( $run ) >= 2 ) {
			$subjects[] = implode( ' ', $run );
		}

		$run = array();
	}

	if ( count( $run ) >= 2 ) {
		$subjects[] = implode( ' ', $run );
	}

	return array_values( array_unique( $subjects ) );
}

/**
 * Whether a post's featured image is credited to Backgrid.
 *
 * The photo_credit_name attachment meta is written on every image upload
 * by internal tooling; this is its first read.
 *
 * @param int $post_id Post ID.
 * @return bool
 */
function has_backgrid_credit( int $post_id ): bool {
	$thumbnail_id = get_post_thumbnail_id( $post_id );

	if ( ! $thumbnail_id ) {
		return false;
	}

	return 0 === strcasecmp( 'Backgrid', trim( (string) get_post_meta( $thumbnail_id, 'photo_credit_name', true ) ) );
}

/**
 * Query the recently published posts whose titles share a subject with the
 * given post.
 *
 * Candidates whose featured image credits Backgrid sort to the front; the
 * rest keep recency order. Capped at MAX_POSTS.
 *
 * @param int $post_id Anchor post ID.
 * @return int[] Related post IDs.
 */
function query_related_post_ids( int $post_id ): array {
	$subjects = extract_subjects( (string) get_post_field( 'post_title', $post_id, 'raw' ) );

	if ( empty( $subjects ) ) {
		return array();
	}

	$where_filter = static function ( string $where ) use ( $subjects ): string {
		global $wpdb;

		$clauses = array();

		foreach ( $subjects as $subject ) {
			$clauses[] = $wpdb->prepare( "{$wpdb->posts}.post_title LIKE %s", '%' . $wpdb->esc_like( $subject ) . '%' );
		}

		return $where . ' AND ( ' . implode( ' OR ', $clauses ) . ' )';
	};

	add_filter( 'posts_where', $where_filter );

	$query = new WP_Query(
		array(
			'post_type'           => 'post',
			'post_status'         => 'publish',
			'posts_per_page'      => CANDIDATE_POOL,
			'orderby'             => 'date',
			'order'               => 'DESC',
			'fields'              => 'ids',
			'no_found_rows'       => true,
			'ignore_sticky_posts' => true,
			'date_query'          => array(
				array(
					'after'     => WINDOW_DAYS . ' days ago',
					'inclusive' => true,
				),
			),
		)
	);

	remove_filter( 'posts_where', $where_filter );

	$backgrid = array();
	$rest     = array();

	foreach ( array_map( 'intval', $query->posts ) as $candidate_id ) {
		if ( $candidate_id === $post_id ) {
			continue;
		}

		if ( has_backgrid_credit( $candidate_id ) ) {
			$backgrid[] = $candidate_id;
		} else {
			$rest[] = $candidate_id;
		}
	}

	return array_slice( array_merge( $backgrid, $rest ), 0, MAX_POSTS );
}

/**
 * Get related post IDs for a post, cached in a short-lived transient.
 *
 * The qualifying window moves with the current time, so the result can't
 * be computed once at publish; the transient keeps the query off most
 * page views while still letting matches appear and expire.
 *
 * @param int $post_id Anchor post ID.
 * @return int[] Related post IDs.
 */
function get_related_post_ids( int $post_id ): array {
	$transient_key = 'cata_related_content_' . $post_id;
	$cached        = get_transient( $transient_key );

	if ( is_array( $cached ) ) {
		return array_map( 'intval', $cached );
	}

	$post_ids = query_related_post_ids( $post_id );

	set_transient( $transient_key, $post_ids, 45 * MINUTE_IN_SECONDS );

	return $post_ids;
}
