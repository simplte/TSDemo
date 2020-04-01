// 声明文件  给 handle-title 文件写声明文件 全局就可直接使用声明文件中的方法
/* 
    声明文件的写法 可以参考官方给的模板
*/



declare function setTitle(title:string|number):void;
declare function getTitle() :string;
declare let documentTitle:string;

// -----------
// 对修改全局的文件写声明文件、 接口String会进行类型合并
interface String {
    getFirstLetter() : string
}
/* 
// 依赖全局库的时候
///<reference types="moment"/>
import * as moment from 'moment'

如果全局库依赖的是某个umd 模块 也可以使用 reference 引入
*/
