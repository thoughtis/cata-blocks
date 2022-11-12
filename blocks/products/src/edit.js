/**
 * Products Blocks > Edit
 */

/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { useState, useEffect  } from '@wordpress/element';
import { Button, PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { store, generic } from '@wordpress/icons';

/**
 * Internal Dependencies
 */
import Byline from './components/byline';
import Price from './components/price';

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

	const [response, setResponse] = useState( null );

	useEffect( () => {
		setAttributes( {
			query_url: shopCatalogApiUrlBase + '?' + (new URLSearchParams({
				category,
				per_page,
				orderby,
				order
			})).toString()
		})
	}, [category, per_page] );

	useEffect(fetchData, [query_url])

	/**
	 * Fetch Data
	 */
	function fetchData() {
		apiFetch( {
			path: query_url,
			proxy: true,
			cache: true
		} )
		.then( setResponse )
		.catch( ( error ) => {
			setResponse( {
				error: true,
				errorMsg: error.message,
			} );
		} )
	}

	return (
		<>
		<div { ...useBlockProps() } >
			{!response &&
				(<p className="wp-block-cata-products__placeholder">
					{ __( 'Shop Catalog Merch will go here!', 'cata' ) }
				</p>)
			}
			{response &&
				response.length === 0 &&
				(<p className="wp-block-cata-products__placeholder">
					{ __( 'Oops, looks like there\'s nothing here!\n\nThis product category may be empty, or the category number may be incorrect.\n\nWithout any products, this block will not display on the front end.', 'cata' ) }
				</p>)
			}
			{response &&
			response.length > 0 &&
			!response.error &&
			<div className='wp-block-cata-products'>
				<div className='wp-block-cata-products__layout'>
				{(response.map( prod => {
					return (
						<article className="wp-block-cata-product" key={`cata-product-${prod.id}`}>
							<div className='wp-block-cata-product__layout tappable-card'>
								<figure className='wp-block-cata-product__image'>
									<img
										loading="lazy"
										src={prod.images[0].src}
										alt={prod.images[0].alt}
										sizes="(max-width: 576px) 92.5vw, 576px"
										srcSet={prod.images[0].src + "?resize=384,384 384w, " + prod.images[0].src + "?resize=768,768 768w, " + prod.images[0].src + "?resize=1152,1152 1152w"}
										width="384"
										height="384"
									/>
								</figure>
								<h3 className='wp-block-cata-product__title'>
									<a 
										className='wp-block-cata-product__link tappable-card-anchor'
										href={prod.permalink}
									>
										{prod.name}
									</a>
								</h3>
								{attributes.display_byline && 
									<Byline
										authors={prod.cap_guest_authors}
										brands={prod.brands}
									/>
								}
								{attributes.display_price && 
									<Price
										onSale={prod.on_sale}
										price={prod.price}
										regularPrice={prod.regular_price}
										salePrice={prod.sale_price}
									/>
								}
							</div>
						</article>
					);
				}))}
				</div>
			</div>
			}
			{response &&
			response.error &&
			<div>
				{response.errorMsg}
			</div>
			}
		</div>
		<InspectorControls>
				<PanelBody title="Product API URL" icon={store} initialOpen={false}>
					<TextControl
						label="SC API Product Category"
						onChange={(category) => setAttributes({category})}
						type="text"
						value={attributes.category}
						help="Shop Catalog API Product Category.
						Category numbers can be found in the URL of the Shop Catalog category edit page. 
						Like this -> (...&tag_ID=XXXX...)."
					/>
					<TextControl
						label="SC API Product Quantity"
						onChange={(per_page) => setAttributes({per_page})}
						type="number"
						value={attributes.per_page}
						help="Quantity of Shop Catalog products to be returned from the API."
					/>
					<Button 
						className='wp-block-cata-products-fetch-btn'
						variant="secondary"
						onClick={fetchData}
					>
						FETCH
					</Button>
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
