const express = require('express');
const app = express();
app.post('/', (request, response) => {
    response.send('ok');
});
app.post('/meishi', (request, response) => {
    response.send('我是一堆好吃的')
});
app.listen(3000, function (err) {
    if (!err) {
        console.log('服务器启动成功了')
    } else {
        console.log(err)
    }
})
