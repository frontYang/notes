# 状态模式

同一个事物，在不同状态下，表现出来的行为不一样

把事物的每种状态都封装成单独的类，跟此种状态有关的行为都被封装在这个类的内部

允许一个对象在其内部状态改变时改变它的行为，对象看起来似乎修改了它的类

没有怎么看明白，下次再看一篇

```js
// 利用状态模式改进
var OffLightState = function(light){
  this.light = light
}

OffLightState.prototype.buttonWasPressed = function(){
  console.log('弱光')
  this.light.setState(this.light.weekLightState)
}


var WeekLightState = function(light){
  this.light = light
}

WeekLightState.prototype.buttonWasPressed = function(){
  console.log('强光')
  this.light.setState(this.light.strongLightState)
}


var StrongLightState = function(light){
  this.light = light
}

StrongLightState.prototype.buttonWasPressed = function(){
  console.log('关灯')
  this.light.setState(this.light.offLightState)
}

var Light = function(){
  this.offLightState = new OffLightState(this)
  this.weekLightState = new WeekLightState(this)
  this.strongLightState = new StrongLightState(this)
  this.button = null
}

Light.prototype.init = function(){
  var button = document.createElement('div')
  var self = this

  button.innerHTML = '开关'
  this.button = document.body.appendChild(button)

  this.currState = this.offLightState

  this.button.onclick = function(){
    self.currState.buttonWasPressed()
  }
}

Light.prototype.setState = function(newState){
  this.currState = newState
}

var light = new Light()
light.init()
```

