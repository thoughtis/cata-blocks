/**
 * WordPress dependencies.
 */
 import { __ } from '@wordpress/i18n';
 import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
 import { RichTextToolbarButton } from '@wordpress/block-editor';
 import { lineSolid } from '@wordpress/icons';
 
 const CataOverhangButton = ( { isActive, onChange, value } ) => {
    return (
    <RichTextToolbarButton
        icon={ lineSolid }
        title={ __( 'Overhang' ) }
        onClick={ () => {
        onChange(
            toggleFormat( value, {
                type: 'cata-format/overhang',
            } )
        );
        } }
        isActive={ isActive }
    />
    );
 };
 
 registerFormatType( 'cata-format/overhang', {
    title: __( 'Overhang' ),
    tagName: 'span',
    className: 'cata-overhang',
    edit: CataOverhangButton,
 } );