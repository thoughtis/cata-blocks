<?php
/**
 * Patterns > Trivia
 *
 * @package Cata\Blocks
 */

namespace Cata\Blocks;

register_block_pattern(
	'cata/trivia',
	array(
		'title'       => __( 'Trivia', 'cata' ),
		'categories'  => array( 'text' ),
		'description' => _x( 'Trivia question pattern. An aside containing a title, question and answer.', 'Block pattern description', 'cata' ),
		'content'     => "<!-- wp:cata/aside -->\n<aside class=\"wp-block-cata-aside\">\n<div class=\"wp-block-cata-aside__inner-container\">\n<!-- wp:cata/kicker {\"fontSize\":\"small\"} -->\n<p class=\"wp-block-cata-kicker has-small-font-size\">Trivia Question</p>\n<!-- /wp:cata/kicker -->\n<!-- wp:paragraph -->\n<p><strong>Question:</strong> Question here?</p>\n<!-- /wp:paragraph -->\n<!-- wp:paragraph -->\n<p><strong>Answer:</strong> <span class=\"tap-reveal\">Answer here</span></p>\n<!-- /wp:paragraph -->\n</div>\n</aside>\n<!-- /wp:cata/aside -->\n",
	)
);
