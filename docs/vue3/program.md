# vite2+vue3 全家桶+ant design vue

## 使用 vite 创建项目

```shell
# 创建项目（yarn）
yarn create @vitejs/app

# 创建项目（npm）
npm init @vitejs/app


# 创建集成vue的项目（yarn）**
yarn create @vitejs/app my-vue-app --template vue

# 创建集成vue的项目（npm 6.x）
npm init @vitejs/app my-vue-app --template vue

# 创建集成vue的项目（npm 7.x）
npm init @vitejs/app my-vue-app -- --template vue
```

---

## 配置 vite.config.js

1、别名定义：

```js
// vite.config.js

import path from 'path'
export default {
  // 别名定义
  alias: {
    '@': path.resolve(__dirname, 'src'),
    'comps': path.resolve(__dirname, 'src/components'),
    'styles': path.resolve(__dirname, 'src/styles'),
  },
}

// import HelloWorld from './components/HelloWorld.vue'
// 改成
// import HelloWorld from 'comps/HelloWorld.vue'
```

2、JSX 支持:

安装依赖

```shell
# yarn
yarn add @vitejs/plugin-vue-jsx -D

# npm
npm i @vitejs/plugin-vue-jsx -D
```

配置

```js
// vite.config.js
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
export default {
  plugins: [vue(), vueJsx()],
}
```

使用

```jsx
import {defineComponent} from 'vue'
import HelloWorld from 'comps/HelloWorld.vue'
import logo from './assets/logo.png'

// 2.用defineComponent定义组件且要导出
export default defineComponent({
  render: () => (
    <>
      <img alt="Vue logo" src={logo} />
      <HelloWorld msg="Hello Vue 3 + Vite" />
    </>
  ),
})
```

---

3、mockjs 模拟数据：

安装依赖

```shell
# yarn
yarn add mockjs -D
yarn add vite-plugin-mock cross-env -D

# npm
npm i mockjs -D
npm i vite-plugin-mock cross-env -D

```

配置

```js
// vite.config.js
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {viteMockServe} from 'vite-plugin-mock'
export default {
  plugins: [vue(), vueJsx(), viteMockServe({supportTs: false})],
}
```

改 dev 命令

```json
// package.json
{
  "script": {
    "dev": "cross-env NODE_ENV=development vite"
  }
}
```

---

## vue-router@next

安装依赖

```shell
#yarn
yarn add vue-router@next

#npm
npm i vue-router@next
```

新建文件 `src/router/index.js`，新添加 home.vue

```js
import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{path: '/', component: () => import('@/views/home')}],
})

export default router
```

`main.js` 引入 `router` 文件

```js
// main.js
import {createApp} from 'vue'
import App from './App'
import router from '@/router'

createApp(App)
  .use(router)
  .mount('#app')
```

修改 App.vue，引入路由组件

```jsx
// App.vue
import {defineComponent} from 'vue'
// 2.用defineComponent定义组件且要导出
export default defineComponent({
  render: () => (
    <>
      <router-view />
    </>
  ),
})
```

---

## vuex@next

安装依赖

```shell
#yarn
yarn add vuex@next

#npm
npm i vuex@next

```

新建文件 `src/store/index.js`

```js
import {createStore} from 'vuex'

export const store = createStore({
  state: {
    couter: 0,
  },
})
```

`main.js` 引入 `store` 文件

```js
import {createApp} from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
```

---

## sass

安装

```shell
#yarn
yarn add sass -D

#npm
npm i sass -D
```

新建文件夹 `src/styles/index.scss`

引入 `main.js` 内

```js
import '@/styles/index.scss'
```

---

## typescript 支持

安装

```
yarn add typescript -D
```

在根目录添加文件 `tsconfig.js`

