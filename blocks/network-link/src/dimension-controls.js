/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	__experimentalUnitControl as UnitControl,
	__experimentalUseCustomUnits as useCustomUnits,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';
import { InspectorControls, useSettings } from '@wordpress/block-editor';

const DimensionControls = ( {
	clientId,
	attributes: { width },
	setAttributes,
} ) => {
	const defaultUnits = [ 'px', '%', 'vw', 'em', 'rem' ];
	const units = useCustomUnits( {
		availableUnits: useSettings( 'spacing.units' )[0] ?? defaultUnits,
	} );
	const onDimensionChange = ( dimension, nextValue ) => {
		const parsedValue = parseFloat( nextValue );
		/**
		 * If we have no value set and we change the unit,
		 * we don't want to set the attribute, as it would
		 * end up having the unit as value without any number.
		 */
		if ( isNaN( parsedValue ) && nextValue ) return;
		setAttributes( {
			[ dimension ]: parsedValue < 0 ? '' : nextValue,
		} );
	};

	return (
		<InspectorControls group="dimensions">
			<ToolsPanelItem
				className="single-column"
				hasValue={ () => !! width }
				label={ __( 'Width' ) }
				onDeselect={ () => setAttributes( { width: '' } ) }
				resetAllFilter={ () => ( {
					width: '',
				} ) }
				isShownByDefault={ true }
				panelId={ clientId }
			>
				<UnitControl
					label={ __( 'Width' ) }
					labelPosition="top"
					value={ width || '' }
					min={ 0 }
					onChange={ ( nextWidth ) =>
						onDimensionChange( 'width', nextWidth )
					}
					units={ units }
				/>
			</ToolsPanelItem>
		</InspectorControls>
	);
};

export default DimensionControls;
