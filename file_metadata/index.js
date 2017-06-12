const express = require('express')
const multer = require('multer')
const path = require('path')

const upload = multer()
const app = express()
const port = 8080


app.use(express.static(path.resolve(__dirname)))

app.post('/upload', upload.single('file'), (req, res) => {
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