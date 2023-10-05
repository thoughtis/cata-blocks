/**
 * Internal dependencies
 */
import Post from "../../post-trending/Post";
import PostMedium from "../../post-trending/PostMedium";
import PostLarge from "../../post-trending/PostLarge";
import { getSortingFunction } from '../sorting';

/**
 * Trending Layout
 * 
 * @param {array} posts
 * @param {string} sorting
 */
export default function Trending( { posts, sorting } ) {

	if ( 2 >= posts.length ) {
		return null;
	}

	const clonedPosts = posts.slice();

	if ( '' !== sorting ) {
		clonedPosts.sort( getSortingFunction(sorting) );
	}

	return (
		<div className="wp-block-cata-rest__layout is-layout-trending">
			<div className="has-serif-font-family"><PostMedium post={clonedPosts[0]} /></div>
			<div className="has-serif-font-family"><PostLarge post={clonedPosts[1]} /></div>
			<div className="has-sans-serif-font-family">
				<div className="wp-block-cata-rest__list has-step-p-0-font-size line-height-2">
					{
						clonedPosts.slice(2,8).map( ( post ) => {
							return (
								<Post key={post.id} post={post} />
							)
						} )
					}
				</div>
			</div>
		</div>
	);
}

