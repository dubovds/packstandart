<template>
  <nav class="nav-profile">
    <ul>
      <li>
        <a href="/profile/checkout">
          Оформить заказ
        </a>
      </li>
      <li>
        <a href="#">
          История заказов
        </a>
      </li>
      <li>
        <router-link
                  class=""
                  :to="'/profile/card'"
                >
                Справочник изделий
        </router-link>
      </li>
      <li>
        <a href="#">
          Архив изделий
        </a>
      </li>
      <li>
        <router-link
                  class=""
                  :to="'/profile/companies'"
                >
                Мои компании
        </router-link>
        
      </li>
      <li>
        <a href="/profile/edit-profile">
          Личные данные
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: "Navigation-profile",

  data() {
    return {
      menuShow: false
    };
  },
  computed: {
    nav(){
      return this.$store.getters.nav
    },
    navAuth(){
      return this.$store.getters.navAuth
    }
  }
};
</script>

<style scoped>
</style>
