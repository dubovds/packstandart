const axios = require('axios');

export default {

  state: {
    mfoInfo: null
  },

  mutations: {
    arrayMfoInfo: (state, payload) => {
      state.mfoInfo = payload
    }
  },

  actions: {
    getMfo({commit}, {mfo}) {
      axios
        .get("http://test1.iti.dp.ua/api/bank/?mfo=" + mfo)
        .then(response => {
          commit("arrayMfoInfo",response.data);
        })
    }
  },

  getters: {
    mfoInfo(state) {
      return state.mfoInfo
    }
  }
}