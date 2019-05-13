<template>
  <section class="section section_registration">
    <div class="container">

      <div class="row justify-content-center">
        <div class="col-xl-6 col-md-8 col-12">
          <div class="form-block">
            <div class="title title_form">
              Регистрация
            </div>
            <div class="subtitle">
              Заполните все поля для регистрации
            </div>
            <div id="app">
              <form class="form needs-validation" action="#" novalidate @submit.prevent='registerUser'>

                <div class="form__item">
                  <input class="input form-control" 
                          required type="text" 
                          placeholder="ФИО" 
                          v-model="username">
                  <div class="invalid-feedback">
                    Введите Ваше имя.
                  </div>
                </div>
                <div class="form__item">
                  <input class="input form-control" required type="email" placeholder="e-mail" 
                          v-model="mail">
                  <div class="invalid-feedback">
                    Введите Ваш e-mail.
                  </div>
                </div>
                <div class="form__item">
                  <input class="input form-control" required type="tel" placeholder="Телефон" 
                        v-model="phone">
                  <div class="invalid-feedback">
                    Введите Ваш контактный телефон.
                  </div>
                </div>
                <div class="form__item">
                  <input class="input form-control" required type="password" placeholder="Пароль" 
                        v-model="password">
                  <div class="invalid-feedback">
                    Введите Ваш пароль.
                  </div>
                </div>
                <div class="form__item">
                  <input class="input form-control" required type="password" placeholder="Подтвердить пароль" 
                          v-model="repeatPassword">
                  <div class="invalid-feedback">
                    Подтвердите Ваш пароль
                  </div>
                  <div class="alert-danger alert-danger-custom" role="alert" 
                        v-if="error">
                    Пароли не совпадают!
                  </div>
                </div>
                <button type="submit" class="form__btn form__btn_registration">Зарегистрироваться</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default{
    name: 'Registration',
    data(){
      return {
        error: false,
        username: '',
        mail: '',
        phone: '',
        password: '',
        repeatPassword: '',
        errors: {},
        posts: []
      }
    },
    methods:{
      registerUser(){
        const axios = require('axios')
        const user = {
           fio: this.username,
           phone: this.phone,
           email: this.mail,
           password: this.password
        }
        axios.post('http://test1.iti.dp.ua/api/auth/register/', user)
        .then((response) => {
          console.log(response);
          console.log(response.data.status)
          if(response.data.status === "Success"){
            this.$router.push('/');
          }
        })
        // this.$http.post('http://test1.iti.dp.ua/api/auth/register/', user)
        // .then(response =>{
        //   if(response.data.success){
        //     this.$router.push('/');
        //   }
        // })
        // .catch(error =>{
        //   this.errors = error.response.data.errors;
        // });
      }
    },
    created: function () {
      //this.getAllPosts()
    }
  }
</script>