let fs = require('fs')
let ws = fs.createWriteStream(__dirname+'/demo1.txt',{
    start:10
})
ws.on('open',function () {
    console.log('可写流打开了')
})
ws.on('close',function () {
    console.log('可写流关闭了')
})
ws.write('祢豆子卡哇伊呐！\n')
ws.write('我妻善意！\n')
ws.end()