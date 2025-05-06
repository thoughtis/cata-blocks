/**
 * Internal dependencies
 */
import PostDailyHoroscope from "../../post/post-daily-horoscope/PostDailyHoroscope";
import { getSortingFunction } from '../sorting';

/**
 * Daily Horoscope Layout
 * 
 * @param {array} posts
 * @param {string} sorting
 */
export default function DailyHoroscope( { posts, sorting, display } ) {

	if ( 0 === posts.length ) {
		return null;
	}

	const clonedPosts = posts.slice();

	if ( '' !== sorting ) {
		clonedPosts.sort( getSortingFunction(sorting) );
	}

	return (
		<div className="wp-block-cata-rest__layout is-layout-daily-horoscope">
			{
				clonedPosts.map( ( post ) => {
					return (
						<PostDailyHoroscope key={post.id} post={post} display={display} />
					)
				} )
			}
		</div>
	);
}
