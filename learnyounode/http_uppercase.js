// 使用 req.pipe 实现流
const http = require('http')
const port = process.argv[2]
const map = require('through2-map')

const server = http.createServer((req, res) => {
    req.pipe(map(chunk => {
        return chunk.toString().toUpperCase()
    })).pipe(res)
})


server.listen(port)