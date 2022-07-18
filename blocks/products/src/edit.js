/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useRef, useState, useEffect  } from "@wordpress/element";
import { Button, PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { store } from '@wordpress/icons';

import Product from "./components/product/Product.jsx";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {

	const {
		category,
		display_byline,
		per_page,
		query_url
	} = attributes;

	const [products,setProducts] = useState([]);

	useEffect( updateQueryUrl, [category,per_page]);
	useEffect( updateProducts, [query_url]);

	function updateQueryUrl() {
		setAttributes({
			query_url: `https://shopcatalog.com/wp-json/wc/v3/products/?category=${category}&per_page=${per_page}&orderby=menu_order&order=asc`
		});
	}

	function updateProducts() {
		apiFetch( {
			path: '/cata/v1/proxy/?url=' + encodeURIComponent( query_url ),
			signal: (new AbortController()).signal
		}).then( ( response ) => {
			setProducts( response )
		}).catch( handleError );
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
			{ 0 === products.length &&
				(<p className="wp-block-cata-products__placeholder">
					{ __( 'Shop Catalog Merch will go here!', 'cata' ) }
				</p>)
			}
			{ 0 < products.length &&
				<div className="wp-block-cata-products">
					<div className="wp-block-cata-products__layout">
						{
							products.map((product) => {
								return (
									<Product key={`cata-products-prod-${product.id}`} prod={product} display_byline={display_byline} />
								)
							})
						}
					</div>
				</div>
			}
			</div>
			<InspectorControls>
				<PanelBody title="Product API URL" icon={store} initialOpen={false}>
					<TextControl
						label="SC API Product Category"
						onChange={(newCategory) => setAttributes({category: newCategory})}
						type="text"
						value={category}
						help="Shop Catalog API Product Category.
						Category numbers can be found in the URL of the Shop Catalog category edit page. 
						Like this -> (...&tag_ID=XXXX...)."
					/>
					<TextControl
						label="SC API Product Quantity"
						onChange={(newPerPage) => setAttributes({per_page: newPerPage})}
						type="number"
						value={per_page}
						help="Quantity of Shop Catalog products to be returned from the API."
					/>
					<Button 
						className='wp-block-cata-products-fetch-btn'
						variant="secondary"
						onClick={updateProducts}
					>
						FETCH
					</Button>
				</PanelBody>
				<PanelBody title="Product Block Options" initialOpen={false}>
					<ToggleControl
						label="Display product byline"
						help={
							display_byline
								? 'Product byline shown.'
								: 'No product byline.'
						}
						checked={display_byline}
						onChange={(newDisplayByline) => {setAttributes({ display_byline: newDisplayByline})}}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
