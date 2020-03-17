# 接口
## 作用
- 接口是一种规范的定义，定义了行为和动作的规范；


## 定义
```ts
interface FullName {
  firstName: string;
  lastName: string;
  middleName?: string; // 可选属性
  readonly age: number; // 只读属性：只能在对象刚刚创建的时候修改其值
}
```

## 属性接口
```ts
interface FullName {
  firstName: string;
  lastName: string;
  middleName?: string;
  readonly age: number;

function getFullName(config: FullName){
  config.age = 10 // 编译报错：Cannot assign to 'age' because it is a read-only property
  console.log(`${config.firstName} - ${config.middleName} - ${config.lastName}`)
}

getFullName({
  age: 2,
  firstName: 'anna',
  lastName: 'an',
  middleName: 'qq'
})  // anna - an - qq
```


## 函数接口
```ts
interface SearchFunc {
  (source: string, subString: string): boolean;
}

// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配
let mySearch: SearchFunc = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
}

mySearch('aaa', 'ccc') // false
```


## 可索引接口(不常用)
```ts
// 当用 number去索引StringArray时会得到string类型的返回值。

interface StringArray {
  [index: number]: string
}

let myArray: StringArray = ["Bob", "Fred"]

let myStr: string = myArray[0]

```

## 类类型接口
```ts
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

```


## 扩展&继承
和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。
```ts
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
```


一个接口可以继承多个接口，创建出多个接口的合成接口。
```ts
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
```


> 可索引接口，类类型接口、混合类型、接口继承类 不是太明白，以后再返回来学习这一部分，先做个标记:new_moon_with_face:
