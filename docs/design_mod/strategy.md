# 策略模式

## 定义

定义一系列的算法，把他们一个个封装起来，并且使它们可以相互替换

## javascript中的策略模式

```js
var strategies = {
  "S": function(salary){
    return salary * 4
  },
  "A": function(salary){
    return salary * 3
  },
  "B": function(salary){
    return salary * 2
  },
}

var calculateBonus = function(level, salary){
  return strategies[level](salary)
}

console.log(calculateBonus('S', 20000))
console.log(calculateBonus('A', 10000))

```



## 用策略代码来实现表单验证

```js

// 策略对象
var strategies = {
  // 不为空
  isNonEmpty(value, errorMsg){
    if(value == ''){
      return errorMsg
    }
  },
  // 限制最小长度
  minLength(value, length, errorMsg){
  	if(value.length < length){
      return errorMsg
    } 
  },
  // 手机号格式
  isMobile(value, errorMsg){
    if(!/^1(3|5|8)[0-9]{9}$/.test(value)){
      return errorMsg
    }
  }
}

// Validator类
var Validator = function(){
  this.cache = {}
}
Validator.prototype.add = function(dom, rule, errorMsg){
  var ary = rule.split(':') // 把strategy和参数分开
  this.cache.push(function(){ // 把校验步骤用函数包装起来，并且放入cache
    var strategy = ary.shift()  // 用户挑选的strategy
    ary.unshift(dom.value) // 把input的value添加进参数列表
    ary.push(errorMsg) // 把errorMsg添加进参数列表
    return strategies[strategy].apply(dom, ary)
  })
}
Validator.prototype.start = function(){
  for(var i = 0, validatorFunc; validatorFunc = this.cache[i++]){
    var msg = validatorFunc() // 开始校验，并取得校验后的返回信息
    if(msg){ // 如果有确切的返回值，说明校验没有通过
      return msg
    }
  }
}


// 使用
var registerForm = document.getElementById('registerForm')
var ValidataFunc = function(){
  var validator = new Validator()
  validator.add(registerForm.username, 'isNonEmpty', '用户名不能为空')
  validator.add(registerForm.password, 'minLength:6', '密码长度不能少于6位')
  validator.add(registerForm.phoneNumber, 'isMobile', '手机号码格式不正确')
  
  var errorMsg = validator.start()
  return errorMsg  
}
registerForm.onsubmit = function(){
  var errorMsg = ValidataFunc()
  if(errorMsg){
    alert(errorMsg)
    return false
  }
}

```



## 给某个文本添加多个校验规则

```js
// 策略对象
var strategies = {
  // 不为空
  isNonEmpty(value, errorMsg){
    if(value == ''){
      return errorMsg
    }
  },
  // 限制最小长度
  minLength(value, length, errorMsg){
  	if(value.length < length){
      return errorMsg
    } 
  },
  // 手机号格式
  isMobile(value, errorMsg){
    if(!/^1(3|5|8)[0-9]{9}$/.test(value)){
      return errorMsg
    }
  }
}


// Validator类
var Validator = function(){
  this.cache = {}
}
Validator.prototype.add = function(dom, rules){
  var ary = rules.split(':') // 把strategy和参数分开
  var errorMsg = rules.errorMsg
  var self = this
  for(var i = 0, rule; rule = rules[i++].length){
    (function(rule){
      var strateAry = rule.strategy.split(':')
      var errorMsg = rule.errorMsg
      self.cache.push(function(){
        var strategy = strategyAry.shift()
        strategyAry.unshift(dom.value)
        strategyAry.push(errorMsg)
        return strategies[strategy].apply(dom, strategyAry)
      })
    })(rule)
  }
}
Validator.prototype.start = function(){
  for(var i = 0, validatorFunc; validatorFunc = this.cache[i++]){
    var msg = validatorFunc() // 开始校验，并取得校验后的返回信息
    if(msg){ // 如果有确切的返回值，说明校验没有通过
      return msg
    }
  }
}

// 使用
var registerForm = document.getElementById('registerForm')
var ValidataFunc = function(){
  var validator = new Validator()
  validator.add(registerForm.username, [
    {
      strategy: 'isNonEmpty', 
      errorMsg: '用户名不能为空'
    }, 
    {
      strategy: 'minLength:10', 
      errorMsg: '用户名长度不能小于10'
    }, 
  ])
  validator.add(registerForm.password, [
    {
      strategy: 'minLength:6', 
      errorMsg: '密码长度不能少于6位'
    }
  ])
  validator.add(registerForm.phoneNumber, [
    {
      strategy: 'isMobile', 
      errorMsg: '手机号码格式不正确'
    }
  ])
  
  var errorMsg = validator.start()
  return errorMsg  
}
registerForm.onsubmit = function(){
  var errorMsg = ValidataFunc()
  if(errorMsg){
    alert(errorMsg)
    return false
  }
}

registerForm.onsubmit = function(){
  var errorMsg = ValidataFunc()
  if(errorMsg){
    alert(errorMsg)
    return false
  }
}
```







## 策略模式的优缺点

### 优点

- 策略模式利用组合、委托和多态等技术和思想，可以有效的避免多重条件选择语句
- 策略模式提供了对开发-封闭原则的完美支持，将算法封装在独立的strategy(策略)中，使得它们易于切换，易于理解和扩展
- 策略模式的算法也可以复用在系统的其他地方，从而避免许多重复的复制粘贴工作
- 在策略模式中利用组合和委托来让Context(上下文)拥有执行算法的能力，这也是继承的一种更轻便的替代方案

#### 缺点

- 使用策略模式会在程序中增加许多策略类和策略对象，但实际上这比把它们负责的逻辑堆砌在Context中要好
- 要使用策略模式，必须了解所有的strategy，必须了解各个strategy之间的不同点，这样才能选择一个合适的strategy