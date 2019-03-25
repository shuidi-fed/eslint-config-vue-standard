module.exports = {
  env: {
    node: true
  },
  extends: [
    require.resolve('eslint-plugin-vue/lib/configs/essential.js'),
    require.resolve('@vue/eslint-config-standard')
  ],
  parserOptions: {
    parser: require.resolve('babel-eslint')
  },
  globals: {
    '_': true
  }
}
