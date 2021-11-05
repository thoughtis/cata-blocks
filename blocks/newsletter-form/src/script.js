/**
 * Mailchimp
 *
 * @see https://css-tricks.com/form-validation-part-4-validating-mailchimp-subscribe-form/
 */

'use strict';

/**
 * Internal dependencies
 */
import MailchimpForm from './class-mailchimp-form.js';

/**
 * Main
 */
( function() {
	const forms = document.querySelectorAll( 'form[data-mailchimp]' );

	console.log( 'forms', forms )

	Array.from( forms ).forEach( initForm );
} )();

/**
 * Init Form
 *
 * @param {HTMLFormElement} form
 */
function initForm( form ) {
	// leave form alone, just let it submit to Mailchimp
	if ( 'function' !== typeof form.checkValidity ) {
		return;
	}

	new MailchimpForm( form );

	console.log( 'form', form);
}
