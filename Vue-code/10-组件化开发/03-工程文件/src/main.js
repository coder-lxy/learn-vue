// 入口文件
import Vue from "./lib/vue.js"
// import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import App from "./App.js"

new Vue({
  // render(createElement) {
  //   return createElement(App)
  // }
  // 使用箭头函数
  render:(h) => h(App)

}).$mount("#app");