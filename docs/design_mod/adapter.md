# 适配器模式

## 作用

适配器模式是用来解决两个已有接口之间不匹配的问题；不用考虑这些接口是怎么实现的，也不用考虑将来会如何演化，不需要改变已有的接口，就能够是他们协同作用。

---

## 使用场景

​	当我们试图调用两个模块或者对象的接口时，发现这个接口的格式并不符合目前的需求，这个时候可以有如下两个解决方案：
​	(1): 修改原来的接口；但是如果原来的模块很复杂，修改原接口便显得不太现实。
​	(2): 创造一个适配器，将原接口转换为客户希望的另一个接口，这样客户就只需要和适配器打交道。



---

## 案例一

案例一：当第三方方法名称不同时，便可以增加adapter进行转换，转换成相同的方法名

```js
var googleMap = {
  show(){
    console.log('googleMap...')
  }
}

var baiduMap = {
  display(){
    console.log('baiduMap...')
  }
}

var renderMap = {
  if(map.show instanceof Function){
    map.show()
  }
}

var baiduMapAdapter = {
  show(){
    return baiduMap.display()
  }
}

renderMap(baiduMapAdapter)
renderMap(googleMap)

```



---


## 案例二

案例二：当前数据结构跟正运行在项目中的并不一致时，便可通过适配器来转换格式

```js
// 旧接口数据模式
var getGuangdongCity = function(){
	var guangdongCity = [
		{
			name: 'shenzhen',
			id: 11
		},
		{
			name: 'guangzhou',
			id: 12
		},
	]
}

var render = function(fn){
	console.log(JSON.stringfy(fn()))
}

render(getGuangdongCity)

// 新接口数据模式
var guangdongCity = {
	guangzhou: 12,
	shenzhen: 11
}

// 适配器
var addressAdapter = function(oldAddressFn){
	var address = {}
	var oldAddress = oldAddressFn()
	
	for(var i = 0; i < oldAddress; i++){
		address[oldAddress[i].name] = c.id
	}
	
	return function(){
		return address
	}
}

render(addressAdapter(getGuangdongCity))

```

