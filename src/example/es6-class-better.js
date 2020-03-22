// es5实现构造函数继承
function Food() {
	this.type = 'food';
}

Food.prototype.getType = function() {
	console.log(this.type);
};

function shucai(name) {
	this.name = name;
}
// 如果需要 shucai 这个构造函数继承 Food 这个构造函数 就需要如下写法
// 让蔬菜的原型链指向 Food构造函数的实例
shucai.prototype = new Food();
// 这样shucai构造函数的实例也能调用 Food 构造函数的方法了
let baicai = new shucai('白菜');
baicai.getType();

// es6  使用class实现构造函数的继承

class Point1 {
	constructor(name) {
		this.name = name;
	}
	getName() {
		console.log('我是在父类中的获取名字的方法：', this.name);
	}
	// 父类的静态方法 子类也可以调用  返回name  是子类的名字
	static getClassName() {
		console.log(this.name);
	}
}

class childP extends Point1 {
	constructor(name, age) {
		// 只有使用过super() 方法后 才能使用this 给当前子类属性赋值
		super(name);
		this.age = age;
	}
}

const c = new childP('黑子', 4);
console.log(c);
c.getName();

// 查看实例是父类的实例还是子类的实例
console.log(c instanceof childP); // true 既是子类的实例
console.log(c instanceof Point1); // true 又是父类的实例
childP.getClassName(); // 子类调用父类的静态方法  返回的是子类的名字 说明 this 指向的是子类

// 通过 Object.getPrototypeOf() 方法判断子类是不是属于另一个类的子类
console.log(Object.getPrototypeOf(childP) === Point1);

// super() 的用法

/* 
	1：作为函数使用
	   子类继承父类时 必须在子类的constructcor(){} 方法中调用 super()
			super() 方法相当于父类的constructcor() 有参数就传参数 
			在子类中调用玩 super()函数后才能使用 this 给子类添加属性值
			父类的this 指向是子类
*/
class Point2 {
	constructcor(name) {
		this.name = name;
	}

	setAge(age) {
		this.age = age;
	}
}

class childP2 extends Point2 {
	constructor(name, age) {
		// 只有使用过super() 方法后 才能使用this 给当前子类属性赋值
		super(name);
		this.age = age;
	}
	getAge() {
		console.log(this.age);
	}
}
const p4 = new childP2('黑子', 13);
p4.setAge(15);
p4.getAge(14);

/* 
	2:作为对象使用
		在普通方法中 =>  指向父类的原型对象
		在静态方法中 =>  指向父类本身
*/

class Parent {
	constructor() {
		this.type = 'parent';
	}
	getName() {
		return this.type;
	}
}
// 父类本身的方法不能被子类通过super调用
Parent.getType = function() {
	return 'parent type';
};
class Son extends Parent {
	constructor() {
		super();
		console.log('constructor:', super.getName());
	}
	getName() {
		console.log('getParentName:', super.getName());
	}
	// getParentType() {
	// 	console.log('getParentType:', super.getType());
	// }
	static getParentType() {
		console.log('getParentType:', super.getType());
	}
}

const s = new Son();
s.getName();
// s.getParentType(); // 报错  super指向的是父类原型对象 而不是父类本身 所以在父类本身增加的方法是不能被调用的
Son.getParentType(); // 静态方法中 super只想父类本身 所以可以调用

class Parent1 {
	constructor() {
		this.name = 'baba';
		this.types = 'mama';
	}
	getName() {
		// 父类被继承时，this指向子类， 所以name是子类中的name值
		return this.types;
	}
}
class Son1 extends Parent1 {
	constructor() {
		super();
		this.name = 'erzi';
	}
	getSname() {
		// super只想的父类原型对象
		console.log(super.types);
		return super.getName();
	}
}
const sf = new Parent1();
const s3 = new Son1();
console.log(s3.getSname());
/* 
	super使用的注意点
		1：作为函数使用时 需要执行
		2：作为对象使用时 super只想父类原型对象  所以需要调用父类中的方法或者属性
             super.types  时返回undefined  不清楚为什么
*/

// 子类的__proto__ 指向父类本身
// 子类的prototype属性的__proto__ 指父类的prototype
// 实例的__proto__属性的__proto__指向父类实例的__proto__
console.log(Son1.__proto__ == Parent1);
console.log(Son1.prototype.__proto__ == Parent1.prototype);
console.log(s3.__proto__.__proto__ == sf.__proto__);

// es6 才能继承原生构造函数
class Custom extends Array {
	constructor(...args) {
		super(...args);
	}
}
const arr = new Custom(2); // 创建出长度为2的数组
arr.fill('22'); // 数组中的内容都为22
console.log(arr);

// es5的构造函数和es6的类在实现继承在机制上有差异
/* 
	1：es5构造函数实现继承是：
		先创建子构造函数的this，然后再将父类构造函数的属性和方法添加到子类构造函数的this上去
	2: es6类实现继承是：
		先从父类取到实例对象this，然后再调用super()函数之后  将子类的属性方法添加到this上
			这也是为什么在子类的构造函数中必须先调用super函数 才能使用this的原因
*/
