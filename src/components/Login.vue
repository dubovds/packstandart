<template>
  <section class="section section_registration">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-md-8 col-12">
          <div class="form-block">
            <div class="title title_form">
              Вход
            </div>
            <form class="form needs-validation" action="" novalidate @submit.prevent='registerUser'>
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
        password: '',
        status: ''
      }
    },
    methods:{
      registerUser(){
        const user = {
           fio: this.username, 
           email: this.mail,
           phone: this.phone,
           password: this.password
        }
        this.$http.post('http://test1.iti.dp.ua/api/auth/register/', user)

      }
    },
    created: function () {
      //this.getAllPosts()
    }
  }
</script>
