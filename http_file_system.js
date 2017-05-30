const fs = require('fs')
const http = require('http')
const file = process.argv[3]
const port = process.argv[2]

const server = http.createServer((req, res) => {
    const src = fs.createReadStream(file)
    src.pipe(res)
})

server.listen(port)
