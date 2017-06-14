// 使用 body-parser 获取 post 的 body 的数据
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.argv[2]

app.use(bodyParser.urlencoded({extended: false}))
app.post('/form', (req, res) => {
    const str = req.body.str
    res.send(str.split('').reverse().join(''))
})
app.listen(port)
