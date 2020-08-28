import Vue from "./lib/vue.js"
// import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import UserInfo from "./components/UserInfo.js"

// 注册组件
// 全局注册
// Vue.component("UserInfo",UserInfo)
var template = `
<div id="app">
<h1>{{title}}</h1>
<UserInfo name="李四" age="18"></UserInfo>
<UserInfo v-for="(item,index) in users" :key="index" :name="item.name" :age="item.age"/>
</div>
`
new Vue({
  data: {
    title: "aaa",
    users:[
      {name:"mike",age:18},
      {name:"John",age:19},
      {name:"lily",age:17},
    ]
  },
  // 局部注册组件
  components: {
    UserInfo,
  },
  template,
}).$mount("#app");