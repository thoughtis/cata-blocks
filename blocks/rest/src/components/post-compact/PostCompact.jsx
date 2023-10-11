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
 * Post Compact
 * 
 * @param {object} post
 */
export default function PostCompact( { post } ) {

	const data = getImage( post );
	const dimensions = getDimensions( data );

	return(
		<article className="preview is-layout-compact">
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
					<h3 className="preview__title has-step-3-font-size has-sans-serif-font-family">
						<a rel="bookmark" className="preview__permalink" href={ post.link }><TextContent text={ post.title.rendered } /></a>
					</h3>
				</div>
			</div>
		</article>
	);
}
