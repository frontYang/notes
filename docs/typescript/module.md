# 模块

在ts中，“内部模块”称为“命名空间”，“外部模块”称为“模块”，模块在其自身的作用域中执行，而不在全局作用域里，除非用`export`的形式导出，同样的，如果想使用其它模块导出的变量，则需要用`import`导入。

简而言之，我们可以把一些公共的功能单独抽离成一个文件作为模块，模块里面的变量、函数和类等默认都是私有的，如果我们要在外部访问模块里面的数据，需要通过`export`暴露模块里面的数据，在外部文件我们可以通过`import`引入模块就可以使用暴露的数据

## 导出
### 导出声明
```ts
export function getNum():number {
  return 123
}
```

### 导出语句
```ts
function getNum():number {
  return 123
}
export { getNum }
```

### 重新导出
```ts
function getNum():number {
  return 123
}

export {
  getNum as get // 对外暴露的名称是get
}
```

### 默认导出
- 每个模块都可以有一个并只能有一个`default`导出，默认导出通常用于只有一个数据需要导出的情况;
- 类和函数声明可以直接被标记为默认导出。 标记为默认导出的类和函数的名字是可以省略的;

```ts

// JQuery.d.ts
declare let $: JQuery;
export default $;

// app.ts
import $ from "JQuery";

```


## 导入
### 导入一个模块中的某个导出内容

```ts
import { getNum } from './util'

getNum()
```


### 重命名导入内容
```ts
import { getNum as get } from './util'

get()
```


### 将整个模块导入一个变量，并通过它来访问模块
```ts
import * as util from './util'

util.getNum()
```


### 不推荐的导入方式
尽管不推荐这么做，一些模块会设置一些全局状态供其它模块使用。 这些模块可能没有任何的导出或用户根本就不关注它的导出。 使用下面的方法来导入这类模块：
```ts
import './util'

```
