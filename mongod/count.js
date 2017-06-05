const mongo = require('mongodb').MongoClient
const ageThreshold = +process.argv[2]

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
    if (err) throw err
    const collection = db.collection('parrots')
    collection.count({
        age: {
            $gt: ageThreshold,
        }
    }, (err, num) => {
        if (err) throw err
        console.log(num)
        db.close()
    })
})