const throught2 = require('throught2')

process.stdin
    .pipe(throught2(function (buffer, encoding, next) {
        this.push(bugger.toString().toUpperCase())
        next()
    }))
    .pipe(process.stdout)