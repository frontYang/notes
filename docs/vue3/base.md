# 基础篇

## 搭建项目

**1、vue-cli最新版本**
如果本地有其他版本不方便全局升级，可以在局部安装一个最新的，然后改下 `\node_modules\.bin` 内 `vue` 和  `vue.cmd` 改成 `vue4`，`vue4.cmd` ，在将路径加入到`path`中，就可以全局使用vue4来创建vue项目

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

此次采用的vue-cli最新版本

## 新特性

### Composition API （组合式api）

目的：
更好的逻辑复用与代码组织
更好的类型推导

- setup
- reactive
只能创建复杂数据类型的响应式状态

- ref
创建基础数据类型和复杂数据类型的响应式状态
ref这种写法简单，但也有弊端，只能监听一些如数字、字符串、布尔之类的简单数据

- ref vs reactive
当ref创建的是复杂数据类型的时候内部其实也是用reactive创建的。所以ref也是可以创建复杂数据类型的响应状态的，只是在setup中写法会有所不同。

使用单独的变量还是使用对象封装

是为了适应不同的写法的人群
ref只可以监听简单数据，reactive可以监听所有数据
使用方式不一样

### Fragment

组件不再需要一个跟节点

### Teleport

可以渲染vue组件到指定的dom节点，做弹窗比较有用

### Suspense

异步组件

## 非兼容变更

- createApp
- nextTick
- template v-for
- 声明周期重命名
- 按键修饰符调整
- 移除$on,$off,$once
- 移除filters

## 支持的库

- vue-cli4.5
- vue router 4.0
- vuex 4.0
- devtool beta版本

## 后续进度跟进
