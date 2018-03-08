import {Component, HyperscriptConfig, FileMap} from '../types';
import {transform} from 'babel-core';
import * as fs from 'fs-extra';
import * as path from 'path';
import globby = require('globby');
import mapToObject from '../map-to-object';
import promiseAllObject from '../promise-all-object';

function transformJSXToHyperscript(src: string, pragma: string): string {
	const {code} = transform(src, {
		presets: [
			[require('babel-preset-env'), {
				targets: { node: 'current' }
			}]
		],
		plugins: [
			[require('babel-plugin-transform-react-jsx'), {pragma}],
			require('babel-plugin-syntax-jsx'),
			require('babel-plugin-add-module-exports')
		],
	});

	return code || '';
}

export default async function babel(component: Component, {pragma}: HyperscriptConfig): Promise<FileMap> {
	const root = await fs.realpath(
		component.root
	);

	const files = await globby(
		path.join(
			root,
			'dist/jsx',
			'**/*.{js,jsx}'
		)
	);

	const outDir = path.resolve(
		root,
		'dist/hyperscript'
	);

	await fs.ensureDir(outDir);

	const realFiles = await Promise.all(
		files.map(file => fs.realpath(file))
	);

	return promiseAllObject(
		mapToObject(
			realFiles,
			async file => {
				const code = transformJSXToHyperscript(
					await fs.readFile(file, 'utf8'),
					pragma
				);

				const fileBase = path.relative(
					path.join(
						root,
						'dist/jsx'
					),
					file
				).replace(/\.jsx$/, '.js');

				const outFile = path.resolve(outDir, fileBase);
				await fs.writeFile(outFile, code);

				return outFile;
			}
		)
	);
};