let express = require('express');
let app = express();
let db = require('./db');
let uiRouter = require('./router/uiRouter');
let loginRegsigerRouter = require('./router/loginRegsigerRouter');
//对客户端隐藏服务器内部实现
app.disable('x-powered-by');
app.use(express.urlencoded({extended: true}));
//设置搜索引擎模板
app.set('view engine','ejs');
app.set('views','./views');


db.then(() => {
    app.use(uiRouter);
    app.use(loginRegsigerRouter);

}).catch((err) => {
    console.log(err);
});


app.listen(3000, (err) => {
    if (!err) console.log('服务器启动成功!');
    else console.log(err);
});