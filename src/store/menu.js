export default{

  state:{
    nav: [
      { title: "Главная", url: "/" },
      { title: "Новости", url: "/news" },
      { title: "Прайс", url: "/price" },
      { title: "Контакты", url: "/contacts" }
    ],
    navAuth: [
      { title: "Вход", url: "/login", auth: false },
      { title: "Регистрация", url: "/reg", auth: false },
      { title: "username", url: "/reg", auth: true },
      { title: "Выход", url: "/", auth: true }
    ]
  },
  mutations:{},
  actions:{},
  getters:{
    nav (state) {
      return state.nav
    },
    navAuth (state) {
      return state.navAuth  
    }
  }

  
}