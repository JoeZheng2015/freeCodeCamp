const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose', {
    useMongoClient: true,
})

const Schema = new mongoose.Schema({
    name: String,
    type: String,
})

// 定义实例方法
Schema.methods.findSmiliarTypes = function (cb) {
    return this.model('Animal').find({
        type: this.type,
    }, cb)
}

// 因为 Schema.methods 本来是个空对象，所以也可以这样批量定义
// Schema.methods = {
//     findSmiliarTypes(cb) {
//         return this.model('Animal').find({
//             type: this.type,
//         }, cb)
//     },
//     otherMethods() {
//         // detail
//     }
// }


// 定义静态方法
Schema.statics.findByName = function (name, cb) {
    return this.model('Animal')
        .find({
            name: new RegExp(name, 'i')
        }, cb)
}

const Animal = mongoose.model('Animal', Schema)

Animal.create({
    name: 'XIAO8',
    type: 'dog'
})
    .then(() => {
        const dog = new Animal({
            type: 'dog'
        })

        return dog.findSmiliarTypes()
            .then(result => {
                console.log('findSmiliarTypes dog', result)
            })
    })
    .then(() => {
        return Animal.findByName('xiao8')
            .then(result => {
                console.log('findByName xiao8', result)
            })
    })
    .then(() => {
        return Animal.remove()
    })
