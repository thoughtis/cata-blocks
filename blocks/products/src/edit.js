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
import { useRef, useState, useEffect  } from "@wordpress/element";
import { Button, PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { store, generic } from '@wordpress/icons';

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
	const blockProps = { ...useBlockProps() };

	const { attributes, setAttributes } = props;

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

	const fetchRequestRef = useRef();
	const [ response, setResponse ] = useState( null );
	const controller = new AbortController();

	useEffect(() => {
		if (!response && attributes.query_url) {
			fetchData(attributes.query_url);
		}
	}, [])

	/**
	 * 
	 * @param {string} queryUrl Defaults to a URL constructed from block input default values.
	 * @returns {object} Response from SC api.
	 */
	const fetchData = (queryUrl = shopUrl) => {
		const fetchRequest = ( fetchRequestRef.current = apiFetch( {
			path: '/cata/v1/proxy/?url=' + encodeURIComponent( queryUrl ),
			signal: controller.signal,
		} ) )
			.then( ( fetchResponse) => {

				if ( fetchResponse ) {
					setResponse( fetchResponse );
					setAttributes({ query_url: shopUrl });
				}
			} )
			.catch( ( error ) => {
				setResponse( {
					error: true,
					errorMsg: error.message,
				} );
			} )

		return fetchRequest;
	}

	return (
		<div { ...blockProps } >
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
								{attributes.display_byline && 
									(<div className='wp-block-cata-product__byline'>
										{/* "from Thought Catalog" or the author byline */}
										{prod.cap_guest_authors.length > 0 &&
											__("by ", 'cata') +
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
											__("from ", "cata") +
											prod.brands.reduce(
												(prev, curr, idx, array) => {
													const spacer = array.length - 1 === idx ? "" : ", ";
													return prev + curr.name + spacer
												},
												""
											)
										}
									</div>)
								}
								<div className='wp-block-cata-product__price'>
										{
											prod.on_sale &&
											prod.regular_price &&
											prod.sale_price &&
											(<del>
												<span>
													<span>$</span>{prod.regular_price}
												</span>
											</del>) &&
											(<ins>
												<span>
													<span>$</span>{prod.sale_price}
												</span>
											</ins>)
										}
										{
											prod.price &&
											prod.regular_price &&
											!prod.on_sale &&
											(prod.price !== prod.regular_price) &&
											(<span>
												<span>$</span>{prod.price}
											</span>)
											&&
											(" - ")
											&&
											(<span>
												<span>$</span>{prod.regular_price}
											</span>
											)
										}
										{
											prod.price &&
											prod.regular_price &&
											!prod.on_sale &&
											(prod.price === prod.regular_price ) &&
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
			{response &&
			response.error &&
			<div>
				{response.errorMsg}
			</div>
			}
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
						onClick={() => {fetchData()}}
					>
						FETCH
					</Button>
					<Button
						variant="secondary"
						onClick={() => {controller.abort()}}
					>
						CANCEL
					</Button>
				</PanelBody>
				<PanelBody title="Product Block Options" icon={generic} initialOpen={true}>
					<ToggleControl
						label="Display product byline"
						help={
							attributes.display_byline
								? 'Product byline shown.'
								: 'No product byline.'
						}
						checked={attributes.display_byline}
						onChange={(option) => {setAttributes({ display_byline: option})}}
						// onChange={(option) => {console.log(option)}}
					/>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
