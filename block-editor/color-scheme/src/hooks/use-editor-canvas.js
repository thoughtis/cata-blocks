import { useState } from "@wordpress/element";

/**
 * Get Editor Canvas
 * 
 * @return {null|HTMLElement}
 */
export function getEditorCanvas() {

	const siteEditor = document.querySelector('#site-editor');
	const postEditor = document.querySelector('#editor');

	let canvas = null;

	if ( siteEditor ) {
		const maybeSiteEditorCanvas = document.querySelector('.edit-site-visual-editor__editor-canvas')?.contentDocument?.querySelector('.editor-styles-wrapper') ?? null;
		if ( maybeSiteEditorCanvas ) {
			canvas = maybeSiteEditorCanvas;
		}
	}
	
	if ( postEditor ) {
		const iframe = postEditor.querySelector('iframe[name=editor-canvas]');
		if ( iframe ) {
			const maybeiFrameCanvas = iframe?.contentDocument?.querySelector('.editor-styles-wrapper') ?? null;
			if ( maybeiFrameCanvas ) {
				canvas = maybeiFrameCanvas;
			}
		} else {
			const maybeNonIFrameCanvas = document.querySelector('.editor-styles-wrapper')
			if ( maybeNonIFrameCanvas ) {
				canvas = maybeNonIFrameCanvas;
			}
		}
	}

	return canvas;
}

/**
 * Use Editor Canvas
 */
export default function useEditorCanvas() {

	const [state, setState] = useState( { canvas: null }  );

	if ( null === state.canvas ) {

		const canvas = getEditorCanvas()

		if ( null !== canvas ) {
			setState( { canvas } );
		}
	}

	/**
	 * Get Block By Client Id
	 *
	 * @param {string} clientId 
	 * @return {null|HTMLElement}
	 */
	function getBlockByClientId( clientId ) {
		if ( null === state.canvas ) {
			return null;
		}
		return state.canvas.querySelector(`#block-${clientId}`);
	}

	return {
		canvas: state.canvas,
		getBlockByClientId
	}
}
