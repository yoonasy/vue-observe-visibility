module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'@vue/airbnb',
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'semi': 0,
		'max-len': ["error", 220],
		'no-param-reassign': 0,
		'no-underscore-dangle': 0,
		'space-before-function-paren': 0,
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'arrow-parens': 0,
		// allow async-await
		'generator-star-spacing': 0,
		// trailing comma
		'comma-dangle': ['error', 'always-multiline'],
		'indent': ['error', 'tab'],
		'no-tabs': 'off',
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)',
			],
			env: {
				jest: true,
			},
		},
	],
};
