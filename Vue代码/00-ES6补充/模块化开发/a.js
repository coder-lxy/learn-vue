// 默认导出 {default: fn}， 函数可以是匿名函数
export default function (a, b) {
  return a + b;
}

// 具名导出(普通导出)，一个js文件只能有一个默认导出，可以有多个普通导出
// 普通导出, { double: fn}
export function double(a) {
  return a * 2;
}
export var n = 3;

// 最终导出：{ default: fn, double: fn, n: 3}