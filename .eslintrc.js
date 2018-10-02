module.exports = {
	env: {
		node: true,
		browser: true,
		es6: true
	},
	extends: [
		'eslint:recommended',
		// https://github.com/jest-community/eslint-plugin-jest
		'plugin:jest/recommended',
		// https://github.com/yannickcr/eslint-plugin-react
		'plugin:react/recommended'
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		// Support for ESM is not tied to an ES version
		sourceType: 'module'
	},
	rules: {
		// We don't expect consumers of x-dash to use prop types
		'react/prop-types': 'off',
		// We don't use display names for SFCs
		'react/display-name': 'off',
		// This rule is intended to catch < or > but it's too eager
		'react/no-unescaped-entities': 'off'
	},
	overrides: [
		{
			// Components in x-dash interact with x-engine rather than React
			files: [ 'components/**/*.jsx' ],
			settings: {
				react: {
					pragma: 'h'
				}
			},
			rules: {
				'react/react-in-jsx-scope': 'off',
				'react/prefer-stateless-function': 'error'
			}
		}
	]
};
