/*
* 一个文件就是一个模块
* 每个模块都有自己的作用域
* 我们使用var 来声明的一个变量，他并不是全局的 而且属于当前模块下的
* */
// var a=100;
// global.a=200;
//
// console.log(a);
// console.log(global.a);

//_filename :当前文件被解析过后的绝对路径
console.log(__filename);
//模块加载
/*
* require（'模块'）
* 模块加载机制：
* 路径  可以写相对路径和绝对路径
* 在nodeJS里同层级的必须写./
* require('2.js')意思是加载Node的核心模块（node.modules）
*
* 文件查找加载机制
* 会先按照模块名字加载没如果没有的话会在后面自动加上js
* 如果还没有找到会在后面加上.json
* 如果还没会在后面加上.node后缀
* */