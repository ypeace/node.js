/*
   __filename:返回当前模块文件的额解析后的绝对路径 ，该属性其实并非是全局的 是模块做鱼用下的
   __dirname: 返回当前模块文件所在目录解析后的绝对路径，该属性也不是全局的，而是模块作用域下的
* */
console.log(__filename)//被解析过的绝对路径

// var d = new Date();
// var arr = new Array(1,2,3)
setInterval(function(){
  var d= new Date();
  console.log(d)
},1000);

