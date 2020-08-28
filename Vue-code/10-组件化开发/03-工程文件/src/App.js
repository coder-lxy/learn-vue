//  根组件，此文件专门用来渲染其他组件
import UserInfo from "./components/UserInfo.js"

var template = `
<div id="app">
<h1>{{title}}</h1>
<UserInfo name="李四" age="18"></UserInfo>
<UserInfo v-for="(item,index) in users" :key="index" :name="item.name" :age="item.age"/>
</div>
`
export default {
  template,
  data() {
    return {
      title: "aaa",
      users: [
        { name: "mike", age: 18 },
        { name: "John", age: 19 },
        { name: "lily", age: 17 },
      ]
    }

  },
  components: {
    UserInfo,
  }
}