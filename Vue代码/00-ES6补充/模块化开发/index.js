// 导入模块
// 导入a.js的默认导出 import xxx from "./a.js";  xxx 为变量名
import sum from "./a.js"
console.log(sum(1,2)); // 3

// 导入a.js的普通导出 import {xxx} from "./a.js";
import {double} from "./a.js";
console.log(double(2)); // 4

//  导入所有
import * as obj from "./a.js"
console.log(obj); // { default:f(a,b), double: f double(q), n: 3}


//导入只需运行一下的代码
import "./justRun.js" // 初始化代码