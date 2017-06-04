const mongo = require('mongodb').MongoClient
const firstName = process.argv[2]
const lastName = process.argv[3]
const doc = {
    firstName,
    lastName,
}
mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
    if (err) throw err
    const colllection = db.collection('docs')
    colllection.insert(doc, (err, data) => {
        if (err) throw err
        console.log(JSON.stringify(doc))
        db.close()
    })
})