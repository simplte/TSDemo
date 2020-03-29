// this的使用
class Counter {
	constructor(public count: number = 0) {}
	public add(val: number) {
		this.count += val;
		return this;
	}
	public subscribe(val: number) {
		this.count -= val;
		return this;
	}
}
let count = new Counter(1);
console.log(count.add(2).subscribe(2));
// keyof 索引类型操作符
interface InfoInterface {
	name: string;
	age: number;
}
let infoP: keyof InfoInterface;
// 使用InfoInterface的属性名组成的一个联合类型 infoP的值 只能是InfoInterface的属性名
infoP = 'age';
infoP = 'name';

// [] 索引访问操作符
type NameType = InfoInterface['name']; //NameType 就是string类型

function getType<T, K extends keyof T>(o: T, name: K): T[K] {
	return o[name];
}
console.log(getType({ a: 123, b: 'cc' }, 'a'));

interface Objs<T> {
	[key: string]: T;
}
const objs1: Objs<number> = {
	age: 123
};

// let keys: Objs<string> = {
// 	name: 'asdf'
// };
let keys: Objs<string>['']; // 代表keys 是string类型
// keys=123  报错
keys = '123';

interface allTypes {
	a: never;
	b: never;
	c: null;
	d: string;
	f: number;
	e: undefined;
	g: object;
}
// keyof allTypes 取到 allTypes中所有的key值
//  再通过 allTypes[keyof allTypes] 拿到对应的属性值
//  拿不到 never null undefined 这三个值 所以 test的类型只有三个 string number object
type test = allTypes[keyof allTypes];

// 映射类型
interface Info1 {
	age: number;
	name: string;
}
type readOnly<T> = { readonly [p in keyof T]: T[p] };
type ReadOnlyInfo = readOnly<Info1>;
let infoas: ReadOnlyInfo = {
	age: 123,
	name: '23'
};

// Readonly Partial 内置的映射类型
type Readonly1 = Readonly<Info1>;
type Readonly22 = Partial<Info1>;

// Pick Record
// Pick 返回一个对象中的某些属性值
interface Info3 {
	name: string;
	age: number;
	sex: boolean;
}
const infoss: Info3 = {
	name: 'bqc',
	age: 123,
	sex: false
};
function getP<T, K extends keyof T>(obj: T, keyss: K[]): Pick<T, K> {
	const ress: any = {};
	keyss.map((x) => {
		ress[x] = obj[x];
	});
	return ress;
}
console.log(getP(infoss, [ 'age', 'name' ]));
// Record 返回属性是 k  属性值是 U 的一个对象  改变一个对象的属性值
/* 
	比如 a ={ a:1,b:2,c:3}
		想把a对象的中属性值都改掉  改成
		 a ={a:4,b:5,c:6}
		 可以使用 Record  
		 Record<K,U>   K 代表原本对象的属性名  U 表示回调函数执行后返回的值
		Record  不是同态
*/
function maoObj<K extends string | number, T, U>(obj: Record<K, T>, f: (x: T) => U): Record<K, U> {
	const res: any = {};
	for (const key in obj) {
		res[key] = f(obj[key]);
	}
	return res;
}

const namesss = { a: 'aaa', v: 'true', c: 'ccc' };
const lengthsss = maoObj(namesss, (s) => s.length);
console.log(lengthsss);

// 包装
// 定义一个对象 对象中含有 get 方法 和set方法  两个附取值方法
type Proxy<T> = {
	get(): T;
	set(val: T): void;
};
// 定义 一个对象  对象的每个属性的值 都为  上面定义的含有附取值两个方法的Proxy 对象
/* 
	{
		a: { set(val){}, get(){}},
		b: { set(val){}, get(){}}
	}
*/
type Proxyfy<T> = { [p in keyof T]: Proxy<T[p]> };
// 上面两个类型只是用来定义下面这个方法执行后的返回值格式
function Proxify<T>(obj: T): Proxyfy<T> {
	const result = {} as Proxyfy<T>;
	for (const key in obj) {
		result[key] = {
			get: () => obj[key],
			set: (val) => (obj[key] = val)
		};
	}
	return result;
}
let props = {
	name: 'bqc',
	age: 19
};
let PropsObj = Proxify(props);
console.log(PropsObj);

// 拆包
function chaibao<T>(t: Proxyfy<T>): T {
	let result = {} as T;
	for (const k in t) {
		result[k] = t[k].get();
	}
	return result;
}
let origionalP = chaibao(PropsObj);
console.log(origionalP);

// 映射在元祖类型上面的使用
type MapP<T> = { [k in keyof T]: Promise<T[k]> };
type yuanzu = [number, string, boolean];
type promiseT = MapP<yuanzu>;
let tupe1: promiseT = [
	new Promise((resolve, reject) => resolve(1)),
	new Promise((resolve, reject) => resolve('1')),
	new Promise((resolve, reject) => resolve(true))
];

// unknown
/* 
	1:任何类型的值都可以赋值给 unknown
*/

let valss: unknown;
valss = 'a';
valss = 1;
// 交叉类型

type typess = string & boolean;


// 条件类型
// type tiaojianType<T> = T extends string ? string :number;
// let idx1 :tiaojianType<1>
// let idx2 :tiaojianType<string>

// 条件类型和映射类型的结合

// type Type5<T> = {
// 	[K in keyof T]:T[K] extends Function ? K :never
// }[keyof T]

// 经过 Type5 类型的过滤 类型变成了
/* 
	{	
		never,
		never,
		never,
		undatePart
	}
	后经过 [keyof T] 过滤 掉never类型的数据
	变成了
	{
		undatePart(newName:string)：void
	}
*/
// interface Part {
// 	id:number;
// 	name: string;
// 	subparts: Part[];
// 	undatePart(newName:string):void
// }
// type Test1 = Type5<Part>

// infer 类型推断
type Type9<T> = T extends any[] ? T[number]:T;
type test3 = Type9<string[]>;
type test4 = Type9<string>;
// string[][number] 表示的类型是string类型
type test6 = string[][number];
const tests: test6 = "[]";
// console.log(tests);
// infer推断出 数组中的类型是什么 U 代表数组中的数据类型
// type Type10<T> = T extends Array<infer U> ? U :T;
// type test5 = Type10<string[]>;

// Exclude<T,U> 第二个参数是排除的类型
type testType = Exclude<'a'|'b','a'>;
// Extract<T,U>  只包含第二个参数的类型
type testType2 = Extract<'a'|'b','b'>;
// ReturnType<T>

type testType3 = ReturnType<()=> string>;
type testType4 = ReturnType<()=> void>;

// InstanceType<T>
class Aclass {
	constructor() {};
}
type T1 = InstanceType<typeof Aclass>;
type T2 = InstanceType<any>;
type T3 = InstanceType<never>;
// type T5 = InstanceType<string>;