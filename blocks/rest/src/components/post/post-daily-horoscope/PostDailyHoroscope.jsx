/**
 * Internal dependencies
 */
import * as Symbols from '../../icons';
import TextContent from "../../text-content/TextContent";

/**
 * Post Daily Horoscope
 * 
 * @param {object} post
 */
export default function PostDailyHoroscope( { post, display_zodiac_links } ) {
	let date = new Date( post.date );
	const dateOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	date = date.toLocaleDateString( 'en-US', dateOptions )

	return(
		<article className="preview is-layout-daily-horoscope">
			<div className="preview__layout">
				<p className="preview__date">
					<TextContent text={ date } />
				</p>
				{ false !== display_zodiac_links && (
					<ul className="preview__zodiac-signs">
						<li><a><Symbols.AriesIcon/>Aries</a></li>
						<li><a><Symbols.TaurusIcon/>Taurus</a></li>
						<li><a><Symbols.GeminiIcon/>Gemini</a></li>
						<li><a><Symbols.CancerIcon/>Cancer</a></li>
						<li><a><Symbols.LeoIcon/>Leo</a></li>
						<li><a><Symbols.VirgoIcon/>Virgo</a></li>
						<li><a><Symbols.LibraIcon/>Libra</a></li>
						<li><a><Symbols.ScorpioIcon/>Scorpio</a></li>
						<li><a><Symbols.SagittariusIcon/>Sagittarius</a></li>
						<li><a><Symbols.CapricornIcon/>Capricorn</a></li>
						<li><a><Symbols.AquariusIcon/>Aquarius</a></li>
						<li><a><Symbols.PiscesIcon/>Pisces</a></li>
					</ul>
				) }
			</div>
		</article>
	);
}
