import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import menu from "./menu";
import user from "./user";
// import mutations from "./mutations";
// import actions from "./actions";
// import getters from "./getters";

export default new Vuex.Store({
  modules: {
    menu,
    user
  }
})