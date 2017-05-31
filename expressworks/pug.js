const express = require('express')
const app = express()
const port = process.argv[2]
const viewPath = process.argv[3]

app.set('views', viewPath)
app.set('view engine', 'pug')
app.get('/home', (req, res) => {
    res.render('index', {date: new Date().toDateString()})
})
app.listen(port)
