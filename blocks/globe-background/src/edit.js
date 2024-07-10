/**
 * Edit
 */

import { InnerBlocks, useBlockProps, InspectorControls, useSetting } from '@wordpress/block-editor';
import { Path, SVG, Circle } from '@wordpress/primitives';
import { ColorPalette, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';



/**
 * Edit
 *
 * @export
 * @return {WPElement} Edit
 */
export default function Edit( { attributes, setAttributes } ) {
	const { globeColor } = attributes

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Globe Line Color' ) }>
					<ColorPalette
						value={ globeColor }
						colors={ [ ...useSetting( 'color.palette' ) ] }
						onChange={ ( nextGlobeColor ) => setAttributes( { globeColor: nextGlobeColor } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div
				{ ...useBlockProps( {
                    style: {
                        "--cata-globe-color": globeColor,
                    },
                } ) }
			>
				<div className="wp-block-cata-globe-background__globe-svg">
					<SVG viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
						<Circle cx="50%" cy="50%" r="50%"/>
						<Path d="M150,300A150,150,0,0,1,150,0"/>
						<Path d="M150,300A150,150,0,0,1,150,0"/>
						<Path d="M150,300A150,150,0,0,1,150,0"/>
						<Path d="M150,300A150,150,0,0,1,150,0"/>
						<Path d="M150,300A150,150,0,0,1,150,0"/>
						<Path d="M150,300A150,150,0,0,1,150,0"/>
						<Path d="M150,300A150,150,0,0,1,150,0"/>
						<Path d="M150,300A150,150,0,0,1,150,0"/>
					</SVG>
				</div>
				<InnerBlocks />
			</div>
		</>
	);
}
