<template>
  <header class="header">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-2 col-sm-4 col-5">
          <div class="header__logo"></div>
        </div>
        <div class="col-lg-10 col-sm-8 col-7">

            <div id="nav-icon3"
                 @click="menuShow = !menuShow"
                 :class="{ open: menuShow }"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <nav class="menu-mobile"
                 :class="{ open: menuShow }"
            >
              <ul class="menu__list  clearfix">
                <li class="menu__item menu__item_button">
                  <span class="button__header button__header_entry">
                    Вход
                  </span>
                </li>
                <li class="menu__item menu__item_button">
                  <a href="registration.html" class="button__header button__header_reg">
                    Регистрация
                  </a>
                </li>
                <li class="menu__item"
                    v-for="link in linkMenu"
                    :key="link.title"
                    @click="menuShow = false"
                >
                  <router-link class="menu__link"
                               :to="`${link.url}`"
                  >
                    {{ link.title }}
                </router-link>
                </li>
              </ul>
            </nav>

          <nav class="menu">
            <ul class="menu__list  clearfix">
              <li class="menu__item"
                  v-for="link in linkMenu"
                  :key="link.title"
              >
                <router-link class="menu__link"
                             :to="`${link.url}`"
                >
                  {{ link.title }}
                </router-link>
              </li>
              <li class="menu__item menu__item_button"
                  v-for="link in linkButtonMenu"
                  :key="link.title"
                  v-if="link.auth === auth"
              >
                <router-link class="button__header button__header_entry"
                             :to="`${link.url}`"
                >
                  {{ link.title }}
                </router-link>
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
    name: 'Navigation',
    data(){
      return {
        menuShow: false,
        linkMenu: [
          {title: 'Главная', url: '/'},
          {title: 'Новости', url: '/news'},
          {title: 'Прайс', url: '/price'},
          {title: 'Контакты', url: '/contacts'},
        ],
        linkButtonMenu: [
          {title: 'Вход', url: '/login', auth: false},
          {title: 'Регистрация', url: '/reg', auth: false},
          {title: 'username', url: '/reg', auth: true},
          {title: 'Выход', url: '/reg', auth: true},
        ]
      }
    },
    computed: {
      auth(){
        return false;
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
