// 对象的混入
interface ObjectA {
	a: string;
}
interface ObjectB {
	b: string;
}
let Aa: ObjectA = {
	a: 'a'
};
let Bb: ObjectB = {
	b: 'b'
};
let AB: ObjectA & ObjectB = {
	a: 'a',
	b: 'b'
};
console.log(AB);
// 类的混入
class ClassAa {
	public isA: boolean;
	public funA() {
		console.log('aaaa');
	}
}
class ClassBb {
	public isB: boolean;
	public funB() {}
}
class AABB implements ClassAa, ClassBb {
	public isA: boolean = false;
	public isB: boolean = false;
	public funA: () => void;
	public funB: () => void;
}
function mixinss(base: any, from: any[]) {
	from.forEach((fitem) => {
		Object.getOwnPropertyNames(fitem.prototype).forEach((key) => {
			console.log(key);
			base.prototype[key] = fitem.prototype[key];
		});
	});
}
mixinss(AABB, [ ClassAa, ClassBb ]);
const ab = new AABB();
ab.funA();
