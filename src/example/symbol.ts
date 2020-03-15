// symbol是基本数据类型
// "lib": [  需要在tsconfig.json 中引入类库
//     "es6"
//   ], 
// symbol是独一无二的  入参只能是string或者number类型的  在js中可以出入对象 不过也会tostring
/* 
    symbol不能进行计算
    symbol是一个真值 就是boolen 的true
*/
const s =  Symbol()
const s1 =  Symbol()
const s2 =  Symbol('asdf')
const s3 =  Symbol('asdf')
const s4 =  Symbol(123)

// es6中动态传入对象key
let prop = "aaa";
const info ={
    [prop]:'asdf',
    [`asdf${prop}`]:123
}
// console.log(info)

const s5 = Symbol('asdf')
const info1 = {
    [s5]:123,
    a:1234
}
// console.log(info1)
// {Symbol(asdf): 123}

/* 
    使用symbol值作为对象的好处就是 symbol是独一无二的 
    修改对象中的值也只能通过 []  取值也是一样的
    info1[s5] = 1234
    不能通过 info1.s5 ='123'
*/
info1[s5] = 1234
/* 
 打印不出来symbol值得key
*/
for(const key in info1) {
    // console.log(key)
    
}
// console.log(Object.keys(info1))

/* 
  通过使用这个方法获取到symbol值得对象key
    Object.getOwnPropertySymbols(info1)
*/
// console.log(Object.getOwnPropertySymbols(info1))

/* 
    Symbol.for()
    Symbol.keyFor()
*/
const a1 = Symbol.for("adf")
const a2 =Symbol.for("adf")
// console.log(a1 == a2)  //true
// console.log(Symbol.keyFor(a1)) // adf
// console.log(Symbol.keyFor(s1) 报错 只能返回 通过Symbol.for()创建的实例值

// es6 内置的symbol值
