const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose', {
    useMongoClient: true,
})

const Schema = new mongoose.Schema({
    name: String,
})

const Person = mongoose.model('Person', Schema)

Person.create({
    name: 'joe'
})
    .then(result => {
        console.log(result)
    })
    .then(() => {
        return Person.findOne({
            name: 'joe'
        })
            .then(result => {
                const object = result.toObject({
                    transform(doc, ret, options) {
                        ret.id = ret._id
                        delete ret._id
                        return ret
                    }
                })
                console.log(object)
            })
    })
    .then(() => {
        return Person.remove()
    })