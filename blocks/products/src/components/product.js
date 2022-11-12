/**
 * Components > Product
 */

/**
 * Internal Dependencies
 */
import Byline from './byline';
import Price from './price';

/**
 * Product
 */
export default function Product( { product, display } ) {

	const {
		byline,
		price
	} = display;

	return (
		<article className="wp-block-cata-product">
			<div className="wp-block-cata-product__layout">
				<figure className="wp-block-cata-product__image">
					<img
						loading="lazy"
						src={product.images[0].src}
						alt={product.images[0].alt}
						sizes="(max-width: 576px) 92.5vw, 576px"
						srcSet={product.images[0].src + "?resize=384,384 384w, " + product.images[0].src + "?resize=768,768 768w, " + product.images[0].src + "?resize=1152,1152 1152w"}
						width="384"
						height="384"
					/>
				</figure>
				<h3 className="wp-block-cata-product__title">
					<a 
						className="wp-block-cata-product__link"
						href={product.permalink}
					>
						{product.name}
					</a>
				</h3>
				{byline && 
					<Byline
						authors={product.cap_guest_authors}
						brands={product.brands}
					/>
				}
				{price && 
					<Price
						onSale={product.on_sale}
						price={product.price}
						regularPrice={product.regular_price}
						salePrice={product.sale_price}
					/>
				}
			</div>
		</article>
	)

}