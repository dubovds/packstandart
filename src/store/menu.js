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
      { title: "Выход", auth: true }
    ]
  },

  mutations:{
    set_auth : (state, payload) => {
      state.auth = payload
    }
  },

  actions:{
    
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