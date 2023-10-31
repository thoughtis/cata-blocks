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
 */
export default function Product( { product, display_price } ) {
	return(
		<article className="wp-block-cata-shopify-product">
			<div className="wp-block-cata-shopify-product__layout">
				{product.featuredImage &&
					<Image image={product.featuredImage} />
				}
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
		</article>
	);
}
