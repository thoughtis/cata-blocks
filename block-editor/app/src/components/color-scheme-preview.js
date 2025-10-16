import { PluginPreviewMenuItem } from '@wordpress/editor';
import { registerPlugin } from '@wordpress/plugins';

const CustomPreviewMenuItem = () => (
  <PluginPreviewMenuItem
    onClick={ () => {

		const siteEditor = document.querySelector('#site-editor');
		const postEditor = document.querySelector('#editor');

		if ( siteEditor ) {
			const editorBodyEl = document.querySelector('.edit-site-visual-editor__editor-canvas');
			editorBodyEl.contentDocument.body.style.colorScheme = 'dark only';
		}

		if ( postEditor ) {
			const editorStylesWrapper = document.querySelector('.editor-styles-wrapper');
			editorStylesWrapper.style.colorScheme = 'dark only';
		}
    } }
  >
    Preview in Dark Mode
  </PluginPreviewMenuItem>
);

registerPlugin( 'cata-blocks-color-scheme-preview', {
    render: CustomPreviewMenuItem,
} );
