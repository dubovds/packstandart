import axios from '../backend/vue-axios'
const person_uuid = localStorage.getItem('person_uuid')

export default {

  state: {
    allBoxes: null,
    archiveBoxesForPerson: null
  },

  mutations: {
    arrayAllBoxes: (state, payload) => {
      state.allBoxes = payload
    },
    arrayArchiveBoxesForPerson: (state, payload) => {
      state.archiveBoxesForPerson = payload
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
    getArchiveBoxes({commit}) {
      axios
        .get("/person/product/",{
          params:{
            person: person_uuid,
            archival: 'True'
          }
        })
        .then(response => {
          commit("arrayArchiveBoxesForPerson",response.data);
        })
    },
    
  },

  getters: {
    allBoxes(state) {
      return state.allBoxes
    },
    archiveBoxesForPerson(state) {
      return state.archiveBoxesForPerson
    }
  }
}