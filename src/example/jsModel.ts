// 具体的参数意义，在下个小节，这里大家先感知一下操作
// 方法装饰器
/* 
	装饰器函数真正能触及到的，就只有类这个层面上的对象
	target  类的原型对象
	name 修饰的目标属性名
	descriptor 属性描述对象

*/

function funcDecorator(target, name, descriptor) {
	console.log(target, name, descriptor);

	/* 
		
		我们通过 descriptor 获取到了原函数的函数体（originalMethod），
		然后给 descriptor 的value重新赋值先执行需要的操作 然后在执行原本函数的的函数体
		把原函数推迟到了新逻辑（console）的后面去执行
	*/
	let originalMethod = descriptor.value;
	descriptor.value = function() {
		console.log('我是Func的装饰器逻辑');
		return originalMethod.apply(this, arguments);
	};
	return descriptor;
}

class Button {
	@funcDecorator
	onClick() {
		console.log('我是Func的原有逻辑');
	}
}

console.log(Button.prototype);
// 验证装饰器是否生效
const button = new Button();
// button.onClick();
/* 
	装饰器在生产中的实践
*/
