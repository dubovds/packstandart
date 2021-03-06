import axios from '../backend/vue-axios'

//const person_uuid = localStorage.getItem('person_uuid')

export default {

  state: {
    allCompaniesInfo: null,
    companyInfo: null,
    mfoInfo: [],
    mfoError: "не верный код МФО"
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
    },
    mfo_error: (state, payload) => {
      state.mfoError = payload
    }
  },

  actions: {
    addNewCompany( context, {newCompany, $router} ) {

      axios
        .post("/person/company/", newCompany)
        .then(response => {
          console.log(response);
          console.log(response.data.status);
          $router.push("/profile/companies")            
        });
    },

    updateCompany( context, {company, $router} ) {

      axios
        .post("/person/company/", {
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
        .delete("/person/company/", {
          params: {
            company: company_uuid,
            person: person_uuid
          }
        })
        .then(() => {
          commit("deleteCompany", company_uuid);
        });
    },

    getMfo({commit}, {mfo}) {
      axios
        .get("/bank/?mfo=" + mfo)
        .then(response => {
          commit("arrayMfoInfo",response.data);
        })
        .catch(error => {
          console.log(error, this.mfoError);
          commit("mfo_error",error)
        });
    },

    getAllCompanies( {commit}, {person_uuid} ) {
      axios
        .get("person/company/", {
          params:{
            person: person_uuid
          }
        })
        .then(response => {
          commit('arrayAllCompaniesInfo', response.data);
        });
    },
    
    getCompany( {commit}, {id, person_uuid}){
      axios
        .get(
          "/person/company/?person=" + person_uuid + "&company=" + id )
        .then(response => {
          commit('arrayCompanyInfo', response.data);
        })
       
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
    },
    mfoError(state) {
      return state.mfoError
    }
  }
}