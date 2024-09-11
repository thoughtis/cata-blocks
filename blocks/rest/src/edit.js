/**
 * Rest Block Edit
 */

/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow, SelectControl, TextControl, ToggleControl } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { _unescape } from 'lodash';

/**
 * Internal dependencies
 */
import Trending from './components/layout/trending/Trending';
import Network from './components/layout/network/Network';
import Compact from './components/layout/compact/Compact';
import DailyHoroscope from './components/layout/daily-horoscope/DailyHoroscope';

import './editor.scss';

/**
 * Edit
 *
 * @param {Object} props
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes, clientId } ) {

	const {urls, content, layout, sorting, display_zodiac_links} = attributes;
	const [url, setUrl] = useState('');
	const [posts, setPosts] = useState([]);

	useEffect(updatePosts, [urls]);
	useEffect(updateContent, [posts, layout, sorting, display_zodiac_links]);

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
	function mapUrlApiFetch( url ) {
		return apiFetch({
			path: _.unescape( url ),
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
		let LayoutComponent = Network;

		switch ( layout ) {
			case 'trending':
				LayoutComponent = Trending;
				break;
			case 'compact':
				LayoutComponent = Compact;
				break;
			case 'daily-horoscope':
				LayoutComponent = DailyHoroscope;
		}

		setAttributes( {
			...attributes,
			content: <LayoutComponent posts={posts} sorting={sorting} display_zodiac_links={display_zodiac_links} />
		});
	}

	return (
		<>
			<div { ...useBlockProps() } >
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
								{ 'label': 'Daily Horoscope', 'value': 'daily-horoscope' },
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
				{ ['daily-horoscope','network'].includes(layout) && (
					<PanelBody title="Zodiac Links">
						<PanelRow>
							<ToggleControl
								label="Display zodiac links"
								help={
									attributes.display_zodiac_links
										? 'Zodiac links shown.'
										: 'Zodiac links hidden.'
								}
								checked={attributes.display_zodiac_links}
								onChange={(option) => {setAttributes({ display_zodiac_links: option})}}
							/>
						</PanelRow>
					</PanelBody>
				) }
			</InspectorControls>
		</>
	);
}
