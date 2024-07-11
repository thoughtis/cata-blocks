/**
 * Save
 */

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * Save
 *
 * @export
 * @return {WPElement} Save
 */
export default function Save( { attributes } ) {	
	const blockProps = useBlockProps.save();
	const style = "stroke: " + attributes.globeColor;

	return (
		<div { ...blockProps } >
			<div className="wp-block-cata-globe-background__globe-svg" style={style}>
				<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
					<circle cx="50%" cy="50%" r="50%"></circle>
					<path d="M150,300A150,150,0,0,1,150,0" style="--globe-animation-order: 0"></path>
					<path d="M150,300A150,150,0,0,1,150,0" style="--globe-animation-order: 1"></path>
					<path d="M150,300A150,150,0,0,1,150,0" style="--globe-animation-order: 2"></path>
					<path d="M150,300A150,150,0,0,1,150,0" style="--globe-animation-order: 3"></path>
					<path d="M150,300A150,150,0,0,1,150,0" style="--globe-animation-order: 4"></path>
					<path d="M150,300A150,150,0,0,1,150,0" style="--globe-animation-order: 5"></path>
					<path d="M150,300A150,150,0,0,1,150,0" style="--globe-animation-order: 6"></path>
					<path d="M150,300A150,150,0,0,1,150,0" style="--globe-animation-order: 7"></path>
				</svg>
			</div>
			<div class="wp-block-cata-globe-background__inner-blocks">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
