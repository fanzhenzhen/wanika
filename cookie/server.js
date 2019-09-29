let express = require('express');
let app = express();
app.get('/demo',(req,res)=>{
    res.cookie('demo','0620');
    res.send('我给你“种”下了一个cookie，你赶紧看一看')
});
app.listen(3000, (err) => {
    if (!err) console.log('服务器启动成功！');
    else console.log(err);
});