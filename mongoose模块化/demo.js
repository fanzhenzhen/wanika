let db = require('./db');
let studentsModel = require('./models/studentsModels');
(async () => {
    try {
        await db;
    } catch (e) {
        console.log('连接数据库失败', e)
    }
      let modelPromise = studentsModel.create({
          stu_id: '0006',
          name: '啦啦',
          age: 20,
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
      )
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