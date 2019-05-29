const axios = require('axios');
import { setTimeout } from 'timers';

export default {

  state: {
    
  },

  mutations: {
  
  },

  actions: {
    registration( context, {user, $router} ) {
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