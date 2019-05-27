const axios = require('axios');

export default{

  state:{
    auth: false,
    nav: [
      { title: "Главная", url: "/", auth: 'both' },
      { title: "Новости", url: "/news", auth: 'both' },
      { title: "Прайс", url: "/price", auth: 'both' },
      { title: "Контакты", url: "/contacts", auth: 'both' },
      { title: "Личный кабинет", url: "/profile", auth: true }
    ],
    navAuth: [
      { title: "Вход", url: "/login", auth: false },
      { title: "Регистрация", url: "/reg", auth: false },
    ],
    navAuthLogin: [
      { title: "username", auth: true },
      { title: "Выход", auth: true }
    ]
  },

  mutations:{
    set_auth : (state, payload) => {
      state.auth = payload
    },
  },

  actions:{
    checkToken: ({ commit }) => {
      const token = localStorage.getItem('token');
      if (token) commit('set_auth', true);
    },
    login({ commit }, { user, $router}) {
      axios
        .post('http://test1.iti.dp.ua/api/auth/login/', user)
        .then((req) => {
            console.log('login success', req);
            if (!req.data.token) {
              delete localStorage.token;
              delete localStorage.person_uuid;
              delete localStorage.person_companies_count;
              return commit('set_auth', false);
            }
            
            localStorage.setItem('token', req.data.token);
            localStorage.setItem('person_uuid', req.data.person_uuid);
            localStorage.setItem('person_companies_count', req.data.person_companies_count);
            commit('set_auth', true);

            if(req.data.person_companies_count === 0){
              $router.replace('/profile/add-companies')
            }
          })
          .catch((error) => {
            console.error(error);
            delete localStorage.token;
            delete localStorage.person_uuid;
            delete localStorage.person_companies_count;
            commit('set_auth', false);
          });
    },
    logout({ commit} ) {
      commit('set_auth', false);
      localStorage.clear();
    }
  },

  getters:{
    auth(state) {
      return state.auth
    },
    nav (state) {
      return state.nav
    },
    navAuth (state) {
      return state.navAuth  
    },
    navAuthLogin (state) {
      return state.navAuthLogin  
    }
  }

  
}