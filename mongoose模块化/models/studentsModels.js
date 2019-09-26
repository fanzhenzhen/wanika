let mongoose = require('mongoose')
//引入模式对象
let Schema = mongoose.Schema;
//创建约束对象
let studentSchema = new Schema({
    stu_id: {
        type: String,
        required: true,//学号是必填的
        unique: true,//唯一的
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    hobby: [String],
    info: Schema.Types.Mixed,
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
module.exports = mongoose.model('students', studentSchema);