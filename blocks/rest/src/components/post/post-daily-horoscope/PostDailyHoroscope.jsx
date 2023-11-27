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
 * Post Daily Horoscope
 * 
 * @param {object} post
 */
export default function PostDailyHoroscope( { post, display_zodiac_links } ) {

	const data = getImage( post );
	const dimensions = getDimensions( data );

	return(
		<article className="preview is-layout-daily-horoscope">
			<div className="preview__layout">
				<div className="preview__start">
				{ null !== data && (
					<figure className="preview__image-container">
						<a rel="bookmark" href={ post.link }>
							<Image data={ data } dimensions={ dimensions } sizes="(max-width: 40em) 92.5vw, 36em" />
						</a>
					</figure>
				) }
				</div>
				<div className="preview__end">
					<p>Daily Horoscope</p>
					<h3 className="preview__title">
						<a rel="bookmark" className="preview__permalink" href={ post.link }><TextContent text={ post.title.rendered } /></a>
					</h3>
					<div className="preview__excerpt">
						<RawHTML>{ post.excerpt.rendered }</RawHTML>
					</div>
					{ false !== display_zodiac_links && (
						<div className="preview__zodiac-signs">
							<a>Aries</a>
							<a>Taurus</a>
							<a>Gemini</a>
							<a>Cancer</a>
							<a>Leo</a>
							<a>Virgo</a>
							<a>Libra</a>
							<a>Scorpio</a>
							<a>Sagittarius</a>
							<a>Capricorn</a>
							<a>Aquarius</a>
							<a>Pisces</a>
						</div>
					) }
				</div>
			</div>
		</article>
	);
}
