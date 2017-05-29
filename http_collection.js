const http = require('http')
http.get(process.argv[2], (response) => {
    response.setEncoding('utf-8')
    let str = ''
    response.on('data', (data) => {
        str += data
    })
    response.on('end', () => {
        console.log(str.length)
        console.log(str)
    })
})
