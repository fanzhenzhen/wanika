let mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);//创建一个新的索引器
mongoose.connect('mongodb://localhost:27017/demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
let dbPromise = new Promise((resolve, reject) => {
    mongoose.connection.on('open', (err) => {
        if (!err) {
            resolve();
            console.log('数据库连接成功了')
        } else {
            reject(err)
        }
    })
});
(async () => {
    try {
        await dbPromise;
    } catch (e) {
        console.log('连接数据库失败', e)
    }
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
    let studentsModel = mongoose.model('students', studentSchema);
    /*  let modelPromise = studentsModel.create({
          stu_id: '0005',
          name: '时倾',
          age: 18,
          sex: '男',
          hobby: ['吃饭', '睡觉'],
          info: '有点萌萌哒',
      });
      modelPromise.then(
          (data) => {
              console.log('进入成功的回调');
              console.log(data)
          }
      ).catch(
          (err) => {
              console.log('进入失败的回调');
              console.log(err)
          }
      )*/
    studentsModel.find({age: 22}, (err, data) => {
        if (!err) console.log(data);
        else console.log(err);
    });
    studentsModel.updateMany({sex: '女'}, {sex: '男'}, (err, data) => {
        if (!err) console.log(data);
        else console.log(err);
    });
    studentsModel.deleteMany({age: 18}, (err, data) => {
        if (!err) console.log(data);
        else console.log(err);
    })
})();
