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
		attributes: { service: 'collectiveworld' },
		title: 'Collective World',
		icon: CollectiveWorldLogo,
	},
	{
		isDefault: false,
		name: 'creepycatalog',
		attributes: { service: 'creepycatalog' },
		title: 'Creepy Catalog',
		icon: CreepyCatalogLogo,
	},
	{
		isDefault: false,
		name: 'quotecatalog',
		attributes: { service: 'quotecatalog' },
		title: 'Quote Catalog',
		icon: QuoteCatalogLogo,
	},
	{
		isDefault: false,
		name: 'shopcatalog',
		attributes: { service: 'shopcatalog' },
		title: 'Shop Catalog',
		icon: ShopCatalogLogo,
	},
	{
		isDefault: true,
		name: 'thoughtcatalog',
		attributes: { service: 'thoughtcatalog' },
		title: 'Thought Catalog',
		icon: ThoughtCatalogLogo,
	},
	{
		isDefault: false,
		name: 'thoughtcatalogbooks',
		attributes: { service: 'thoughtcatalogbooks' },
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
