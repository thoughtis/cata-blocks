# Cata Blocks
Block Editor components for use with the Cata theme.

# How To Build

Navigate to a component's folder and run `npm run build`.

Example:
```
cd blocks/aside
npm run build
```

# Components

## Blocks

### Aside

An `<aside>` element with `InnerBlocks`.

### Kicker

A `<p>` element styled to reduce the margin of the element immediately after it.

### Newsletter

A `<form>` for MailChimp newsletter sign ups. 

### Table of Contents

A `<details>` element populated with links to Heading 2's (`<h2>`'s) in the post body.

## Patterns

### Trivia

An aside block containing a kicker as the title, paragraph for the question and a paragraph for the answer.

> The answer is wrapped in the Tap To Reveal format. This format needs to be moved into Cata Blocks from Creepy Catalog.

# Separation of Concerns

- **This plugin** contains scripts and styles sufficient to use these components in the editor and save them in post content.
- **The Cata parent theme** contains styles sufficient to make the front-end content match the editor.
- **A child theme** is responsible for making the front-end styles match the look and feel of an individual site.

# How To Add A Block

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
