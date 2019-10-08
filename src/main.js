import Vue from 'vue'
import App from '@/layout/index.vue'
import router from '@/router'
import store from '@/store'
import socket from '@/socket'

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

Vue.use(socket);