# vuex 学习记录
> 来源：https://www.bilibili.com/video/BV1h7411N7bg?p=2

## 概述

### 组件之间共享数据的方式

- 父向子：v:bind

- 子向父：v-on 事件绑定

- 兄弟间：EventBus
  - $on: 接收数据的那个组件

  - $emit：发送数据的那个组件

以上方式只适用于小范围数据共享


### vuex是什么

`Vuex` 是实现组件全局状态（数据）管理的一种机制，可以方便的实现组件之间数据的共享

<img src="D:\Document\Front\课件\images\第二节\compare.png" style="zoom:50%;" />

优点：

- 能够在vuex中集中管理共享的数据，易于开发和后期维护

- 能够高效地实现组件之间的数据共享，提高开发效率

- 存储在vuex中的数据都是响应式的，能够实时保持数据与页面的同步


什么样的数据适合存储到Vuex中：

一般情况下，只有组件之前共享的数据，才有必要存储到vuex中，对于组件中的私有数据，依旧存储在组件自身的data中间的


## 基本使用

1、安装依赖包

```txt
# 安装
npm i vuex 

```

2、导入vuex包

```js
import Vuex from 'Vuex'
Vue.use(Vuex)

```

3、创建store对象

```js
const store = new Vuex.store({
  // state中存放的就是全局共享的数据
  state: {
    count: 0
  }
})
```

4、将store对象挂载到vue实例中

```js
new Vue({
  el: '#app',
  render: h => h(app),
  router,
  // 将创建的共享数据对象，挂载到vue实例中
  // 所有的组件，就可以直接从store中获取全局的数据了
  store
})
```


## 核心概念

### State

提供唯一的公共数据源，所有共享的数据都要统一放到Store的State中进行存储

```js
const store = new Vuex.store({
  // state中存放的就是全局共享的数据
  state: {
    count: 0
  }
})
```

组件中访问State中数据的方式：

1、第一种方式

```js
this.$store.state.全局数据名称

```

2、第二种方式

```js
// 从Vuex中按需导入mapState函数
import { mapState } from 'vuex'

// 通过导入的mapState函数，将当前组件需要的全局数据，映射为当前组件的computed计算属性：
computed: {
  ...mapState(['count'])
}

```

### Getter

用于对store中的数据进行加工处理形成新的数据

- getter可以对store中已有的数据加工处理会后形成新的数据，类似Vue计算属性
- store中数据发生变化，getter的数据也会跟着变化


```js
const store = new Vuex.store({
  // state中存放的就是全局共享的数据
  state: {
    count: 0
  },
  getters: {
    showNum: state => {
      return `当前最新数据是${state.count}`
    }
  }
})

```

使用getter的方式

方式一：

```js
this.$store.getters.名称
```
方式二：

```js
import {mapGetters} from 'vuex'

computed: {
  ...mapGetters({'showNum'})
}

```


### Mutation

用于变更Store中的数据(同步)

- 只能通过mutation变更Store数据，不可以直接操作Store中的数据

- 通过这种方式操作起来虽然繁琐了一些，但是可以集中监控所有数据的变化

```js
const store = new Vuex.store({
  // state中存放的就是全局共享的数据
  state: {
    count: 0
  },

  // 
  mutations: {
    add(state, step){
      state.count += step
    }
  }
})

```

调用mutation的方法

1、方法一

```js
method: {
  handler1(){
    this.$store.commit('add', 3)
  },
}

```

2、方法二

```js
// 从vuex中按需导入mapMutation 函数
import { mapMutations } from 'vuex'


// 将导入的mapMutations函数，将需要的mutations函数，映射为当前组件的methods方法
methods: {
  ...mapMutation(['add', 'addN'])
}


```


### Action

用于处理异步任务

如果通过异步数据变更数据，必须通过Action，而不能使用Mutation，但是在Action中还是要通过触发Mutation的方式间接变更数据


```js
const store = new Vuex.store({
  // state中存放的就是全局共享的数据
  state: {
    count: 0
  },

  // 
  mutations: {
    add(state, step){
      state.count += step
    }
  },

  // 
  actions: {
    // 在actions中，不能直接修改state中的数据
    // 必须通过context.commit()触发某个mutation才行
    addAsync(context, step){
      setTimeout((() => {
        context.commit('add', step)
      }), 1000)
    }
  }
})

```

触发方式

方式一：

```js
methods: {
  handle(){
    this.$store.dispach('addAsync', 3)
  }
}

```

方式二：

```js
// 从vuex中按需导入mapActions函数
import  {mapActions} from 'vuex'

// 将制定的actions函数，映射为当前组件的methods函数
methods: {
  ...mapActions(['addAsync'])
}

```



## 案例



