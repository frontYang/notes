
# 类

## 定义类
```ts
class Person {
  name: string;
  constract(name: string){
    this.name = name
  },
  say() {
    return `${this.name} say hello`
  }
}

let person = new Person('Maggie')
person.say() // Maggie say hello
```



## 继承
```ts
class Animal {
  food: string;
  constructor(food: string){
    this.food = food
  }
  eat(){
    console.log(`Animal eat ${this.food}`)
  }
}

class Dog extends Animal {
  constructor(food: string){
    super(food)
  }
}

class Cat extends Animal {
  constructor(food: string){
    super(food)
  }
}

let dog = new Dog('骨头')
dog.eat() // Animal eat 骨头

let cat = new Cat('鱼')
cat.eat() // Animal eat 骨头
```


## 修饰符
- `public`：**公有**；在类、子类、或类外面都可以访问
- `protected`：**保护类型**；在类和子类可以访问
- `private`： **私有**；只能在类里面访问


## 静态属性&静态方法
- 在**属性**或**方法**声明前增加 `static` 即为表示为静态属性或方法
- **静态方法**不能直接调用类里面的属性，**只能调用静态属性**

```ts
class Grid {
  static origin = {
    x: 0,
    y: 0
  };
  scale: number;
  constructor (scale: number) {}
  print(point: {x: number; y: number}){
    let xDist = (point.x - Grid.origin.x);
    let yDist = (point.y - Grid.origin.y);
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  static getScale(){
    console.log(this.scale) // 不能访问非静态属性，编译报错 Property 'scale' does not exist on type 'typeof Grid'.
    console.log(this.origin) // 能访问静态属性
  }
}

let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.print({x: 10, y: 10})); // 14.142135623730951
console.log(grid2.print({x: 10, y: 10})); // 2.8284271247461903

```

## 多态
父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现。多态也是继承的一种表现，即多态属于继承（似懂非懂:joy:）


## 抽象类
- **抽象类**做为其它派生类的**基类**使用。 它们一般**不会直接被实例化**
- 用`abstract`关键字定义抽象类和抽象方法

```ts
abstract class Animal {
  abstract say(): void;
  move(): void {
    console.log('print')
  }
}
```

- **抽象类**中的**抽象方法不包含具体实现**并且**必须在派生类中实现**
- **抽象方法**只能放在**抽象类**里面
- **抽象类**和**抽象方法**用来定义**标准**；*例如：Animal类要求它的子类必须包含eat方法*
- **抽象类**的子类必须实现**抽象类**里面的方法

```ts
abstract class Department {
  constructor(public name: string) {
  }
  printName(): void {
    console.log('Department name: ' + this.name);
  }
  abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
  }
  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.');
  }
  generateReports(): void {
    console.log('Generating accounting reports...');
  }
}

let department: Department; // 允许创建一个对抽象类型的引用
department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
department.generateReports(); // 错误: 方法在声明的抽象类中不存在
```

