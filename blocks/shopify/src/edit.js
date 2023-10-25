/**
 * Products Blocks > Edit
 */

/**
 * External dependencies
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
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
	const {store} = attributes;
	const [products, setProducts] = useState([]);

	useEffect(updateProducts, [store]);

	/**
	 * Update Products
	 */
	function updateProducts() {
		apiFetch( {
			path: '/cata/v1/shopify-proxy',
			method: 'POST',
			data: { 
				store: store
			},
		} )
		.then( ( response ) => {
			console.log( response );
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
		console.error( error );
	}

	return (
		<>
			<div { ...useBlockProps() }>
				<Products products={products} />
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
							options={[
								{ 'label': 'Select a store...', 'value': '' },
								{ 'label': 'Creepy Catalog', 'value': 'creepy-catalog' },
								{ 'label': 'Shop Catalog', 'value': 'shop-catalog' },
							]}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
