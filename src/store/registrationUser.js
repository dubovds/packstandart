const axios = require('axios');
import { setTimeout } from 'timers';

export default {

  state: {
    regStatus: null
  },

  mutations: {
    set_regStatus : (state, payload) => {
      state.regStatus = payload
    }
  },

  actions: {
    registration( {commit}, {user, $router} ) {
      axios
        .post("http://test1.iti.dp.ua/api/auth/register/", user)
        .then(response => {
          if (response.data.status) {
            this.submitStatus = "PENDING";
            setTimeout(() => {
              this.submitStatus = "OK";
            }, 1000);
            setTimeout(() => {
              $router.push("/");
            }, 3000);
            localStorage.setItem('status', response.data.status);
            localStorage.setItem('code', response.data.code);
            localStorage.setItem('message', response.data.message);
            commit('set_regStatus', localStorage.getItem('status'));
          }
        })
        .catch(error => {
          console.error(error);
          this.errors = error.response.data.errors;
        });
    }
  },

  getters: {
    regStatus(state) {
      return state.regStatus
    }
  }
}