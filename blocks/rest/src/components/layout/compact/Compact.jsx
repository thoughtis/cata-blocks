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
export default function Compact( { posts, sorting, aspect_ratio, display_domain_names, display } ) {

	if ( 0 === posts.length ) {
		return null;
	}

	const clonedPosts = posts.slice();

	if ( '' !== sorting ) {
		clonedPosts.sort( getSortingFunction(sorting) );
	}

	return (
		<div className="wp-block-cata-rest__layout is-layout-compact">
			{
				clonedPosts.map( ( post ) => {
					return (
						<PostNetwork
							key={post.id}
							post={post}
							aspect_ratio={aspect_ratio}
							display={display}
							slug="compact"
							image_sizes="(max-width: 20em) 46.25vw, 13em"
						/>
					)
				} )
			}
		</div>
	);
}
