/**
 * Edit
 */

import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, DateTimePicker, CheckboxControl } from '@wordpress/components';

/**
 * Editor styles
 */
import './editor.scss';

/**
 * Edit
 * 
 * @export
 * @return {WPElement} Edit
*/
export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();
	const { hasStartDate, hasEndDate, startDate, endDate } = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody title="Start Date" initialOpen={ true }>
					<PanelRow>
						<CheckboxControl
							label="Has start date"
							help="Hides the content inside of the scheduled content until the current date is on or after the start date."
							checked={ hasStartDate }
							onChange={ ( newHasStartDate ) => setAttributes( { hasStartDate: newHasStartDate } ) }
						/>
					</PanelRow>
					{
						hasStartDate &&
						hasEndDate &&
						startDate &&
						endDate &&
						new Date(startDate) >= new Date( endDate ) &&
						(
							<p style="color: var( --wp--preset--color--vivid-red )">Start date must be before the end date.</p>
						)
					}
					{
						hasStartDate && 
						(
							<PanelRow>
								<DateTimePicker
									currentDate={ startDate || null }
									onChange={ ( newStartDate ) => setAttributes( { startDate: newStartDate } ) }
									is12Hour={ true }
									__nextRemoveHelpButton
									__nextRemoveResetButton
									/>
							</PanelRow>
						)
					}
				</PanelBody>
				<PanelBody title="End Date" initialOpen={ true }>
					<PanelRow>
						<CheckboxControl
							label="Has end date"
							help="Hides the content inside of the scheduled content block if the current date is on or after the end date."
							checked={ hasEndDate }
							onChange={ ( newHasEndDate ) => setAttributes( { hasEndDate: newHasEndDate } ) }
							/>
					</PanelRow>
					{
						hasEndDate &&
						hasStartDate &&
						endDate &&
						startDate &&
						new Date( endDate ) <= new Date(startDate) &&
						(
							<p style="color: var( --wp--preset--color--vivid-red )">End date must be after the start date.</p>
						)
					}
					{
						hasEndDate &&
						(
							<PanelRow>
								<DateTimePicker
									currentDate={ endDate || null }
									onChange={ ( newEndDate ) => setAttributes( { endDate: newEndDate } ) }
									is12Hour={ true }
									__nextRemoveHelpButton
									__nextRemoveResetButton
								/>
							</PanelRow>
						)
					}
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps } >
				<InnerBlocks />
			</div>
		</>
	);
}
