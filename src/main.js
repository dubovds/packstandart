import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import store from './store'
import router from './router'
// import VueResource from 'vue-resource'
import axios from './backend/vue-axios'


import './assets/css/droidsans.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'
import './assets/js/custom'

Vue.config.productionTip = false;

Vue.use(Vuelidate)
Vue.use(BootstrapVue)

// Vue.use(VueResource)

new Vue({
  store,
  router,
  axios,
  render: h => h(App),
}).$mount('#app');