let names = 'list';
window.onmousedown = (event) => {
	console.log(event);
};
/* 
	比较的是构造函数中的入参是否一致

*/
class AnimalClass {
	public static age: string;
	constructor(public name: string) {}
}
class PeoplelClass {
	public static sex: number;
	constructor(public name: string) {}
}
class FoodClass {
	constructor(public big: string) {}
}
let animal: AnimalClass;
let people: PeoplelClass;
let food: FoodClass;
animal = people;
// animal = food;  报错
