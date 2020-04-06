
/* 
    为第三方模块写声明文件

    匹配声明文件需要在
      ts.config.json 里面配置 
                            baseURL:"."
                            paths：{
                               "*":[
                                   "./node_modules/@types",
                                   "./typings/*"
                               ]
                           }
     在typings 中创建同样名字的的文件夹  创建.d.ts文件
*/
declare function indexof(arr:Array<any>,val?:any):number;
export =  indexof;