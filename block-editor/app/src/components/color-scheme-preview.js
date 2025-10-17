import { PluginPreviewMenuItem } from '@wordpress/editor';
import { registerPlugin } from '@wordpress/plugins';


/**
 * Element Is Dark Mode
 *
 * @param {HTMLElement} element 
 * @return {boolean}
 */
function elementIsDarkMode( element ) {
	return 'dark only' === element?.style?.colorScheme;
}

const CustomPreviewMenuItem = () => (
  <PluginPreviewMenuItem
    onClick={ () => {

		const siteEditor = document.querySelector('#site-editor');
		const postEditor = document.querySelector('#editor');

		if ( siteEditor ) {
			const editorBodyEl = document.querySelector('.edit-site-visual-editor__editor-canvas');
			if ( elementIsDarkMode( editorBodyEl.contentDocument.body ) ) {
				editorBodyEl.contentDocument.body.style.colorScheme = '';
			} else {
				editorBodyEl.contentDocument.body.style.colorScheme = 'dark only';
			}
		}

		if ( postEditor ) {
			const editorStylesWrapper = document.querySelector('.editor-styles-wrapper');

			if ( elementIsDarkMode( editorStylesWrapper ) ) {
				editorStylesWrapper.style.colorScheme = '';
			} else {
				editorStylesWrapper.style.colorScheme = 'dark only';
			}
		}
    } }
  >
    Preview Dark Mode
  </PluginPreviewMenuItem>
);

registerPlugin( 'cata-blocks-color-scheme-preview', {
    render: CustomPreviewMenuItem,
} );
