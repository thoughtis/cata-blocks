

/**
 * Manages accessible tab navigation for the cata-rest block.
 *
 * Binds click events to tab elements and toggles the visibility of
 * associated tab panels using `aria-hidden` attributes.
 */
class HoroscopeTabs {

	/**
	 * @param {HTMLElement} tablist - The `ul[role="tablist"]` element within a `.wp-block-cata-rest` block.
	 */
	constructor( tablist ) {
		this.tablist = tablist;
		this.block   = this.tablist.closest( '.wp-block-cata-rest' );
		this.tabs    = this.tablist.querySelectorAll('[role=tab]');
		this.panels  = this.block.querySelectorAll('[role="tabpanel"]');

		this.onClick           = this.onClick.bind( this );
		this.attachClickEvents = this.attachClickEvents.bind( this );

		this.attachClickEvents();
	}

	/**
	 * Attaches click event listeners to each tab element.
	 *
	 * @return {void}
	 */
	attachClickEvents() {
		this.tabs.forEach( tab => tab.addEventListener( 'click', this.onClick ) );
	}

	/**
	 * Handles tab click events by hiding all panels, then showing the panel
	 * referenced by the clicked tab's `aria-controls` attribute.
	 *
	 * @param {MouseEvent} event - The click event from a tab element.
	 * @return {void}
	 */
	onClick( event ) {
		this.panels.forEach( panel => panel.setAttribute( 'aria-hidden', 'true' ) );
		this.tabs.forEach( tab => tab.setAttribute('aria-selected', 'false') );

		const controls   = event.currentTarget.getAttribute('aria-controls');
		const controlled = this.block.querySelector( `#${controls}` );

		event.currentTarget.setAttribute('aria-selected', 'true')
		controlled.setAttribute('aria-hidden', 'false');
	}
}

const blocks = document.querySelectorAll( '.wp-block-cata-rest ul[role=tablist]' );

blocks.forEach( block => new HoroscopeTabs( block ) );
