module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    // <img/>とか<br/>を許容
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
      }
    }],
    //開発時 console.log()を許容
    'no-console': 'off'
  }
}
