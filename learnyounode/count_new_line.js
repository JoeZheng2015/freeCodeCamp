// 使用 readFileSync 同步读取文件
const fs = require('fs')
const buffer = fs.readFileSync(process.argv[2])

console.log(buffer.toString().split('\n').length - 1)
