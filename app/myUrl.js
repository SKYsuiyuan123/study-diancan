const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

// 引入存储模块
const Diancan = require('./data')

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


// 用户注册
router.post('/register', (req, res) => {
    let email = req.body.email
    let password = req.body.password
    let confirmPassword = req.body.confirmPassword

    Diancan.find({"email": email}, (err, data) => {
        if (err) {
            throw err
        } else {
            if (data.length === 0) {
                if (password === confirmPassword) {
                    Diancan(req.body).save((err, data) => {
                        if (err) {
                            console.log(err)
                            res.json({
                                "msg": "注册失败"
                            })
                        } else {
                            res.json({
                                "msg": "注册成功"
                            })
                        }
                    })
                } else {
                    res.json({
                        "msg": "两次密码不一致"
                    })
                }
            } else {
                res.json({
                    "msg": "该用户已存在"
                })
            }
        }
    })
})


// 用户登录
router.post('/login', (req, res) => {
    let email = req.body.email
    let password = req.body.password

    Diancan.find({"email": email, "password": password}, (err, data) => {
        if (err) {
            throw err
        } else {
            if (data.length === 0) {
                res.json({
                    "msg": "用户名或密码错误"
                })
            } else {
                // console.log(data[0]._id)
                res.json({
                    "msg": "登录成功",
                    "user_id": data[0]._id
                })
            }
        }
    })
})


// 添加菜单
router.post('/addMenu', (req, res) => {

    Diancan.findOne({"_id": req.headers._id }, (err, data) => {
        if (err) {
            throw err
        } else {
            let menu = data.menu
            menu.push(req.body)

            Diancan.findOneAndUpdate({
                _id: req.headers._id
            }, {
                menu: menu
            }).then((result) => {
                res.json({
                    "msg": "添加成功"
                })
                 Diancan.findOne({"_id": req.headers._id }, (err, data) => {
                    if (err) {
                        throw err
                    } else {
                        console.log(data)
                    }
                })
            })
        }
    })
})

// 查找菜单
router.get('/findMenus', (req, res) => {
    Diancan.findOne({"_id": req.headers._id }, (err, data) => {
        if (err) {
            throw err
        } else {
            console.log(data.menu)
            res.json({
                "data": data.menu,
                "msg": "查找成功"
            })
        }
    })
})

// 删除菜单
router.delete('/deleteMenu', (req, res) => {
    Diancan.findOne({"_id": req.headers._id }, (err, data) => {
        if (err) {
            throw err
        } else {
            // 先删除其中的某条数据 再重新装回去
            let menu = data.menu
            menu.forEach((obj, index) => {
                if (obj.name == req.body.name) {
                    menu.splice(index, 1)
                }
            })

            Diancan.findOneAndUpdate({
                _id: req.headers._id
            }, {
                menu: menu
            }).then((result) => {
                res.json({
                    "msg": "删除成功"
                })
            })
        }
    })
})

module.exports = router