/*
 * 1.本app.js文件，不要局限的理解成模块化中，“汇总”的那个文件。
 * 2.本app.js文件，是webpack的入口文件
 * 3.该文件里，不仅仅只是引入js文件，还可以引入：图片、媒体文件、样式、甚至是json文件
 *
 * */
import {
    sum
} from './module1'
import {
    sub
} from './module2'
//引入polyfill，如果使用如下方式引入，polyfill不仅仅处理了Promsie，而且还处理了所有es6的新语法
//import '@babel/polyfill'; // 包含ES6的高级语法的转换
//引入外部的json文件
import data from '../json/data.json'
//引入less样式文件
import '../css/index.less'

setTimeout(() => {
    console.log(1)
}, 1000)

let myPromise = new Promise(function (resolve) {
    setTimeout(() => {
        resolve()
    }, 1000)
})
console.log(myPromise)
myPromise.then(() => {
    console.log('promise实例的状态变成了成功的')
})

console.log(data)

console.log(sum(1, 2))
console.log(sub(3, 2))