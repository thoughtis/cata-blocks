/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {

	// console.log('save.js() - attributes');
	// console.log(attributes);

	const { results } = attributes;

	const blockProps = useBlockProps.save({
		className: classnames('wp-block-cata-products', 'alignwide'),
	});

	// console.log('save.js() - useBlockProps.save()');
	// console.log(blockProps);

	console.log('save.js- save() - results');
	console.log(results);
	console.table(results, ["name", "id", "price", "regular_price", "on_sale", "sale_price"]);

	return (
		<div { ...blockProps }>
			{ results &&
				<div className='wp-block-cata-products__layout'>
				{(results.map( prod => {
					return (
						<article className="wp-block-cata-product">
							<div className='wp-block-cata-product__layout tappable-card'>
								<figure className='wp-block-cata-product__image'>
									{/* a ::before would go here with the svg frame on CC */}
									<img
										loading="lazy"
										src={prod.images[0].src}
										alt={prod.images[0].alt}
										sizes="(max-width: 576px) 92.5vw, 576px"
										srcset={prod.images[0].src + "?resize=384,384 384w, " + prod.images[0].src + "?resize=768,768 768w, " + prod.images[0].src + "?resize=1152,1152 1152w"}
										width="384"
										height="384"
									/>
								</figure>
								<h3 className='wp-block-cata-product__title'>
									<a 
										className='wp-block-cata-product__link tappable-card-anchor'
										href={prod.permalink}
									>
										{prod.name}
									</a>
								</h3>
								<div className='wp-block-cata-product__byline'>
									{/* "from Thought Catalog" or the author byline */}
									{prod.cap_guest_authors.length > 0 &&
										"by " +
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
										"from " +
										prod.brands.reduce(
											(prev, curr, idx, array) => {
												const spacer = array.length - 1 === idx ? "" : ", ";
												return prev + curr.name + spacer
											},
											""
										)
									}
								</div>
								<div className='wp-block-cata-product__price'>
									{/* price */}
										{
											prod.on_sale &&
											prod.regular_price &&
											prod.sale_price
											(<del>
												<span>
													<span>$</span>{prod.regular_price}
												</span>
											</del> &&
											<ins>
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
											+
											(" - ")
											+
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
				}))}
				</div>
			}
		</div>
	);
}
