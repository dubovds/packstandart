<template>
  <section class="section companies">
    <div class="profile__content">
      <div class="title title_profile">Мои компании</div>
      <div class="company__wrapper">
        <div
          class="company__item"
          v-for="(item) in allCompaniesInfo"
          :key="item.uuid"
        >
          <div class="company__name">
            {{item.short_name}}
          </div>
          <div class="company__block-btn">
            <router-link v-bind:to="'/profile/edit-company/' + item.uuid" class="company__link company__link_edit"></router-link>
            <!-- <a href="/profile/edit-company" class="company__link company__link_edit" ></a> -->
            <a href="#" class="company__link company__link_delete" v-on:click="delCompany(item.uuid)"></a>
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
      arrayComanyInfos: null
    };
  },
  methods: {
    
   delCompany(company_uuid){
     this.$store.dispatch('deleteCompany', {
       person_uuid: this.uuidPerson,
       company_uuid,
     });
   }
  },
  mounted() {
    this.$store.dispatch('getAllCompanies', {
      person_uuid: this.uuidPerson,
    });
  },
  computed: {
    allCompaniesInfo() {
      return this.$store.getters.allCompaniesInfo;
    },
    uuidPerson() {
      return this.$store.getters.uuidPerson;
    },
  }
};
</script>

<style scoped>
</style>
