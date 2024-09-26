/**
 * Image
 * 
 * @param {object} image
 * @param {string} aspect_ratio
 */
export default function Image( { image, aspect_ratio } ) {
	const targetWidths = [ 2560, 1920, 1280, 960, 640, 480, 320 ];
	const dimensions = getDimensions( image.width, aspect_ratio, targetWidths ).filter(
		filterTargetByHeight.bind( null, image.height )
	);
	const srcset = dimensions.map( getSrcSetString.bind( null, image.url ) );

	return(
		<figure className="wp-block-cata-shopify-product__image">
			<img
				loading="lazy"
				src={image.url}
				alt={image.altText}
				sizes="(max-width: 576px) 92.5vw, 576px"
				srcSet={srcset}
				width={image.width}
				height={image.height}
				style={{aspectRatio: aspect_ratio}}
			/>
		</figure>
	);
}

/**
 * Get Dimensions
 *
 * @param {float|null} aspectRatio
 * @param {array|null}
 * @return {array}
 */
function getDimensions( width, aspectRatio, widths = [] ) {
	const targetWidths = (0 === widths.length ? [width] : widths).filter(
		filterTargetByWidth.bind( null, width )
	);
	
	return targetWidths.map(
		mapTargetToDimensions.bind( null, aspectRatio )
	);
}

/**
 * Filter Target by Width
 *
 * @return {bool} Based on the real image width, can we support this target image width?
 */
function filterTargetByWidth( width, targetWidth ) {
	return targetWidth <= width;
}

/**
 * Filter Target by Height
 *
 * @return {bool} Based on the real image height, can we support this target image height?
 */
function filterTargetByHeight( height, dimension ) {
	return dimension[1] <= height;
}

/**
 * Map Target to Dimensions
 * 
 * @param {float} aspectRatio
 * @param {number} targetWidth
 * @return {array}
 */
function mapTargetToDimensions( aspectRatio, targetWidth ) {
	let targetHeight = targetWidth;
	aspectRatio = aspectRatio.split( '/' );

	if ( 2 === aspectRatio.length && 0 !== aspectRatio[0] && 0 !== aspectRatio[1] ) {
		targetHeight = Math.round(targetWidth / ( aspectRatio[0] / aspectRatio[1] ));
	}

	return [
		targetWidth,
		targetHeight
	];
}

/**
 * Get SrcSet String
 * 
 * @param {string} source_url 
 * @param {array} dimension 
 * @return {string}
 */
function getSrcSetString( source_url, dimension ) {
	const src = new URL( source_url );
	src.searchParams.set( 'width', dimension[0] );
	src.searchParams.set( 'height', dimension[1] );
	src.searchParams.set( 'crop', 'center' );
	return `${src.href.toString()} ${dimension[0]}w`
}
