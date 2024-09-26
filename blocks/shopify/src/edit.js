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
		tags,
		display_price,
		aspect_ratio,
	} = attributes;

	const stores = useSelect(
		( select ) => select( 'cata/blocks' ).getShopifyData(),
		[]
	);
	const [products, setProducts] = useState([]);

	useEffect(updateProducts, [store, count, tags]);

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
					display_price={display_price}
					aspect_ratio={aspect_ratio}
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
									store: newStore
								})
							}}
							options={[
								{
									value: '',
									label: 'Select a store...'
								},
								...stores.map(s => ({
									value: s,
									label: s
								}))
							]}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title="Product Selection" initialOpen={false}>
					<DebouncedTextControl
						label="Product Tag Names"
						onDebouncedChange={(nextTags) => setAttributes({tags: nextTags})}
						timeout={300}
						type="text"
						value={tags}
						help="Enter multiple tag names in a comma separated list."
					/>
					<TextControl
						label="Number of Products"
						onChange={(nextPerPage) => setAttributes({count: nextPerPage})}
						type="number"
						value={count}
					/>
				</PanelBody>
				<PanelBody title="Product Block Options" initialOpen={true}>
					<SelectControl
						label="Image Aspect Ratio"
						value={ aspect_ratio }
						onChange={(newAspectRatio)=>{
							setAttributes({
								aspect_ratio: newAspectRatio
							})
						}}
						options={[
							{ label: 'Square - 1:1', value: '1/1' },
							{ label: 'Portrait - 3:4', value: '3/4' },
							{ label: 'Landscape - 3:2', value: '3/2' },
						]}
					/>
					<ToggleControl
						label="Display product price"
						help={
							display_price
								? 'Product price shown.'
								: 'No product price.'
						}
						checked={display_price}
						onChange={(option)=>{
							setAttributes({
								display_price: option
							})
						}}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
