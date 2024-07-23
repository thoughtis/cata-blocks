/**
 * Internal dependencies
 */
import PostNetwork from "../../post/post-network/PostNetwork";
import { getSortingFunction } from '../sorting';

/**
 * Network Layout
 * 
 * @param {array} posts
 * @param {string} sorting
 */
export default function Network( { posts, sorting, display_zodiac_links } ) {

	if ( 0 === posts.length ) {
		return null;
	}

	const clonedPosts = posts.slice();

	if ( '' !== sorting ) {
		clonedPosts.sort( getSortingFunction(sorting) );
	}

	return (
		<div className="wp-block-cata-rest__layout is-layout-network">
			{
				clonedPosts.map( ( post ) => {
					return (
						<PostNetwork key={post.id} post={post} display_zodiac_links={display_zodiac_links} />
					)
				} )
			}
		</div>
	);
}
