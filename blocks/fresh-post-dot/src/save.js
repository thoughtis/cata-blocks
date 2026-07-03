/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * The block is dynamic (render.php outputs the wrapper), but the inner
 * blocks must still be serialized into post content or they are lost.
 *
 * @return {Element} Inner block content only — no wrapper markup.
 */
export default function save() {
	return <InnerBlocks.Content />;
}
