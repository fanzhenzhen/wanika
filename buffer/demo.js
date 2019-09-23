/*
let buf = new Buffer(10)
console.log(buf);*/
// let buf = Buffer.alloc(10);
// console.log(buf);
// let buf = Buffer.allocUnsafe(10)
// console.log(buf);
let str = 'hello'
let buf  = Buffer.from(str);
console.log(buf);