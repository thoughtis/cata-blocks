/**
 * Internal dependencies
 */
import Product from "./Product";

/**
 * Compact Layout
 * 
 * @param {array}  products
 * @param {bool}   display_price
 * @param {string} aspect_ratio
 */
export default function Products( { products, display_price, aspect_ratio } ) {
	if ( 0 === products.length ) {
		return (
			<p>No products, update the options to try again.</p>
		);
	}

	return (
		<div className="wp-block-cata-shopify__layout">
			{(products.map( ( product, index ) => {
				return (
					<Product
						key={`cata-blocks-shopify-product-${index}`}
						product={product}
						display_price={display_price}
						aspect_ratio={aspect_ratio}
					/>
				)
			}))}
		</div>
	);
}
