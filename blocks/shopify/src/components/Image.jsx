/**
 * Image
 * 
 * @param {object} image
 */
export default function Product( { image } ) {
	return(
		<figure className="wp-block-cata-shopify-product__image">
			<img
				loading="lazy"
				src={image.url}
				alt={image.altText}
				sizes="(max-width: 576px) 92.5vw, 576px"
				srcSet={image.url + "?resize=384,384 384w, " + image.url + "?resize=768,768 768w, " + image.url + "?resize=1152,1152 1152w"}
				width="384"
				height="384"
			/>
		</figure>
	);
}
