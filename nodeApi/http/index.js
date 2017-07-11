const http = require('http')
const querystring = require('querystring')
const port = 8080
const hostname = '127.0.0.1'

const server = http.createServer((req, res) => {
    console.log('server get request')

    let str = ''
    req.setEncoding('utf8')

    req.on('data', chunk => str += chunk)
    req.on('end', () => console.log('data from request is:', str))
    res.end('World')
})

server.listen(port, hostname, () => {
    console.log('server start')

    const postData = querystring.stringify({
        'msg': 'Hello'
    })
    const options = {
        hostname,
        port,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData)
        }
    }

    const request = http.request(options, res => {
        console.log('client get response')

        let str = ''
        res.setEncoding('utf8')

        res.on('data', chunk => str += chunk)
        res.on('end', () => console.log('data from server is:', str))
    })

    request.end(postData)
})
