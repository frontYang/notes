## react入门

React基础

React-Router => 路由

PubSub =>  消息管理库

Redux => 集中式状态管理

Ant-Design => ui 组件库



### React基础



react是什么？

> 用于构建用户界面的javascript库（react只关注视图，只管页面的呈现） =》
>
> 是一个将数据渲染为html视图的开源javascript库



谁开发的？

> 由facebook开发，且开源（2013年）



为什么学？

> 原生js操作DOM繁琐，效率低（dom api 操作ui）
>
> 使用js直接操作dom，浏览器会进行大量的重绘重排
>
> 原生js没有组件化的编码方案，代码复用率低



react特点

> 采用组件化模式、声明式编码，提高开发效率及组件复用率
>
> 在React Native中可以使用React语法进行移动端开发
>
> 使用虚拟DOM+优秀的Diffing算法，尽量减少与真实DOM的交互



学react之前要掌握的js基础知识

> 判断this的指向
>
> class（类）
>
> ES6语法规范
>
> npm包管理器
>
> 原型、原型链
>
> 数据常用方法
>
> 模块化



### React基本使用



HelloWorld

```js
```



相关js库

> react.js: react核心库
>
> react-dom.js: 提供操作DOM的react扩展库
>
> babel.min.js: 解析解析、jsx语法代码转成js代码的库



虚拟dom的创建方式（jsx）

```jsx
// 创建虚拟dom
const VDOM = (
  <h1>
    <span>Hello</span>
  </h1>
)

// 渲染虚拟DOM到页面
ReactDom.render(VDOM, document.getElementById('#app'))
```



虚拟dom的创建方式（js）,一般不用

```js
// 创建虚拟dom
const VDOM = React.createElement('h1', {id: 'title'}, 'Hello')

// 渲染虚拟DOM到页面
ReactDom.render(VDOM, document.getElementById('#app'))
```



虚拟DOM

>1、本质是Object类型的对象（一般对象）
>
>2、虚拟DOM比较“轻”，真是DOM比较“重”，因为虚拟DOM是react内部在使用，无需真实DOM那么多的属性
>
>3、虚拟DOM最终会被react转换为真是DOM，呈现在页面上



### React JSX



JSX介绍

> 1、全称：Javascript XML
>
> 2、React定义的一种类似于XML的js扩展语法：JS+XML
>
> 3、本质是React.createElement(component, props, ...children) 方法的语法糖
>
> 4、作用：用来简化创建虚拟DOM
>
> ​	（1）写法：var ele = <h1>Hello</h1>
>
> ​	（2）注意一：它不是字符串，也不是HTML/XML标签
>
> ​	（3）注意二：它最终产生的就是一个js对象
>
> 5、标签名任意：HTML标签或其他标签

规则

> 1、定义虚拟DOM时，不需要写引号
>
> 2、标签中混入js表达式时要用 {}【注意区分js语句（代码）和js表达式】
>
> ​	（1）表达式：一个表达会产生一个值，可以放在任何一个需要值的地方
>
> ​				例如：a，a+b、demo(1)、arr.map()、function test(){}
>
> ​	（2）语句（代码）：
>
> ​				例如：if，for(){}，switch(){case:xxx}
>
> 3、样式的类名指定不要用class，而要用className
>
> 4、内联样式，要用style={{key: value}} 的形式写
>
> 5、只能有一个根标签
>
> 6、标签必须闭合
>
> 7、标签首字母
>
> ​	（1）若小写字母开头，则将标签转为html中同名元素，若html中无该标签对应的同名元素，则报错
>
> ​	（2）若大写字母开头，react就去渲染对应的组件，如果没有对应，则报错



### 模块与组件、模块化与组件化的理解

模块

> 理解：向外提供特定功能的js程序，一般就是一个js文件
>
> 为什么要拆模块：随着业务的逻辑增加，代码越来越多且复杂
>
> 作用：复用js，简化js的编程，提交js运行效率



组件

> 理解：用来实现布局功能效果的代码和资源集合
>
> 为什么：一个界面的功能更复杂
>
> 作用：复用编码，简化项目编码，提高运行效率



模块化

> 当应用的js都以模块来编写的，这个应用就是一个模块化应用



组件化

> 当应用是以多个组件的方式实现，这个应用就是一个组件化的应用



## React面向组件编程

### 基本理解和使用



使用react开发者工具（react developer tool）

函数式组件：用函数定义的组件（适用于【简单组件】的定义）

```jsx
// 创建函数式组件
function MyComponent(){
  console.log(this)// undefined, 因为babel编译后开启严格模式
  return <h2>我是函数式组件</h2>
}
// 渲染组件到页面
ReactDOM.render(<MyComponent/>, document.getElementById('app'))
/*
执行了 ReactDOM.render(<MyComponent/>。。。。 之后，发生了什么
1、React解析组件标签，找到MyComponent组件
2、发现组件是函数定义的，随后调用该函数，将返回的虚拟dom转为真实dom，然后呈现在页面中
*/
```



类式组件：用类定义的组件（适用于【复杂组件】的定义）

类的基本知识：

> 1、类中的构造器不是必须写的，要对实例进行一些初始化的操作，如添加指定属性时才写
>
> 2、如果A类继承了B类，且A类中写了构造器，那么A类构造器中的super是必须要调用的
>
> 3、类中所定义的方法，都是放在了类的原型对象上，供实例去使用
>
> 4、类中的方法this指向：类中的方法默认开启了局部的严格模式
>
> 5、类中可以直接写赋值语句
>
> ```
> class A{
> 	...
> 	// 给实例对象A添加属性a
> 	a = 1	
> 	...
> }
> ```



