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

import getCategory from "../get-category";

const dateOptions = {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
};

/**
 * Post Stack
 * 
 * @param {object} post
 */
export default function PostNetwork( { post, aspect_ratio, display, image_sizes, slug } ) {
	const data = getImage( post );
	const dimensions = getDimensions( data );
	const category = getCategory( post );
	const date = (new Date( post.date )).toLocaleDateString( 'en-US', dateOptions );

	return(
		<article className={`preview is-layout-${slug}`}>
			<div className="preview__layout">
				{ ( display.image && null !== data ) && (
					<div className="preview__start">
						<figure className="preview__image-container">
							<a rel="bookmark" href={ post.link }>
								<Image data={ data } dimensions={ dimensions } sizes={image_sizes} aspect_ratio={aspect_ratio} />
							</a>
						</figure>
					</div>
				) }
				<div className="preview__end">
					{ ( display.category && null !== category ) && (
						<p className="preview__kicker">
							<a rel="category" href={ category.link }>
								<TextContent text={ category.name } />
							</a>
						</p>
					) }
					{ display.date && (
						<p className="preview__date">
							<TextContent text={ date } />
						</p>
					) }
					{ display.title && (
						<h3 className="preview__title">
							<a rel="bookmark" className="preview__permalink" href={ post.link }><TextContent text={ post.title.rendered } /></a>
						</h3>
					) }
					{ display.excerpt && (
						<div className="preview__excerpt">
							<RawHTML>{ post.excerpt.rendered }</RawHTML>
						</div>
					) }
					{ display.zodiac && (
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
					{ display.domain && (
						<p className="preview__domain">{ (new URL( post.link )).hostname }</p>
					) }
				</div>
			</div>
		</article>
	);
}
