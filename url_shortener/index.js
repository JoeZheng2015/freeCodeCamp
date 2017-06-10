const express = require('express')
const mongo = require('mongodb').MongoClient

const app = express()
const port = 8080

mongo.connect('mongodb://localhost:27017/url', (err, db) => {
    if (err) throw err

    const collection = db.collection('url_shortner')
    app.get('/new/*', (req, res) => {
        const url = `${req.protocol}://${req.headers.host}/`

        const original_url = req.params[0]
        collection.findOne({
            original_url,
        })
        .then(document => {
            if (document) {
                const short_url = `${url}${document.short_url}`
                res.send({
                    original_url,
                    short_url,
                })
            }
            else {
                const short_url = getRandomNumber()
                collection.insertOne({
                    original_url,
                    short_url,
                })
                .then(result => {
                    res.send({
                        original_url,
                        short_url: `${url}${document.short_url}`,
                    })
                })
            }
        })
    })

    app.get('/:short_url', (req, res) => {
        const {short_url} = req.params

        collection.findOne({
            short_url,
        })
        .then(document => {
            if (document) {
                const {original_url} = document
                res.redirect(original_url)
            }
            else {
                res.sendStatus(404)
            }
        })
    })

    app.listen(port, () => {
        console.log(`server run at http://localhost:${port}`)
    })
})

function getRandomNumber(length = 4) {
    const number = Math.random() * Math.pow(10, length - 1)
    const str = number.toFixed(0)
    return padStart(str, length, '0')
}

function padStart(str, targetLength, padString = ' ') {
    const length = targetLength - str.length
    return length > 0 ?
        Array.from({length: length}, i => padString).join('') + str :
        str
}
