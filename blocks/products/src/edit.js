/**
 * Products Blocks > Edit
 */

/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { useState, useEffect  } from '@wordpress/element';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { store, generic } from '@wordpress/icons';
import { useDispatch } from '@wordpress/data'

/**
 * Internal Dependencies
 */
import Products from './components/products';

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
		shopCatalogApiUrlBase,
		category,
		per_page,
		orderby,
		order,
		query_url
	} = attributes;

	const [products, setProducts] = useState([]);
	const noticesDispatch = useDispatch('core/notices');

	useEffect(updateQueryURL, [category, per_page]);
	useEffect(fetchData, [query_url]);

	/**
	 * Update Query URL
	 */
	function updateQueryURL() {
		setAttributes( {
			query_url: shopCatalogApiUrlBase + '?' + (new URLSearchParams({
				category,
				per_page,
				orderby,
				order
			})).toString()
		});
	}

	/**
	 * Fetch Data
	 */
	function fetchData() {
		if ( '' === query_url ) {
			return;
		}
		apiFetch( {
			path: query_url,
			proxy: true,
			cache: true
		} )
		.then( setProducts )
		.catch( handleError )
	}

	/**
	 * Handle Error
	 * 
	 * @param {Error}
	 */
	function handleError( error ) {
		noticesDispatch.createErrorNotice(
			error.message,
			{
				isDismissible: true
			}
		)
	}

	return (
		<>
		<div { ...useBlockProps() } >
			<Products
				products={products}
				display_byline={attributes.display_byline}
				display_price={attributes.display_price}
			/>
		</div>
		<InspectorControls>
			<PanelBody title="Product API URL" icon={store} initialOpen={false}>
				<TextControl
					label="SC API Product Category"
					onChange={(category) => setAttributes({category})}
					type="text"
					value={category}
					help="Shop Catalog API Product Category.
					Category numbers can be found in the URL of the Shop Catalog category edit page. 
					Like this -> (...&tag_ID=XXXX...)."
				/>
				<TextControl
					label="SC API Product Quantity"
					onChange={(per_page) => setAttributes({per_page})}
					type="number"
					value={per_page}
					help="Quantity of Shop Catalog products to be returned from the API."
				/>
			</PanelBody>
			<PanelBody title="Product Block Options" icon={generic} initialOpen={false}>
				<ToggleControl
					label="Display product byline"
					help={
						attributes.display_byline
							? 'Product byline shown.'
							: 'No product byline.'
					}
					checked={attributes.display_byline}
					onChange={(option) => {setAttributes({ display_byline: option})}}
				/>
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
