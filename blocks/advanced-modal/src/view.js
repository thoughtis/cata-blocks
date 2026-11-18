import { store, getContext } from '@wordpress/interactivity';

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const getDialog = () => document.getElementById( getContext().dialogElementId );

const getFocusable = ( dialog ) =>
	[ ...dialog.querySelectorAll( FOCUSABLE ) ].filter( ( element ) => element.getClientRects().length > 0 );

const { actions } = store( 'cata-blocks-advanced-modal', {
	actions: {
		toggle: () => {
			if ( getContext().isOpen ) {
				actions.close();
				return;
			}

			const dialog = getDialog();

			getContext().isOpen = true;
			dialog.show();

			( getFocusable( dialog )[ 0 ] ?? dialog ).focus();
		},
		close: () => {
			const dialog = getDialog();

			getContext().isOpen = false;
			dialog.close();

			// The open button sits right before the dialog.
			dialog.previousElementSibling.focus();
		},
		handleKeydown: ( event ) => {
			if ( 'Escape' === event.key ) {
				actions.close();
				return;
			}

			if ( 'Tab' !== event.key ) {
				return;
			}

			const dialog = getDialog();
			const focusable = getFocusable( dialog );
			const first = focusable[ 0 ];
			const last = focusable[ focusable.length - 1 ];
			const active = document.activeElement;

			if ( ! focusable.length ) {
				event.preventDefault();
			} else if ( event.shiftKey && ( active === first || active === dialog ) ) {
				event.preventDefault();
				last.focus();
			} else if ( ! event.shiftKey && active === last ) {
				event.preventDefault();
				first.focus();
			}
		},
		handleBackdropClick: ( event ) => {
			// Clicks on the content land on its children, so only backdrop clicks target the dialog.
			if ( event.target === getDialog() ) {
				actions.close();
			}
		},
	},
} );
