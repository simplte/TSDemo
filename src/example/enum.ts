const getIndex = () => {
	return 1;
};
enum Status {
	aa = 1,
	cc = getIndex(),
	dd = 123
}
// 正向取值
console.log(Status.cc);
// 反向取值
console.log(Status[123]);

/* 
    枚举值可以使用内部的值
*/
enum Errors {
	err = 'error',
	cuowu = err
}
console.log(Errors.err == Errors.cuowu);

enum Animals {
	Dog = 1,
	Cat = 2
}
interface Dog {
	type: Animals.Dog;
}
const gou: Dog = {
	type: 123
	// type: "qw" 报错
	// type: Animals.Cat 报错
};
/* 
    联合枚举类型
*/
enum Leg {
	red = 1,
	green = '123'
}

interface Light {
	state: Leg;
}
const light: Light = {
	state: Leg.green
};
