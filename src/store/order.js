import axios from '../backend/vue-axios'
const person_uuid = localStorage.getItem('person_uuid')

export default {

  state: {
    allBoxes: null,
    archiveBoxesForPerson: null,
    boxesForPerson: null,
    orderHistory: null
  },

  mutations: {
    arrayAllBoxes: (state, payload) => {
      state.allBoxes = payload
    },
    arrayArchiveBoxesForPerson: (state, payload) => {
      state.archiveBoxesForPerson = payload
    },
    arrayBoxesForPerson: (state, payload) => {
      state.boxesForPerson = payload
    },
    arrayOrderHistory: (state, payload) => {
      state.orderHistory = payload
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
    getPersonBoxes({commit}) {
      axios
        .get("/person/product/",{
          params:{
            person: person_uuid,
            archival: 'False'
          }
        })
        .then(response => {
          commit("arrayBoxesForPerson",response.data);
        })
    },
    getOrders({commit}) {
      axios
        .get("/person/order/",{
          params:{
            person: person_uuid
          }
        })
        .then(response => {
          commit("arrayOrderHistory",response.data);
        })
    },
  },

  getters: {
    allBoxes(state) {
      return state.allBoxes
    },
    archiveBoxesForPerson(state) {
      return state.archiveBoxesForPerson
    },
    boxesForPerson(state) {
      return state.boxesForPerson
    },
    orderHistory(state) {
      return state.orderHistory
    }
  }
}