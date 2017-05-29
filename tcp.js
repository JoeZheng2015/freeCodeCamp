const net = require('net')
const strftime = require('strftime')

const server = net.createServer((socket) => {
    const now = strftime('%F %R', new Date())
    socket.end(now + '\n')
})
server.listen(process.argv[2])
