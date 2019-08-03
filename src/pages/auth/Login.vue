<template>
  <section class="section section_registration">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-md-8 col-12">
          <div class="form-block">
            <div class="title title_form">
              Вход
            </div>
            <div class="login__error text-danger" v-bind:class="{error}">
              Не верный логин или пароль
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
    data(){
      return {
        email: '',
        password: '',
        infos: [],
      }      
    },
    methods:{
      loginUser(){
        const user = {
           email: this.email,
           password: this.password
        }
        this.$store.dispatch('login', {user, $router: this.$router});
      }
    },
    computed: {
    
      error() {
        return this.$store.getters.error;
      },
    }
  }
</script>
<style>
.login__error{
  display: none;
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 20px;
}
.login__error.error{
  display: block; 
}

</style>