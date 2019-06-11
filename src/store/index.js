import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import menu from "./menu";
import user from "./user";
import login from "./login";
import registrationUser from "./registrationUser"
import company from "./company"

export default new Vuex.Store({
  modules: {
    menu,
    user,
    login,
    registrationUser,
    company,
    
  }
})