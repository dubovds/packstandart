export default{
  
  init() {
    const axios = require('axios');
    this.$store.commit("Login");
    if (this.$store.state.Auth.api_token) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + this.$store.state.Auth.token;
    }
  },
  login(data) {
    localStorage.setItem("person_uuid", data.person_uuid);
    localStorage.setItem("person_companies_count", data.person_companies_count);
    localStorage.setItem("token", data.token);
    this.init();
  },
  logout() {
    localStorage.removeItem("user_id");
    localStorage.removeItem("api_token");
    localStorage.removeItem("name");
    localStorage.removeItem("photo");

    this.init();
  },
}