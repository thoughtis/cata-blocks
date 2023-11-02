/**
 * Shopify Block > Edit
 */

/**
 * External dependencies
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import { PanelBody, PanelRow, SelectControl, TextControl, ToggleControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal Dependencies
 */
import DebouncedTextControl from './components/DebouncedTextControl';
import Products from './components/Products';

/**
 * Editor styles
 */
import './editor.scss';

/**
 * Edit
 * 
 * @param {Object} props
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {		
	const {
		store,
		count,
		tag,
	} = attributes;

	const stores = useSelect(
		( select ) => select( 'cata/blocks' ).getShopifyData(),
		[]
	);
	const [products, setProducts] = useState([]);

	useEffect(updateProducts, [store, count, tag]);

	/**
	 * Update Products
	 */
	function updateProducts() {
		if ( '' === store ) {
			setProducts( [] );
			return;
		}

		apiFetch( {
			path: '/cata/v1/shopify-proxy',
			method: 'POST',
			data: { 
				...attributes
			},
		} )
		.then( ( response ) => {
			setProducts( response.flat() );
		} )
		.catch( handleError );
	}

	/**
	 * Handle Error
	 *
	 * @param {Error} error 
	 */
	function handleError( error ) {
		setProducts( [] );
		console.error( error );
	}

	return (
		<>
			<div { ...useBlockProps() }>
				<Products
					products={products}
					display_price={attributes.display_price}
				/>
			</div>
			<InspectorControls>
				<PanelBody title="Store" initialOpen={false}>
					<PanelRow>
						<SelectControl
							label="Store"
							value={ store }
							onChange={(newStore)=>{
								setAttributes( {
									...attributes,
									store: newStore
								})
							}}
						>
							<option value="">Select a store...</option>
							{(stores.map( ( storeOption ) => {
								return (
									<option value={storeOption}>{storeOption}</option>
								)
							}))}
						</SelectControl>
					</PanelRow>
				</PanelBody>
				<PanelBody title="Product Selection" initialOpen={false}>
					<DebouncedTextControl
						label="Product Tag Name"
						onDebouncedChange={(nextTag) => setAttributes({tag: nextTag})}
						timeout={300}
						type="text"
						value={tag}
					/>
					<TextControl
						label="Number of Products"
						onChange={(nextPerPage) => setAttributes({count: nextPerPage})}
						type="number"
						value={count}
					/>
				</PanelBody>
				<PanelBody title="Product Block Options" initialOpen={false}>
					<ToggleControl
						label="Display product price"
						help={
							attributes.display_price
								? 'Product price shown.'
								: 'No product price.'
						}
						checked={attributes.display_price}
						onChange={(option) => {setAttributes({ display_price: option})}}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
