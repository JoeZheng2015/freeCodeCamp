const mongo = require('mongodb').MongoClient
const ageThreshold = parseInt(process.argv[2], 10)

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
    if (err) throw err
    const collection = db.collection('parrots')
    const query = {
        age: {
            $gt: ageThreshold,
        }
    }
    const projection = {
        name: 1,
        age: 1,
        _id: 0,
    }
    collection.find(query, projection)
        .toArray((err, documents) => {
            if (err) throw err
            console.log(documents)
            db.close()
        })
})