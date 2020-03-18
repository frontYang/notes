# 泛型
泛型就是解决 类 接口 方法的复用性 以及对不确定类型的支持


## 泛型变量
实现传入的参数类型和返回的参数类型一致
```ts
// 普遍用 T 表示泛型，具体什么类型是调用这个方法的时候决定的
function getData<T>(value: T): T{
  return value
}

// 第一种调用方式
getData<number>(123)
getData<number>('123') // 报错

// 第二种调用方式，这种方式更普遍
// 利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型
getData(123)

```

## 泛型类

```ts
class MinClass<T> {
  public list:<T>[];
  add(value:T): void {
    this.list.push(value)
  }
  min(): T{
    var minNum = this.list[0]
    for(var i = 0; i < this.list.length; i++){
      if(minNum > this.list[i]){
        minNum = this.list[i]
      }
    }
    return minNum
  }
}

var m2 = new MinClass<number>() // 实例化类，指定T类型是number
m2.add(1)
m2.add('1') // 报错

```

## 泛型接口
方式一：
```ts
interface ConfigFn {
  <T>(value: T): T;
}

var setData: ConfigFn = function<T>(value: T): T{
  return value
}

setData<string>('name')
```

方式二：
```ts
interface ConfigFn<T> {
  (value: T): T;
}

var setData: ConfigFn = function<T>(value: T): T{
  return value
}

setData<string>('name')
```