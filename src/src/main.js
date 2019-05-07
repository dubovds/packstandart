import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'


import './assets/css/droidsans.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'
import './assets/js/custom'

Vue.config.productionTip = false;


Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');