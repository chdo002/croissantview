import Vue from 'vue'
import App from './layout/index.vue'
import variables from '@/style/themes/variables.scss'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
