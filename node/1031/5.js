var m5 = require('./hello');//返回值就是被加载模块中的Module.exports
/*
modele:提供和当前模块有关的一些信息

在这个module对象里，有一个子对象：exports 对象
我们可以通过这个对象吧一个模块中的局部变量对外进行提供访问
* */
//console.log( a );
//console.log(module)
console.log(m5);