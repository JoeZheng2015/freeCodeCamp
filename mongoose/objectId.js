// String 转化为 ObjectId
// 结论：
// - 有 2 种方法可以判断 ObjectId 与 string 是否相等
// 1.可以用 _id.equals(string) 方法
// 2.可以用 _id.toString() === string
// - 注意：mongoose.Types.ObjectId() 可以把 string 转化为 ObjectId 但不能用全等符号判断 ObjectId 是否相等，因为 ObjectId 是对象


const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mongoose', {
    useMongoClient: true,
})
const Schema = new mongoose.Schema({
    name: String,

})

const User = mongoose.model('User', Schema)

User.create({
    name: 'joe'
})
    .then(result => {
        console.log('-result', result)

        const _id = result._id.toString()

        console.log('ObjectId() :', result._id == mongoose.Types.ObjectId(_id)) // false 因为是两个不同引用的对象
        console.log('equals() :', result._id.equals(_id)) // true
        console.log('toString() :', result._id.toString() === _id) // true

        User.findByIdAndRemove(result.id)
    })
