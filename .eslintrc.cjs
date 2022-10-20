module.exports = {
  extends: [
    '@antfu',
  ],
  ignorePatterns: ['coverage/*', 'esm', 'docs'],
  rules: {
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    'no-console': 'off',
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs'],
  },
};
