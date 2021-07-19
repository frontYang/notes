# 资源压缩工具

## 图片压缩

### tinypng

[在线工具](https://tinypng.com/)：上传数量有限

[super-tinypng](https://github.com/zhanyuzhang/super-tinypng)：使用node开发的一个绕过数量限制的npm包，不能递归遍历文件夹，不支持配置，会在当前目录默认生成output目录，把压缩成功的图片放到里面

```shell
# 安装
npm i super-tinypng -g

# 在命令行进入到你想要压缩图片的目录执行
super-tinypng
```

[tinypng破解版客户端](https://github.com/focusbe/tinypngjs)
