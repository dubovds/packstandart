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

    <div class="post" 
      v-for="post in posts"
      v-bind:key="post.id">
      <span>{{ post.id }}</span>
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
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
        
        posts: []
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
        this.$http.post('https://jsonplaceholder.typicode.com/posts', user)

      },
      // getAllPosts() {
      //   this.$http.get('https://jsonplaceholder.typicode.com/posts')
      //   .then(function(response){
      //     this.posts = response.data    
      //   }, function(error){

      //   })
      // }
    },
    created: function () {
      //this.getAllPosts()
    }
  }
</script>