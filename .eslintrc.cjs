module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:react-hooks/recommended",
		"prettier"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	plugins: ["react-refresh","prettier"],
	rules: {
		"react-refresh/only-export-components": "warn",
		quotes: ["error", "double"],
		"no-console": "error",
	},
};
