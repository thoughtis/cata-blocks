/**
 * Shopify Block > Save
 */

/**
 * External dependencies
 */
 import { useBlockProps } from '@wordpress/block-editor';
 
/**
 * Save
 * 
 * @param {Object} props
 * @return {WPElement} Element to render.
 */
export default function save() {
	return (
		<div { ...useBlockProps.save() } />
	);
}