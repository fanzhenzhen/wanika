let fs = require('fs');
let rs = fs.createReadStream(`${__dirname}/music.mp3`);
let ws = fs.createWriteStream(`${__dirname}/music3.mp3`);
rs.on('open', () => {
    console.log('可读流打开了')
});
rs.on('close', () => {
    console.log('可读流关闭了');
    ws.end();
});
ws.on('on', () => {
    console.log('可写流打开了')
});
ws.on('close', () => {
    console.log('可写流关闭了')
});
//给可读流绑定一个data事件，会自动触发可读流读取数据
rs.on('data',(data)=>{
    console.log('读出了一些东西')
    ws.write(data);
});