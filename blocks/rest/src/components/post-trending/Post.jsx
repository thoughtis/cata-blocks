import TextContent from "../text-content/TextContent";

/**
 * Post
 * 
 * @param {object} post
 */
export default function Post( { post } ) {
	return(
		<p>
			<a href={ post.link }><TextContent text={ post.title.rendered } /></a>
		</p>
	);
}
