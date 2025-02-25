/**
 * External dependencies
 */
import { RawHTML } from "@wordpress/element";

/**
 * Internal dependencies
 */
import Image from "../../image/Image";
import TextContent from "../../text-content/TextContent";
import getDimensions from "../../image/get-dimensions";
import getImage from "../../image/get-image";

/**
 * Post Compact
 * 
 * @param {object} post
 */
export default function PostCompact( { post, aspect_ratio } ) {

	const data = getImage( post );
	const dimensions = getDimensions( data );

	return(
		<article className="preview is-layout-compact">
			<div className="preview__layout">
				<div className="preview__start">
				{ null !== data && (
					<figure className="preview__image-container">
						<a rel="bookmark" href={ post.link }>
							<Image data={ data } dimensions={ dimensions } sizes="(max-width: 20em) 46.25vw, 13em" aspect_ratio={aspect_ratio} />
						</a>
					</figure>
				) }
				</div>
				<div className="preview__end">
					<h3 className="preview__title">
						<a rel="bookmark" className="preview__permalink" href={ post.link }><TextContent text={ post.title.rendered } /></a>
					</h3>
				</div>
			</div>
		</article>
	);
}
