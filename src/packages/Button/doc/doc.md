## 过程

1.app.js

```javascript
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()
// 托管静态资源
app.use(express.static('./dist'))
// 调用 app.listen 方法，指定端口号并启动 web 服务器
const port = 8080
app.listen(port, function () {
  console.log('Express server running at http://127.0.0.1:' + port)
})
```

2.前端 dist 文件全部复制到 express 项目的 dist 目录下
![image.png](https://cdn.nlark.com/yuque/0/2022/png/2998709/1652806078369-c38686f5-e05a-4912-8493-9cd69317a90a.png#clientId=u5355579a-dc1f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=485&id=ub9f0798d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=760&originWidth=1080&originalType=binary&ratio=1&rotation=0&showTitle=false&size=107536&status=done&style=none&taskId=u6c34a150-3d9d-41ce-ab4e-3f585d660f3&title=&width=689)
