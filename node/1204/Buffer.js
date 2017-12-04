/*
用于操作二进制数据流
* */
// new Buffer();

//new Buffer(size); size[Number]创建一个Buffer对象并为这个对象分配一个大小
//当我们为一个Buffer对象分配空间大小以后，其长度是固定的不能 更改
//
// let bf = new Buffer(5);
// console.log(bf);
// bf[1] = 10;
// console.log(bf);//显示16进制

// var bf = new Buffer([1,2,3]);//通过某种方式初始化一个Buffer后长度是已经固定的了
// console.log(bf);
// bf[10] = 10;
// console.log(bf);


/*
new Buffer(str,[encoding]) str String类型 需要存入buffer的string 字符串
  encoding String 类型使用什么编码方式 参数可选
* */
let bf = new Buffer('heping','utf-8 ');
console.log(bf);


