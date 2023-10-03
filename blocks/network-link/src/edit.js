/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

/**
 * Internal Dependencies
 */
import { getIconBySite, getNameBySite } from './network-list.js';
import DimensionControls from './dimension-controls';

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
export default function Edit( { clientId, attributes, setAttributes } ) {
	const { service, width, isLink } = attributes;
	const IconComponent = getIconBySite( service );
	const socialLinkName = getNameBySite( service );

	const blockProps = useBlockProps( {
		style: { width },
	} );

	return (
		<>
			<DimensionControls
				clientId={ clientId }
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
			<li { ...blockProps } >
				<Button
					attributes={ attributes }
					setAttributes={ setAttributes }
				>
					<IconComponent />
					<span className="cata-network-link-label screen-reader-text">
						{ socialLinkName }
					</span>
				</Button>
			</li>
		</>
	);
}
