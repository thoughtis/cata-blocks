import { __ } from '@wordpress/i18n';

export default function Byline( {authors, brands} ) {
	return (<div className="wp-block-cata-product__byline">
		{authors.length > 0 &&
			__("by ", 'cata') + authors.map( a => a.display_name ).join(', ')
		}
		{!authors.length > 0 &&
			brands.length > 0 &&
			__("from ", "cata") + brands.map( b => b.name ).join(', ')
		}
	</div>)
}