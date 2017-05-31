const http = require('http')
const url = require('url')
const port = process.argv[2]

const server = http.createServer((req, res) => {
    const urlObject = url.parse(req.url, 'true')
    const iso = urlObject.query.iso
    const date = iso = new Date(iso)

    if (urlObject.pathname === '/api/parsetime') {
        const json = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
        }
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify(json))
    }
    else if (urlObject.pathname === '/api/unixtime') {
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
