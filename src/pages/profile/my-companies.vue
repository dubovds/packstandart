<template>
  <section class="section companies">
    <div class="profile__content">
      <div class="title title_profile">Мои компании</div>
      <div class="company__wrapper">
        <div
          class="company__item"
          v-for="(item) in arrayComanyInfos"
          :key="item.uuid"
        >
          <div class="company__name">
            {{item.short_name}}
          </div>
          <div class="company__block-btn">
            <a href="/profile/edit-company" class="company__link company__link_edit"></a>
            <a href="#" class="company__link company__link_delete"></a>
          </div> 
        </div>
        <a href="/profile/add-companies" class="button button_add">Добавить</a>
      </div>

      
    </div>
  </section>
</template>
<script>
export default {
  name: "myCompanies",

  data() {
    return {
      person_uuide: localStorage.getItem("person_uuid"),
      arrayComanyInfos: null
    };
  },
  methods: {},
  mounted() {
    const axios = require("axios");
    axios
      .get(
        "http://test1.iti.dp.ua/api/person/company/?person=" + this.person_uuide
      )
      .then(response => {
        this.arrayComanyInfos = response.data;
      });
  },
  computed: {}
};
</script>

<style scoped>
</style>
