/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.css';

/**
 * Internal dependencies
 */
import Edit from './edit';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	icon: <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path d="M1.46,27.29V6.14S2.03-3.57,11.6,1.43c9.57,5,19.43,10,19.43,10,0,0,2.71,1.57,0,3.14-2.71,1.43-27.14,14.29-27.14,14.29,0,0-2.43,1-2.43-1.43v-.14ZM1.31,100.71v21.14s.57,9.71,10.29,4.71c9.57-5,19.43-10,19.43-10,0,0,2.71-1.57,0-3.14-2.71-1.43-27.14-14.14-27.14-14.14,0,0-2.43-1-2.43,1.43h-.14ZM38.17,44.86c4.71-2.29,20.43-10.57,24-12.43,4.71-2.43,0-4.71,0-4.71l-24-12.57s-4.29-2.29-4.14,2.57c.14,4.86,0,24.28,0,24.28,0,0-.71,5.14,4,2.86h.14ZM5.46,62.29c4.71-2.29,20.43-10.57,24-12.43,4.71-2.43,0-4.71,0-4.71l-24-12.57s-4.29-2.29-4.14,2.57c.14,4.86,0,24.28,0,24.28,0,0-.71,5.14,4,2.86h.14ZM71.03,61.57c4.71-2.29,20.43-10.57,24-12.43,4.71-2.43,0-4.71,0-4.71l-24-12.57s-4.29-2.29-4.14,2.57c.14,4.86,0,24.28,0,24.28,0,0-.71,5.14,4,2.86h.14ZM38.31,79.14c4.71-2.29,20.43-10.57,24-12.43,4.71-2.43,0-4.71,0-4.71l-24-12.57s-4.29-2.29-4.14,2.57c.14,4.86,0,24.29,0,24.29,0,0-.71,5.14,4,2.86h.14ZM5.31,95.71c4.71-2.29,20.43-10.57,24-12.43,4.71-2.43,0-4.71,0-4.71l-24-12.57s-4.29-2.29-4.14,2.57c.14,4.86,0,24.28,0,24.28,0,0-.71,5.14,4,2.86h.14ZM38.17,113c4.71-2.29,20.43-10.57,24-12.43,4.71-2.43,0-4.71,0-4.71l-24-12.57s-4.29-2.29-4.14,2.57c.14,4.86,0,24.29,0,24.29,0,0-.71,5.14,4,2.86h.14ZM71.03,96.43c4.71-2.29,20.43-10.57,24-12.43,4.71-2.43,0-4.71,0-4.71l-24-12.57s-4.29-2.29-4.14,2.57c.14,4.86,0,24.28,0,24.28,0,0-.71,5.14,4,2.86h.14ZM99.74,51.29v25.86s-.43,3.86,3,2c3.43-1.71,13.43-7,20-10.29,9.29-4.71,0-9.43,0-9.43,0,0-16.71-8.71-20-10.43-3.29-1.71-3,2.29-3,2.29Z"/></svg>
} );
