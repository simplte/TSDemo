export interface FuncInterface {
	name: string;
	(arg: number): string;
}
export class ClassC {
	constructor() {}
}
class ClassD {
	constructor() {}
}
export { ClassD };
export { ClassD as ClassDNew };
import * as info from './b';
export { name } from './b';
