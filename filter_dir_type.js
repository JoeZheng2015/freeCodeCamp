const filterDirType = require('./filter_dir_type_module')

const dir = process.argv[2]
const type = process.argv[3]

filterDirType(dir, type, (err, files) => {
    files.forEach(file => {
        console.log(file)
    })
})
