# KOA2

Koa -- 基于 Node.js 平台的下一代 web 开发框架

[官网](https://koa.bootcss.com/)

[源码](https://github.com/koajs/koa/)

## 简介&初始化项目

**官网简介**
Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并没有捆绑任何中间件， 而是提供了一套优雅的方法，帮助您快速而愉快地编写服务端应用程序。

**某网络文章**
“Koa 正在蚕食 Express 的市场份额，最大的原因是 Javascript 的语言特性==进化==，以及 Chrome V8 引擎的==升级== , 赋予了 Node.js 更大的能力，提升开发者的编程体验，满足开发者==灵活定制==的场景以及对于==性能提升==的需求 "

Koa 就是更新迭代的一个产物，提升性能和灵活性

Koa2 和 Express 简单对比：

Express：

- 大而全
- API 较为丰富
- 整个中间件模型是基于 callback 回调的

koa2：

- 小而精
- 扩展性好（不绑定任何中间件）
- 新语法特性

**初始化项目**

环境： **node v7.6.0** 或 **ES2015**及更高版本和 **async** 方法支持

```toml
#初始化项目
npm init -y

#nodemon 监听node命令实时刷新
npm i nodemon

#安装koa
npm i koa

#启动文件并监听node进程
nodemon node app.js
```

## async/await 语法

[文档](https://es6.ruanyifeng.com/#docs/async)

## Context 对象

`Koa` 提供一个 `Context` 对象，表示一次对话的上下文（包括 `HTTP` 请求和 `HTTP`响应）。通过加工这个对象，就可以控制返回给用户的内容。

使用 `Context.response.body` 属性发送给用户内容
通过 `app.use(function)` 将给定的中间件方法添加到此应用程序

## request&response

## 请求

### get

在 koa2 中 GET 请求通过 request 接收，但是接受的方法有两种：query 和 querystring。

- query：返回的是格式化好的参数对象。
- querystring：返回的是请求字符串。

### post

使用 `koa-bodyparse`中间件接收并解析 POST 请求
koa-bodyparser 中间件可以把 koa2 上下文的 formData 数据解析到 ctx.request.body 中

## 中间件

Koa 的最大特色，也是最重要的一个设计，就是中间件（middleware）

多个中间件会形成一个"先进后出"栈结构

### 中间件的合成

[`koa-compose`](https://www.npmjs.com/package/koa-compose)模块可以将多个中间件合成为一个

```js
const compose = require('koa-compose')

const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
  next()
}

const main = (ctx) => {
  ctx.response.body = 'Hello World'
}

const middlewares = compose([logger, main])
app.use(middlewares)
```

## 路由

### 原生路由

网站一般都有多个页面。通过`ctx.request.path`可以获取用户请求的路径，由此实现简单的路由

### koa-router

原生路由用起来不太方便，我们可以使用封装好的[`koa-router`](https://github.com/ZijianHe/koa-router)模块

### 重定向

有些场合，服务器需要重定向（redirect）访问请求。比如，用户登陆以后，将他重定向到登陆前的页面。`ctx.response.redirect()`方法可以发出一个 302 跳转，将用户导向另一个路由

## 静态资源加载

如果网站提供静态资源（图片、字体、样式表、脚本......），为它们一个个写路由就很麻烦，也没必要。[`koa-static`](https://www.npmjs.com/package/koa-static)模块封装了这部分的请求

## 错误处理

### 500 错误

如果代码运行过程中发生错误，我们需要把错误信息返回给用户。HTTP 协定约定这时要返回 500 状态码。Koa 提供了`ctx.throw()`方法，用来抛出错误，`ctx.throw(500)`就是抛出 500 错误

### 400 错误

如果将 ctx.response.status 设置成 404，就相当于 ctx.throw(404)

### 处理错误的中间件

为了方便处理错误，最好使用 try...catch 将其捕获。但是，为每个中间件都写 try...catch 太麻烦，我们可以让最外层的中间件，负责所有中间件的错误处理

```js
const handler = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500
    ctx.response.body = {
      message: err.message,
    }
  }
}

const main = (ctx) => {
  ctx.throw(500)
}

app.use(handler)
app.use(main)
```

### error 事件

运行过程中一旦出错，Koa 会触发一个`error`事件。监听这个事件，也可以处理错误

```js
const main = ctx => {
  ctx.throw(500);
};

app.on('error', (err, ctx) =>
  console.error('server error', err);
);
```

需要注意的是，如果错误被`try...catch`捕获，就不会触发`error`事件。这时，必须调用`ctx.app.emit()`，手动释放`error`事件，才能让监听函数生效

```js
const handler = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500
    ctx.response.type = 'html'
    ctx.response.body = '<p>Something wrong, please contact administrator.</p>'
    ctx.app.emit('error', err, ctx)
  }
}

const main = (ctx) => {
  ctx.throw(500)
}

app.on('error', function(err) {
  console.log('logging error ', err.message)
  console.log(err)
})
```

## cookie/session

## KOA2+Mockjs 实例
