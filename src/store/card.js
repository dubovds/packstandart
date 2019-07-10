import axios from '../backend/vue-axios'
const person_uuid = localStorage.getItem('person_uuid')

export default {

  state: {
    boxInfo: null
  },

  mutations: {
    arrayBoxInfo: (state, payload) => {
      state.boxInfo = payload
    }
  },

  actions: {
    getBoxInfo({commit}) {
      axios
        .get("http://test1.iti.dp.ua/api/person/boxesinfo",{
          params:{
            person: person_uuid
          }
        })
        .then(response => {
          commit("arrayBoxInfo",response.data);
        })
    },
    addNewCard( context, {newCard} ) {

      axios
        .post("http://test1.iti.dp.ua/api/person/product/", newCard)
        .then(response => {
          console.log(response);
          console.log(response.data.status);
                     
        });
    }
  },

  getters: {
    boxInfo(state) {
      return state.boxInfo
    }
  }
}