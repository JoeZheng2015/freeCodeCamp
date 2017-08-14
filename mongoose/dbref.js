// 使用 ref 和 populate 来连表查询

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose', {
    useMongoClient: true,
})
mongoose.Promise = global.Promise

const authorSchema = new mongoose.Schema({
    name: String,
    age: Number,
})
const newSchema = new mongoose.Schema({
    title: String,
    author: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Author'
        }
    ]
})

const Author = mongoose.model('Author', authorSchema)
const New = mongoose.model('New', newSchema)

const joe = new Author({
    name: 'joe',
    age: 28,
})
const gary = new Author({
    name: 'gary'
})

joe.save()
    .then(() => {
        return gary.save()
    })
    .then(() => {
        const news = new New({
            title: 'mongoose usage',
            author: [joe, gary],
        })
        return news.save()
    })
    .then(() => {
        // 如果不 populate 则 new 的 author 是 ObjectId
        // author = ObjectId
        // return New.findOne()
        //     .then(result => {
        //         console.log(result)
        //     })

        // populate author 则为对应的 author model
        // author = {_id, age, name}
        // return New.findOne()
        //     .populate('author')
        //     .then(result => {
        //         console.log(result)
        //     })

        // 使用第二参数指定需要的属性
        // author = {_id, age}
        // return New.findOne()
        //     .populate('author', 'age')
        //     .then(result => {
        //         console.log(result)
        //     })

        // select 可以用 String, Object 来指定
        // 文档没说，但是 Array 也行
        // 总结：还是用 String 比较规范
        return New.findOne()
            .populate({
                path: 'author',
                select: 'name age',
                // select: {
                //     'name': 1,
                //     'age': 1,
                // },
                // select: ['name', 'age']
            })
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log('-err', err)
            })
    })
    .then(() => {
        return Author.remove()
    })
    .then(() => {
        return New.remove()
    })
