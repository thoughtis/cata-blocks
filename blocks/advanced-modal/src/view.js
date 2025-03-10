import { store, getContext } from '@wordpress/interactivity';

store( 'cata-blocks-advanced-modal', {
	actions: {
		toggle: () => {
			const context = getContext();
			context.isOpen = ! context.isOpen;

			const dialogElement = document.getElementById(context.dialogElementId);

			if ( context.isOpen ) {
				dialogElement.show();
			}
			else {
				dialogElement.close();
			}
		},
	},
} );
