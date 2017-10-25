/*
 模块：
    查找的顺序：依次在内置模块、全局模块和当前模块下查找hello.js

 CommonJS规范：
    模块加载机制被称为CommonJS规范，在这个规范下，每一个.js都是一个模块，他们内部各自使用的变量名和函数名都是互不冲突的
    一个模块想要对外暴露变量，可以用module.ecports = variable;
    一个模块想要引用其他模块暴露的变量，用let/const ref = require('module_name')
* */
const green = require('./1_hello');

const s = 'xiaoming';

green(s);