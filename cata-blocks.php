<?php
/**
 * Cata Blocks
 *
 * @package   Cata\Blocks
 * @author    Thought & Expression Co. <devjobs@thought.is>
 * @copyright 2019 Thought & Expression Co.
 * @license   GNU GENERAL PUBLIC LICENSE
 *
 * @wordpress-plugin
 * Plugin Name: Cata Blocks
 * Description: Block Editor components for use with the Cata theme.
 * Author:      Thought & Expression Co. <devjobs@thought.is>
 * Author URI:  https://thought.is
 * Version:     0.9.4
 * License:     GPL v3 or later
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 */

namespace Cata\Blocks;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Middleware
 * 
 * REST block depends on this file
 */
require_once __DIR__ . '/blocks-middleware/blocks-middleware.php';

/**
 * Store
 * 
 * Shopify block depends on this file
 */
require_once __DIR__ . '/blocks-store/blocks-store.php';

/**
 * Aside
 */
require_once __DIR__ . '/blocks/aside/aside.php';

/**
 * Kicker
 */
require_once __DIR__ . '/blocks/kicker/kicker.php';

/**
 * Moodboard
 */
require_once __DIR__ . '/blocks/moodboard/moodboard.php';

/**
 * Newsletter
 */
require_once __DIR__ . '/blocks/newsletter/includes/class-renderer.php';
require_once __DIR__ . '/blocks/newsletter/newsletter.php';

/**
 * REST
 */
require_once __DIR__ . '/blocks/rest/includes/layout/class-layout.php';
require_once __DIR__ . '/blocks/rest/includes/layout/compact/class-compact.php';
require_once __DIR__ . '/blocks/rest/includes/layout/daily-horoscope/class-daily-horoscope.php';
require_once __DIR__ . '/blocks/rest/includes/layout/network/class-network.php';
require_once __DIR__ . '/blocks/rest/includes/layout/trending/class-trending.php';
require_once __DIR__ . '/blocks/rest/includes/sorting.php';
require_once __DIR__ . '/blocks/rest/rest.php';

/**
 * Feed
 */
require_once __DIR__ . '/includes/feed/class-feed.php';
require_once __DIR__ . '/includes/feed/cache/class-cache.php';
require_once __DIR__ . '/includes/feed/fetch/class-fetch.php';
require_once __DIR__ . '/includes/feed/update/class-update.php';

new Feed\Update();

/**
 * Proxy
 */
require_once __DIR__ . '/includes/proxy/class-proxy.php';

new Proxy();

/**
 * Table of Contents
 */
require_once __DIR__ . '/blocks/table-of-contents/table-of-contents.php';

/**
 * FAQ
 */
require_once __DIR__ . '/blocks/faq/includes/structured-data/class-faq-data-collector.php';
require_once __DIR__ . '/blocks/faq/includes/structured-data/class-render-faq-data.php';
require_once __DIR__ . '/blocks/faq/faq.php';

/**
 * Scheduled Content
 */
require_once __DIR__ . '/blocks/scheduled-content/scheduled-content.php';

/**
 * Shopify
 */
include_once __DIR__ . '/blocks/shopify/includes/options/class-options.php';
include_once __DIR__ . '/blocks/shopify/includes/options/store/class-store.php';
include_once __DIR__ . '/blocks/shopify/includes/options/add-store/class-add-store.php';
include_once __DIR__ . '/blocks/shopify/includes/feed/class-feed.php';
include_once __DIR__ . '/blocks/shopify/includes/feed/cache/class-cache.php';
include_once __DIR__ . '/blocks/shopify/includes/feed/fetch/class-fetch.php';
include_once __DIR__ . '/blocks/shopify/includes/feed/query/class-query.php';
include_once __DIR__ . '/blocks/shopify/includes/feed/update/class-update.php';
include_once __DIR__ . '/blocks/shopify/includes/render/class-render.php';
include_once __DIR__ . '/blocks/shopify/includes/proxy/class-proxy.php';
require_once __DIR__ . '/blocks/shopify/shopify.php';

new Shopify\Feed\Update();
new Shopify\Options();
new Shopify\Proxy();

/**
 * Network Links
 */
require_once __DIR__ . '/blocks/network-link/network-link.php';
require_once __DIR__ . '/blocks/network-links/network-links.php';

/**
 * Reel
 */
require_once __DIR__ . '/blocks/reel/reel.php';
require_once __DIR__ . '/blocks/reel-clip/reel-clip.php';

/**
 * Marquee
 */
require_once __DIR__ . '/blocks/marquee/marquee.php';

/**
 * Trivia Pattern
 */
require_once __DIR__ . '/patterns/trivia/trivia.php';

/**
 * Overhang Format
 */
require_once __DIR__ . '/formats/overhang/overhang.php';

/**
 * Substack Social Link Variation
 */
require_once __DIR__ . '/variations/social-link/substack/substack.php';

/**
 * Block Editor 
 */
require_once __DIR__ . '/block-editor/block-editor.php';
