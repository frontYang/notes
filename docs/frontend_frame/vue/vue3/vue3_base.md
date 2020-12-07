# 基础篇

## 怎么开始搭建vue3

1、vue-cli最新版本
如果本地有其他版本不方便全局升级，可以在局部安装一个最新的，然后改下 `\node_modules\.bin` 内 `vue` 和  `vue.cmd` 改成 `vue4`，`vue4.cmd` ，在将路径加入到`path`中，就可以全局使用vue4来创建vue项目

```txt
npm install -g @vue/cli
vue create 01-vue3-cli
cd 01-vue3-cli
vue add vue-next
npm run serve
```

2、webpack

```txt
git clone https://github.com/vuejs/vue-next-webpack-preview.git 01-vue3-webpack
cd 01-vue3-webpack
npm install
npm run dev
```

3、vite

```txt
npm install -g create-vite-app
create-vite-app 01-vue3-vite
cd 01-vue3-vite
npm install
npm run dev
```

此次采用的vue-cli最新版本

## vue3有哪些新功能 以及与vue2有哪些区别

- Composition API
  - setup
  - reactive
  - computed
  - 全局import
  - ref
  - 组合

- Fragment
- Teleport
- Suspense

## 各类配件的兼容情况

## 怎么进行迁移

## 后续进度跟进
