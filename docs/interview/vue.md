# vue 篇

- [2020 前端面试 | Vue.js 专题](https://juejin.im/post/5d046560f265da1b961301d8)
- [2020 前端技术面试必备 Vue：(一)基础快速学习篇](https://juejin.im/post/5e7e10b051882573be11aed3)

# Vue

:question:：`vue.js`是什么？

:memo:：`vue.js`是一款渐进式`javascript`框架

---

:question:：什么叫渐进式框架？

:memo:：用你想用或者能用的功能特性，你不想用的部分功能可以先不用。VUE不强求你一次性接受并使用它的全部功能特性。[参考](https://www.zhihu.com/question/51907207)

---

:question:：`vue.js`的特点？

:memo:：1、**双向数据绑定**：只要改变数据，就会自动改变视图；<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、**组件视图化**：网页由多个组件拼接和嵌套组成的<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、**模块友好**<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、**轻量**：压缩后33K

---

:question:： 什么是 `MVVM`？

:memo:：`MVVM` 由 `View`,`ViewModel`, `Model`三部分组成 [参考](https://juejin.im/post/5b2f0769e51d45589f46949e)
<br>
1、`View`：代表视图、模板，负责将数据模型转化为UI展现出来<br>
2、`Model`：代表的是模型、数据，可以在`Model`层中定义数据修改和操作的业务逻辑<br>
3、`ViewModel`：连接`Model`和`View`<br>

---

:question:：vue组件之间怎么传值？

:memo:：[参考资料](https://juejin.im/post/5d267dcdf265da1b957081a3)
