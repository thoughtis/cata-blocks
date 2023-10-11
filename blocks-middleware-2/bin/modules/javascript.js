/**
 * JavaScript Build Processes
 */

import { build } from 'esbuild';
import eslint from 'esbuild-plugin-eslint';
import fastglob from 'fast-glob';

/**
 * Entry Points
 */
export async function getJSEntryPoints() {
	return await fastglob(
		[
			'./assets/src/js/*.js'
		],
		{
			dot: false
		}
	);
}

/**
 * Exit Points
 */
export async function getJSExitPoints() {
	return (await getJSEntryPoints()).map( (entry) => {
		return entry.replace('/src/','/dist/');
	});
}

/**
 * Get Build Options
 */
async function getJSBuildOptions() {
	return {
		entryPoints: await getJSEntryPoints(),
		bundle: true,
		format: 'esm',
		minify: true,
		outdir: './assets/dist/js/',
		platform: 'browser',
		plugins: [
			eslint()
		],
		splitting: true,
		chunkNames: 'chunks/[name]-[hash]',
		target: [
			'es2019'
		]
	};
}

/**
 * Build
 */
export async function buildJS() {
	build( await getJSBuildOptions() )
		.then(() => console.log('Built JavaScript'))
		.catch(() => process.exit(1));
}

/**
 * Watch
 */
export async function watchJS() {
	build(
		Object.assign(
			{},
			await getJSBuildOptions(),
			{
				watch: {
					onRebuild
				}
			}
		)
	)
	.then(() => console.log('Built and Watching JavaScript'))
	.catch(() => process.exit(1));
}

/**
 * On Rebuild
 */
function onRebuild( error ) {
	if ( error ) {
		console.info( 'Watched JavaScript build failed.' );
		console.error( error );
	} else {
		console.log( 'Rebuilt JavaScript' );
	}
}
