import axios from '../backend/vue-axios'
//const person_uuid = localStorage.getItem('person_uuid')

export default {

  state: {
    textContent: null,

  },

  mutations: {
    arrayTextContent: (state, payload) => {
      state.textContent = payload
    }
  },

  actions: {
    getTextContent({
      commit
    }) {
      axios
        .get("http://test1.iti.dp.ua/api/content/?page=main&lang=ru")
        .then(response => {
          commit("arrayTextContent", response.data);
        })
    }
  },
  getters: {
    textContent(state) {
      return state.textContent
    }
  }
}