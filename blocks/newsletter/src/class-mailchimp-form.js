/**
 * Mailchimp Form
 */

/**
 * Mailchimp Form
 *
 * @class MailchimpForm
 */
export default class MailchimpForm {
	/**
	 * Creates an instance of MailchimpForm.
	 *
	 * @memberof MailchimpForm
	 * @param {HTMLFormElement} formElement
	 */
	constructor( formElement ) {
		this.form = formElement;
		this.email = this.form.querySelector( 'input[type="email"]' );
		this.button = this.form.querySelector( 'button[type="submit"]' );
		this.output = this.form.querySelector( '[role="alert"]' );
		this.action = this.updateActionforJSONP( this.form.action );
		this.isSending = false;
		
		this.onError = this.onError.bind( this );
		this.onSubmit = this.onSubmit.bind( this );
		this.onSuccess = this.onSuccess.bind( this );
		this.setCallbackFunction = this.setCallbackFunction.bind( this );
		this.send = this.send.bind( this );
		this.setSending = this.setSending.bind( this );
		this.successMsg = this.form.dataset.mailchimpSuccessMessage;
		this.MESSAGES = {
			DEFAULT: '',
			ERROR: "We're sorry, an error occurred.",
			EXISTING_SUBSCRIBER: "You're already subscribed!",
			INVALID: 'Please enter a valid email.',
			SENDING: 'Sending...',
			SUCCESS: this.successMsg,
		}
		this.form.addEventListener( 'submit', this.onSubmit );
	}

	/**
	 * On Submit
	 *
	 * @param {Event} event
	 */
	onSubmit( event ) {
		event.preventDefault();
		if ( this.isSending ) {
			return;
		}
		this.setSending( true );
		this.setCallbackFunction();
		this.send(
			this.action + '&EMAIL=' + encodeURIComponent( this.email.value )
		);
	}

	/**
	 * Update Action for JSON-P
	 *
	 * @param  {string} url
	 * @return {string} url updated for use with JSON-P.
	 */
	updateActionforJSONP( url ) {
		return url.replace( 'post?', 'post-json?' ) + '&c=mailchimpSuccess';
	}

	/**
	 * Send
	 * Do JSONP
	 *
	 * @param {string} src
	 */
	send( src ) {
		const s = document.createElement( 'script' );
		const node = document.getElementsByTagName( 'script' )[ 0 ];
		s.src = src;
		s.addEventListener( 'error', this.onError.bind( this ) );
		node.parentNode.insertBefore( s, node );
	}

	/**
	 * Set Sending
	 *
	 * @param {boolean} sendingState whether we're sending or not.
	 */
	setSending( sendingState ) {
		this.isSending = sendingState;
		if ( this.isSending ) {
			this.button.disabled = true;
			this.output.textContent = this.MESSAGES.SENDING;
		} else {
			this.button.disabled = false;
		}
	}

	/**
	 * On Success
	 *
	 * @param {Object} response
	 */
	onSuccess( response ) {
		this.setSending( false );
		this.email.value = '';
		if ( this.isSuccessResponse( response ) ) {
			this.output.textContent = this.MESSAGES.SUCCESS;
		} else if ( this.isErrorResponse( response ) ) {
			this.output.textContent = this.formatErrorMessage( response );
		} else {
			this.output.textContent = this.MESSAGES.ERROR;
		}
	}

	/**
	 * Is Success Response
	 *
	 * @param {Object} response Mailchimp response.
	 * @return {boolean} Whether this is a success response.
	 */
	isSuccessResponse( response ) {
		return (
			'object' === typeof response &&
			'result' in response &&
			'success' === response.result
		);
	}

	/**
	 * Is Error Response
	 * 
	 * @param {Object} response Mailchimp response.
	 * @return {boolean} Whether this is a success response.
	 */
	isErrorResponse( response ) {
		return (
			'object' === typeof response &&
			'result' in response &&
			'error' === response.result
		);
	}

	/**
	 * Format Error Message
	 *
	 * @param {Object} response Mailchimp response.
	 * @return {string} Error message.
	 */
	formatErrorMessage( response ) {
		if ( 'object' !== typeof response || ! ( 'msg' in response ) ) {
			return this.MESSAGES.ERROR;
		}
		// Beautify common errors.
		if ( -1 !== response.msg.indexOf( 'already subscribed' ) ) {
			return this.MESSAGES.EXISTING_SUBSCRIBER;
		} else if ( -1 !== response.msg.indexOf( 'is invalid' ) ) {
			return this.MESSAGES.INVALID;
		}
		// Use default.
		return this.MESSAGES.ERROR;
	}

	/**
	 * On Error
	 */
	onError() {
		this.setSending( false );
		this.output.textContent = this.MESSAGES.ERROR;
		this.email.value = '';
	}

	/**
	 * Set Callback Function
	 *
	 * @memberof MailchimpForm
	 */
	setCallbackFunction() {
		window.mailchimpSuccess = this.onSuccess.bind( this );
	}
}
