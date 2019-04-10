### react 环境搭建
##### node 方式
- 安装 [node](https://nodejs.org/en/)，npm

- 创建我的第一个 react-app

    ``` npx create-react-app my-react-app```
- Exception: 如果报 rollbackFailedOptional： npm session ... 错误，可以尝试配置
    淘宝镜像服务器解决
    
    ```npm config set registry http://registry.npm.taobao.org```

- 打开项目目录
   ``` cd my-react-app ```
- 启动项目
    ```npm run start```
    - 如果启动报错，最好按照上边步骤重新创建一下项目