```jsx
// 创建类式组件
class MyComponent extends React.Component {
  render(){
    // render是放在类（MyComponent）的原型对象上，供实例使用
    // render中的this是MyComponent的实例对象（MyComponent组件实例对象）
    return (
      <h2>我是类式组件</h2>
    )
  }
}
// 渲染组件
ReactDOM.render(<MyComponent/>, document.getElementById('app'))
/*
执行了 ReactDOM.render(<MyComponent/>。。。。 之后，发生了什么
1、React解析组件标签，找到MyComponent组件
2、发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render方法
3、将render返回的虚拟DOM转为真实DOM，随后呈现在页面中
*/
```



### 组件的三大核心属性1：state

```jsx
// 创建类式组件
class Wether extends React.Component {
  // 构造器调用几次？———— 1次
  constructor(props){
    super(props)
    // 初始化状态
    this.state = {
      isHot: true,
      wind: '微风'
    }
    // 解决changeWeather的this指向
    this.changeWeather = this.changeWeather.bind(this)
  }
  // render调用几次？————1+n次（1是初始化的那次，n是状态更新的次数）
  render(){
    // 读取状态
    let {isHot, wind} = this.state
    return (
      <h2 onClick={this.changeWeather}>多云{isHot ? '炎热' : '凉爽'}， {wind}</h2>
    )
  }
  // changeWeather调用几次————点几次调用几次
  changeWeather(){
    // changeWeather放在Weather的原型对象上，供实例使用
    // 由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用
    // 类中的方法默认开启了局部的严格模式，所以changeWeather中的this为undefined
    /* 解决this指向问题：bind  	
    */
	// console.log(this) // undefined
    const isHot = this.state.isHot
    // 注意：状态（state）不能直接更改
	 	// this.state.isHot = !isHot // 错误写法
    
    // 状态必须通过setState进行更新，且更新是一种合并，不是替换
    this.setState({isHot: !isHot})
    
  }
}
// 渲染组件
ReactDOM.render(<Wether/>, document.getElementById('app'))

```

简写

```jsx
// 创建类式组件
class Wether extends React.Component {
  // 初始化状态
  state = {
      isHot: true,
      wind: '微风'
  }

  render(){
    let {isHot, wind} = this.state
    return (
      <h2 onClick={this.changeWeather}>多云{isHot ? '炎热' : '凉爽'}， {wind}</h2>
    )
  }

	// 自定义方法——要用赋值语句的形式+箭头函数
  changeWeather = () => {
    const isHot = this.state.isHot
    this.setState({isHot: !isHot})    
  }
}
// 渲染组件
ReactDOM.render(<Wether/>, document.getElementById('app'))

```

> state是组件对象最重要的属性，值是对象（可以包含多个key-value的组合）
>
> 组件被称为“状态机”，通过更新组件的state来更新对应的页面显示（重新渲染组件）
>
> 注意事项：
>
> 1、组件中render方法中的this为组件实例对象
>
> 2、组件自定义的方法中this为undefined，如果解决
>
> ​	（1）强制绑定this，通过函数对象的bind()
>
> ​	（2）箭头函数
>
> 3、状态数据不能直接更改或更新，需要通过setState({key: value})



### 组件的三大核心属性2：props

```jsx
// 创建组件
class Person extends React.Component{
  render(){
    // props是只读的
    let {name, sex, age} = this.props
    return (
			<ul>
				<li>姓名：{name}</li>
 				<li>性别：{sex}</li>
 				<li>年龄：{age}</li>
      </ul>
    )
  }
}
// 对属性标签属性进行限制
// 15.XXX之前 React.PropTypes能用
// 16.xxx之后 React.PropTypes报错，需要引入prop-types库，之前通过PropTypes调用
Person.propTypes = {
  // 必传且限制为字符串
  name: PropTypes.string.isRequired,
  // 限制为数值
  age: PropTypes.number,
  // 限制为字符串
  sex: PropTypes.string,
  // 限制为函数
  speak: PropTypes.func
}
// 指定默认标签属性值
Person.defaultProps = {
  sex: '男',
  age: 18
}
// 渲染组件
// ReactDOM.render(<Person name="tom" age="18" sex="女"/>, document.getElementById('app'))

// 批量传递数据
let p = {name: 'tom', age: 18, sex: '女'}
ReactDOM.render(<Person {...p}/>, document.getElementById('app'))
```

简写

```jsx
// 创建组件
class Person extends React.Component{
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string,
    speak: PropTypes.func
  }
  static defaultProps = {
    sex: '男',
    age: 18
  }
  render(){
    let {name, sex, age} = this.props
    return (
			<ul>
				<li>姓名：{name}</li>
 				<li>性别：{sex}</li>
 				<li>年龄：{age}</li>
      </ul>
    )
  }
}

// 渲染组件
// ReactDOM.render(<Person name="tom" age="18" sex="女"/>, document.getElementById('app'))

// 批量传递数据
let p = {name: 'tom', age: 18, sex: '女'}
ReactDOM.render(<Person {...p}/>, document.getElementById('app'))
```





### 组件的三大核心属性3：refs与事件处理









