const http = require('http')

http.get(process.argv[2], (response) => {
    response.setEncoding('utf-8')
    response.on('data', (str) => {
        console.log(str)
    })
})
