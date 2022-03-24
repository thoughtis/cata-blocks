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
import { useBlockProps } from '@wordpress/block-editor';


import { InspectorControls } from '@wordpress/block-editor';
import { Fragment, useEffect, useRef, useState  } from "@wordpress/element";
import { Button, Panel, PanelBody, TextControl, RadioControl, Spinner } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { more } from '@wordpress/icons';

import { addFilter, applyFilters, addAction, doAction } from '@wordpress/hooks';

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
export default function Edit( props ) {
	/*

	$url = add_query_arg(
		array(
			'category' => absint( $category_id ),
			'per_page' => 6,
			'orderby'  => 'menu_order',
			'order'    => 'asc',
		),
		'https://shopcatalog.com/wp-json/wc/v3/products/'
	);

	https://shopcatalog.com/wp-json/wc/v3/products/?category=1752&per_page=6&orderby=menu_order&order=asc
	*/

	const blockProps = { ...useBlockProps() };

	const { attributes, setAttributes } = props;

	// console.log('blockProps');
	// console.log(blockProps);
	// console.log('props');
	// console.log(props);

	const shopUrl = 
	attributes.shopCatalogApiUrlBase + 
	"?category=" + 
	attributes.category + 
	"&per_page=" + 
	attributes.per_page +
	"&orderby=" +
	attributes.orderby +
	"&order=" +
	attributes.order;

	const isMountedRef = useRef( true );
	const fetchRequestRef = useRef();
	const [ response, setResponse ] = useState( null );
	// const [ showLoader, setShowLoader ] = useState( false );
	// const prevProps = usePrevious( props );
	// const [ isLoading, setIsLoading ] = useState( false );

	const controller = new AbortController();

	const fetchData = () => {
		if ( ! isMountedRef.current ) {
			return;
		}


		// setIsLoading( true );

		apiFetch.use( ( options, next ) => {

			console.log('middleware callback func - options:');
			console.log(options);

			return next(options);
		} );

		const fetchRequest = ( fetchRequestRef.current = apiFetch( {
			url: '/wp-json/cata/v1/proxy/?url=' + encodeURIComponent( shopUrl ),
			signal: controller.signal,
			// credentials: 'omit',
		} ) )
			.then( ( fetchResponse) => {
				console.log('isMountedRef.current');
				console.log(isMountedRef.current);

				console.log('fetchRequest');
				console.log(fetchRequest);

				console.log('fetchRequestRef.current.value');
				console.log(fetchRequestRef.current.value);

				console.log('fetchResponse');
				console.log(fetchResponse);

				if (
					isMountedRef.current &&
					// 'fulfilled' === fetchRequestRef.current.state &&
					fetchResponse
				) {
					setResponse( fetchResponse );
				}
			} )
			.catch( ( error ) => {
				if (
					isMountedRef.current 
					// && 'fulfilled' === fetchRequestRef.current.state
				) {
					setResponse( {
						error: true,
						errorMsg: error.message,
					} );
				}
			} )
			.finally( () => {
				if (
					isMountedRef.current 
					// && 'fulfilled' === fetchRequestRef.current.state
				) {
					// setIsLoading( false );
				}
			} )

		return fetchRequest;
	}

	return (
		<div { ...blockProps } >
			<p>
				{ __(  'WP REST API URL:', 'cata' ) }
			</p>
			<p>
				{ shopUrl }
			</p>
			{ !response &&
				(<p>
					{ __( 'Shop Catalog Merch will go here!', 'cata' ) }
				</p>)
			}
			{ response &&

			<div className='wp-block-cata-products alignwide'>
				<div className='wp-block-cata-products__layout'>
				{(response.map( prod => {
					return (
						<article className="wp-block-cata-product">
							<div className='wp-block-cata-product__layout tappable-card'>
								<figure className='wp-block-cata-product__image'>
									{/* a ::before would go here with the svg frame on CC */}
									<img
										loading="lazy"
										src={prod.images[0].src}
										alt={prod.images[0].alt}
										sizes="(max-width: 576px) 92.5vw, 576px"
										srcset={prod.images[0].src + "?resize=384,384 384w, " + prod.images[0].src + "?resize=768,768 768w, " + prod.images[0].src + "?resize=1152,1152 1152w"}
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
								<div className='wp-block-cata-product__byline'>
									{/* "from Thought Catalog" or the author byline */}
									{prod.cap_guest_authors.length > 0 &&
										"by " +
										prod.cap_guest_authors.reduce( 
											(prev, curr, idx, array) => {
												const spacer = array.length - 1 === idx ? "" : ", ";
												return prev + curr.display_name + spacer;
											},
											""
										)
									}
									{!prod.cap_guest_authors.length > 0 &&
										prod.brands.length > 0 &&
										"from " +
										prod.brands.reduce(
											(prev, curr, idx, array) => {
												const spacer = array.length - 1 === idx ? "" : ", ";
												return prev + curr.name + spacer
											},
											""
										)
									}
								</div>
								<div className='wp-block-cata-product__price'>
									{/* price */}
										{/* product.price? */}
										{
											(prod.on_sale) &&
											(<del>
												<span>
													<span>$</span>{prod.regular_price}
												</span>
											</del> &&
											<ins>
												<span>
													<span>$</span>{prod.sale_price}
												</span>
											</ins>)
										}
										{
											(prod.price !== prod.regular_price) &&
											(<span>
												<span>$</span>{prod.price}
											</span>
											+
											" - "
											+
											<span>
												<span>$</span>{prod.regular_price}
											</span>
											)
										}
										{
											(prod.price === prod.regular_price && !prod.on_sale) &&
											(<span>
												<span>$</span>{prod.regular_price}
											</span>)
										}
								</div>
							</div>
						</article>
					);
				}))}
				</div>
			</div>
			}
			<Button
				onClick={() => {fetchData()}}
			>
				FETCH
			</Button>
			<Button
				onClick={() => {controller.abort()}}
			>
				ABORT
			</Button>
			<InspectorControls>
				<PanelBody title="Product API URL" icon={more} initialOpen={false}>
					<TextControl
						label="SC API Product Category"
						onChange={(category) => setAttributes({category})}
						type="text"
						value={attributes.category}
						help="Shop Catalog API Product Category. Creepy Products: 1752"
					/>
					<TextControl
						label="SC API Product Quantity"
						onChange={(per_page) => setAttributes({per_page})}
						type="text"
						value={attributes.per_page}
						help="Quantity of Shop Catalog products to be returned from the API."
					/>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
