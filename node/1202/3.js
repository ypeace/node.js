/*
在一个模块中能够方外另一个模块中的变量可以
1.把变量作为全局变量（不推荐）
2.使用模块对象，module对象低下有一些细节信息
* */
/*
*保存和当前模块相关的信息
* */
console.log(module);
/*
* 在module对象  有一个子对象exports对象
* 我们可以通过对这个对象把一个模块中的变量进行访问提供
* */
