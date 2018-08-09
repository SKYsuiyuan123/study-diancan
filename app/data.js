// 引入 mongoose 模块
const mongoose = require('mongoose')

// 链接数据库
// mongodb://<dbuser>:<dbpassword>@ds153851.mlab.com:53851/study
mongoose.connect('mongodb://admin:admin123@ds153851.mlab.com:53851/study')

// 创建图表
const todoSchema = new mongoose.Schema({
    // 数据规范
    email: String,
    password: String,
    menu: Array
})

// 存储数据
const Diancan = mongoose.model('Diancan', todoSchema)

module.exports = Diancan