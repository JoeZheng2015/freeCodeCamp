const express = require('express')
const multer = require('multer')
const fs = require('fs')
const path = require('path')

const upload = multer()
const app = express()
const port = 8080

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')

app.get('/', (req, res) => {
    res.send(html)
})

app.post('/profile', upload.single('file'), (req, res) => {
    if (req.file) {
        res.send({
            size: req.file.size,
        })
    }
    else {
        res.send('Please upload a file')
    }
})

app.listen(port, () => {
    console.log(`server run at http://localhost:${port}`)
})