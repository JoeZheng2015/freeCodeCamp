const express = require('express')
const stylus = require('stylus')
const app = express()
const port = process.argv[2]
const publicPath = process.argv[3]

app.use(stylus.middleware(publicPath))
app.use(express.static(publicPath))

app.listen(port)
