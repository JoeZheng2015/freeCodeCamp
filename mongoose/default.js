const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose', {
    useMongoClient: true,
})

const User = mongoose.model('User', {
    name: {
        type: String,
        // 固定默认值
        default: 'newbie',
    },
    registerTime: {
        type: Date,
        // 动态默认值，注意是传函数
        default: Date.now
    } 
})

const user = new User()

// {
//     name: 'newbie',
//     registerTime: xxxx, // 当时的时间
// }
console.log(user)
