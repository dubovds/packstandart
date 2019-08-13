import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import store from './store'
import router from './router'
import axios from './backend/vue-axios'
import vSelect from 'vue-select'
import VueTheMask from 'vue-the-mask'
Vue.component('v-select', vSelect)

import './assets/css/droidsans.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'
import './assets/js/custom'
import 'vue-select/dist/vue-select.css';


Vue.config.productionTip = false;

Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.use(VueTheMask)

new Vue({
  store,
  router,
  axios,
  render: h => h(App),
}).$mount('#app');

