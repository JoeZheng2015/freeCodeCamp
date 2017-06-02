const express = require('express')
const fs = require('fs')
const port = process.argv[2]
const filePath = process.argv[3]
const app = express()

app.get('/books', (req, res) => {
    fs.readFile(filePath, (err, data) => {
        let books
        if (err) {
            res.sendStatus(500)
            return
        }
        try {
            books = JSON.parse(data)
        }
        catch(e) {
            res.sendStatus(500)
        }
        res.json(books)
    })
})

app.listen(port)