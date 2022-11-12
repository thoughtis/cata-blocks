/**
 * Components > Products
 */

/**
 * Internal Dependencies
 */
import Product from './product';

/**
 * Products
 */
export default function Products( { products, display_byline, display_price } ) {
	if ( 0 === products.length ) {
		return (
			<p>No products, update the options to try again.</p>
		);
	}
	return(
		<div className="wp-block-cata-products__layout">
			{(products.map( ( product ) => {
				return (
					<Product
						key={`cata-product-${product.id}`}
						product={product}
						display={{
							byline: display_byline,
							price: display_price
						}}
					/>
				)
			}))}
		</div>
	);
}
