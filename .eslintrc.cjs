module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    'jest/globals': true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: [
    'react-refresh',
    'jest'
  ],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': 'warn',
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-use-before-define': 'off',
    semi: ['error', 'always'],
    'semi-spacing': ['error', { after: true, before: false }],
    'semi-style': ['error', 'last'],
    'no-extra-semi': 'error',
    camelcase: 'off'
  },
  ignorePatterns: [
    'node_modules/*',
    'public/*',
    'dist/*'
  ]
};
