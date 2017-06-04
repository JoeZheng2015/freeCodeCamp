const mongo = require('mongodb').MongoClient
const dbName = process.argv[2]
const collectionName = process.argv[3]
const _id = process.argv[4]

mongo.connect(`mongodb://localhost:27017/${dbName}`, (err, db) => {
    if (err) throw err
    const collection = db.collection(collectionName)
    collection.remove({_id}, (err) => {
        if (err) throw err
        db.close()
    })
})