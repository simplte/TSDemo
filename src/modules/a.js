// export const name = 'bqc';
// export const age = 12;
// export const address = 'bqccc';
const name = 'bqc';
const age = 12;
const address = 'bqccc';
export {
    name,
    age,
    address
}

function fun1() {}
class B {}
const bs = ""
const info = {
    name: 'bqccc'
}

export {
    fun1 as Functions,
    B as ClassB,
    info
}
/* 
    export 
    模块导出的值 
    在其他模块中被引用 是动态绑定的即： 
        b模块的time被index模块引入  
        b模块动态修改time值 index模块中也跟着变化
    export 不能放在块级作用域中使用  导出内容
    一个模块只能使用一次 export default 
        export default  + 'string'   
        export default 可以直接导出一个值
*/
// 错误写法 
// export "bac"
// export name

// 默认导出
const namess = 'cccc'
// 第一种写法
export default namess
// 第二种写法
// export {
//     namess as
//     default
// }