const express = require('express')

// 引入路由
const myUrl = require('./myUrl')

const app = express()

// 使用路由
app.use('', myUrl)

// 托管静态文件
app.use(express.static('static'));


app.listen(8002)