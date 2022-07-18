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
 * Version:     0.6.1-beta3
 * License:     GPL v3 or later
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 */

namespace Cata\Blocks;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Aside
 */
require_once __DIR__ . '/blocks/aside/aside.php';

/**
 * Kicker
 */
require_once __DIR__ . '/blocks/kicker/kicker.php';

/**
 * Newsletter
 */
require_once __DIR__ . '/blocks/newsletter/includes/class-renderer.php';
require_once __DIR__ . '/blocks/newsletter/newsletter.php';

/**
 * Products
 */
require_once __DIR__ . '/blocks/products/includes/feed/class-feed.php';
require_once __DIR__ . '/blocks/products/includes/feed/cache/class-cache.php';
require_once __DIR__ . '/blocks/products/includes/feed/fetch/class-fetch.php';
require_once __DIR__ . '/blocks/products/includes/feed/update/class-update.php';
require_once __DIR__ . '/blocks/products/includes/proxy/class-proxy.php';
require_once __DIR__ . '/blocks/products/includes/renderer.php';
require_once __DIR__ . '/blocks/products/products.php';

/**
 * Table of Contents
 */
require_once __DIR__ . '/blocks/table-of-contents/table-of-contents.php';

/**
 * Trivia Pattern
 */
require_once __DIR__ . '/patterns/trivia/trivia.php';

/**
 * Instantiate Classes
 */
new Products\Proxy();
