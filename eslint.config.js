import antfu from '@antfu/eslint-config'
import tsparser from '@typescript-eslint/parser'
import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind'

export default antfu({
  ignores: [
    'submodules',
    '**/submodules/**',
  ],
  typescript: true,
  react: true,
  regexp: false,
  markdown: false,
}, {
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    'readable-tailwind': eslintPluginReadableTailwind,
  },
  rules: {
    // enable all recommended rules to warn
    ...eslintPluginReadableTailwind.configs.warning.rules,
    // enable all recommended rules to error
    ...eslintPluginReadableTailwind.configs.error.rules,

    // or configure rules individually
    'readable-tailwind/multiline': ['warn', { printWidth: 100 }],
  },
})
