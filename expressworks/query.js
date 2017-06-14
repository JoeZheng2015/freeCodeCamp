// 通过 req.query 获取请求参数
const express = require('express')
const app = express()
const port = process.argv[2]

app.get('/search', (req, res) => {
    res.json(req.query)
})
app.listen(port)
