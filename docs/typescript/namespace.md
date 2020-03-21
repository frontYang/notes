# 命名空间

命名空间为ts内部模块，主要用于避免命名冲突，方便管理代码；可以将代码包裹起来，只对外暴露需要在外部访问的对象，命名空间内的对象通过export导出；用`namespace`关键词来声明命名空间


## 声明&使用

```ts
namespace A {
  export function getNum(): number{
    return 123
  }
}

namespace B {
  export function getNum(): number{
    return 234
  }
}

import { A, B } from './demo' // 在外部使用时增加引入

let getnum1 = A.getNum() // 123
let getnum2 = B.getNum() // 234

```


## 别名
```ts
namespace Shapes {
  export namespace Polygons {
    export class Triangle { }
    export class Square { }
  }
}


import polygons = Shapes.Polygons
let sq = new polygons.Square()  // 同 "new Shapes.Polygons.Square()"

```



