/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { InspectorControls, useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import {
	PanelBody,
	__experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const SUMMARY_TEMPLATE = [
		[ 'core/paragraph', { placeholder: 'Table of Contents' } ],
	];
	const ALLOWED_BLOCKS = [ 'core/paragraph' ];

	console.log( attributes );
	
	return (
		<>
		<div { ...useBlockProps() } >
			<InnerBlocks 
				allowedBlocks={ ALLOWED_BLOCKS }
				template={ SUMMARY_TEMPLATE }
				templateLock="all"
			/>
			<ul>
				<li><a>Links will be generated in the live content</a></li>
			</ul>
		</div>
		<InspectorControls>
			<PanelBody title="Table of Contents Settings" initialOpen={false}>
				<ToggleGroupControl
					onChange={(nextBehavior) => {setAttributes({ behavior: nextBehavior})}}
					label="Open/Close Behavior"
					value={attributes.behavior}
					isBlock
				>
					<ToggleGroupControlOption value="alwaysOpen" label="Always Open" />
					<ToggleGroupControlOption value="startOpen" label="Start Open" />
					<ToggleGroupControlOption value="startClosed" label="Start Closed" />
				</ToggleGroupControl>
			</PanelBody>
		</InspectorControls>
		</>
	);
}
