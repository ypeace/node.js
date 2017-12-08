/*
标准输入输出流
stdin ：标准输入流
stdout： 标准输出流
*/


//输出  process.stdout.write 写
// process.stdout.write('hello');
// function log(data){
//   process.stdout.write(data)
// }
// log('世界');


//默认情况下，输入流是关闭的，要监听处理输入流数据，首先要开启输入流
process.stdin.resume();//开启输入流

//用户监听用户输入数据
// process.stdin.on('data',function (chunk) {
//   console.log('用户输入了：' + chunk);
// });

let a;
let b;
process.stdout.write('请输入a的值ff');
process.stdin.on('data', function (chunk) {
  if (!a) {
    a = Number(chunk);
    process.stdout.write('请输入b的值：');
  } else {
    b = Number(chunk);
    process.stdout.write('结果是' + (a + b));
  }
});