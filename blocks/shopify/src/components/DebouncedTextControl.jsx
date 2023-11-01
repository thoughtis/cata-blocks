/**
 * Debounced Text Control
 */

/**
 * External Dependencies
 */
import { useEffect, useState } from '@wordpress/element';
import { useDebounce } from '@wordpress/compose';
import { TextControl } from '@wordpress/components';

/**
 * Debounced Text Control
 *
 * @link https://github.com/WordPress/gutenberg/pull/46153/files
 * @link https://github.com/WordPress/gutenberg/blob/trunk/packages/compose/src/hooks/use-debounce/index.js
 * @description Execute fewer events while typing. 
 * @export
 * @param {*} { value, onDebouncedChange, timeout, ...props }
 * @return
 */
export default function DebouncedTextControl( { value, onDebouncedChange, timeout, ...props } ) {
	const [input, setInput] = useState( value );
	const [debounced, setter] = useState( value );
	const setDebounced = useDebounce( setter, timeout );

	useEffect( () => {
		if ( debounced !== input ) {
			setDebounced( input );
		}
	}, [ debounced, input ] );

	useEffect( () => {
		onDebouncedChange( debounced );
	}, [debounced] );

	return (
		<TextControl value={input} onChange={setInput} {...props} />
	);
}
