function addf(arg: number, arg2: number): number {
	return arg + arg2;
}
// 定义函数类型
let add1: (x: number, y: number) => number;
// 使用定义的函数类型
add1 = (arg1: number, arg2: number): number => {
	return arg1 + arg2;
};
add1 = (arg1: number, arg2: number): number => arg1 + arg2;

// 接口定义函数类型
/* 
    interface Add {
        (x: number, y: number): number;
    } 
*/
// tslint推荐使用类型别名的方式定义函数类型
type Add = (x: number, y: number) => number;
// 使用定义的函数类型;
let addFunc: Add;
addFunc = (arg1: number, arg2: number) => arg1 + arg2;

// 定义可选参数
type Addfunc1 = (arg: number, arg2: number, arg3?: number) => number;
let addFunc2: Addfunc1;
addFunc2 = (arg: number, arg1: number): number => {
	return arg + arg1;
};
let addFunc3: Addfunc1;
addFunc3 = (arg: number, arg1: number, arg2: number): number => {
	return arg + arg1 + arg2;
};
console.log(addFunc2(1, 2), addFunc3(1, 2, 3));
/* 
    ts中使用...语法糖
    ... 可以在数组和对象中使用
*/
// const handleData = (arg: number, arg2: number, ...args: number[]): number => {
// 	console.log(args);
// 	return args[0];
// };
// console.log(handleData(2, 23, 4123, 123));

// 函数重载
/* 
    只有前两个定义属于函数重载，第三个属于函数实体，不属于重载的一部分
    函数重载只能使用function定义
*/
function handleFun(x: string): string[];
function handleFun(x: number): number[];
// 函数实体
function handleFun(x: any): any {
	if (typeof x === 'string') {
		return x.split('');
	} else {
		return x.toString().split('').map((item) => {
			return Number(item);
		});
	}
}
console.log(handleFun(123), handleFun('adf'));
