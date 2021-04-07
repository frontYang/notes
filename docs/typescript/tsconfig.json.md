# tsconfig.json

`tsconfig.json`文件中指定了用来编译这个项目的根文件和编译选项

- `tsconfig.json`的使用

  - 不带任何输入文件的情况下调用`tsc`，编译器会从当前目录开始去查找`tsconfig.json`文件，逐级向上搜索父目录。

  - 不带任何输入文件的情况下调用`tsc`，且使用命令行参数`--project`（或`-p`）指定一个包含`tsconfig.json`文件的目录。

  - 当命令行上指定了输入文件时，`tsconfig.json`文件会被忽略

- 参数详解 [官方文档](https://www.tslang.cn/docs/handbook/tsconfig-json.html)

```json
{
  /* 设置为true时可以让IDE在保存文件的时候根据tsconfig.json重新生成文件 */
  "compileOnSave": true,

  /* 编译器选项  */
  "compilerOptions": {
    /* 基本选项 S */
    // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "target": "es5",
    // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "module": "commonjs",
    // 指定要包含在编译中的库文件
    "lib": [],
    // 允许编译 javascript 文件
    "allowJs": true,
    // 报告 javascript 文件中的错误
    "checkJs": true,
    // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "jsx": "preserve",
    // 生成相应的 '.d.ts' 文件
    "declaration": true,
    // 生成相应的 '.map' 文件
    "sourceMap": true,
    // 将输出文件合并为一个文件
    "outFile": "./",
    // 指定输出目录
    "outDir": "./",
    // 用来控制输出目录结构 --outDir.
    "rootDir": "./",
    // 删除编译后的所有的注释
    "removeComments": true,
    // 不生成输出文件
    "noEmit": true,
    // 从 tslib 导入辅助工具函数
    "importHelpers": true,
    // 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.
    "isolatedModules": true,
    /* 基本选项 E */

    /* 严格的类型检查选项 S */
    // 启用所有严格类型检查选项
    "strict": true,
    // 在表达式和声明上有隐含的 any类型时报错
    "noImplicitAny": true,
    // 启用严格的 null 检查
    "strictNullChecks": true,
    // 当 this 表达式值为 any 类型的时候，生成一个错误
    "noImplicitThis": true,
    // 以严格模式检查每个模块，并在每个文件里加入 'use strict'
    "alwaysStrict": true,
    /* 严格的类型检查选项 E */

    /* 额外的检查 S */
    // 有未使用的变量时，抛出错误
    "noUnusedLocals": true,
    // 有未使用的参数时，抛出错误
    "noUnusedParameters": true,
    // 并不是所有函数里的代码都有返回值时，抛出错误
    "noImplicitReturns": true,
    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）
    "noFallthroughCasesInSwitch": true,
    /* 额外的检查 E */

    /* 模块解析选项 S */
    // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "moduleResolution": "node",
    // 用于解析非相对模块名称的基目录
    "baseUrl": "./",
    // 模块名到基于 baseUrl 的路径映射的列表
    "paths": {},
    // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "rootDirs": [],
    // 包含类型声明的文件列表
    "typeRoots": [],
    // 需要包含的类型声明文件名列表
    "types": [],
    // 允许从没有设置默认导出的模块中默认导入。
    "allowSyntheticDefaultImports": true,
    /* 模块解析选项 E */

    /* Source Map Options S */
    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "sourceRoot": "./",
    // 指定调试器应该找到映射文件而不是生成文件的位置
    "mapRoot": "./",
    // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSourceMap": true,
    // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性
    "inlineSources": true,
    /* Source Map Options E */

    /* 其他选项 S */
    // 启用装饰器
    "experimentalDecorators": true,
    // 为装饰器提供元数据的支持
    "emitDecoratorMetadata": true
    /* 其他选项 E */
  },

  /* 指定需要编译的文件(相对或绝对文件路径的列表) */
  "files": ["hello.ts"],

  /* 指定要包含的文件 (glob匹配模式列表 )*/
  "include": ["src/**/*"],

  /* 指定要排除的文件 (glob匹配模式列表 ) */
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```
