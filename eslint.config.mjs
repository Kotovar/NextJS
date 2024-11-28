import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import tslint from 'typescript-eslint';

export default tslint.config(
  eslint.configs.recommended,
  ...tslint.configs.strict,
  ...tslint.configs.stylistic,
  {
    rules: {
      'no-unused-expressions': 'error',
      'no-console': 'error',
    },
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
  },
  { files: ['**/*.{c,m,}{t,j}s', '**/*.tsx'] },
  {
    ignores: ['coverage/'],
  },
  eslintConfigPrettier,
);
