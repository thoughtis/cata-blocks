/**
 * Rest Block Save
 */

/**
 * External dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { RawHTML } from "@wordpress/element";
import { children } from '@wordpress/blocks';

/**
 * Save
 * 
 * @param {Object} props
 * @return {WPElement} Element to render.
 */
export default function save( { attributes : { content } } ) {
	return (
		<div { ...useBlockProps.save() }>
			<RawHTML>{ 'string' === typeof content ? content : children.toHTML( [content] ) }</RawHTML>
		</div>
	);
}
