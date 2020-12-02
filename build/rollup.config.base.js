import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import cjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import json from 'rollup-plugin-json'

const config = require('../package.json')

export default {
	input: 'src/index.js',
	plugins: [
		resolve({
			jsnext: true,
			main: true,
			browser: true,
		}),
		babel({
			exclude: 'node_modules/**',
			runtimeHelpers: true,
		}),
		cjs(),
		json(),
		replace({
			VERSION: JSON.stringify(config.version),
		}),
	],
	watch: {
		include: 'src/**',
	},
}
