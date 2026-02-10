/**
 * UID
 * Unique ID - But Not Universal Unique ID
 *
 * @type {Object}
 */
const uid = {
	value: 0
};

Object.defineProperty( uid, 'next', {
	get: function() {
		return this.value++;
	}
});

/**
 * Create Page Index
 *
 * @return {integer} index
 */
export default function createPageIndex() {
	return uid.next;
}
