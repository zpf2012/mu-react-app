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
    
    
    
    
#### 从 github 上拉取代码之后如何使用：
- 首先进入 my-react-app 运行 ```npm install ```
- 安装好之后，运行 ```npm run start```


### 代码中实现了什么
- 页面上提供新增，更新，删除方法
    - 在输入框内输入内容，点 add 新增
    - 在输入框内输入内容，点 列表中的 update 更新对应的条目
    - 单击对应的条目删除
    
- 页面上提供时间显示
