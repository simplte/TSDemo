// 交叉类型 理解成并 返回出去的对象既有 泛型T类型也有泛型U类型
const mergeFunc = <T, U>(name: T, age: U): T & U => {
	let res = {} as T & U;
	res = Object.assign(name, age);
	return res;
};
console.log(mergeFunc({ a: 'a' }, { a: 'b' }));
// 联合类型 理解成或  入参是string或者number类型
const getLengthF = (content: string | number): number => {
	if (typeof content == 'string') {
		return content.length;
	} else {
		return content.toString.length;
	}
};
console.log(getLengthF('1123'));
/* 
    类型保护
*/

// 1：typeof   比较的类型 只能是 number string boolean symbol 四种类型中的一种
//              只能做 === 或者 !== 的判断 不能使用typeof的返回值进行判断 (typeof item1).includes("string")
const valueList = [ 123, 'abc' ];
const getRandomVal = () => {
	const number = Math.random() * 10;
	if (number < 5) {
		return valueList[0];
	} else {
		return valueList[1];
	}
};
const item1 = getRandomVal();
if (typeof item1 === 'string') {
	console.log(item1.length);
} else {
	console.log(item1.toFixed());
}

// instanceof 类型保护

class AClass {
	public name: string;
	constructor() {}
}
class BClass {
	public age: number;
	constructor() {}
}

function getRandomFun() {
	return Math.random() < 0.5 ? new AClass() : new BClass();
}
const itemC = getRandomFun();
if (itemC instanceof AClass) {
	console.log(itemC.name);
} else {
	console.log(itemC.age);
}

// null/undefined 所有类型的子类型
let vals = '123';
vals = undefined;
vals = null;

// 类型断言
function getStr(num: number | null): string {
	function getRes(val: string) {
		return val + num.toFixed().toString();
	}
	num = num || 0.1;
	return getRes('bqc-');
}
console.log(getStr(null));

// 类型别名
type TypeString = string;
let str22: TypeString;
str22 = '1';
type PostionType<T> = { x: T; y: T };
const postion1: PostionType<number> = {
	x: 1,
	y: 2
};
// 类型别名中的属性可以使用自己，用于嵌套
type Childs<T> = {
	name: string;
	child?: Childs<T>;
};
const Childrens: Childs<number> = {
	name: 'aa',
	child: {
		name: '123',
		child: {
			name: 'bqc'
		}
	}
};
// 接口和类型别名起到同样作用的情况
interface Interface {
	num: number;
}
type shuzi = {
	num: number;
};
let _numArr: Interface = {
	num: 123
};
let _numArr1: shuzi = {
	num: 123
};
_numArr = _numArr1;

// 字面量类型
type Name = 'bqc';
const name4: Name = 'bqc';
type Direction = 'qw' | 'sf';
function getDirection(val: Direction) {
	console.log(val);
}
getDirection('qw');
/* 
	可辨识联合两要素
	1：具有普通单例类型属性
	2：一个类型别名包含了哪些类型的联合
*/
interface AA {
	kind: 'aa'; // 三个接口都有一个kind属性
	height: number;
}
interface BB {
	kind: 'bb';
	height: number;
	weight: number;
}
interface CC {
	kind: 'cc';
	height: number;
}
type all = AA | BB | CC; // 一个类型别名包含了三个类型
function countM(val: all) {
	switch (val.kind) {
		case 'aa':
			return val.height;
			break;
		case 'bb':
			return val.height;
			break;
		case 'cc':
			return val.height;
			break;
	}
}
