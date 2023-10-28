/**
 * Products Blocks > Edit
 */

/**
 * External dependencies
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import { PanelBody, PanelRow, SelectControl, TextControl, ToggleControl } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';


/**
 * Internal Dependencies
 */
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

	const [stores, setStores] = useState([]);
	const [products, setProducts] = useState([]);

	useEffect(updateProducts, [store, count, tag]);

	getStores();

	/**
	 * Get Stores
	 */
	function getStores() {
		apiFetch( {
			path: '/wp/v2/settings',
			method: 'GET',
		} )
		.then( ( response ) => {
			let stores_array = response['cata_blocks_shopify_stores'];
			if ( stores_array ) {
				setStores( stores_array.map( store => store.subdomain ) );
			}
		} )
		.catch( handleError );
	}

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
					<TextControl
						label="Product Tag Name"
						onChange={(nextTag) => setAttributes({tag: nextTag})}
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
