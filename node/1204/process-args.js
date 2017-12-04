/*process对象
process对象是是一个全局对象，可以在任何的地方访问到他 通过这个对象提供的属性和方法 使我们可以在对当前运行的程序进行访问和控制

* */
// console.log(process)

// process.argv.forEach((val,index)=>{
//   console.log(`${index}: ${val}`)
// });//返回一个数组  第一个元素是node 第二个元素是js文件的名称（运行的文件名字） 接下来的元素依次是命令行出入的参数

//env  用户环境信息
// console.log(process.env);//LOGONSERVER登录用户名服务器 OS：操作服务器 //系统盘

console.log(process.pid)

