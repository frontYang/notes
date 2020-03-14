# 数据类型

在typescript中主要提供了以下的数据类型


- 布尔类型 `boolean`
- 数字类型 `number`
- 字符串类型 `string`
- 数组类型 `array`
- 元组类型 `tuple` (属于数组的一种，能给数组中每一个元素指定类型)
- 枚举类型 `enum`
- 任意类型 `any`
- `null` 和 `undefined`
- `void` 类型
- `never` 类型


typescript 中为了使编写的代码更规范，更有利于维护，增加了**类型校验**，如果没有指定类型，编译时会报错，并且不能将声明了的变量赋值给其他的类型。各个数据类型的声明格式如下：

## boolean & number & string
``` ts
/* boolean */
let flg: boolean = false

/* number */
let num: number = 1

/* string */
let str: string = 'ts'
```

## array & tuple
```ts
/* array 方式一 */
let arr1: number[] = [1, 2]  // 指定数组里面所有的元素都是number类型
/* array 方式二*/
let arr2: Array<number> = [1, 2, 3] // 指定数组里面所有的元素都是number类型

/* 元组 tuple  */
let arr: [number, string] = [123, 'ts']
```

## enum
```ts
/* enum 枚举 */
// 如果标识符有赋值，则取值
enum Flg {
  success = 1,
  error = 0
}
let a: Flg = Flg.success
let b: Flg = Flg.error
console.log(a) // 1
console.log(b) // 0

// 如果标识符没有赋值，则取下标
enum Color {
  blue, red, orange
}
let c: Color = Color.red
console.log(c) // 1

// 常用于状态码
enum Err {undefined = -1, null = -2, success = 1}
let e: Err = Err.null
console.log(e) // -2
```

## any
```ts
/* any , 任意类型可以随意赋值其他的类型*/
let num: any = 123
num = 'ts'
num = true
// 用处，获取dom节点,如果不指明类型会报错
let obj: any = document.getElementById('obj')
obj.style.color = 'red'
```

## null & undefined
```ts
/* null  undefined */
let num: number;
console.log(num) // undefined, 报错

let num: undefined;
console.log(num) // undefined, 不报错

// 一个元素可能是number 可能是undefined
let num: number | undefined
console.log(num) // undefined, 不报错
num = 123
console.log(num) // 123

let num: null
num = 123

// 一个元素可能是number 可能是undefined, 可能是null
let num: number | null | undefined
num = 123
```

## void
```ts
/* void， 表示没有任何类型，常用于方法没有返回值 */
function run(): void{
 console.log(111)
}
```

## never
```ts
/* never 其他类型，代表从不出现的值 , 也就是说never只能被never类型赋值 */
let a: never
a = 123 // 报错

a = (() => {
  throw new Error()
})()  // 不报错
```