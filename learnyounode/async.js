const http = require('http')
const datas = ['', '', '']
let num = 0
const done = () => {
    num++
    if (num === 3) {
        datas.forEach(data => console.log(data))
    }
}
datas.forEach((data, index) => {
    http.get(process.argv[index + 2], response => {
        response.setEncoding('utf-8')
        response.on('data', str => datas[index] += str)
        response.on('end', done)
    })
})
