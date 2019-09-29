let express = require('express');
let app = express();
//let bodyParser = require('body-parser');//第三方的中间件body-parser
//全局中间件
/*app.use((req,res,next)=>{
   if (req.get('Referer').split('/')[2] === 'localhost:8887'){
       next();
   }else {
       res.sendFile(__dirname+'/public/err.png')

   }
});*/
//使用body-parser，解析post请求体携带过来的urlencoded编码形式的参数
//工作方式：提取post请求体，如果是urlencoded形式编码，随后将请求体解析成一个对象，随后挂载到request身上
//app.use(bodyParser.urlencoded({extended: true}));
//express内置的中间件
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/picture',(request,response)=> {
    response.sendFile(__dirname+'/public/pic.png')
});
app.get('/demo1', (req, res) => {
    res.sendFile(__dirname + '/public/demo1.html');
});
app.get('/demo2', (req, res) => {
    res.sendFile(__dirname + '/public/demo2.html');
});
app.get('/demo3', (req, res) => {
    res.sendFile(__dirname + '/public/demo3.html');
});
app.listen(3000, (err) => {
    if (!err) console.log('启动服务器成功！');
    else console.log(err);
});