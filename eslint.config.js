import eslintPluginAstro from "eslint-plugin-astro"

export default [
	...eslintPluginAstro.configs.recommended,
	{
		rules: {
			// "semi": ["error", "never"],
			// "quotes": ["error", "double"],
			// "jsx-quotes": ["error", "prefer-double"],
			// "quote-props": ["error", "consistent"],
			// "indent": ["error", "tab"],
			// "comma-dangle": ["error", "always-multiline"],
			// "no-tabs": "off",
			// "linebreak-style": ["error", "unix"],
			// "arrow-parens": ["error", "always"],
			// "comma-dangle": "off",
		},
	},
]
