<template>
  <section class="section section_registration">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-md-8 col-12">
          <div class="form-block">
            <div class="title title_form">
              Вход
            </div>
            <form class="form needs-validation" action="#" novalidate @submit.prevent='loginUser'>
              <div class="form__item" >
                <input class="input form-control" type="email" placeholder="e-mail"
                        v-model="email"
                >
                
              </div>
              <div class="form__item">
                <input class="input form-control" type="password" placeholder="Пароль"
                        v-model="password"
                >
              </div>
              <div class="buttons-list">
                    <button type="submit" class="form__btn form__btn_registration"      
                    >
                      Войти
                    </button>
                </div>
              
            </form>
          </div>
        </div>
      </div>
      <div class="class" v-for="info in infos"
                          v-bind:key = "info.id">
        <span>{{ info.person_companies_count }}</span><br>
        <span>{{ info.person_uuid }}</span>
      </div>
    </div>
  </section>
</template>

<script>

  export default{
    name: 'Login',
    // props: [ 'auth'],
    data(){
      return {
        error: false,
        email: '',
        password: '',
        infos: [],
        errors: {}
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
         
          .catch(error => {
                    this.errors = error.response.data.errors;
                    delete localStorage.token
                });

      },
      loginSuccessful (req) {
        console.log('login success', req);
        if (!req.data.token) {
          this.loginFailed()
          return
        }
        this.error = false
        localStorage.token = req.data.token
        localStorage.setItem("person_uuid", req.data.person_uuid);
        localStorage.setItem("person_companies_count", req.data.person_companies_count);
        if(req.data.person_companies_count === 0){
          this.$router.replace('/')
        }
        // this.$router.replace('/')
        // this.$emit('update:auth', true)
      }
    }
  }
</script>
