<template>
  <section class="section section_registration">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-md-8 col-12">
          <div class="form-block">
            <div class="title title_form">
              Вход
            </div>
            <form class="form needs-validation" action="" novalidate @submit.prevent='loginUser'>
              <div class="form__item">
                <input class="input form-control" required type="email" placeholder="e-mail"
                        v-model="email"
                >
                <div class="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
              <div class="form__item">
                <input class="input form-control" required type="password" placeholder="Пароль"
                        v-model="password"
                >
                <div class="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
              <button type="submit" class="form__btn form__btn_registration">Войти</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default{
    name: 'Login',
    data(){
      return {
        error: false,
        email: '',
        password: ''
      }      
    },
    methods:{
      loginUser(){
        const axios = require('axios')
        const user = {
           email: this.email,
           password: this.password
        }

        axios.post('http://test1.iti.dp.ua/api/auth/login/', user)
          .then(request => this.loginSuccessful(request))
          .catch(() => this.loginFailed())

        // this.$http.post('http://test1.iti.dp.ua/api/auth/login/', user )
        // .then(response => (this.info = response));

      },
      loginSuccessful (req) {
        if (!req.data.token) {
          this.loginFailed()
          return
        }
        this.error = false
        localStorage.token = req.data.token
        this.$router.replace(this.$route.query.redirect || '/authors')
      },
      loginFailed () {
        this.error = 'Login failed!'
        delete localStorage.token
      }
    },

    created: function () {
      //this.getAllPosts()
    }
  }
</script>
