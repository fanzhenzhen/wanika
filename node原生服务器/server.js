let http = require('http');
let querystring = require('querystring');
let server = http.createServer((request, response) => {
    let param = request.url.split('?')[1];
    let obj = querystring.parse(param);
    let {name,age} = obj;
    response.setHeader('content-type','text/html;charset=utf-8')
    response.end(`我的名字是${name},我的年纪是${age}`)
});
server.listen(3000, (err) => {
    if (!err) {
        console.log('服务器启动成功了')
    } else {
        console.log(err)
    }
});
