const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose', {
    useMongoClient: true,
})
mongoose.Promise = global.Promise

const Schema = new mongoose.Schema({
    name: String,
    stock: Number,
})

const Good = mongoose.model('Good', Schema)

// 也能调用实例增
// const good = new Good({
//     name: '桌子',
// })
// good.save()
//     .then(result => {
//         console.log('增:', result)
//     })

Good.create({
    name: '桌子',
})
    .then(result => {
        console.log('增:', result)

        return Good.findOneAndUpdate(
            // query
            {
                name: '桌子',
            },
            // update
            {
                $set: {
                    name: '桌子2'
                }
            },
            // options
            {
                new: true, // 返回 result 为新的 doc
            })
            .then(result => {
                console.log('改:', result)
            })
    })
    .then(() => {
        return Good.find({})
            .then(result => {
                console.log('查:', result)
            })
    })
    .then(() => {
        return Good.remove({})
    })
    .then(() => {
        return Good.find({})
            .then(result => {
                console.log('删:', result)
            })
    })
