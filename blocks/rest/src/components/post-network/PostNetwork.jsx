/**
 * External dependencies
 */
import { RawHTML } from "@wordpress/element";

/**
 * Internal dependencies
 */
import Image from "../image/Image";
import TextContent from "../text-content/TextContent";
import getDimensions from "../image/get-dimensions";
import getImage from "../image/get-image";

/**
 * Post Network
 * 
 * @param {object} post
 */
export default function PostNetwork( { post } ) {

	const data = getImage( post );
	const dimensions = getDimensions( data );

	return(
		<article className="preview is-layout-network">
			<div className="preview__layout">
				<div className="preview__start">
				{ null !== data && (
					<figure className="preview__image-container">
						<a rel="bookmark" href={ post.link }>
							<Image data={ data } dimensions={ dimensions } sizes="(max-width: 40em) 92.5vw, 36em" />
						</a>
					</figure>
				) }
				</div>
				<div className="preview__end">
					<h3 className="preview__title">
						<a rel="bookmark" className="preview__permalink" href={ post.link }><TextContent text={ post.title.rendered } /></a>
					</h3>
					<div className="preview__excerpt">
						<RawHTML>{ post.excerpt.rendered }</RawHTML>
					</div>
					<p className="preview__domain">{ (new URL( post.link )).hostname }</p>
				</div>
			</div>
		</article>
	);
}
