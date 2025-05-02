/**
 * Internal dependencies
 */
import PostNetwork from "../../post/post-network/PostNetwork";
import { getSortingFunction } from '../sorting';

/**
 * Compact Layout
 * 
 * @param {array} posts
 * @param {string} sorting
 */
export default function StackGrid( { posts, sorting, aspect_ratio, display } ) {

	if ( 0 === posts.length ) {
		return null;
	}

	const clonedPosts = posts.slice();

	if ( '' !== sorting ) {
		clonedPosts.sort( getSortingFunction(sorting) );
	}

	return (
		<div className="wp-block-cata-rest__layout is-layout-stack-grid">
			{
				clonedPosts.map( ( post ) => {
					return (
						<PostNetwork
							key={post.id}
							post={post}
							display={display}
							aspect_ratio={aspect_ratio}
							slug="stack-grid"
							image_sizes="(max-width: 40em) 92.5vw, 36em"
						/>
					)
				} )
			}
		</div>
	);
}