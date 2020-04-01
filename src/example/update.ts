/* 
function getIndexs(bool) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (bool) {
				resolve('a');
			} else {
				reject(Error('error'));
			}
		}, 1000);
	});
}
getIndexs(false)
	.then((v) => {
		console.log(v);
	})
	.catch((err) => {
		console.log(err);
	});

async function asyncFun() {
	try {
		const res = await getIndexs(false);
		console.log(res);
	} catch (err) {
		console.log(err);
	}
}
asyncFun();


*/
// 扩展运算符 ...
function getExProp<T extends { props: string }>(obj: T) {
	const { props, ...rest } = obj;
	return rest;
}
const infoObj = {
	props: 'some',
	name: 'bqc',
	age: 143
};
console.log(getExProp(infoObj));
