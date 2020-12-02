import base from './rollup.config.base'

const config = {
	...base,
	output: {
		name: 'vue3-observe-visibility2',
		file: 'dist/vue3-observe-visibility2.esm.js',
		format: 'es',
	},
}

export default config
