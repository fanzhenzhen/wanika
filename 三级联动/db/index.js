const mongoose = require('mongoose');
mongoose.set('useCreateIndex',true);
//数据库配置变量
const DB_NAME = 'demo'
const DB_URL = '127.0.0.1'
const PORT = '27017'
mongoose.connect(`mongodb://${DB_URL}:${PORT}/${DB_NAME}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
module.exports = new Promise((resolve,reject)=>{
    mongoose.connection.on('open',(err)=>{
        if(!err){
            resolve();
            console.log(`位于${DB_URL}机器上${PORT}端口的${DB_NAME}数据库连接成功`)
        }else{
            reject(err);
        }
    })

})