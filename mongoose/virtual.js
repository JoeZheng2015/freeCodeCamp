const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose', {
    useMongoClient: true,
})

const Schema = new mongoose.Schema({
    first_name: String,
    last_name: String,
})

// Schema.virtual 返回 VirtualType
const virtual = Schema.virtual('full_name')

virtual
    .get(function() {
        return this.first_name + ' ' + this.last_name
    })
    .set(function(full_name) {
        const [first_name, last_name] = full_name.split(' ')
        this.first_name = first_name
        this.last_name = last_name
    })


const User = mongoose.model('User', Schema)
const user = new User({
    first_name: 'steve',
    last_name: 'zheng'
})

// steve zheng
console.log(user.full_name)

user.full_name = 'joe zheng'

// joe zheng
console.log(user.full_name)
