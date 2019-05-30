const axios = require('axios');

export default {

  state: {
    
  },

  mutations: {
  
  },

  actions: {
    addNewCompany( context, {newCompany, $router} ) {

      axios
        .post("http://test1.iti.dp.ua/api/person/company/", newCompany)
        .then(response => {
          console.log(response);
          console.log(response.data.status);
          $router.push("/profile/companies")            
        })
        .catch(error => {
                  this.errors = error.response.data.errors;
              });
    }
  },

  getters: {
    
  }
}