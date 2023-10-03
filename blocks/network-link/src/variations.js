/**
 * Variations
 */

/**
 * Internal dependencies
 */
import {
	CollectiveWorldLogo,
	CreepyCatalogLogo,
	QuoteCatalogLogo,
	ShopCatalogLogo,
	ThoughtCatalogLogo,
	ThoughtCatalogBooksLogo,
} from './logos';

const variations = [	
	{
		isDefault: false,
		name: 'collectiveworld',
		attributes: { service: 'collectiveworld', url: 'https://collective.world/' },
		title: 'Collective World',
		icon: CollectiveWorldLogo,
	},
	{
		isDefault: false,
		name: 'creepycatalog',
		attributes: { service: 'creepycatalog', url: 'https://creepycatalog.com/' },
		title: 'Creepy Catalog',
		icon: CreepyCatalogLogo,
	},
	{
		isDefault: false,
		name: 'quotecatalog',
		attributes: { service: 'quotecatalog', url: 'https://quotecatalog.com/' },
		title: 'Quote Catalog',
		icon: QuoteCatalogLogo,
	},
	{
		isDefault: false,
		name: 'shopcatalog',
		attributes: { service: 'shopcatalog', url: 'https://shopcatalog.com/' },
		title: 'Shop Catalog',
		icon: ShopCatalogLogo,
	},
	{
		isDefault: true,
		name: 'thoughtcatalog',
		attributes: { service: 'thoughtcatalog', url: 'https://thoughtcatalog.com/' },
		title: 'Thought Catalog',
		icon: ThoughtCatalogLogo,
	},
	{
		isDefault: false,
		name: 'thoughtcatalogbooks',
		attributes: { service: 'thoughtcatalogbooks', url: 'https://thoughtcatalog.com/books/' },
		title: 'Thought Catalog Books',
		icon: ThoughtCatalogBooksLogo,
	},
];

/**
 * Add `isActive` function to all `network link` variations, if not defined.
 * `isActive` function is used to find a variation match from a created
 *  Block by providing its attributes.
 */
variations.forEach( ( variation ) => {
	if ( variation.isActive ) return;
	variation.isActive = ( blockAttributes, variationAttributes ) =>
		blockAttributes.service === variationAttributes.service;
} );

export default variations;
