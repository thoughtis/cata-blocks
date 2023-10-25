/**
 * Internal dependencies
 */
import Product from "./Product";

/**
 * Compact Layout
 * 
 * @param {array} products
 */
export default function Products( { products } ) {

	if ( 0 === products.length ) {
		return (
			<p>No products, update the options to try again.</p>
		);
	}

	return (
		<div className="wp-block-cata-shopify__layout">
			{(products.map( ( product ) => {
				return (
					<Product product={product} />
				)
			}))}
		</div>
	);
}
