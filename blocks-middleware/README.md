# Blocks Middleware

Two opt-in `@wordpress/api-fetch` middlewares for the block editor. They act
only when a fetch passes a `cata` key in its options — other requests pass
through untouched. Loaded before the blocks in `cata-blocks.php` because the
REST block's editor preview depends on it.

```js
apiFetch( { path: '…', cata: { useProxy: true, useCache: true } } );
```

- **Proxy** (`useProxy`) rewrites the path to
  `/cata/v1/proxy/?url=<encoded path>`. The endpoint
  (`includes/proxy/class-proxy.php`) fetches the URL server-side — `/wp-json/`
  paths only, editors only — sidestepping cross-origin restrictions and
  warming the front-end feed cache.
- **Cache** (`useCache`) memoizes request promises by path for the life of the
  page load. The proxy middleware runs first, so cache keys use the original
  path.

Editor-only (`enqueue_block_editor_assets`); nothing runs on the front end.
