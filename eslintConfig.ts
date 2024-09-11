import { GLOB_TS, GLOB_TSX, defineConfig } from '@aelita-dev/eslint-config'


const [
  pluginAstro,
  parserAstro,
  parserTypescript,
] = await Promise.all([
  import('eslint-plugin-astro').then(m => m.default),
  import('astro-eslint-parser').then(m => m),
  import('typescript-eslint').then(m => m.parser),
])


export default defineConfig(
  {
    typescript: {
      projectType: 'app',
      files: [GLOB_TS, GLOB_TSX, '**/*.astro/*.ts'],
    },
  },
  {
    name: 'aelita:astro:setup',
    plugins: {
      astro: pluginAstro,
    },
  },
  {
    name: 'aelita:astro:rules',
    files: ['**/*.astro'],
    languageOptions: {
      globals: pluginAstro.environments.astro.globals,
      parser: parserAstro,
      parserOptions: {
        parser: parserTypescript,
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
      },
    },
    processor: 'astro/client-side-ts',
    rules: {
      'import/newline-after-import': 'off',
      'style/semi': 'off',
      'astro/semi': ['error', 'never'],
    },
  },
  {
    name: 'aelita:astro:virtual:overwrite',
    files: ['**/*.astro/*.ts'],
    languageOptions: {
      parserOptions: {
        project: null,
      },
    },
    rules: {
      'ts/await-thenable': 'off',
      'ts/consistent-type-exports': 'off',
      'ts/dot-notation': 'off',
      'ts/no-confusing-void-expression': 'off',
      'ts/no-duplicate-type-constituents': 'off',
      'ts/no-floating-promises': 'off',
      'ts/no-for-in-array': 'off',
      'ts/no-implied-eval': 'off',
      'ts/no-misused-promises': 'off',
      'ts/no-unnecessary-boolean-literal-compare': 'off',
      'ts/no-unnecessary-condition': 'off',
      'ts/no-unnecessary-qualifier': 'off',
      'ts/no-unnecessary-type-assertion': 'off',
      'ts/no-unnecessary-type-constraint': 'off',
      'ts/no-unsafe-unary-minus': 'off',
      'ts/prefer-includes': 'off',
      'ts/prefer-nullish-coalescing': 'off',
      'ts/prefer-optional-chain': 'off',
      'ts/prefer-reduce-type-parameter': 'off',
      'ts/prefer-regexp-exec': 'off',
      'ts/prefer-return-this-type': 'off',
      'ts/prefer-string-starts-ends-with': 'off',
      'ts/promise-function-async': 'off',
      'ts/require-array-sort-compare': 'off',
      'ts/require-await': 'off',
      'ts/restrict-plus-operands': 'off',
      'ts/restrict-template-expressions': 'off',
      'ts/return-await': 'off',
      'ts/switch-exhaustiveness-check': 'off',
      'ts/unbound-method': 'off',
      'ts/prefer-find': 'off',
      'ts/no-unnecessary-template-expression': 'off',
      'ts/only-throw-error': 'off',
    },
  },
)
