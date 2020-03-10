// document.title='haha'
// 布尔类型
let bool:boolean;
bool = true
// bool =123

// 数值类型
let num: number;
// num = "123"
num = 1

// 字符串类型
let str : string;
str = '123'
console.log(str)

// 数组类型
let arr : number[];
// arr = [1,"123",2]
let arr1 : Array<number>
let arr2 : (string|number)[]
arr2 = [1,123,'123']

// 元组类型 数组的扩展，指定长度 指定内容类型的数组
let tuple:[string,number,boolean];
tuple = ['asdf',1,false]

// 枚举值
enum Roles {
    Aaaa,
    Bbbb,
    Cccc
}
console.log(Roles.Aaaa) //返回序列号
console.log(Roles[0]) // 返回枚举字符串

// any类型
let val : any;
val = 1;
val = "adsf";
const arr4: any[] = [1,'sdf']

// void  表示什么类型都没有
const test = (text:string):void => {
    console.log(text)
}
let v :void;
v =undefined;
// v = null; ts.config.js 中把严格模式关掉就可以将null赋值给void类型的数据
test('123')

// null和undefined  是所有类型的子类型  就是说null和undefind 可以赋值给其他类型的数据
let u:undefined;
u = undefined;
// u = 2 报错
val = undefined
let n :null;
n=null;
// n ="adf"

// never   可以将never赋值给任意类型的值
const errorFunc = (msg:string):never =>{
    throw new Error(msg)
}
// 可以将never赋值给任意类型的值
// let neverFun = (()=>{
//     while(true){}
// })()
// val = neverFun

// object

let obj ={
    name:'123'
}
let obj2 = obj;
obj2.name = '234';
console.log(obj)
function objFun(obj:object):void {
    console.log(obj)
}
objFun({a:1})

// 类型断言
/* 
    两种写法
    target as string
    <string>target
*/
const getLength = (target: string | number) : number => {
    if((<string>target).length|| (target as string).length ===0){
        return (<string>target).length
    }else {
        return target.toString().length
    }
}
getLength('123')
getLength(123)