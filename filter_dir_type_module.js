const fs = require('fs')

module.exports = function (dir, type, callback) {
    
    fs.readdir(dir, (err, files) => {
        if (err) {
            return callback(err)
        }

        const filterFiles = files.filter(file => file.endsWith(`.${type}`))
        callback(null, filterFiles)
    })
}
