/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Placeholder } from '@wordpress/components';

/**
 * The block is rendered entirely server-side against the live 30-day
 * publishing window, so the editor shows a static placeholder instead of
 * a preview that would go stale.
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<Placeholder
				icon="excerpt-view"
				label={ __( 'Related Content', 'cata' ) }
				instructions={ __(
					'Shows 1–2 recently published posts that share a headline subject with this post. Renders on the front end only when matches exist.',
					'cata'
				) }
			/>
		</div>
	);
}
