/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';
import { Button, SVG, Rect } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	const blockProps = useBlockProps();

	return (
		<Button
			{ ...blockProps } 
			onClick={ (e) => {
				e.currentTarget.closest('dialog').close();
			} }
		>
			<SVG xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33">
				<Rect x="-5.3" y="15" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -6.8108 16.4548)" width="43.6" height="3"/>
				<Rect x="15" y="-5.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -6.8859 16.4785)" width="3" height="43.6"/>
			</SVG>
		</Button>
	);
}
