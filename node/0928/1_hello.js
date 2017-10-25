'use strict';
/*
基本的命令行操作命令
  查看版本号 node -v
  在命令行输入Node 进入node.js的交互环境，可以输入任意的javascript语句，回车得到结果（类似console.log）
  退出node环境，ctrl+c 两次

  关于严格模式：
    每次都手动写“use strict”很麻烦  所以可以给Node传递一个参数，让Node直接为所有js文件开启严格模式  node --use_strict xx.js

  总结：
    Node交互模式和直接运行.js的区别
    直接输入node进入交互模式，启动Node解析器，输入一行代码就执行一行
    直接运行node xx.js 一次性的把xx.js文件的源代码给执行了

* */
// console.log('hello world');
// console.log('heping');
    let s = 'hello';
    function green(name) {
        console.log(s + "," + name + "!")
    }
    console.log(green);
    require();
    module.exports = green;
