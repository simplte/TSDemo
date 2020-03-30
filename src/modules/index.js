import {
    time
} from './b'
// setInterval(() => {
//     console.log(time)
// }, 1000)
import {
    name,
    age,
    address
} from './c'
console.log(name)

// import {
//     Functions,
//     ClassB as CB,
//     info,
//     namess
// } from './a'
// info.name = 'bqc'
// console.log(namess)

//  导入进去的模块都会执行一遍
// import './d'

// a模块 默认导出的内容
import cc from './a'
console.log(cc)

// 既有 export 又有export default 导出的内容可以这样导入,namess 代表默认导出的内容，{} 中的代表export导出的内容
import namess, {
    info,
    fun1
} from './a'
console.log(namess, info)
/* 
    import 变量提前
        import 是静态执行的 所以在编译阶段 import会自动上移
        import 不能再代码块中引用
        多次引入同一个模块时  会把多次引入自动合并成一个 只执行一次
    * 代表引入模块中所有的内容
    import * as info from './a'
    console.log(info) // a模块中所有内容
*/
// console.log(getname())  这样也不会报错
import {
    getname
} from './e'

// 导入后导出
export * from './f'

// 按需倒入 使用webpack编译后成功
const status = 0;
if (status) {
    import('./a')
} else {
    import("./b")
}