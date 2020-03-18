# 单例模式



## 定义

保证一个类仅有一个实例，并提供一个访问它的全局访问点。

---



## javascript中的单例模式

javascript是一门无类的语言，通常会把全局变量来当做全局变量使用，但全局变量存在很多问题，很容易造成命名空间污染，使用命名空间和闭包能减少这种情况。

### 使用命名空间

#### 对象字面量方式

```js
var namespace1 = {
  a: function(){
    alert(1)
  },
  b: function(){
    alert(2)
  }
}
```



#### 动态创建命名空间

```js
var MyApp = {}
MyApp.namespace = function(name){
  var parts = name.split('.')
  var current = MyApp;
  for(var i in parts){
    if(!current[parts[i]]){
      current[parts[i]] = {}
    }
    current = current[parts[i]]
  }
}

MyApp.namespace('event')
MyApp.namespace('dom.style')

// 以上代码等同于
var MyApp = {
  event: {},
  dom: {
    style: {}
  }
}
```



### 使用闭包封装私有变量

这种方法把一些变量封装在闭包的内部，只暴露一些接口跟外界通信。如下实例中，_name 和 _age被封装在闭包产生的作用域中，外部是访问不到这两个变量的，这就避免了对全局的命令污染

```js
var user = (function(){
  var _name = 'sven'
  var _age = 29
  
  return {
    getUserInfo(){
      return _name + '-' + _age
    }
  }
})()
```



---

## 惰性单例

### 定义

惰性单例指的是在需要的时候才创建对象实例

 ```js
var createLoginLayer = (function(){
  var div;
  return function(){
    if(!div){
      div = document.createElement('div');
      div.innerHTML = '我是登录浮窗'
      div.style.display = 'none'
      document.body.appendChild(div)
    }
    return div
  }
})()

document.getElementById('loginBtn').onclick = function(){
  var loginLayer = createLoginLayer()
  loginLayer.style.display = 'block'
}
 ```





### 通用的惰性单例

上面代码的问题：

- 仍然违反单一职责原则的，创建对象和管理单例的逻辑都放在了createLoginLayer对象内部；

- 如果下次要创建页面中唯一的iframe时，或者script标签，用来跨域请求数据，就几乎再次抄一遍；



把不变的部分隔离出来，也就是把如何管理单例的逻辑从原来的代码中抽离出来；

```js
// 将创建div，iframe等函数用参数的形式传入getSingle
// 再返回一个新的函数
// 用变量result来保存fn的计算结果
// result变量因为在闭包中，所以永远都不会被销毁
// 如果result已经被赋值，那么它将返回这个值
var getSingle = function(fn){
  var result;
  return function(){
    return result || ( result = fn.apply(this, arguments) )
  }
}

// 插入div
var createLoginLayer = function(){
  var div = document.createElement('div');
  div.innerHTML = '我是登录浮窗'
  div.style.display = 'none'
  document.body.appendChild(div)
  return div
}

var createSingleLoginLayer = getSingle(createLoginLayer);

// 插入iframe
var createIframe = getSingle(function(){
  var iframe = document.createElement('iframe')
  document.body.qppendChild(iframe)
  return iframe
})

document.getElementById('loginBtn').onclick = function(){
  var loginLayer = createIframe()
  loginLayer.src = 'http://baodu.com'
}
```

