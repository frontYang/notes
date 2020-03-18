# this、call和apply

## this

this的指向

丢失的this

---



## call和apply

### 区别：传参方式不同



- func.apply(thisArg, [argsArray])
```
（1）thisArg：
可选的。在 func 函数运行时使用的 this 值。请注意，this可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。

（2）argsArray
可选的。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 func 函数。如果该参数的值为 null 或  undefined，则表示不需要传入任何参数。从ECMAScript 5 开始可以使用类数组对象。
```

- func.call(thisArg, arg1, arg2, ...)
```
（1）thisArg：在 fun 函数运行时指定的 this 值。
if(thisArg == undefined|null) this = window，
if(thisArg == number|boolean|string) this == new Number()|new Boolean()| new String()

（2）arg1, arg2, ...：指定的参数列表。
```

### 用途

- 改变this指向
- Function.prototype.bind
- 借用其他对象的方法



