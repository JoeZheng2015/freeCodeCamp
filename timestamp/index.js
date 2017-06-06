const express = require('express')
const moment = require('moment')
const app = express()
const port = 8080
const dateStringFormat = 'MMMM DD, YYYY'

app.get('/:date', (req, res) => {
    const isString = Number.isNaN(parseInt(req.params.date, 10))
    const date = isString ? moment(req.params.date, dateStringFormat) : moment.unix(+req.params.date)
    const result = date.isValid() ?
        {
            unix: date.unix(),
            natural: date.format(dateStringFormat)
        } :
        'invalid Date'

    res.send(result)
})

app.listen(port, () => {
    console.log(`server run at http://localhost:${port}`)
})
