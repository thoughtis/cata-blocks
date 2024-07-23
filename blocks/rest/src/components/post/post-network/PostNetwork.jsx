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
import * as Symbols from '../../icons';

/**
 * Post Network
 * 
 * @param {object} post
 */
export default function PostNetwork( { post, display_zodiac_links } ) {

	const data = getImage( post );
	const dimensions = getDimensions( data );

	return(
		<article className="preview is-layout-network">
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
						<a rel="bookmark" className="preview__permalink" href={ post.link }><TextContent text={ post.title.rendered } /></a>
					</h3>
					<div className="preview__excerpt">
						<RawHTML>{ post.excerpt.rendered }</RawHTML>
					</div>
					{ false !== display_zodiac_links ? (
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
					) : (<p className="preview__domain">{ (new URL( post.link )).hostname }</p>) }
				</div>
			</div>
		</article>
	);
}
