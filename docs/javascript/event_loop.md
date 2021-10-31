# javascript——事件循环（Event Loop）

什么是事件循环？



菜鸡内心的小实话：

> 总是有人把事件循环讲得很高深莫测
>
> 两年前没出去面试前，作为工作了三年的小菜鸡的我完全不懂为什么要把一些理论知识看的那么重
>
> 工作了6年的老菜鸡的我也照样不懂
>
> 为什么？
>
> 因为我觉得理论在实际工作中也没起到多大的作用
>
> 代码不都是【循规蹈矩】的运行着吗
>
> 写了那么多页面、那么的代码，这么点语感硬是要扯得高深莫测，还要翻来覆去的玩各种文字游戏
>
> 看谁卷得过谁[翻白眼.gif]
>
> 不过如果工资能提高，我也乐意跟着卷[舔狗.gif]



老老实实的打工仔：

> 事件循环其实就是`javascript`的运行机制，说白点就是代码的执行流程，负责执行代码、收集和处理事件、执行任务
>
> 1、`javascript`是单线程：既然是单线程，就说明只能一个任务一个任务的执行
>
> 2、任务队列：但是也不能因为一个任务耗时长，而让另一个任务等着，所以又分为`同步任务`和`异步任务`
>
> 在代码执行时，`同步任务`和`异步任务`会进入不同的执行环境
>
> `同步任务`进入`主线程`
>
> `异步任务`进入`异步任务队列`
>
> 当`主线程`队列任务执行完后，将会执行`异步队列任务`，这个过程会一直循环
>
> `异步队列任务`又分为`宏任务`和`微任务`
>
> `宏任务`：
>
> 1. 渲染事件（解析DOM，计算布局，绘制）
> 2. 用户交互事件（鼠标点击，滚动页面，放大缩小等）
> 3. setTimeout、setInterval等
> 4. 网络请求完成 & 文件读写完成事件
>
> `微任务` ：
>
> 1. MutationObserver 监控某个DOM节点，或者为这个节点添加、删除部分子节点，当 DOM 发生变化时，就会产生DOM变化记录的微任务。
> 2. 使用 Promise，当调用 Promise.resolve() 或者 Promise.reject() 的时候，也会产生微任务。
>
> 
>
> 注意的点：
>
> 1. 微任务和宏任务是绑定的，每个宏任务执行时，会创建自己的微任务队列
> 2. 微任务的执行时长会影响当前宏任务的执行时长（比如在执行一次宏任务中，里面有十个微任务，每次微任务的执行时长是10ms，十个就延长了100ms）
> 3. 在一个宏任务中，分别创建了一个用于回调的宏任务和微任务的，无论什么情况下，微任务都早于宏任务



| js运行机制                                 |                  |        |
| ------------------------------------------ | ---------------- | ------ |
| 同步任务                                   | 异步任务         |        |
| 进入主线程                                 | 进入异步任务队列 |        |
| 执行完毕，执行异步任务队列（这个过程循环） | 宏任务           | 微任务 |
