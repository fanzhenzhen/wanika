let express = require('express');
let app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));
app.get('/ajax_get', (req, res) => {
    console.log(req.query);
    res.send('ajax发送的get请求')
});
app.post('/ajax_post', (req, res) => {
    console.log(req.body);
    res.send('ajax发送的post请求')
});
app.listen(3000, (err) => {
    if (!err) console.log('服务器请求成功！');
    else console.log(err);
});