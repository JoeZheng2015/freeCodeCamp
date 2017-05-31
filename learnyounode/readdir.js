const fs = require('fs')
const dir = process.argv[2]
const type = process.argv[3]

fs.readdir(dir, (err, files) => {
    if (err) {
        console.log('err', err)
    }
    files.filter(file => file.endsWith(`.${type}`))
        .forEach(file => {
            console.log(file)
        })
})
