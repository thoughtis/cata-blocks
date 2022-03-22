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

	const onChangeUrl = (value) => {
		setAttributes({
			attribute: value
		});
	}

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

	// console.log('shopUrl');
	// console.log(shopUrl);

	const isMountedRef = useRef( true );
	const fetchRequestRef = useRef();
	const [ response, setResponse ] = useState( null );
	// const [ showLoader, setShowLoader ] = useState( false );
	// const prevProps = usePrevious( props );
	// const [ isLoading, setIsLoading ] = useState( false );

	const controller = new AbortController();

	// const wpHeadersCallback = (headers, wp) => {
	// 	console.log('wpHeadersCallback() - headers');
	// 	console.log(headers);
	// 	console.log('wpHeadersCallback() - wp');
	// 	console.log(wp);

		// return headers;
	// }

	// addFilter('wp_headers', 'cata/modify_headers', wpHeadersCallback, 10 );
	// addAction('send_headers', 'cata/modify_headers', wpHeadersCallback, 199 );

	const fetchData = () => {
		if ( ! isMountedRef.current ) {
			return;
		}

		// applyFilters('wp_headers');

		// setIsLoading( true );

		// const nonce = null;
		// apiFetch.use( apiFetch.createNonceMiddleware( ( options, next ) => {

		// 	console.log('nonce middleware callback func - options:');
		// 	console.log(options);

		// 	return next(options);
		// } ) );
		// apiFetch.nonceMiddleware = null;
		// apiFetch.nonceEndpoint = null;

		// const nonce = null;
		// apiFetch.use( apiFetch.createNonceMiddleware( nonce ) );

		apiFetch.use( ( options, next ) => {

			console.log('middleware callback func - options:');
			console.log(options);

			return next(options);
		} );

		console.log('apiFetch');
		console.log(apiFetch);

		// console.log('apiFetch.fetchAllMiddleware()');
		// console.log(apiFetch.fetchAllMiddleware());

		const fetchRequest = ( fetchRequestRef.current = apiFetch( {
			url: shopUrl,
			signal: controller.signal,
			// credentials: 'omit',
		} ) )
			.then( ( fetchResponse) => {

				console.log('fetchResponse');
				console.log(fetchResponse);

				if (
					isMountedRef.current &&
					fetchRequest === fetchRequestRef.current &&
					fetchResponse
				) {
					setResponse( fetchResponse.rendered );
				}
			} )
			.catch( ( error ) => {
				if (
					isMountedRef.current &&
					fetchRequest === fetchRequestRef.current
				) {
					setResponse( {
						error: true,
						errorMsg: error.message,
					} );
				}
			} )
			.finally( () => {
				if (
					isMountedRef.current &&
					fetchRequest === fetchRequestRef.current
				) {
					// setIsLoading( false );
				}
			} )

		return fetchRequest;
	}

	// console.log('fetchData');
	// console.log(fetchData);

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
				(JSON.stringify(response))
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
						onChange={(category) => {
							console.log('category');
							console.log(category);
							setAttributes({category})
						}}
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
					{/* <RadioControl
						label="Product Ordering"
						selected={ attributes.order }
						options={ [
							{ label: 'Ascending', value: 'asc' },
							{ label: 'Descending', value: 'desc' },
						] }
						onChange={(order) => setAttributes({order})}
						help="Choose to order products in Ascending or Descending order"
					/> */}
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
