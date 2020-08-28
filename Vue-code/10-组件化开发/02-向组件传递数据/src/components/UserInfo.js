var template = `
<div>
<p>姓名：{{name}}</p>
<p>年龄：{{age}}</p>
</div>
`
// 导出
export default {
  props:["name", "age"],
  template,
}