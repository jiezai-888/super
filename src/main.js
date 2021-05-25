import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/store.js'
import toast from 'components/common/toast'


Vue.config.productionTip = false
Vue.use(toast);

// 添加事件总线
Vue.prototype.$EventBus=new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
