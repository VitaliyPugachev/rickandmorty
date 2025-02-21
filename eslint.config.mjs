// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    '@typescript-eslint/no-unused-vars' : 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'vue/require-v-for-key': 'warn',
    'indent': ['error', 2],
  }
})
