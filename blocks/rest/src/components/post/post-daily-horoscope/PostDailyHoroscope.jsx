/**
 * Internal dependencies
 */
import * as Symbols from '../../icons';
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

	const data       = getImage( post );
	const dimensions = getDimensions( data );
	const date_title = post.title.rendered.split( ": " );
	const title      = date_title[0];
	const date       = date_title[1];

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
					<h3 className="preview__title">
						<a rel="bookmark" className="preview__permalink" href={ post.link }><TextContent text={ title } /></a>
					</h3>
					{ date && (
						<p>
							<TextContent text={ date_title[1] } />
						</p>
					) }
					{ false !== display_zodiac_links && (
						<ul className="preview__zodiac-signs">
							<li><Symbols.AriesIcon/><a>Aries</a></li>
							<li><Symbols.TaurusIcon/><a>Taurus</a></li>
							<li><Symbols.GeminiIcon/><a>Gemini</a></li>
							<li><Symbols.CancerIcon/><a>Cancer</a></li>
							<li><Symbols.LeoIcon/><a>Leo</a></li>
							<li><Symbols.VirgoIcon/><a>Virgo</a></li>
							<li><Symbols.LibraIcon/><a>Libra</a></li>
							<li><Symbols.ScorpioIcon/><a>Scorpio</a></li>
							<li><Symbols.SagittariusIcon/><a>Sagittarius</a></li>
							<li><Symbols.CapricornIcon/><a>Capricorn</a></li>
							<li><Symbols.AquariusIcon/><a>Aquarius</a></li>
							<li><Symbols.PiscesIcon/><a>Pisces</a></li>
						</ul>
					) }
				</div>
			</div>
		</article>
	);
}