```js
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "strict": true,
    "jsx": "preserve",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "baseUrl": ".",
    // 若有未使用的局部变量则抛错
    "noUnusedLocals": false,
    // 若有未使用的参数则抛错
    "noUnusedParameters": false,
    // 类型为any时，是否需要发出警告，设置true，则不警告
    "noImplicitAny": false,
    // 提供迭代器全面支持
    "downlevelIteration": true,
    // 去掉注解
    "removeComments": true,
    // 从tslib导入外部的辅助方法
    "importHelpers": true,
    // 遇到@internal注解时，不会触发代码定义
    "stripInternal": true,
    // 错误信息，跟踪信息将带有颜色和样式
    "pretty": true,
    // 如果不是函数中的所有路径都有返回值，则提示Error
    "noImplicitReturns": true,
    // 允许从没有设置默认导出的模块中默认导入
    "allowSyntheticDefaultImports": true,
    // 使用元数据特性
    "emitDecoratorMetadata": true,
    // 支持ES7的装饰器特性
    "experimentalDecorators": true,
    // 将严格校验switch-case语法
    "noFallthroughCasesInSwitch": true,
    // 严格null检查模式，null和undefined值不包含在任何类型里
    "strictNullChecks": true,
    // 保存上一次的编译信息，下一次进行增量更新
    "incremental": false,
    // 不生成定义文件d.ts
    "declaration": true,
    // 生成.map文件
    "sourceMap": false,
    // 跳过默认库检查
    "skipLibCheck": true,
    // 输出文件的根目录
    "outDir": "./dist",
    "types": [
      "webpack-env"
    ],
    "paths": {
      "@/*": [
        "src/*"
      ],
      "@ass/*": [
        "src/assets/*"
      ],
      "@img/*": [
        "src/assets/images/*"
      ],
      "@css/*": [
        "src/style/*"
      ],
      "@view/*": [
        "src/views/*"
      ],
      "@util/*": [
        "src/utils/*"
      ],
      "@api/*": [
        "src/utils/api/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  },
  "include": [
    "./src",
    "./typings/",
    "src/**/*.js",
    "src/**/*.ts",
    "src/**/*.vue",
    "src/**/*.tsx",
    // "tests/**/*.ts",
    //   "tests/**/*.t, "typings/shims-vue.d.ts"sx"
  ],
  "typings": "./typings/index.d.ts",
  "exclude": [
    "node_modules",
    "tslint:latest",
    "tslint-config-prettier",
    "mock"
  ]
}

```

在根目录添加 `shim.d.ts`

```ts
/* eslint-disable */
import type { DefineComponent } from 'vue'

declare module '*.vue' {
  const component: DefineComponent<{}, {}, any>
  export default component
}

```

把 `main.js` 修改成 `main.ts`

---

## UI 库（ant-design-vue@next）

安装

```shell
#yarn
yarn add ant-design-vue@next @ant-design/icons-vue

#npm
npm i ant-design-vue@next @ant-design/icons-vue

```

作为插件配置，添加文件 `plugins/ant-design-vue.js`（建议在每个 vue 文件内按需引入）

```js
// 完整引入
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

export default function(app) {
  // 完整引入
  app.use(Antd)

  // 按需引入
  // app.use(ElButton);
}
```

在 `main.js` 里面引入

```js
import {createApp} from 'vue'
import App from './App1.vue'
import router from '@/router'
import store from '@/store'
import '@/styles/index.scss'
import antDesign from '@/plugins/ant-design-vue'
const app = createApp(App)

antDesign(app)

app
  .use(router)
  .use(store)
  .mount('#app')
```

---

## eslint（代码校验）

安装依赖

```shell
yarn add eslint  eslint-plugin-prettier eslint-plugin-vue -D

```

配置规则，在新目录新增 `.eslintrc.js`

```js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
```

如需使用 typescript，则加入 typescript 校验规则：

增加`typescript`校验规则

```shell
yarn add @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

将 `eslintrc.js` 文件改成如下配置项，可根据自身项目来定义规则

```js
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'vue/custom-event-name-casing': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^h$',
        varsIgnorePattern: '^h$',
      },
    ],
  },
}
```

---

## stylelint（css 校验规则）

```shell
yarn add stylelint-config-rational-order stylelint-config-standard stylelint-declaration-block-no-ignored-properties stylelint-order -D

