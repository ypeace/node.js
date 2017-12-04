/*
  process是node提供的一个对象，它代表的是node.js的进程
  process.cwd()//返回当前目录

  process.nextTick（）
 并不是立即执行的，要等下一次事件循环

 node.js的进程本身的事件就是由process对象来处理
 如果我们相应 exit 事件，就可以在程序即将退出时执行某个回调函数

* */

//程序即将退出时的回调函数
process.on('exit',function(){
    console.log('我退出被执行了')
});
//process.nextTick();等及执行函数执行完在执行
process.nextTick(function(){
    console.log('我是回调函数')
});

console.log('你好');

console.log('123');

//判断js 执行的环境
if( typeof(window) === 'undefined') {
    console.log('node')
}else{
    console.log('lalala')
}