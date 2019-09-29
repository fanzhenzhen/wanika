//引入路由器构造函数
let {Router} = require('express');
//引入Node内置模块：path
let {resolve} = require('path');
//实例化一个可用的router
let router = new Router();
router.get('/login', (req, res) => {
    // res.sendFile(__dirname + '/public/login.ejs');
    let url = resolve(__dirname, '../public/login.ejs');
    res.sendFile(url);
});
router.get('/regsiter', (req, res) => {
    // res.sendFile(__dirname + '/public/regsiter.ejs');
    let url = resolve(__dirname, '../public/regsiter.ejs');
    res.sendFile(url);
});
module.exports = router;
