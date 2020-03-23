class Point {
	x: number;
	y: number;
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
	getPosition() {
		return `${this.x}-${this.y}`;
	}
}
const point = new Point(1, 2);
console.log(point.getPosition());

class Parent {
	protected age: number;
	public name: string;
	readonly gender: boolean;
	public static sex: boolean;
	private _mb: string;
	public address?: string;
	constructor(name: string, address?: string) {
		this.name = name;
		this.address = address;
	}
	getName() {
		return this.name;
	}
	protected getAge() {
		return this.age;
	}
	public static getSex() {
		return this.sex;
	}
	get mb() {
		return this._mb;
	}
	set mb(value) {
		this._mb = value;
	}
}
class Child extends Parent {
	constructor(name: string) {
		super(name);
		console.log(super.getAge());
	}
	public getParentName() {
		console.log(super.getName());
	}
	// public getSex() {
	// 	return super.getSex()
	// }
}
const p1 = new Parent('haha');
const p2 = new Parent('haha', '这是一个地址');

// console.log(p1.sex); // 静态属性 类的实例是不能访问的 报错
// console.log(p1.getSex()); // 静态方法 类的实例是不能访问的 报错
// console.log(Parent.getSex(), Parent.sex); // 静态方法和静态属性 只能通过类本身访问
const c1 = new Child('mimi');
c1.getParentName();
/* 
    1:修饰符
	 public 公共的 如果属性或者方法 前面有加修饰符 默认是public  在类的外部(子类 或者 类的实例)是可以访问的
	 private 私有的 在类的外部(子类 或者 类的实例)是不能访问的
	 protected 受保护的 受保护的属性只能在当前类的内部使用不能再子类或者类的实例中访问  受保护的方法可以在子类或者类的实例中访问
	 			可以给constructor 构造函数添加 受保护修饰符 这样类只能被继承 不能实例化
	 readonly 只读属性
	 static 静态属性和方法 实例继承不到 只能通过类本身访问
	 ? 类的可选属性
	 get 取值函数
	 set 赋值函数

	 abstract  抽象类 只能被其他类继承 不能创建实例
*/

class Info {
	public name: string;
	public age?: number;
	private _info: string;
	constructor(name: string, age?: number) {
		this.name = name;
		this.age = age;
	}
	get info() {
		return this._info;
	}
	set info(val) {
		this._info = val;
	}
}

const info2 = new Info('bqc', 13);
info2.info = 'asdf';
console.log(info2.info);

// 抽象类里的抽象方法不能直接被子类继承
/* 
	
	抽象类里属性和存取器也可以使用abstract标记
	抽象方法和抽象存取器不能标记实际的代码块 只需要标记他的属性名方法名 和返回值  存值器不用标记返回值类型
*/
abstract class People {
	constructor(public name: string) {}
	public abstract printName(): void;
	abstract get initName(): string;
	abstract set initName(val: string);
	abstract age: string;
}

class man extends People {
	age: string;
	constructor(name: string) {
		super(name);
		this.name = name;
		this.age = '123';
	}
	printName() {
		console.log(this.name);
	}
	get initName() {
		return this.name;
	}
	set initName(val) {
		this.name = val;
	}
}
const m1 = new man('buqiancheng');
m1.printName();

console.log(m1 instanceof man);
/* 

	使用instanceof 判断实例是不是一个类的实例
*/

/* 
	使用接口对类定义
		强制类必须包含哪些内容
		使用implement关键字  让接口实现对类的约束
*/
interface FoodInterface {
	type: string;
	name: string;
}
class Food implements FoodInterface {
	public type: string;
	public name: string;
}
/* 
	类中使用泛型
*/
const crate = <T>(c: new () => T): T => {
	return new c();
};
class infos {
	public age: number;
	constructor() {
		this.age = 12;
	}
}
console.log(crate<infos>(infos).age);
