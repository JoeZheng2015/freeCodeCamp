const mongo = require('mongodb').MongoClient
const size = process.argv[2]

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
    if (err) throw err
    const collection = db.collection('prices')
    collection.aggregate([
        {
            $match: {
                size,
            }
        },
        {
            $group: {
                _id: '$size',
                avgPrice: {
                    $avg: '$price',
                }
            }
        }
    ], (err, data) => {
        if (err) throw err
        if (!data.length) {
            throw new Error('no documents found')
        }
        const price = data[0].avgPrice.toFixed(2)
        console.log(price)
        db.close()
    })
})