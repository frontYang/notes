# 1. vue3 基础篇

## 1.1. 搭建项目

**1、vue-cli 最新版本**
如果本地有其他版本不方便全局升级，可以在局部安装一个最新的，然后改下 `\node_modules\.bin` 内 `vue` 和 `vue.cmd` 改成 `vue4`，`vue4.cmd` ，在将路径加入到`path`中，就可以全局使用 vue4 来创建 vue 项目

```txt
npm install -g @vue/cli
vue create 01-vue3-cli
cd 01-vue3-cli
vue add vue-next
npm run serve
```

**2、vite**

```txt
npm install -g create-vite-app
create-vite-app 01-vue3-vite
cd 01-vue3-vite
npm install
npm run dev
```

此次采用的 vue-cli 最新版本

## 1.2. 新特性

### 1.2.1. Composition API （组合式 api）

[官方文档](http://vue3js.cn/vue-composition/)

目的：

- 更好的逻辑复用与代码组织
- 更好的类型推导

#### 1.2.1.1. setup

setup 是新的选项，可以理解是 composition 的入口，函数内部在 beforeCreate 之前调用，函数返回的内容会作为模板渲染的上下文

#### 1.2.1.2. 手动 import

vue2 中的 data，methods，computed 都是挂在 this 上，不利于类型推导，如果一个项目没有用到对应的功能，代码也会被打包。

vue3 的手动 import 写法更利于 tree-shaking

#### 1.2.1.3. reactive

reactive 是把一个数据变成响应式

#### 1.2.1.4. ref

reactive 负责复杂的数据结构，ref 可以把基本的数据结构包装成响应式

### 1.2.2. Fragment

组件不再需要一个跟节点，这样就少了很多没有意义的 div，可以实现组件平级递归

### 1.2.3. Teleport

可以渲染 vue 组件到指定的 dom 节点，做弹窗比较有用，因为弹窗需要渲染到最外层 body 下面，否则嵌套过多，蒙层可能会被父元素的 transform 影响

```html
<template>
  <div class="confirm-modal">
    <button @click="isOpen = true">打开</button>

    <Teleport to="#foot-container">
      <div v-if="isOpen">
        <p>这是渲染在div的id为foot-container的内容</p>
        <button @click="isOpen = false">关闭</button>
      </div>
    </Teleport>
  </div>
</template>

<script>
  import {ref} from 'vue'

  export default {
    setup() {
      const isOpen = ref(false)
      return {
        isOpen,
      }
    },
  }
</script>
```

### 1.2.4. Suspense

异步组件，大概用法如下：

```html
<Suspense>
  <template #default>
    异步组件
  </template>
  <template #fallback>
    加载状态中的组件
  </template>
</Suspense>
```

## 1.3. 其他亮点

- 性能

  - 重写 vdom
  - 编译时优化
  - 更好的初始化性能
  - 和 vue2 相比，更新快了 1.2~2 倍
  - 和 vue2 相比，ssr 快了 2~3 倍

- tree shaking 支持，更小的文件大小
  - 文件大小变化很明显，22.5~13.5，如果是用 composition 新语法，只有 11.75kb
- 更好的 typescript 支持
- 自定义渲染器

## 1.4. 非兼容变更

- createApp

```js
import {createApp} from 'vue'

const app = createApp({})
```

- nextTick
  由于 vue2 的 nextTick 不能 tree-shaking，vue3 不再支持全局调用

```js
import {nextTick} from 'vue'

nextTick(() => {
  // 一些和DOM有关的东西
})
```

- v-model
  v-bind:sync 修饰符废除,可支持多个 v-model

```html
<ChildComponent v-model:title="pageTitle" v-model:content="pageContent" />

<!-- 简写: -->

<ChildComponent :title="pageTitle" @update:title="pageTitle = $event" :content="pageContent" @update:content="pageContent = $event" />
```

- template v-for

  - v-if 总是优先于 v-for 生效

- 声明周期重命名

  - destroyed 被重命名为 unmounted
  - beforeDestroy 被重命名为 beforeUnmount

- 按键修饰符调整

  - 不再支持使用数字 (即键码) 作为 v-on 修饰符
  - 不再支持 config.keyCodes

- 移除$on,$off,\$once

- 移除 filters

## 1.5. 支持的插件及工具

- vue-cli4.5 及以上 (release 版本)
- vue router 4.0 (release 版本)
- vuex 4.0 (rc 版)
- [devtool beta 版本](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg?hl=en)
  提示：beta 版本可能与 devtools 的稳定版本冲突，因此你可能需要暂时禁用稳定版本，以便 beta 版本正常工作，

## 1.6. 后续进度跟进

官方团队表示仍在开发 Vue 3 的专用迁移版本，该版本的行为与 Vue 2 兼容，运行时警告不兼容。如果计划迁移一个非常重要的 Vue 2 应用程序，建议等待迁移版本完成以获得更流畅的体验。
