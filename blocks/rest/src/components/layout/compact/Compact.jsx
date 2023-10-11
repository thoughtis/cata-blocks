/**
 * Internal dependencies
 */
import PostCompact from "../../post-compact/PostCompact";
import { getSortingFunction } from '../sorting';

/**
 * Compact Layout
 * 
 * @param {array} posts
 * @param {string} sorting
 */
export default function Compact( { posts, sorting } ) {

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
						<PostCompact key={post.id} post={post} />
					)
				} )
			}
		</div>
	);
}
