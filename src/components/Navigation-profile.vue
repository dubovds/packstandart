<template>
  <nav class="nav-profile">
    <ul>
      <li>
        <router-link :to="'/profile/checkout'">Оформить заказ</router-link>
      </li>
      <li>
        <router-link :to="'/profile/order-history'">История заказов</router-link>
      </li>
      <li>
        <router-link class :to="'/profile/catalog'">Справочник изделий</router-link>
      </li>
      <li>
        <router-link :to="'/profile/archive'">Архив изделий</router-link>
      </li>
      <li>
        <router-link class :to="'/profile/companies'">Мои компании</router-link>
      </li>
      <li>
        <router-link :to="'/profile/edit-profile'">Личные данные</router-link>
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
    nav() {
      return this.$store.getters.nav;
    },
    navAuth() {
      return this.$store.getters.navAuth;
    }
  }
};
</script>

<style scoped>
</style>