```

在根目录新增文件 `.stylelintrc.js`

```js
module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['function', 'if', 'each', 'include', 'mixin'],
      },
    ],
    'selector-pseudo-element-no-unknown': null,
    'comment-empty-line-before': null,
    'declaration-empty-line-before': null,
    'function-name-case': 'lower',
    'no-descending-specificity': null,
    'no-invalid-double-slash-comments': null,
    'rule-empty-line-before': 'always',
  },
  ignoreFiles: ['node_modules/**/*', 'build/**/*'],
}
```

---

## husky （git 提交规则）

安装依赖

```shell
yarn add husky lint-staged -D

```

在 `package.json` 中加入如下配置

```json
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,vue}": [
      "eslint --fix",
      "git add"
    ],
    "*.{css, scss,vue}": [
      "stylelint src/**/*.{css,scss} --syntax=scss --fix"
    ]
  }
```

---

## axios

安装

```shell
yarn add axios
```

封装导出

```js
// main.js
import {http, apis} from '@/api/index'
app.provide('$http', http)
app.provide('$apis', apis)

// 组件内

import {inject} from 'vue'

export default defineComponent({
  setup() {
    const $apis = inject('$apis')
    // $apis.get(url, {})
    // $apis.post(url, {})
  },
})
```

---

## 动态读取文件

```js
const routerFunc = import.meta.globEager('../views/**/router.js')

//列出所有路由文件
const routerList = Object.keys(routerFunc)
const routeMapList = []
routerList.forEach((val) => {
  const itemRouter = routerFunc[val].default
  if (Array.isArray(itemRouter)) {
    itemRouter.forEach((item) => {
      routeMapList.push(item)
    })
  } else {
    routeMapList.push(itemRouter)
  }
})
```

---

## 全局引用

建议使用 provide/inject

```js
// main.js
app.provide('$http', http)
app.provide('$apis', apis)
app.provide('$intf', intf)

// 组件
import {inject} from 'vue'
const $apis = inject('$apis')
const $intf = inject('$intf')
const $http = inject('$http')
```

---

## 遇到的问题

- 运行报错
  原因：引入组件时没有指定 .vue 后缀名

```txt
index:1 Failed to load module script: The server responded with a non-JavaScript MIME type of "text/html". Strict MIME type checking is enforced for module scripts per HTML spec.
```

- 这一步后报错了，没找到原因，暂时跳过 mock
  原因：需要将文件名换成 jsx，不使用.vue 后缀

```txt
> html:G:/WORK/git/qianduan/admin_vue3/src/App.vue: error: Unexpected "<"
    9 │     <>
      ╵     ^

error when starting dev server:
Error: Build failed with 1 error:
html:G:/WORK/git/qianduan/admin_vue3/src/App.vue:9:4: error: Unexpected "<"
    at failureErrorWithLog (G:\WORK\git\qianduan\admin_vue3\node_modules\esbuild\lib\main.js:1134:15)
    at buildResponseToResult (G:\WORK\git\qianduan\admin_vue3\node_modules\esbuild\lib\main.js:885:32)
    at G:\WORK\git\qianduan\admin_vue3\node_modules\esbuild\lib\main.js:980:20
    at G:\WORK\git\qianduan\admin_vue3\node_modules\esbuild\lib\main.js:541:9
    at handleIncomingPacket (G:\WORK\git\qianduan\admin_vue3\node_modules\esbuild\lib\main.js:630:9)
    at Socket.readFromStdout (G:\WORK\git\qianduan\admin_vue3\node_modules\esbuild\lib\main.js:508:7)
    at Socket.emit (events.js:315:20)
    at addChunk (internal/streams/readable.js:309:12)
    at readableAddChunk (internal/streams/readable.js:284:9)
    at Socket.Readable.push (internal/streams/readable.js:223:10)
```

- ant icon 警告：

```txt
warning.js:6 Warning: [antdv: Icon] Empty Icon
```

- 运行 mock 报错
  原因：配置了 tsconfig，但没有用到，删除 tsconfig 或者 忽略 mock 文件
  [vite:mock-server]:mock reload error!

- 加入 typescript 后 找不到模块“./App.vue”或其相应的类型声明
  原因：重启 vscode 后未重现

- ant design vue 全局换主题未生效，只改变了 a 标签的颜色，使用的 `vite-plugin-theme` 插件
  原因：？？？

---
