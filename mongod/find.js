const mongo = require('mongodb').MongoClient
const age = parseInt(process.argv[2], 10)

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
    if (err) throw err
    const collection = db.collection('parrots')
    collection.find({
        age: {
            $gt: age,
        }
    })
    .toArray((err, documents) => {
        if (err) throw err
        console.log(documents)
        db.close()
    })
})