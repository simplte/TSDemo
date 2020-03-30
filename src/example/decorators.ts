// function setProp(target){
//     return function(target) {}
// }

import { ClassD } from '../ts-modules/a';

/* 
    1：装饰器
        如果是装饰器工厂  调用顺序是从上到下 生成装饰器
            @setProp()
            @setName()    
            @setAge()
        如果是装饰器 则是从下到上调用执行
            @setProp
            @setName
            @setAge
*/

// function setName() {
// 	console.log('get setName');
// 	return (target) => {
// 		console.log('setName');
// 	};
// }
// function setAge() {
// 	console.log('get setAge');
// 	return (target) => {
// 		console.log('setAge');
// 	};
// }
// @setName()
// @setAge()
// class ClassDes {}

/* 
    在控制台的打印顺序
    get setName
    get setAge
    setAge
    setName
*/

// 类装饰器 第一个参数target  就是要修饰的类的原型对象
// let sign = null;
// function setName(name: string) {
// 	return (target: new () => any) => {
// 		sign = target;
// 		console.log(target.name);
// 	};
// }
// @setName('bqc')
// class ClassDes {
// 	constructor() {}
// }
// console.log(sign == ClassDes);
// console.log(sign == ClassDes.prototype.constructor);

// ======

// function addName(constructor: new () => any) {
// 	constructor.prototype.name = 'bqc';
// }
// @addName
// class ClassDD {}
// 通过声明合并给 ClassDD的原型对象上面添加了name属性
// interface ClassDD {
// 	name: string;
// }
// const d = new ClassDD();
// console.log(d.name);
// =====
// 如果类装饰器返回一个值 这个返回的值会替代类的声明
function ClassDecorator1(target: any): any {
	return class {
		newProperty = 'new pr';
		hello = 'xinzhi';
	};
}
// 既返回 创建类的属性又返回 装饰器中定义的属性
function ClassDecorator2<T extends new (...args: any[]) => {}>(target: T) {
	return class extends target {
		newProperty = 'new pr';
		hello = 'xinzhi';
	};
}
@ClassDecorator1
class Greeter {
	public property = 'property';
	hello: string;
	constructor(m: string) {
		this.hello = m;
	}
}
console.log(new Greeter('world'));
@ClassDecorator2
class Greeter1 {
	public property = 'property';
	hello: string;
	constructor(m: string) {
		this.hello = m;
	}
}
console.log(new Greeter1('world'));
// =============
// 方法装饰器
/* 
    三个参数
        第一个参数 1：如果装饰的静态成员 代表的是类的静态函数 2:如果装饰的是实力成员的话 代表的是类的原型对象
        第二个参数  成员的名字
        第三个参数  成员的属性描述符

*/
// Object.defineProperty
/* 
    let objs = {}
    Object.defineProperty(objs,'name',{
        value:'bqc',  // 属性值
        writable: false, // 可写性  false代表不可修改
        configurable:false, // 可配置性  false 代表不能再次使用Object.defineProperty 对该属性进行配置
        enumerable:false // 可没举行 不能使用for in 循环objs拿到 name属性 
    })
    console.log(objs)
*/
// function enumerable(bool: boolean) {
// 	return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
// 		console.log(target, propertyName);
// 		descriptor.enumerable = bool;
// 	};
// }
function enumerable(bool: boolean): any {
	return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
		// return 出去的对象实际上就是 descriptor 对象，这个对象中 有属性值  可写性 可配置性 可没举行 属性
		return {
			value() {
				return 'not age';
			},
			enumerable: bool
		};
	};
}
class ClassF {
	constructor(public age: number) {}
	@enumerable(false)
	public getAge() {
		return this.age;
	}
}
const classF = new ClassF(18);
console.log(classF.getAge());
// 因为可枚举性是false 所以只遍历出了一个 age属性  getAge方法没有
for (const x in classF) {
	console.log(x);
}
// 访问器装饰器  set() get()  一对set() get()  只能使用一个装饰器
// 属性装饰器
// 参数装饰器
