const axios = require('axios');
const person_uuid = localStorage.getItem('person_uuid')

export default {

  state: {
    allCompaniesInfo: null,
    companyInfo: null,
    mfoInfo: []
  },

  mutations: {
    arrayAllCompaniesInfo : (state, payload) => {
      state.allCompaniesInfo = payload
    },
    arrayCompanyInfo : (state, payload) => {
      state.companyInfo = payload
    },
    arrayMfoInfo: (state, payload) => {
      state.mfoInfo = payload
    },
    deleteCompany(state, payload) {
      // find deleted company index
      const companyToDeleteIndex = state.allCompaniesInfo.findIndex(({uuid}) => uuid === payload)
      // delete company from all companies
      state.allCompaniesInfo.splice(companyToDeleteIndex, 1);
    }
  },

  actions: {
    addNewCompany( context, {newCompany, $router} ) {

      axios
        .post("http://test1.iti.dp.ua/api/person/company/", newCompany)
        .then(response => {
          console.log(response);
          console.log(response.data.status);
          $router.push("/profile/companies")            
        });
    },

    updateCompany( context, {company, $router} ) {

      axios
        .post("http://test1.iti.dp.ua/api/person/company/", {
          company,
          person_uuid: localStorage.person_uuid,
        })
        .then(response => {
          console.log(response);
          console.log(response.data.status);
          $router.push("/profile/companies")            
        });
    },

    deleteCompany( { commit }, {company_uuid, person_uuid}) {
      axios
        .delete("http://test1.iti.dp.ua/api/person/company", {
          params: {
            company: company_uuid,
            person_uuid: person_uuid
          }
        })
        .then(() => {
          commit("deleteCompany", company_uuid);
        });
    },

    getMfo({commit}, {mfo}) {
      axios
        .get("http://test1.iti.dp.ua/api/bank/?mfo=" + mfo)
        .then(response => {
          commit("arrayMfoInfo",response.data);
        })
    },

    getAllCompanies( {commit} ) {
      axios
        .get(
          "http://test1.iti.dp.ua/api/person/company/?person=" + person_uuid
        )
        .then(response => {
          commit('arrayAllCompaniesInfo', response.data);
        });
    },
    
    getCompany( {commit}, {id}){
      axios
        .get(
          "http://test1.iti.dp.ua/api/person/company?person=" + person_uuid + "&company=" + id )
        .then(response => {
          commit('arrayCompanyInfo', response.data);
        });
    },
  },

  getters: {
    allCompaniesInfo(state) {
      return state.allCompaniesInfo
    },
    companyInfo(state) {
      return state.companyInfo
    },
    mfoInfo(state) {
      return state.mfoInfo
    }
  }
}