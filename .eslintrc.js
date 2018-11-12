// http://eslint.org/docs/user-guide/configuring

module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
	},
	extends: 'eslint:recommended',
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 2018,
		sourceType: 'module',
		allowImportExportEverywhere: true,
	},
	plugins: ['vue'],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		'vue/html-indent': ['error', 'tab'],
		semi: ['error', 'never'],
		'no-console': 0,
		'no-mixed-spaces-and-tabs': 0,
	},
	globals: {
		App: true,
		Page: true,
		getApp: true,
		getPage: true,
		process: true,
		__dirname: true,
		requirePlugin: true,
	},
}
