import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'


Vue.config.productionTip = false

// 添加事件总线
Vue.prototype.$EventBus=new Vue()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
