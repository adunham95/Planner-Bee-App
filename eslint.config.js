// import prettier from 'eslint-config-prettier';
// import eslint from '@eslint/js';
// import { includeIgnoreFile } from '@eslint/compat';
// import svelte from 'eslint-plugin-svelte';
// import globals from 'globals';
// import { fileURLToPath } from 'node:url';
// import tseslint from 'typescript-eslint';
// import svelteConfig from './svelte.config.js';
// import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

// const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

// export default tseslint.config(
// 	includeIgnoreFile(gitignorePath),
// 	eslint.configs.recommended,
// 	...tseslint.configs.recommendedTypeChecked,
// 	...svelte.configs['flat/recommended'],
// 	prettier,
// 	...svelte.configs['flat/prettier'],
// 	eslintPluginPrettierRecommended,
// 	{
// 		languageOptions: {
// 			globals: { ...globals.browser, ...globals.node }
// 		},
// 		rules: { 'no-undef': 'off' }
// 	},
// 	{
// 		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
// 		ignores: ['eslint.config.js', 'svelte.config.js'],
// 		languageOptions: {
// 			parserOptions: {
// 				projectService: true,
// 				extraFileExtensions: ['.svelte'],
// 				parser: tseslint.parser,
// 				svelteConfig
// 			}
// 		}
// 	}
// );

import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	}
];
