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


## 可索引接口



## 类类型接口



## 扩展&继承