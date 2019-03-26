# Eslint config vue standard

Use eslint same as @vue/cli3 standard config with one dependence

[![NPM Version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/eslint-config-vue-standard.svg
[npm-url]: https://www.npmjs.com/package/eslint-config-vue-standard

## usage

1. yarn add -D eslint eslint-config-vue-standard

2. config

```json
  "eslintConfig": {
    "root": true,
    "extends": [
      "vue-standard"
    ]
  }
```

## includes

- plugins: eslint-plugin-vue(essential) @vue/eslint-config-standard

- parser: babel-eslint