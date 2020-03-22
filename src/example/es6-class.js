class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	getPosition() {
		return `(${this.x}+${this.y})`;
	}
}
const p1 = new Point(1, 3);
// console.log(p1.getPosition())
// x是p1实例的自有属性
// console.log(p1.hasOwnProperty('x'))
// 返回false  因为getPosition 不是p1实力的自有属性
// console.log(p1.hasOwnProperty('getPosition'))
// 返回true , getPosition是p1继承过来的方法,getPosition是定义在类的原型对象上的
// console.log(p1.__proto__.hasOwnProperty('getPosition'))

// es6  class中 使用get set关键字
// class Agas {
//     constructor(val) {
//         this._age = val;
//     }
//     set age(val) {
//         if (val > 19) {
//             this._age = val;
//             console.log('我已经长大了')
//         } else {
//             this._age = val;
//             console.log('我是一个孩子')
//         }
//     }

//     get age() {
//         return this._age;
//     }
// }
// const a1 = new Agas(1);

// a1.age = 21
// console.log(a1.age)
/* 
    类的静态方法
*/
class Agas {
	constructor(val) {
		this._age = val;
	}
	// 类的静态方法不能被实例继承
	// 只能通过类本身调用
	static getClassName() {
		console.log(222);
	}
}
const a1 = new Agas(1);
// 静态方法不能被类的实例继承 所以会报错
// console.log(a1.getClassName());
Agas.getClassName();

/* 
    es6  class只有静态方法 没有静态属性
   
    只能通过
    Agas.a = 1;
*/

/* 
    类的私有方法
    a.js
    const fun1 = Symbol()
*/

/* 
    使用  new.target() 返回实例所属的构造函数

    如果类有继承 会返回实例的子类 不管这个方法是在子类中还是在父类中调用
    返回的都是实例的子类
*/
class Point1 {
	constructor() {
		console.log(new.target);
	}
}

let p4 = new Point1();

class childP extends Point1 {
	constructor() {
		super();
	}
}

/* 
class childP extends Point1 {
	constructor() {
		super();
	}
}
*/
let p5 = new childP();

// -----------------------------
