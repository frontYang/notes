# React 学习记录

构建用户界面的Javascript库，主要用于构建UI界面

## 特点：

- 声明式设计
- 高效，采用虚拟DOM来渲染，最大限度的减少 DOM 的操作
- 灵活，跟其他库灵活搭配使用
- JSX，俗称js里面写html，javascript语法的扩展
- 组件化、模块化。代码容易复用
- 单向数据流，没有实现数据的双向数据绑定。数据 => 视图 => 事件 => 数据

---

## react脚手架

环境：Node >= 8.10 和 npm >= 5.6

```txt
npx create-react-app my-app
cd my-app
npm start
```

---

## react 元素渲染

使用jsx的写法，可以创建js元素对象

注意：jsx元素对象，或者组件对象，必须只有1个根节点

```jsx
let h1 = <h1>Hello</h1>
```


```jsx
function clock(){
  let time = new Date().toLocalTimeString()
  let element = (
    <div>
      <h1>{time}</h1>
    </div>
  )
  let root = document.querySelector('#root')
  ReactDOM.render(element, root)
}

clock()

setInterval(clock, 1000)

```

函数式组件渲染

```jsx
function Clock(props){
  return (
    <div>
      <h1>{props.date.toLocalTimeString()}</h1>
    </div>
  )
}

function run(){
  let root = document.querySelector('#root')
  ReactDOM.render(<Clock date={new Date}/>, root)
}

setInterval(run, 1000)

```

---

## React JSX

优点：

- JSX执行更快，编译为javascript代码时进行优化
- 类型更安全，编译过程如果出错就不能编译，及时出错
- jsx 编写模板更加简单快速


注意：

- jsx 必须要有根节点
- 正常的普通html元素要小写，如果是大写默认认为是一个组件

### JSX 表达式

- 由html元素构成
- 中间如果需要插入变量用 {}
- {} 中间可以使用表达式
- {} 中间表达时候中可以使用 JSX
- 属性和html内容一样都是用 {} 来插入内容
- HMTL的样式类型要写className，因为class在js中是一个关键词


```jsx
import React from 'react';
import './Test.css'

let man = 0

let color = 'bg-red'
let logo  ='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'

// HMTL的样式类型要写className，因为class在js中是一个关键词
let element1 = (
  <span className={color}>test0</span>
)

console.log(element1)

function Test1(){
  return (
    <div>
      <img width="50" src={logo}/>
      <h1>hello</h1>
      <h2>{1 + 1}</h2>
      <h1>world</h1>
      <h2>{man === 1 ? <button>test1</button>: element1}</h2>
    </div>
  )
}

export default Test1
```


### JSX style

- class， style中不可以存在多个class属性

```jsx
// 错误
<div className='hq' className={'active'}></div>
```

- style样式中，如果存在多个单词的属性组合，第二个单词开始，首字母大写。或者用引号引起来，否则会报错

```jsx
let styleObj = {
  background: 'skyblue',
  borderBottom: '1px solid red',
  'border-bottom': ''
}
```

- 多个类共存的操作

```jsx
let element2 = (
  <div>
    <h1 className={'abc' + classStr}></h1>
  </div>
)

let classStr = ['h1', 'h2'].join(' ')
let element3 = (
  <div>
    <h1 className={classStr}></h1>
  </div>
)
```

- 注释，必须在{}的表达式内书写，否则报错

```jsx
{/* 注释 */}
```


## React 组件

- 函数式组件

```jsx
let styleObj = {
  background: 'skyblue',
  borderBottom: '1px solid red'
}


let classStr = ['h1', 'h2'].join(' ')

function Test2(){
  return (
    <div>
      {/* 注释 */}
      <h1 style={styleObj}>style属性只能有一个，并且只能是对象</h1>
      <h1 className={classStr}></h1>
    </div>
  )
}
```


- 类组件

```jsx
class Test3 extends React.Component {
  render(){
    return (
      <div>
        <h1>类形式声明的组件</h1>
      </div>
    )
  }
}

```

- 复合组件：组件中又有其他的组件，复合组件中既可以有类组件又可以有函数组件

```jsx
class Test3 extends React.Component {
  render(){
    return (
      <div>
        <h1>类形式声明的组件</h1>
        <Test3Child piston="子组件醒醒  " />
      </div>
    )
  }
}

class Test3Child extends Test3 {
  render(){
    let {piston} = this.props
    return (
      <div>
        <h1>类形式声明的组件——子组件</h1>
        {piston}
      </div>
    )
  }
}

```

- 类组件与函数式组件的区别：

函数式比较简单，一般用于静态没有交互事件内容的组件页面
类组件，一般又称为动态组件，一般会有交互或者数据修改的操作


## React State (状态)

相当于vue2的data，但是使用方式跟vue不一样

## 数据传递

### 父传子
props
- 父传递给子组件数据，单向流动，不能子传递父
- props的传值，可以是任意的类型
- 可以设置默认值
- props 可以传递函数，props可以传递父元素 的函数，就可以修改父元素的state，从而传递数据给父元素

### 子传父
- 调用父元素的函数从而操作父元素的数据，从而实现数据从元素传递至父元素

## 事件
- 绑定事件的命名，驼峰命名法
- {} 传入一个函数
- 阻止默认行为时，必须使用e.preventDefault()
- 传参：
```jsx
<button onClick={(e) => this.toggleAcctive('其他参数1', '其他参数2', e)}>控制子元素是否显示</button>
```

## 条件渲染

和js中，条件运算 if...else... 三元运算符等一样

- 直接通过条件运算返回要渲染的jsx对象
- 通过条件运算得出jsx对象，再将jsx对象渲染到模板中

## 列表渲染

- 将列表内容拼装成数组放置到模板中
- 将数据拼装成数组的jsx对象 


```jsx
import React from 'react';

let arr = ['小明', '小黑']
let arrHtml = [<li>小明</li>,<li>小黑</li>]


class Test5 extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      list: [
        {
          title: 'title1',
          content: 'content1'
        },
        {
          title: 'title2',
          content: 'content2'
        }
      ]
    }
  }

  render(){
    let listArr = []
    for (let i = 0; i < this.state.list.length; i++) {
      const element = this.state.list[i];
      let item = (
        <li>
          <h3>{element.title}</h3>
          <p>{element.content}</p>
        </li>
      )
      listArr.push(item)
    }
    return (
      <div>
        <ul>{arrHtml}</ul>
        <ul>
          {listArr}
          
        </ul>
      </div>
    )
  }
}


export default Test5


```

- 用数组map方法，对每一项数据按照jsx的形式进行加工，最终得到1个每一项都是jsx对象的数组，再将数组渲染到模板中

```jsx
import React from 'react';

let arr = ['小明', '小黑']
let arrHtml = [<li>小明</li>,<li>小黑</li>]


class Test6 extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      list: [
        {
          title: 'title1',
          content: 'content1'
        },
        {
          title: 'title2',
          content: 'content2'
        }
      ]
    }
  }

  render(){
    /* let listArr = []
    for (let i = 0; i < this.state.list.length; i++) {
      const element = this.state.list[i];
      let item = (
        <li  key={i}>>
          <h3>{element.title}</h3>
          <p>{element.content}</p>
        </li>
      )
      listArr.push(item)
    } */
    let listArr = this.state.list.map((item, index) => {
      return (
        <li key={index}>
          <h3>{index}: {item.title}</h3>
          <p>{item.content}</p>
        </li>
      )
    })
  
    return (
      <div>
        {/* <ul key="ui1">{arrHtml}</ul> */}
        <ul>
          {listArr}          
        </ul>
      </div>
    )
  }
}


export default Test6


```