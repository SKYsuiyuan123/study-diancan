const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

// 引入存储模块
const Blog = require('./data')

const router = express.Router()

// express 解析 post 请求
router.use(bodyParser.urlencoded({
    extended: true
}))

// 解决 post 通过 客户端 axios 传递过来的数据 没有的情况
// axios 默认发送的是 application/json 格式，需要使用下面的中间件进行解析
router.use(bodyParser.json())

// 设置跨域访问
router.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.send(200)
    } else {
        next()
    }
})

// 记录请求的时间
router.use(function timeLog(req, res, next) {
    console.log('Time:', Date.now())
    next()
})





// 路由开始


// 发送首页
router.get('/', (req, res) => {
    fs.createReadStream('./static/index.html').pipe(res)
})


// 添加博客
router.post('/addBlog', (req, res) => {
    // console.log(req.body)
    Blog(req.body).save((err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
        }
    })
    res.json({
        "success": "添加成功"
    })
})

// 查询所有博客
router.get('/allBlogs', (req, res) => {
    Blog.find({}, (err, data) => {
        if (err) throw err;

        // 查询成功返回数据
        res.json(data)
    })
})

// 查询某一条博客
router.get('/singleBlog/:id', (req, res) => {
    Blog.find({
        "_id": req.params.id
    }, (err, data) => {
        if (err) throw err;

        // 查询成功返回数据
        res.json(data)
    })
})


module.exports = router