// 使用 express.static 托管静态文件
const express = require('express')
const app = express()
const port = process.argv[2]
const publicPath = process.argv[3]
const path = require('path')

app.use(express.static(publicPath))
app.listen(port)
