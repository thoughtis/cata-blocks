/**
 * Filter Target by Width
 *
 * @return {bool} Based on the real image width, can we support this target image width?
 */
function filterTargetByWidth( width, targetWidth ) {
	return targetWidth <= width;
}

/**
 * Map Target to Dimensions
 * 
 * @param {float} aspectRatio
 * @param {number} targetWidth
 * @return {array}
 */
function mapTargetToDimensions( aspectRatio, targetWidth ) {
	return [
		targetWidth,
		Math.round(targetWidth / aspectRatio)
	];
}

/**
 * Get Dimensions
 *
 * @param {object|null} data
 * @param {float|null} cropAspectRatio Include this to crop, otherwise we'll use the original aspect ratio.
 * @param {array|null}
 * @return {array}
 */
export default function getDimensions( data, cropAspectRatio = null, widths = [] ) {
	if ( null === data ) {
		return [];
	}

	const { width, height } = data.media_details;
	const aspectRatio = null === cropAspectRatio ? (width / height) : cropAspectRatio;
	const targetWidths = (0 === widths.length ? [width] : widths).filter(
		filterTargetByWidth.bind( null, width )
	);
	return targetWidths.map(
		mapTargetToDimensions.bind( null, aspectRatio )
	);
}
