/* 
    泛型

*/
// const getArr = (val: string, tiems: number = 5): number[] => {
// 	return new Array(tiems).fill(val);
// };
// console.log(getArr('string', 2).map((item) => item.length)); 报错

// 使用泛型解决上面这个报错问题
// const getArr = <T>(val: T, tiems: number = 5): T[] => {
// 	return new Array(tiems).fill(val);
// };
// console.log(getArr<string>('string', 2).map((item) => item.length));
// console.log(getArr<number>(123, 2).map((item) => item.toFixed()));
/* 
    泛型的使用
    1：写法T
        参数前使用<T> 定义泛型  参数中使用到泛型的地方定义T为参数的类型  
        函数反参如果使用到泛型的类型也是一样 在反参中使用定义的泛型T
        const getArr = <T>(val: T, tiems: number = 5): T[] => {
            return new Array(tiems).fill(val);
        };
    2：使用已经利用泛型定义好的方法
        方法名后<> 使用简括号去定义泛型的类型就行了
    getArr<string>('string', 2).map((item) => item.length)

*/
// 多个泛型的定义
const getArr1 = <T, U>(params1: T, params2: U, times: number): Array<[T, U]> => {
	return new Array(times).fill([ params1, params2 ]);
};
// console.log(
// 	getArr1(1, 'ad', 2).map((item) => {
// 		console.log(item[0]);
// 		console.log(item[1]);
// 	})
// );

// 定义函数类型
/* 
    泛型定义函数类型
*/
// let getArr: <T>(arg: T, times: number) => T[];
// // 实际函数体
// getArr = (arg: any, times: number) => {
// 	return new Array(times).fill(arg);
// };
// // 执行函数
// getArr('1', 23).map((item) => item.length);

/* 
    泛型定义函数体步骤
    1：使用泛型定义函数体
    2：定义实际函数体
    3：执行实际函数体 
*/

/* 
    使用类型别名定义函数
    1: 使用type关键字  创建类型别名
    2： 和泛型定义函数类型一样 尖括号开头 <T>  参数中使用到泛型的参数 使用T
    3: 反参 如果使用到泛型 T[]
*/
// // 1:使用类型别名定义泛型
// type GetArr2 = <T>(arg: T, times: number) => T[];
// // 2:定义实际函数体
// let getArr3: GetArr2 = (arr: any, times: number) => {
// 	return new Array(times).fill(arr);
// };
// // 3:执行具体函数

/* 
    一:使用接口定义泛型函数类型
    1:使用interface 关键字 创建接口名称
    2: 接口类似于一个对象 接口名称后直接跟花括号
    3:花括号内定义接口的具体内容
    4:使用接口定义函数类型的步骤
        1:和其他方式一样 使用尖括号 <T> 定义泛型
        2:参数中需要泛型类型的参数后面  :T
        3:返回值 和参数中间使用:  
        4:如果返回值也需要泛型 使用定义的泛型类型 T
*/
// interface GetArr4 {
// 	<T>(val: T, times: number): T[];
// }

// 也可以将泛型定义在接口名称后  这样接口内所有的数据类型都能使用
// interface GetArr4<T> {
// 	(val: T, times: number): T[];
// 	array: T[];
// }

/* 
    泛型约束
    约束泛型只能传入固定类型的数据
    例如:规定泛型只能传入带有长度的数据类型
       使用接口去约束泛型
       让泛型去继承接口 使得泛型是必须具有length属性的数据类型
*/
interface Trule {
	length: number;
}
let getArr = <T extends Trule>(arg: T, times: number): T[] => {
	return new Array(times).fill(arg);
};

getArr([ 2, 1 ], 1);
