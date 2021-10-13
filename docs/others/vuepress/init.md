# VuePress2 快速搭建

### 1. 打开vuepress官网

[vuepress2官网地址](https://v2.vuepress.vuejs.org/zh/)

在快速上手中一通操作搭建本地环境。

其中如果启动之后发现乱码。把md文件删了，新建一个就行。

### 2. 部署到Github Pages

找到vuepress2文档-指南-部署-Github Pages，比较简洁。

Github新建一个 仓库。如仓库名是 `<USERNAME>.github.io`，那么Github Pages就是 `https://<USERNAME>.github.io/`。如果不是，Github Pages则是`https://github.com/<USERNAME>/<REPO>`;

然后跟着文档，通过Github Actions来部署。

然后选择仓库中的Actions，把从官网copy的`docs.yml`文件的复制到编辑器里，点击提交。

这里还需要设置一个密钥。

[官方生成密钥文档](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)

生成密钥之后，在仓库的SETTING-Secrets中，新建一个密钥。把上面的密钥复制进去，完成Github Pages的部署。