# sflds-vue
基于 vue2.x 封装的法律法规系统组件，一切为了业务服务！

> why name is sflds ？
>可能是 上(s)市法(f)律(l)法规数据库(database)系统(system)的简称

## 项目依赖
- jquery 1.9以上版本
- bootstrap(js/css)：该组件使用的是 v3.3.5 版本
- vue 2.0以上版本：该组件使用的是 vue 最新 v2.3.3 版本

## 用法

全局引用

```html 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>sflds-vue project</title>
  <link rel="stylesheet" type="text/css" href="./assets/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="./assets/style/css/style.css">
  <script src="./assets/jquery/jquery-1.11.1.min.js"></script>
  <script src="./assets/bootstrap/js/bootstrap.min.js"></script>
  <script src="http://cdn.bootcss.com/vue/2.3.3/vue.min.js"></script>
  <script src="./dist/sflds-vue.min.js"></script>
  <script>
    // 安装组件
    Vue.use(Sflds);
    new Vue({
      el: '#app'
    });
  </script>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```

## API
如果你想看可以直接进入 `docs/` 目录下查看 `.md` 文件即可，如果你想查看网页版 API 文档，请按步骤执行以下命令：

```bash 
# step1: 安装 gitbook
npm i gitbook-cli -g 

# step2: 进入组件的 docs 目录
cd docs

# step3: 安装插件
gitbook install 

# step4: 启动并访问 localhost:4000
gitbook serve 
```

## 开发

```bash
# step1: 克隆组件到本地开发仓库
$ git clone git@github.com:gongph/sflds-vue.git

# step2: 安装 yarn
npm i yarn -g 

# step3: 你可能还需要安装 gulp
npm i gulp -g

# step4: 安装模块依赖
yarn install

# step5: 启动服务，访问：localhost: 8080
npm run serve 

```

当你修改完组件源码，使用以下命令进行打包：

```bash
npm run dist # 将组件打包到 dist 目录
```

## LICENSE
Copyright (c) 2017 gongph