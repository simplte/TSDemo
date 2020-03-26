interface NameInfo {
	one: string;
	lasName: string;
}
const getName = ({ one, lasName }: NameInfo) => {
	return `${one}-${lasName}`;
};
getName({ one: '1', lasName: '123' });

interface Color {
	color?: string; // 可选属性 可有可没有 ?
	type: string;
	[prop: string]: any;
}
const getColor = ({ color, type }: Color) => {
	return `${color}=${type}`;
};
console.log(getColor({ type: '123' }));
console.log(getColor({ type: '123', color: '234', cac: 123 }));
/*
    接口限制了入参的数量 如果不需要控制入参的数量  使用索引签名修改接口
    interface Color {
        color?: string; // 可选属性 可有可没有 ?
        type: string;
        [prop: string]: any;
    }

    也可以使用这种方式
*/
const a = { type: '123', color: '234', cac: 123 };
console.log(getColor(a));
/*
 接口的只读属性
*/
interface Color1 {
	color?: string; // 可选属性 可有可没有 ?
	readonly type: string; // 只读类型的值 不能修改
}
let color2: Color1 = { color: '123', type: '123' };
// color2.type = '123';

/*
    定义函数的接口
*/
// interface AddFun {
// 	(num1: number, num2: number): number;
// }
// 类型别名方式
type AddFun = (num1: number, num2: number) => number;

const add: AddFun = (num1, num3) => num1 + num3;

interface Role {
	[id: string]: string;
}
const role1: Role = {
	a: 'qwe',
	1: 'qwe'
};
console.log(role1);
/* 
    接口继承
*/
interface Tt1 {
	color: string;
}
interface Tt2 extends Tt1 {
	type: number;
}
interface Tt3 extends Tt2 {
	length: number;
}
const t1: Tt2 = {
	color: 'asdf',
	type: 123
};
const t2: Tt3 = {
	color: 'asdf',
	type: 123,
	length: 1
};
/* 
	定义混合类型接口
*/
// js
// const getC = () {
// 	getC.count ++;
// }
// getC.count = 0;
// ts
interface Counter1 {
	(): void;
	count: Number;
}

const getCounter = (): Counter1 => {
	const c = () => {
		c.count++;
	};
	c.count = 0;
	return c;
};
const counter: Counter1 = getCounter();
counter();
console.log(counter.count);
counter();
console.log(counter.count);
counter();
console.log(counter.count);
