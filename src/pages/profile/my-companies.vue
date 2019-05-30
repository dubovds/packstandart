<template>
  <section class="companies">
    <div class="profile__content">
      <div class="title title_profile">Мои компании</div>
      
      <div class="company__name"
          v-for="(item) in arrayComanyInfos"
          :key="item.uuid">
        {{item.short_name}}
        
      </div>
      <a href="/profile/add-companies" class="">
        Добавить
      </a>
    </div>
  </section>
</template>
<script>
export default {
  name: "myCompanies",

  data() {
    return {
      person_uuide: localStorage.getItem('person_uuid'),
      arrayComanyInfos: null
    };
  },
  methods:{
    
  },
  mounted(){
    const axios = require("axios");
      axios
        .get("http://test1.iti.dp.ua/api/person/company/?person=" + this.person_uuide)
        .then(response => {
          (this.arrayComanyInfos = response.data);
        })      
  },
  computed: {}
};
</script>

<style scoped>
.company__name{
  background-color: rgba(255, 255, 255, .7);
  margin-bottom: 5px;
  padding: 5px 10px
}
</style>
