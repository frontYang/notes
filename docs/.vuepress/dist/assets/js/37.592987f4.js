(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{218:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tsconfig-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tsconfig-json"}},[t._v("#")]),t._v(" tsconfig.json")]),t._v(" "),a("p",[a("code",[t._v("tsconfig.json")]),t._v("文件中指定了用来编译这个项目的根文件和编译选项")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("tsconfig.json")]),t._v("的使用")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("不带任何输入文件的情况下调用"),a("code",[t._v("tsc")]),t._v("，编译器会从当前目录开始去查找"),a("code",[t._v("tsconfig.json")]),t._v("文件，逐级向上搜索父目录。")])]),t._v(" "),a("li",[a("p",[t._v("不带任何输入文件的情况下调用"),a("code",[t._v("tsc")]),t._v("，且使用命令行参数"),a("code",[t._v("--project")]),t._v("（或"),a("code",[t._v("-p")]),t._v("）指定一个包含"),a("code",[t._v("tsconfig.json")]),t._v("文件的目录。")])]),t._v(" "),a("li",[a("p",[t._v("当命令行上指定了输入文件时，"),a("code",[t._v("tsconfig.json")]),t._v("文件会被忽略")])])])]),t._v(" "),a("li",[a("p",[t._v("参数详解 "),a("a",{attrs:{href:"https://www.tslang.cn/docs/handbook/tsconfig-json.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1)])])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 设置为true时可以让IDE在保存文件的时候根据tsconfig.json重新生成文件 */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compileOnSave"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 编译器选项  */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 基本选项 S */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"module"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commonjs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定要包含在编译中的库文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lib"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许编译 javascript 文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"allowJs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 报告 javascript 文件中的错误")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"checkJs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsx"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"preserve"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生成相应的 '.d.ts' 文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"declaration"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生成相应的 '.map' 文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sourceMap"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将输出文件合并为一个文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outFile"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定输出目录")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outDir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用来控制输出目录结构 --outDir.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rootDir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除编译后的所有的注释")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"removeComments"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不生成输出文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"noEmit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从 tslib 导入辅助工具函数")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"importHelpers"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"isolatedModules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 基本选项 E */")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 严格的类型检查选项 S */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启用所有严格类型检查选项")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"strict"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在表达式和声明上有隐含的 any类型时报错")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"noImplicitAny"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启用严格的 null 检查")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"strictNullChecks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当 this 表达式值为 any 类型的时候，生成一个错误")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"noImplicitThis"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以严格模式检查每个模块，并在每个文件里加入 'use strict'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alwaysStrict"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 严格的类型检查选项 E */")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 额外的检查 S */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 有未使用的变量时，抛出错误")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"noUnusedLocals"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 有未使用的参数时，抛出错误")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"noUnusedParameters"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 并不是所有函数里的代码都有返回值时，抛出错误")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"noImplicitReturns"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"noFallthroughCasesInSwitch"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 额外的检查 E */")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 模块解析选项 S */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"moduleResolution"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于解析非相对模块名称的基目录")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"baseUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模块名到基于 baseUrl 的路径映射的列表")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"paths"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根文件夹列表，其组合内容表示项目运行时的结构内容")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rootDirs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 包含类型声明的文件列表")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"typeRoots"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要包含的类型声明文件名列表")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"types"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许从没有设置默认导出的模块中默认导入。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"allowSyntheticDefaultImports"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 模块解析选项 E */")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Source Map Options S */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定调试器应该找到 TypeScript 文件而不是源文件的位置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sourceRoot"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定调试器应该找到映射文件而不是生成文件的位置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mapRoot"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inlineSourceMap"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inlineSources"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Source Map Options E */")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 其他选项 S */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启用装饰器")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"experimentalDecorators"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为装饰器提供元数据的支持")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"emitDecoratorMetadata"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 其他选项 E */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 指定需要编译的文件(相对或绝对文件路径的列表) */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"files"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello.ts"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 指定要包含的文件 (glob匹配模式列表 )*/")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"include"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/**/*"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 指定要排除的文件 (glob匹配模式列表 ) */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"exclude"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node_modules"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/*.spec.ts"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);