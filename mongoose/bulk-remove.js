const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mongoose', {
    useMongoClient: true,
})

const Schema = new mongoose.Schema({
    name: String,

})

const User = mongoose.model('User', Schema)

User.insertMany([{
            name: 'joe',
        },
        {
            name: 'gary'
        }
    ])
    .then(result => {
        console.log('insert', result)
        return User.remove()
    })
    .then(result => {
        return User.find()
    })
    .then(result => {
        console.log('bulk remove', result)
    })