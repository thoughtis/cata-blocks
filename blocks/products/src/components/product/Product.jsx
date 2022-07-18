import { __ } from '@wordpress/i18n';

export default function Product( { prod, display_byline } ) {
	return (
		<article className="wp-block-cata-product">
			<div className="wp-block-cata-product__layout">
				<figure className="wp-block-cata-product__image">
					<img
						loading="lazy"
						src={prod.images[0].src}
						alt={prod.images[0].alt}
						sizes="(max-width: 576px) 92.5vw, 576px"
						srcSet={prod.images[0].src + "?resize=384,384 384w, " + prod.images[0].src + "?resize=768,768 768w, " + prod.images[0].src + "?resize=1152,1152 1152w"}
						width="384"
						height="384"
					/>
				</figure>
				<h3 className="wp-block-cata-product__title">
					<a 
						className="wp-block-cata-product__link"
						href={prod.permalink}
					>
						{prod.name}
					</a>
				</h3>
				{display_byline && 
					(<div className="wp-block-cata-product__byline">
						{prod.cap_guest_authors.length > 0 &&
							__("by ", 'cata') +
							prod.cap_guest_authors.reduce( 
								(prev, curr, idx, array) => {
									const spacer = array.length - 1 === idx ? "" : ", ";
									return prev + curr.display_name + spacer;
								},
								""
							)
						}
						{!prod.cap_guest_authors.length > 0 &&
							prod.brands.length > 0 &&
							__("from ", "cata") +
							prod.brands.reduce(
								(prev, curr, idx, array) => {
									const spacer = array.length - 1 === idx ? "" : ", ";
									return prev + curr.name + spacer
								},
								""
							)
						}
					</div>)
				}
				<div className="wp-block-cata-product__price">
						{
							prod.on_sale &&
							prod.regular_price &&
							prod.sale_price &&
							(<del>
								<span>
									<span>$</span>{prod.regular_price}
								</span>
							</del>) &&
							(<ins>
								<span>
									<span>$</span>{prod.sale_price}
								</span>
							</ins>)
						}
						{
							prod.price &&
							prod.regular_price &&
							!prod.on_sale &&
							(prod.price !== prod.regular_price) &&
							(<span>
								<span>$</span>{prod.price}
							</span>)
							&&
							(" - ")
							&&
							(<span>
								<span>$</span>{prod.regular_price}
							</span>
							)
						}
						{
							prod.price &&
							prod.regular_price &&
							!prod.on_sale &&
							(prod.price === prod.regular_price ) &&
							(<span>
								<span>$</span>{prod.regular_price}
							</span>)
						}
				</div>
			</div>
		</article>
	);
}
