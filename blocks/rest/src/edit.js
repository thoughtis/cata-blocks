/**
 * Rest Block Edit
 */

/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow, SelectControl, TextControl } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import Trending from './components/layout/trending/Trending';
import Network from './components/layout/network/Network';
import Compact from './components/layout/compact/Compact';

import './editor.scss';

/**
 * Edit
 *
 * @param {Object} props
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes, clientId } ) {

	const {urls, content, layout, sorting} = attributes;
	const [url, setUrl] = useState('');
	const [posts, setPosts] = useState([]);

	useEffect(updatePosts, [urls]);
	useEffect(updateContent, [posts, layout, sorting])

	/**
	 * Update Posts
	 */
	function updatePosts() {
		Promise.all( urls.map( mapUrlApiFetch ) )
		.then( ( responses ) => {
			setPosts( responses.flat() )
		})
		.catch( handleError );
	}

	/**
	 * Map URL to API Fetch
	 * 
	 * @param {string} url
	 */
	function mapUrlApiFetch(url) {
		return apiFetch({
			path: url,
			cata: {
				useCache: true,
				useProxy: true
			},
			signal: (new AbortController()).signal
		});
	}

	/**
	 * Handle Error
	 *
	 * @param {Error} error 
	 */
	function handleError( error ) {
		console.error( error );
	}

	/**
	 * Update Content
	 */
	function updateContent() {
		let LayoutComponent = Trending;

		switch ( layout ) {
			case 'network':
				LayoutComponent = Network;
				break;
			case 'compact':
				LayoutComponent = Compact;
		}

		setAttributes( {
			...attributes,
			content: <LayoutComponent posts={posts} sorting={sorting} />
		});
	}

	return (
		<>
			<div { ...useBlockProps() }>
				{ content }
			</div>
			<InspectorControls>
				<PanelBody title="WP REST API URLs" initialOpen={false}>
					<PanelRow>
						<div>
						{
							urls.map((url, index) => {
								return(
									<div key={`${clientId}-cata-rest-url-${index}`}>
										<Button
											text="x"
											label="Remove"
											variant="tertiary"
											isDestructive={true}
											onClick={() => {
												setAttributes({
													urls: urls.filter( (u, i) => {
														return i !== index;
													})
												})
											}}
										/>
										{url}
									</div>
								)
							})
						}
						</div>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={__('WP REST API URL', 'cata')}
							type="url"
							value={url}
							onChange={setUrl}
						/>						
					</PanelRow>
					<PanelRow>
						<Button
							variant="primary"
							text={__('Add URL', 'cata')}
							onClick={()=>{
								setAttributes({
									urls: [ ...urls, url ]
								});
								setUrl('');
							}}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title="REST Layout" initialOpen={false}>
					<PanelRow>
						<SelectControl
							label="Layout"
							value={ layout }
							onChange={(newLayout)=>{
								setAttributes( {
									...attributes,
									layout: newLayout
								})
							}}
							options={[
								{ 'label': 'Default', 'value': '' },
								{ 'label': 'Trending', 'value': 'trending' },
								{ 'label': 'Network', 'value': 'network' },
								{ 'label': 'Compact', 'value': 'compact' },
							]}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title="REST Sorting" initialOpen={false}>
					<PanelRow>
						<SelectControl
							label="Sorting"
							value={ sorting }
							onChange={(newSorting)=>{
								setAttributes( {
									...attributes,
									sorting: newSorting
								})
							}}
							options={[
								{ 'label': 'Default', 'value': '' },
								{ 'label': 'Newest First by Published Date', 'value': 'published:newest' },
							]}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
