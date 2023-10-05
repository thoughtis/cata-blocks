import TextContent from "../text-content/TextContent";
import Image from "../image/Image";
import getDimensions from "../image/get-dimensions";

export default function Author( { author } ) {

	const image = 0 < author.media.length ? author.media[0] : null;
	const dimensions = getDimensions( image, 1, [ 320, 160, 80 ] );

	return (
		<p className="preview__byline">
			{ null !== image && (
				<Image data={image} sizes="6em" dimensions={dimensions} className="preview__avatar" />
			) }
			<a rel="author" href={ author.link }><em><TextContent text={ author.display_name } /></em></a>
		</p>
	);
}
