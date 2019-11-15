import Vue from 'vue'
import App from '@/layout/index.vue'
import router from '@/router'
import store from '@/store'
import socket from '@/socket'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

Vue.use(socket);
Vue.use(ElementUI)