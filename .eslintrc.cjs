const newLineItem = [
  'break',
  'case',
  'cjs-export',
  'cjs-import',
  'class',
  'continue',
  'debugger',
  'default',
  'directive',
  'do',
  'empty',
  'export',
  'for',
  'function',
  'iife',
  'switch',
  'throw',
  'try',
  'var',
  'while',
  'with',
  'import',
];

const afterNewLineItem = [...newLineItem];

const beforeNewLineItem = ['return', ...newLineItem];

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react', 'prettier', 'import'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'newline-after-var': [2, 'always'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: beforeNewLineItem },
      { blankLine: 'always', prev: afterNewLineItem, next: '*' },
      { blankLine: 'any', prev: afterNewLineItem, next: afterNewLineItem },
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^h$|^_' }],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@vitejs/**',
            group: 'builtin',
          },
        ],
        pathGroupsExcludedImportTypes: ['@vitejs/**'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
};
