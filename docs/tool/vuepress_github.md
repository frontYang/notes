# 将 vuepress 部署到 github

> 这两天打算把 vuepress 部署到 github 上，然后昨天捣腾了一段时间都卡住了:persevere:，原因是我没有启用 ssh，但是却用了 ssh push 方式，今晚试了下改成 https 的就行了，只是每次要输入账户名跟密码，可以配置 ssh 就不用重复输入用户名跟密码了

步骤

- 在根目录 增加 `deploy.sh` 文件，输入如下内容：

```sh
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'


# 如果 没有开启ssh模式，可以使用https的形式提交

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

- 将文件 `deploy.sh` 中的 `git push -f` 的后面改成自己的 `github 仓库`, 如果要通过 `https://<USERNAME>.github.io/<REPO>/` 去访问（`<REPO>`表示仓库名），则在 `config.js` 加上配置 `base: "/<REPO>/"`，否则会访问不到静态资源

- 将整个文件夹 `push` 至仓库`<REPO>`
- 在本地双击 `deploy.sh` 文件，执行完后就可以通过 `https://<USERNAME>.github.io/<REPO>/` 访问了 :grin:

[官方部署文档](https://vuepress.vuejs.org/guide/deploy.html#github-pages)
