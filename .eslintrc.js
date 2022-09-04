module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // AirBnB Styleguide rules
    'airbnb-base',
    // Settings for Prettier
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  rules: {
    'no-empty-function': 'off',
    'no-useless-constructor': 'off',
    'import/extensions': 0,
    'linebreak-style': 0,
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
  },
};
