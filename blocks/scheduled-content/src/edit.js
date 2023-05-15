/**
 * Edit
 */

import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, DateTimePicker } from '@wordpress/components';
import { useState } from '@wordpress/element';


/**
 * Edit
 * 
 * @export
 * @return {WPElement} Edit
*/
export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();
	const { startDate, endDate } = attributes;
	return (
		<>
			<InspectorControls>
				<Panel header="Schedule">
					<PanelBody title="Start" initialOpen={ true }>
						<PanelRow>
							<DateTimePicker
								currentDate={ startDate || null }
								onChange={ ( newStartDate ) => setAttributes( {startDate: newStartDate} ) }
								is12Hour={ true }
								__nextRemoveHelpButton
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title="End" initialOpen={ true }>
						<PanelRow>
							<DateTimePicker
								currentDate={ endDate || null }
								onChange={ ( newEndDate ) => setAttributes( {endDate: newEndDate} ) }
								is12Hour={ true }
								__nextRemoveHelpButton
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div { ...blockProps } >
				<InnerBlocks />
			</div>
		</>
	);
}
