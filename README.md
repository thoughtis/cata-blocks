# Cata Blocks

Block Editor components for use with the Cata theme.

## Documentation

Docs are co-located: **every component folder has its own README.md**. This
file is the map — when you change a component, update its README in the same
change.

| Folder | Contents |
| --- | --- |
| `blocks/` | Custom blocks, one folder per block |
| `block-editor/` | [Editor-wide extensions](block-editor/README.md) to core/third-party blocks (attributes, inspector controls, Query Loop filters) |
| `block-filters/` | [Server-side filters](block-filters/README.md) altering existing blocks' output |
| `blocks-middleware/` | [apiFetch proxy + cache middlewares](blocks-middleware/README.md); REST block dependency |
| `blocks-store/` | [`cata/blocks` data store](blocks-store/README.md); Shopify block dependency |
| `patterns/` | Block patterns (Trivia) |
| `formats/` | Rich-text formats (Overhang) |
| `variations/` | Core block variations (Substack social link) |
| `admin/` | Settings → Cata Blocks page managing the `cata_blocks` and Shopify store options |
| `includes/` | Shared PHP: feed cache/fetch/update, the `/cata/v1/proxy/` endpoint, REST URL standardization, generic render filters |

## Conventions

- Most components can be switched off with a
  `cata_blocks_support_{name}_block` filter.
- Theme-opt-in features gate their scripts behind
  `cata_blocks_theme_supports_{feature}` filters (color scheme, text
  decoration color).
- The REST and Shopify blocks never fetch remote content inline on the front
  end: responses are cached in non-autoloaded options and refreshed by
  WP-Cron; the editor warms the cache through the proxy endpoint.

## Styling

Blocks are styled in the editor as much as possible — block supports, the
theme's palette and presets — and ship their own CSS for editor and front end
where needed. Themes adjust the look through global styles rather than
reimplementing block CSS.

The **REST** and **Shopify** blocks still follow the original separation of
concerns:

- **This plugin**: scripts and styles sufficient to use them in the editor and save them in post content.
- **The Cata parent theme**: styles making the front-end content match the editor.
- **A child theme**: the look and feel of the individual site.

## How To Build

Navigate to a component's folder and run `npm run build`.

Example:
```
cd blocks/aside
npm run build
```

## How To Add A Block

WordPress has a `create-block` script for this.

https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/

But, it acts like each block is its own plugin. It's not optimized for the way we're doing it where all the blocks are in one plugin. So here's how to do it.

- Go to the blocks folder
  - `cd blocks`
- Create your block
  - `npx @wordpress/create-block --no-wp-scripts my-cool-block-name`
- Go to its folder
  - `cd my-cool-block-name`
- Remove node_modules
  - `rm -r node_modules`
- Remove other package files
  - `rm package-lock.json readme.txt`
- Remove everything from the package.json file except the build script.
  - The default build command is `../../node_modules/.bin/wp-scripts build`
- Require your new block's file in `cata-blocks.php`
  - `require_once __DIR__ . '/blocks/my-cool-block-name/my-cool-block-name.php';`
- Write a `README.md` describing what it renders, how (static save vs
  `render.php`), notable attributes, and anything the theme must provide.
