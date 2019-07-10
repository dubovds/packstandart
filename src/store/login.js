import axios from '../backend/vue-axios'
//const base = require('axios');

export default{

  state:{
    personeName: null
  },

  mutations:{
    login_name : (state, payload) => {
      state.personeName = payload
    }
  },

  actions:{ 
    checkToken: ({ commit }) => {
      const token = localStorage.getItem('token');
      if (token) {
        commit('set_auth', true);
        commit('login_name', localStorage.getItem('person_name'));
      }
    },
    login({ commit }, { user, $router}) {
      axios.post('/auth/login/', user)
        .then(req => {
            console.log('login success', req);
            if (!req.data.token) {
              delete localStorage.token;
              delete localStorage.person_uuid;
              delete localStorage.person_companies_count;
              delete localStorage.person_name;
              return commit('set_auth', false);
            }
            
            localStorage.setItem('token', req.data.token);
            localStorage.setItem('person_uuid', req.data.person_uuid);
            localStorage.setItem('person_companies_count', req.data.person_companies_count);
            localStorage.setItem('person_name', req.data.person_name);
            commit('set_auth', true);
            commit('login_name', localStorage.getItem('person_name'));

            if(req.data.person_companies_count === 0){
              $router.replace('/profile/add-companies')
            } else{
              $router.replace('/profile/order-history')
            }
            
          })
          .catch(error => {
            console.error(error);
            delete localStorage.token;
            delete localStorage.person_uuid;
            delete localStorage.person_companies_count;
            delete localStorage.person_name;
            commit('set_auth', false);
          });
    },
    logout({ commit} ) {
      commit('set_auth', false);
      localStorage.clear();
    }
  },

  getters:{
    personeName(state) {
      return state.personeName
    }
  }  
}