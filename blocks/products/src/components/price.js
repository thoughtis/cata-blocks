export default function Price( {onSale, price, regularPrice, salePrice} ) {

	const isOnSale = onSale && regularPrice && salePrice;
	const hasPriceRange = price && regularPrice && !onSale && (price !== regularPrice);

	return (
		<div className='wp-block-cata-product__price'>
		{
			isOnSale && 
			(<>
				<del>
					<span>
						<span>$</span>{regularPrice}
					</span>
				</del>
				&nbsp;
				<ins>
					<span>
						<span>$</span>{salePrice}
					</span>
				</ins>
			</>)
		}
		{
			hasPriceRange &&
			(<>
				<span>
					<span>$</span>{price}
				</span>
				&nbsp;-&nbsp;
				<span>
					<span>$</span>{regularPrice}
				</span>
			</>)
		}
		{
			regularPrice &&
			! isOnSale &&
			! hasPriceRange &&
			(<span>
				<span>$</span>{regularPrice}
			</span>)
		}
		</div>
	)

}