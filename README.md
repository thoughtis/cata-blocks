# Cata Blocks
Block Editor components for use with the Cata theme.

# How To Build

Navigate to a component's folder and run `wp-scripts build`.

Example:
```
cd blocks/aside
wp-scripts build
```

# Components

## Blocks

### Aside

An `<aside>` element with `InnerBlocks`.

### Kicker

A `<p>` element styled to reduce the margin of the element immediately after it.

## Patterns

### Trivia

An aside block containing a kicker as the title, paragraph for the question and a paragraph for the answer.

> The answer is wrapped in the Tap To Reveal format. This format needs to be moved into Cata Blocks from Creepy Catalog.

# Separation of Concerns

- **This plugin** contains scripts and styles sufficient to use these components in the editor and save them in post content.
- **The Cata parent theme** contains styles sufficient to make the front-end content match the editor.
- **A child theme** is responsible to making the front-end styles match the look and feel of an individual site.
