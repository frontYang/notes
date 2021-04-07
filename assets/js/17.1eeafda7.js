(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{371:function(t,a,n){"use strict";n.r(a);var s=n(42),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"call-和-apply"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#call-和-apply"}},[t._v("#")]),t._v(" call 和 apply")]),t._v(" "),n("h2",{attrs:{id:"区别-传参方式不同"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#区别-传参方式不同"}},[t._v("#")]),t._v(" 区别：传参方式不同")]),t._v(" "),n("ul",[n("li",[t._v("func.apply(thisArg, [argsArray])")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("（1）thisArg：\n可选的。在 func 函数运行时使用的 this 值。请注意，this可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。\n\n（2）argsArray\n可选的。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 func 函数。如果该参数的值为 null 或  undefined，则表示不需要传入任何参数。从ECMAScript 5 开始可以使用类数组对象。\n")])])]),n("ul",[n("li",[t._v("func.call(thisArg, arg1, arg2, ...)")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("（1）thisArg：在 fun 函数运行时指定的 this 值。\nif(thisArg == undefined|null) this = window，\nif(thisArg == number|boolean|string) this == new Number()|new Boolean()| new String()\n\n（2）arg1, arg2, ...：指定的参数列表。\n")])])]),n("h2",{attrs:{id:"用途"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#用途"}},[t._v("#")]),t._v(" 用途")]),t._v(" "),n("ul",[n("li",[t._v("改变 this 指向")]),t._v(" "),n("li",[t._v("Function.prototype.bind")]),t._v(" "),n("li",[t._v("借用其他对象的方法")])])])}),[],!1,null,null,null);a.default=r.exports}}]);