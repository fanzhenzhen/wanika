let {Router} = require('express');
let {resolve} = require('path');
let usersModel = require('./models/usersModels');
let router = new Router();
router.post('/regsiter', async (req, res) => {
    //获取用户输入的信息
    let {email, nick_name, pwd, re_pwd} = req.body;
    //2.定义正则规则
    let emailReg = /^[a-zA-Z0-9_]{2,20}@[a-zA-Z0-9_]{2,16}\.com$/
    let nickNameReg = /[\u4e00-\u9fa5]/gm
    let pwdReg = /^[a-zA-Z0-9_@#$%]{6,20}$/
    let errMsg = {};

    //3.校验正则表达式
    if (!emailReg.test(email)) {
        errMsg.emailErr = '邮箱输入不合法，格式应为：用户名@主机名.com的形式，用户名2-20，主机名2-16'
        // res.send('邮箱输入不合法，格式应为：用户名@主机名.com的形式，用户名2-20，主机名2-16')
    }
    if (!nickNameReg.test(nick_name)) {
        errMsg.nickNameErr = '昵称不合法，应为中文'
        //  res.send('昵称不合法，应为中文')
    }
    if (!pwdReg.test(pwd)) {
        errMsg.pwdErr = '密码不合法，包含大小写字母，和部分特殊字符，且长度为6-20'
        //res.send('密码不合法，包含大小写字母，和部分特殊字符，且长度为6-20')
    }
    if (re_pwd !== pwd) {
        errMsg.rePwdErr = '两次输入密码不一致'
        //res.send('两次输入密码不一致')
    }
    if (JSON.stringify(errMsg) !== '{}') {
        //能进入即代表用户犯错了
        res.render('register', {errMsg})
        return
    }
    try {
        let result = await usersModel.findOne({email});
        if (result) {
            errMsg.emailErr = `${email}邮箱已经注册过，请更换邮箱`
            res.render('register', {errMsg})
            // res.send(`${email}邮箱已经注册过，请更换邮箱`)
        } else {
            await usersModel.create({email, nick_name, pwd});
            console.log(`邮箱为${email}的用户注册成功了`)
            res.redirect('/login');
        }
    } catch (e) {
        console.log(e);
        errMsg.dbErr = '网络不稳定稍后重试！'
        res.render('regsiter', {errMsg});
    }

});
router.post('/login', async (req, res) => {
    let {email, pwd} = req.body;
    let emailReg = /^[a-zA-Z0-9_]{2,20}@[a-zA-Z0-9_]{2,16}\.com$/
    let pwdReg = /^[a-zA-Z0-9_@#$%]{6,20}$/
    let errMsg = {}
    if (!emailReg.test(email)) {
        //res.send('邮箱输入不合法，格式应为：用户名@主机名.com的形式，用户名2-20，主机名2-16')
        errMsg.emailErr = '邮箱输入不合法，格式应为：用户名@主机名.com的形式，用户名2-20，主机名2-16'
    }
    if (!pwdReg.test(pwd)) {
        // res.send('密码不合法，包含大小写字母，和部分特殊字符，且长度为6-20')
        errMsg.pwdErr = '密码不合法，包含大小写字母，和部分特殊字符，且长度为6-20'
    }
    if (JSON.stringify(errMsg) !== '{}') {
        res.render('login', {errMsg})
        return
    }
    try {
        let result = await usersModel.findOne({email, pwd});
        if (result) {
            res.redirect('https://www.baidu.com');
        } else {
            //res.send('用户名或者密码错误！');
            errMsg.loginErr = '用户名或密码错误'
            res.render('login',{errMsg})
        }
    } catch (e) {
        console.log(e);
        errMsg.dbErr = '网络不稳定稍后重试！'
        res.render('register',{errMsg})
    }

});
module.exports = router;