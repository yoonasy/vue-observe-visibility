import base from './rollup.config.base'

const config = {
	...base,
	output: {
		exports: 'named',
		name: 'vue3-observe-visibility2',
		file: 'dist/vue3-observe-visibility2.umd.js',
		format: 'umd',
	},
}

export default config
