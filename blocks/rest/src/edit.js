/**
 * Rest Block Edit
 */

/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { Button, PanelBody, PanelRow, SelectControl, TextControl, Flex, FlexBlock } from '@wordpress/components';
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
import CompactGrid from './components/layout/compact-grid/CompactGrid';

import './editor.scss';
import Stack from './components/layout/stack/Stack';
import StackGrid from './components/layout/stack-grid/StackGrid';
import { CheckboxControl } from '@wordpress/components';

/**
 * Edit
 *
 * @param {Object} props
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes, clientId } ) {
	const {
		urls, 
		content, 
		layout, 
		sorting, 
		display_zodiac_links,
		aspect_ratio,
		display
	} = attributes;

	const [url, setUrl] = useState('');
	const [posts, setPosts] = useState([]);

	useEffect(updatePosts, [urls]);
	useEffect(updateContent, [posts, layout, sorting, display_zodiac_links, aspect_ratio, display]);

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
				break;
			case 'compact-grid':
				LayoutComponent = CompactGrid;
				break;
			case 'stack':
				LayoutComponent = Stack;
				break;
			case 'stack-grid':
				LayoutComponent = StackGrid;
				break;
		}

		setAttributes( {
			...attributes,
			content: <LayoutComponent posts={posts} sorting={sorting} display_zodiac_links={display_zodiac_links} display={display} aspect_ratio={aspect_ratio} />
		});
	}

	console.log( display );

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
								{ 'label': 'Compact Grid', 'value': 'compact-grid' },
								{ 'label': 'Stack', 'value': 'stack' },
								{ 'label': 'Stack Grid', 'value': 'stack-grid' },
								{ 'label': 'Daily Horoscope', 'value': 'daily-horoscope' }
							]}
						/>
					</PanelRow>
					{ ! ['trending'].includes( layout ) && (
						<>
						<PanelRow>
							<Flex direction="column" gap="4px">
							{
								Array.from(Object.entries(display)).map(
									([key, value]) => (
										<FlexBlock key={`cata-rest-display-${key}`}>
										<CheckboxControl
											label={key}
											checked={value}
											onChange={(checked => {
												setAttributes({
													display: {
														...display,
														[key]: checked
													}
												})
											})}
										/>
										</FlexBlock>
									)
								)
							}
							</Flex>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label="Image Aspect Ratio"
								value={ aspect_ratio }
								onChange={(newAspectRatio)=>{
									setAttributes({
										aspect_ratio: newAspectRatio
									})
								}}
								options={[
									{ label: 'Original', value: '' },
									{ label: 'Square - 1:1', value: '1/1' },
									{ label: 'Portrait - 3:4', value: '3/4' },
									{ label: 'Landscape - 3:2', value: '3/2' },
								]}
							/>
						</PanelRow>
						</>
					)}
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
