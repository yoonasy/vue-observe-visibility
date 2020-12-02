import { terser } from 'rollup-plugin-terser'
import base from './rollup.config.base'

const config = {
	...base,
	output: {
		exports: 'named',
		name: 'Vue3ObserveVisibility2',
		file: 'dist/vue3-observe-visibility2.min.js',
		format: 'iife',
	},
}

config.plugins.push(terser())

export default config
