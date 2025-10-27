import { PluginPreviewMenuItem } from '@wordpress/editor';
import { registerPlugin } from '@wordpress/plugins';
import { useState } from '@wordpress/element';
import { getEditorCanvas } from '../hooks/use-editor-canvas';
import { useEffect } from 'react';

const CustomPreviewMenuItem = () => {
	
	const [ isDarkMode, setIsDarkMode ] = useState(false);
	
	useEffect( () => {
		const canvas = getEditorCanvas();
		if ( canvas ) {
			canvas.style.colorScheme = isDarkMode ? 'dark only' : '' ;
		}
	}, [isDarkMode] );

	return (
		<PluginPreviewMenuItem
			onClick={ () => {
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
