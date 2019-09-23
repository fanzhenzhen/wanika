//先引入fs
let fs = require('fs')
/*--options：配置对象（可选）
*                --encoding：编码，默认值：utf-8(万国码)
*                --mode：文件权限的设置，默认值是0o666
*                     --0o111:文件的可执行权限(几乎不用，linux有自己的一套文件权限控制)
*                     --0o222:文件的可写入权限
*                     --0o444:文件的可读取权限
*                --flag：
*                     --w:写入数据
*                     --a:追加数据
*           --callback:回调函数
*                --err错误对象
 */
fs.writeFile(__dirname+'/demo.txt','祢豆子好可爱啊！',{
    mode:0o666,
    flag:'a'
},function (err) {
    if (err) console.log(err)
    else  console.log('写入成功啦！')
})