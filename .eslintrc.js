module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:vue/vue3-recommended', // Use vue3-recommended instead of react/recommended
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.vue', '*.ts'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        project: './tsconfig.json',
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
      },
    },
  ],
  plugins: ['vue', '@typescript-eslint', 'unused-imports'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    'unused-imports/no-unused-imports': 'error',
    'vue/multi-word-component-names': 'off',
  },
  ignorePatterns: ['vite.config.ts', 'build/*', 'tailwind.config.js', 'postcss.config.js'],
}
