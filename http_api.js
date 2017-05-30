const http = require('http')
const url = require('url')
const port = process.argv[2]

const server = http.createServer((req, res) => {
    if (req.url.indexOf('/api/parsetime') !== -1) {
        const iso = url.parse(req.url, true).query.iso
        const date = new Date(iso)
        const json = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
        }
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify(json))
    }
    else if (req.url.indexOf('/api/unixtime') !== -1) {
        const iso = url.parse(req.url, true).query.iso
        const date = new Date(iso)
        const unixtime = date.getTime()
        const json = {
            unixtime,
        }
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify(json))
    }
    else {
        res.write('')
    }
})
server.listen(port)
