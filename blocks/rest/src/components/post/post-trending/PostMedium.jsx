/**
 * Internal dependencies
 */
import TextContent from "../../text-content/TextContent";
import Image from "../../image/Image";
import getDimensions from "../../image/get-dimensions";
import getImage from "../../image/get-image";
import getCategory from "./get-category";
import getAuthor from "../../author/get-author";
import Author from "../../author/Author";

/**
 * Post
 * 
 * @param {object} post
 */
export default function PostMedium( { post } ) {

	const data = getImage( post );
	const dimensions = getDimensions( data, null, [ 2560, 1920, 1280, 960, 640, 480, 320 ] );
	const category = getCategory( post );
	const author = getAuthor( post );

	return(
		<article className="preview is-layout-trending">
			{ null !== data && (
				<figure className="preview__image-container">
					<a rel="bookmark" href={ post.link }>
						<Image data={ data } dimensions={ dimensions } sizes="(max-width: 15em) 92.5vw, 15em" />
					</a>
				</figure>
			) }
			<div className="preview__content">
				{ null !== category && (
					<p className="preview__kicker">
						<a rel="category" href={ category.link }>
							<strong><TextContent text={ category.name } /></strong>
						</a>
					</p>
				) }
				<h3 className="preview__title">
					<a rel="bookmark" href={ post.link }>
						<TextContent text={ post.title.rendered } />
					</a>
				</h3>
				{ null !== author && (
					<Author author={ author } />
				) }
			</div>
		</article>
	);
}
