// 使用 crypto 包生成 sha1
const crypto = require('crypto')
const express = require('express')
const app = express()

app.put('/message/:id', (req, res) => {
    const id = req.params.id
    const hash = crypto.createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex')
    res.send(hash)
})
app.listen(process.argv[2])
