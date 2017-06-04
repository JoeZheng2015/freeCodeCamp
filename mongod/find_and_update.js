const mongo = require('mongodb').MongoClient
const dbName = process.argv[2]

mongo.connect(`mongodb://localhost:27017/${dbName}`, (err, db) => {
    if (err) throw err
    const collection = db.collection('users')
    collection.update({
        "username": "tinatime",
    }, {
        $set: {
            age: 40,
        }
    }, (err, data) => {
        if (err) throw err
        console.log('done', data)
        db.close()
    })
})