<template>
  <header class="header">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-2 col-sm-4 col-5">
          <router-link class="header__logo" :to="'/'"></router-link>
        </div>
        <div class="col-lg-10 col-sm-8 col-7">
          <div id="nav-icon3" @click="menuShow = !menuShow" :class="{ open: menuShow }">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav class="menu-mobile" :class="{ open: menuShow }">
            <ul class="menu__list menu__list_auth clearfix">
              <li
                class="menu__item menu__item_button"
                v-for="link in navAuth"
                :key="link.title"
                v-if="link.auth === auth"
                @click="menuShow = false"
              >
                <router-link
                  class="button__header button__header_entry"
                  :to="`${link.url}`"
                >{{ link.title }}</router-link>
              </li>
            </ul>
            <ul class="menu__list clearfix">
              <li
                class="menu__item"
                v-for="link in nav"
                :key="link.title"
                @click="menuShow = false"
              >
                <router-link class="menu__link" :to="`${link.url}`">{{ link.title }}</router-link>
              </li>
            </ul>
          </nav>

          <nav class="menu">
            <ul class="menu__list menu__list_auth clearfix">
              <li
                class="menu__item menu__item_button"
                v-for="link in navAuth"
                :key="link.title"
                v-if="link.auth === auth"
              >
                <router-link
                  class="button__header button__header_entry"
                  :to="`${link.url}`"
                >{{ link.title }}</router-link>
              </li>
            </ul>

            <ul class="menu__list menu__list_auth clearfix">
              <li class="menu__item menu__item_button" v-if="auth === true">
                <span class="button__header button__header_name">{{ personeName }}</span>
              </li>
              <li
                class="menu__item menu__item_button"
                v-for="link in navAuthLogin"
                :key="link.title"
                v-if="link.auth === auth"
              >
                <span
                  class="button__header button__header_entry"
                  @click="exit(link)"
                >{{ link.title }}</span>
              </li>
            </ul>

            <ul class="menu__list clearfix">
              <li
                class="menu__item"
                v-for="link in nav"
                :key="link.title"
                v-if="link.auth === 'both' || link.auth === auth"
              >
                <router-link class="menu__link" :to="`${link.url}`">{{ link.title }}</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      menuShow: false
    };
  },
  computed: {
    personeName() {
      return this.$store.getters.personeName;
    },
    auth() {
      return this.$store.getters.auth;
    },
    nav() {
      return this.$store.getters.nav;
    },
    navAuth() {
      return this.$store.getters.navAuth;
    },
    navAuthLogin() {
      return this.$store.getters.navAuthLogin;
    }
  },
  methods: {
    exit(link) {
      if (link.title == "Выход") {
        this.$store.dispatch("logout");
        this.$router.replace("/");
      }
    }
  }
};
</script>

<style scoped>
</style>
