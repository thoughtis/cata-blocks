import { PluginPreviewMenuItem } from '@wordpress/editor';
import { registerPlugin } from '@wordpress/plugins';
import { useState } from '@wordpress/element';

const CustomPreviewMenuItem = () => {
	
	const [isDarkMode,setIsDarkMode] = useState(false);	
	
	return (
		<PluginPreviewMenuItem
			onClick={ () => {

				const siteEditor = document.querySelector('#site-editor');
				const postEditor = document.querySelector('#editor');

				if ( siteEditor ) {
					const editorBodyEl = document.querySelector('.edit-site-visual-editor__editor-canvas');
					editorBodyEl.contentDocument.body.style.colorScheme = isDarkMode ? '' : 'dark only';
				}

				if ( postEditor ) {
					const editorStylesWrapper = document.querySelector('.editor-styles-wrapper');
					editorStylesWrapper.style.colorScheme = isDarkMode ? '' : 'dark only';
				}

				setIsDarkMode( !isDarkMode );
			} }
		>
			{ isDarkMode ? 'Preview Light Mode' : 'Preview Dark Mode' }  
		</PluginPreviewMenuItem>
	)
};

registerPlugin( 'cata-blocks-color-scheme-preview', {
    render: CustomPreviewMenuItem,
} );
