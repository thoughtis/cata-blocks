
function getSrcSetString( source_url, dimension ) {
	const src = new URL( source_url );
	src.searchParams.set( 'resize', dimension.join(',') );
	return `${src.href.toString()} ${dimension[0]}w`
}

export default function Image( { data, sizes, dimensions, className }) {
	
	if ( ! ('source_url' in data) ) {
		return null;
	}

	const src = new URL( data.source_url );
	src.searchParams.set( 'resize', dimensions[0].join(',') );

	const srcset = dimensions.map( getSrcSetString.bind( null, data.source_url ) );

	return (
		<img
			width={dimensions[0][0]}
			height={dimensions[0][1]}
			src={ src.href.toString() }
			sizes={ sizes }
			srcSet={ srcset.join( ',' ) }
			className={className}
			loading="lazy"
		/>
	);
}
