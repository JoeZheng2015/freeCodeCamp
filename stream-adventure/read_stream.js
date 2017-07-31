const fs = require('fs')
const file = process.argv[2]

const rs = fs.createReadStream(file)
rs.pipe(process.stdout)