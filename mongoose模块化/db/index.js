/**
 * 负责数据库的连接
 * @type {Mongoose}
 */
let mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);//创建一个新的索引器
const DB_NAME = 'demo';
const DB_URL = '127.0.0.1';
const PORT = '27017';
mongoose.connect(`mongodb://${DB_URL}:${PORT}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
module.exports = new Promise((resolve, reject) => {
    mongoose.connection.on('open', (err) => {
        if (!err) {
            resolve();
            console.log('数据库连接成功了')
        } else {
            reject(err)
        }
    })
});