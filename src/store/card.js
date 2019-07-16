import axios from '../backend/vue-axios'
const person_uuid = localStorage.getItem('person_uuid')

export default {

  state: {
    boxInfo: null,
    uuidProduct: null
  },

  mutations: {
    arrayBoxInfo: (state, payload) => {
      state.boxInfo = payload
    },
    uuidProductBack: (state, payload) => {
      state.uuidProduct = payload
    }
  },

  actions: {
    getBoxInfo({commit}) {
      axios
        .get("/person/boxesinfo",{
          params:{
            person: person_uuid
          }
        })
        .then(response => {
          commit("arrayBoxInfo",response.data);
        })
    },
    async addNewCard( { commit }, {newCard} ) {
      const response = await axios
        .post("/person/product/", newCard);
      console.log(response);
      localStorage.setItem('product_uuid', response.data.uuid);
      commit('uuidProductBack', localStorage.getItem('product_uuid'));
    },
    addImages( context, {data}){
      axios
        .post('/person/product/upload/', data)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error.response)
        })
    }
  },

  getters: {
    boxInfo(state) {
      return state.boxInfo
    },
    uuidProduct(state) {
      return state.uuidProduct
    }
  }
}