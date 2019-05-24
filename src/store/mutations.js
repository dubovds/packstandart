export default {
  
  Login(state) {
      state.Auth.person_uuid = localStorage.getItem("person_uuid");
      state.Auth.token = localStorage.getItem("token");
      state.Auth.person_companies_count = localStorage.getItem("person_companies_count");
      state.Auth.login =
          state.Auth.person_uuid !== null &&
          state.Auth.token !== null &&
          state.Auth.person_companies_count !== null;
  }
};