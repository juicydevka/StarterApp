module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    jest: true,
    browser: true,
    es2021: true,
  },
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'react-native',
    'react-hooks',
    'unused-imports',
    '@typescript-eslint',
  ],
  rules: {
    'prettier/prettier': 2,
    'react/react-in-jsx-scope': 0,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
