/*process对象
process对象是是一个全局对象，可以在任何的地方访问到他 通过这个对象提供的属性和方法 使我们可以在对当前运行的程序进行访问和控制

* */
//console.log(process)

process.argv.forEach((val,index)=>{
  console.log(`${index}: ${val}`)
});//返回一个数组  第一个元素是
// process.argv.forEach(function(val,index)
//   console.log(`${index}: ${val}`)
// });


