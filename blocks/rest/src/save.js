/**
 * Rest Block Save
 */

/**
 * External dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { RawHTML } from "@wordpress/element";

/**
 * Save
 * 
 * @param {Object} props
 * @return {WPElement} Element to render.
 */
export default function save( { attributes : { content } } ) {
	return (
		<div { ...useBlockProps.save() }>
			{ content && <RawHTML>{ content }</RawHTML> }
		</div>
	);
}
