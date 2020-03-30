# vscode 配置 eslint 和 prettier 以及 git hooks 校验

## 配置 vscode

step1: `vscode` 安装扩展 `eslint` 和 `Prettier`

step2：打开 `vscode` 的设置，切换到 `json` 模式，加入如下设置：

```json
{
  // eslint
  "eslint.autoFixOnSave": true, // 保存自动修复
  "eslint.validate": [
    "javascript", //  用eslint的规则检测js文件
    "javascriptreact",
    {
      "language": "vue", // 检测vue文件
      "autoFix": true //  为vue文件开启保存自动修复的功能
    },
    {
      "language": "html",
      "autoFix": true
    }
  ],

  // prettier
  "editor.formatOnSave": true, // 保存自动修复
  "prettier.printWidth": 120, // 一行最大多少字符
  "prettier.tabWidth": 2, // tab占用的字符数
  "prettier.useTabs": false, // 是否使用tab代替空格
  "prettier.semi": false, // 是否每句后都加分号
  "prettier.singleQuote": true, // 是否使用单引号
  "prettier.jsxSingleQuote": false, // jsx是否使用单引号
  "prettier.trailingComma": "all", // 数组尾逗号。
  "prettier.bracketSpacing": false, // {foo: xx}还是{ foo: xx }
  "prettier.jsxBracketSameLine": false, //看官网
  "prettier.arrowParens": "always" //箭头函数参数是否使用括号
}
```

## 安装 eslint

step3：安装 `eslint` `eslint-plugin-html` ，如果需要用到 vue 规则，则可安装`eslint-plugin-vue`

```
yarn add -D eslint eslint-plugin-html eslint-plugin-vue
```

## 安装 prettier

step4：安装 `prettier` `pretty-quick`

```
yarn add -D prettier pretty-quick
```

## 配置 eslint

step5：在项目根目录下添加 文件 `.eslintrc.js`，内容如下：

```js
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true, //ignore eslint error: 'import' and 'export' may only appear at the top level
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  // required to lint *.vue files
  plugins: ['html', 'vue'],
  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    'accessor-pairs': 2,
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    'block-spacing': [2, 'always'],
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    camelcase: [
      0,
      {
        properties: 'always',
      },
    ],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': [2, 'last'],
    'constructor-super': 2,
    curly: [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    eqeqeq: [2, 'allow-null'],
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    'handle-callback-err': [2, '^(err|error)$'],
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-console': 'off',
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-control-regex': 0,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [
      2,
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],
    'no-lone-blocks': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 1,
      },
    ],
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false,
      },
    ],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none',
      },
    ],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'one-var': [
      2,
      {
        initialized: 'never',
      },
    ],
    'operator-linebreak': [
      2,
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    'padded-blocks': [2, 'never'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    semi: [2, 'never'],
    'semi-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false,
      },
    ],
    'spaced-comment': [
      2,
      'always',
      {
        markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','],
      },
    ],
    'template-curly-spacing': [2, 'never'],
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    'yield-star-spacing': [2, 'both'],
    yoda: [2, 'never'],
    'prefer-const': 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'object-curly-spacing': [
      2,
      'always',
      {
        objectsInObjects: false,
      },
    ],
    'array-bracket-spacing': [2, 'never'],
  },
}
```

## 配置 prettier

step6：在项目根目录下添加 文件 `.prettierrrc`，内容如下：

```json
{
  "printWidth": 120, // 一行最大多少字符
  "tabWidth": 2, // tab占用的字符数
  "useTabs": false, // 是否使用tab代替空格
  "semi": false, // 是否每句后都加分号
  "singleQuote": true, // 是否使用单引号
  "jsxSingleQuote": false, // jsx是否使用单引号
  "trailingComma": "all", // 数组尾逗号。
  "bracketSpacing": false, // {foo: xx}还是{ foo: xx }
  "jsxBracketSameLine": false, //看官网
  "arrowParens": "always" //箭头函数参数是否使用（）
}
```

## 增加 husky 校验

step7：如有需要可在 `package.json` 增加 `husky`, 用于提交 git 前校验是否符合规则

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.{js,vue}": ["prettier --write", "eslint --fix", "git add"]
  }
}
```
