# 函数

typescript的函数跟javascript唯一的区别也是增加了类型校验

- 函数声明法
```ts
// 指定返回类型
function fn(): string{
  return 'fn'
}
```

- 匿名函数
```ts
var fn2 = function(): string{
  return 'fn2'
}
```

- 没有返回值的函数
```ts
function fn4(): void{
  console.log(111)
}
```

- 传参函数
```ts
function fn3(name: string, age: number): string{
  return `${name}: ${age}`
}
```

- 可选参数
javascript里面方法的实参和形参可以不一样，但是ts中必须一样，如果不一样就需要配置可选参数【可选参数必须配置到参数的最后面】

```ts
function fn(name: string, age?: number): string{
  return age ? `${name}：${age}` : `${name}`
}
```

- 默认参数

```ts
function fn(name: string, age: number = 20): string{
  return age ? `${name}：${age}` : `${name}`
}

```












