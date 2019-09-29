let mongoose = require('mongoose')
//引入模式对象
let Schema = mongoose.Schema;
//创建约束对象
let usersSchema = new Schema({
    email: {
        unique: true,//唯一的
        type: String,
        required: true
    },
    pwd: {
        type: String,
        required: true
    },
    nick_name: {

        type: String,
        required: true

    },
    date: {
        type: Date,
        default: Date.now()
    },
    //数据的有效标识
    enable_flag: {
        type: String,
        default: 'Y'
    }
});
//创建模型对象
module.exports = mongoose.model('users', usersSchema);