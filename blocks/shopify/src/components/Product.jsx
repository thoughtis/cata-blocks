/**
 * Internal dependencies
 */
import Image from './Image';
import Price from './Price';

/**
 * Product
 * 
 * @param {object} product
 * @param {bool}   display_price
 * @param {string} aspect_ratio
 */
export default function Product( { product, display_price, aspect_ratio } ) {
	return(
		<article className="wp-block-cata-shopify-product">
			<div className="wp-block-cata-shopify-product__layout">
				<div className="wp-block-cata-shopify-product__start">
					{product.featuredImage &&
						<Image image={product.featuredImage} aspect_ratio={aspect_ratio} />
					}
				</div>
				<div className="wp-block-cata-shopify-product__end">
					<h3 className="wp-block-cata-shopify-product__title">
						<a 
							className="wp-block-cata-shopify-product__link"
							href={product.onlineStoreUrl}
						>
							{product.title}
						</a>
					</h3>
					{display_price &&
						<Price price={product.priceRange} />
					}
				</div>
			</div>
		</article>
	);
}
