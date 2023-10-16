<?php
/**
 * Sorting
 *
 * @package Cata\Blocks\Rest
 * @since
 */

namespace Cata\Blocks\Rest\Sorting;

use stdClass;

/**
 * Published Newest
 * Sort newest to oldest based on date_gmt
 *
 * @param stdClass $a
 * @param stdClass $b
 * @return int
 */
function published_newest( stdClass $a, stdClass $b ) : int {
	return strtotime( $b->date_gmt ) <=> strtotime( $a->date_gmt );
}
