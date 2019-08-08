import axios from '../backend/vue-axios'
const person_uuid = localStorage.getItem('person_uuid')

export default {

  state: {
    allBoxes: null
  },

  mutations: {
    arrayAllBoxes: (state, payload) => {
      state.allBoxes = payload
    }
  },

  actions: {
    getAllBoxes({commit}) {
      axios
        .get("/person/product/",{
          params:{
            person: person_uuid
          }
        })
        .then(response => {
          commit("arrayAllBoxes",response.data);
        })
    },

    async addOrder( context , {newOrder} ) {
      axios
        .post("/person/order/", newOrder)
        .then(response => {
          console.log(response);
          console.log(response.data.statusText);         
        })
    },
    
  },

  getters: {
    allBoxes(state) {
      return state.allBoxes
    }
  }
}