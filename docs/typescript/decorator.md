# 装饰器
装饰器是一种特殊类型的声明，能够被附加到类声明、方法、属性或参数上，可以修改类的行为。也就是说装饰器其实就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能


## 类装饰器
类装饰器不能传参
```ts
function logClass(params:any){
  console.log(params) // [Function: HttpClient], 当前类

  // 动态扩展
  params.prototype.apiUrl = 'http:///'
  params.prototype.run = function(){
    console.log('run')
  }
}


@logClass
class HttpClient {
  constructor() {}
  getData() {}
}

var http = new HttpClient()
console.log(http.apiUrl) // http:///
http.run() // run

```

## 装饰器工厂
装饰器工厂能传参，比较常用

```ts
function logClass(params:string){
  return function(target: any){
    console.log(target) // [Function: HttpClient]
    console.log(params) // http:///

    target.prototype.apiUrl = params
  }
}


@logClass('http:///')
class HttpClient {
  constructor() {

  }
  getData() {

  }
}

var http = new HttpClient()
console.log(http.apiUrl) // http:///
```

## 属性装饰器
属性装饰器表达会在运行时当做函数被调用，传入下列两个参数：
- 对于静态成员来说是类的构造函数，对于实力成员是类的原型对象
- 成员的名字

```ts
function logProp(params: any){
  return function(target: any, attr: any){
    console.log(target) // HttpClient { getData: [Function] }
    console.log(attr) // url
    console.log(params) // http://

    target[attr] = params
  }
}


class HttpClient {
  @logProp('http://')
  public url: any | undefined;

  constructor() {

  }
  getData() {
    console.log(this.url) // http://
  }
}

let h = new HttpClient()
h.getData()

```


## 方法装饰器
方法装饰器会被应用到方法的属性描述符上，可以用来监视、修改或替换方法定义
方法装饰器会在运行时传入下列3个参数：
- 对于静态成员来说是类的构造函数，对于实力成员是类的原型对象
- 成员的名字
- 成员的属性描述符

```ts
function getFn(params: any){
  return function(target: any, methodName: any, desc: any){
    console.log(target) // HttpClient { getData: [Function] }
    console.log(methodName) // getData
    console.log(desc) // 如果代码输出目标版本小于ES5，属性描述符将会是undefined。
    console.log(desc.vaule) // 当前方法

    target.apiUrl = 'http://'
    target.run = function(){
      console.log('run')
    }

    // 替代方法
    /* var oFn = desc.value
    desc.value = function(...args: any[]){
      args = args.map((value) => {
        return String(value)
      })

      console.log(args) // ['123', 'xxx']
    } */

    // 修改方法
    /* var oFn = desc.value
    desc.value = function(...args: any[]){
      args = args.map((value) => {
        return String(value)
      })
      console.log(args) // ['123', 'xxx']
      oFn.apply(this, args)
    } */
  }
}

class HttpClient {
  public url: any | undefined;
  constructor() {}
  @getFn('http://')
  getData() {
    console.log('getData', this.apiUrl) // getData http://
  }
}

let a = new HttpClient()
console.log(a.apiUrl) // http://
a.getData()

// 修改方法，两个方法的值都会打印，先打印修改的，后打印原来的
// 替换方法：只打印覆盖的方法的内容
// a.getData(123, 'xx')

```

## 参数装饰器
参数装饰器表达式会在运行时当做函数被调用，可以使用参数装饰器为类的原型增加一些元素数据，传入下列三个参数：
- 对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象
- 参数的名字
- 参数在函数参数列表中的索引
```ts
function getParams(params: any){
  return function(target: any, methodName: any, index: any){
    console.log(params) // xxxx
    console.log(target) // HttpClient { getData: [Function] }
    console.log(methodName) // getData
    console.log(index) // 0

    target.apiUrl = params
  }
}

class HttpClient {
  public url: any | undefined;
  constructor() {}

  getData(@getParams('xxxx') id: any) {
    console.log(id) // 123
  }
}

var a = new HttpClient()
a.getData(123)
console.log(a.apiUrl) // xxxx

```


## 装饰器的执行顺序
执行顺序：属性装饰器 》方法装饰器 》参数装饰器 》类装饰器
如果有多个同样的装饰器，它会先执行后面的装饰器

```ts
function logClass1(params:any){
  return function(target: any){
    console.log('类装饰器1')
  }
}
function logClass2(params:any){
  return function(target: any){
    console.log('类装饰器2')
  }
}
function logAttr(params?:any){
  return function(tartet: any, attr: any){
    console.log('属性装饰器')
  }
}
function logMethod(params?:any){
  return function(target: any, methodName: any, desc: any){
    console.log('方法装饰器')
  }
}
function logParams1(params?:any){
  return function(target: any, methodName: any, index: any){
    console.log('参数装饰器1')
  }
}
function logParams2(params?:any){
  return function(target: any, methodName: any, index: any){
    console.log('参数装饰器2')
  }
}


@logClass1('1111')
@logClass2('2222')
class HttpClient {
  @logAttr()
  public apiUrl: string | undefined

  constructor() {}

  @logMethod()
  getData() {
    return true
  }

  setData(@logParams1() attr1: any, @logParams2() attr2: any){

  }
}
// log：
// 属性装饰器
// 方法装饰器
// 参数装饰器2
// 参数装饰器1
// 类装饰器2
// 类装饰器1
```




