/**
 * Internal dependencies
 */
import PostDailyHoroscope from "../../post/post-daily-horoscope/PostDailyHoroscope";
import { getSortingFunction } from '../sorting';

import PostNetwork from "../../post/post-network/PostNetwork";

/**
 * Daily Horoscope Layout
 * 
 * @param {array} posts
 * @param {string} sorting
 */
export default function DailyHoroscope( { posts, sorting, display, aspect_ratio } ) {

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
						<PostNetwork
							key={post.id}
							post={post}
							display={display}
							aspect_ratio={aspect_ratio}
							slug="daily-horoscope"
							image_sizes="(max-width: 20em) 46.25vw, 13em"
						/>
					)
				} )
			}
		</div>
	);
}
