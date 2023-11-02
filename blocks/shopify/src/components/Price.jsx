/**
 * Price
 * 
 * @param {object} price
 */
export default function Product( { price } ) {
	const maxPrice = parseFloat( price.maxVariantPrice.amount).toFixed(2);
	const minPrice = parseFloat( price.minVariantPrice.amount).toFixed(2);

	const hasPriceRange = maxPrice !== minPrice;

	price = hasPriceRange ? '$'+minPrice+' - $'+maxPrice : '$'+minPrice;

	return(
		<div className="wp-block-cata-shopify-product__price">
			<span>
				{price}
			</span>
		</div>
	);
}
