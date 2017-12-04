/*
如果我们想一个模块可以访问另一个模块中的定义变量 ，可以把变量作为
1.global对象的属性(不是很推荐)
2.使用模块对象module
3.再模块作用域内还有一个内置的模块对象，exports 他其实就是module.exports
* */
//global.a = 100
// console.log(module)
var a = 100;
//module.exports.a = a;

exports.a = a;

console.log(module.exports===exports);

module.exports = [123];//如果这样做的话 exports和module.exports的指向关系就已经断开了
//尽可能在module.exports和exports上添加属性而不是赋值