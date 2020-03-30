var Validation;
(function (Validation) {
    Validation.isNumberReg = /^[0-9]+$/;
    Validation.checkNumber = function (text) {
        return Validation.isNumberReg.test(text);
    };
})(Validation || (Validation = {}));
var Validation;
(function (Validation) {
    Validation.isLetterReg = /^[A-Za-z]+$/;
    Validation.checkLetter = function (text) {
        return Validation.isLetterReg.test(text);
    };
})(Validation || (Validation = {}));
// import { name } from './a';
// import * as Info from './a';
// console.log(Info.name);
// import info from './c';
// console.log(info);
// ts 兼容 esmodule的导出 和commonjs的默认导出
// import name = require('./c');
// console.log(name);
// 引入moment第三方类库
// import moment from 'moment';         // 引入默认导出
// import * as moment from 'moment';    // 引入所有的导出内容
// import moment = require('moment');  // 引入默认导出
// 命名空间
/*
    1: 命名空间中需要让外部使用的内容需要用export 关键字修饰
    2：命名空间的引入  /// <reference  path="space.ts">
*/
/// <reference  path="./number-vaildation.ts"/>
/// <reference  path="./letter-vaildation.ts"/>
var isLetter = Validation.checkLetter('bqc');
var isNumber = Validation.checkNumber('bqc');
console.log(isLetter);
console.log(isNumber);
