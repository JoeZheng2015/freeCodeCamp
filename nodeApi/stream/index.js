const fs = require('fs')
const path = require('path')

const readable = fs.createReadStream(path.join(__dirname, './hello_world.txt'))
const writable = fs.createWriteStream(path.join(__dirname, './hello_world_by_ws.txt'))

readable.pipe(writable)
readable.on('end', () => {
    console.log('write done')
})
