let fs = require('fs')
//备注1：在Node中有一个而设计的原则：错误优先
//备注2：简单文件读取，是将要读取的数据一次性加载到内存中，容易造成内存泄露，使用于：小文件的读取
fs.readFile(`${__dirname}/music.mp3`, (err, data) => {
    if (!err) {
        fs.writeFile(`${__dirname}/music2.mp3`, data, (err) => {
            if (!err) {
                console.log('文件写入成功！')
            } else {
                console.log(err);
            }
        })
    } else {
        console.log(err);
    }
})