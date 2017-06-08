const express = require('express')

const app = express()
const port = 8080
const languagePattern = /.*(?=,)/
const softwarePattern = /Mozilla\/\d.?\d \((.+?)\) .*/

app.get('/', (req, res) => {
    const lang = languagePattern.exec(req.headers['accept-language'])
    const ua = softwarePattern.exec(req.headers['user-agent'])

    res.send({
        ipaddress: req.ip,
        language: lang ? lang[0] : '',
        software: ua ? ua[1] : '',
    })
})

app.listen(port, () => {
    console.log(`server run at http://localhost:${port}`)
})