<template>
  <section class="section section_registration">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-md-8 col-12">
          <div class="form-block">
            <div class="title title_form">Регистрация</div>
            <div class="subtitle">Заполните все поля для регистрации</div>
            <div id="app">
              <form class="form" action="#" @submit.prevent="onSubmit">
                <div class="form__item" :class="{'error_form__item': $v.username.$error }">
                  <input
                    class="input form-control"
                    type="text"
                    placeholder="ФИО"
                    v-model="username"
                    :class="{ 'error-border': $v.username.$error }"
                    @change="$v.username.$touch()"
                  >
                  <div class="error" v-if="!$v.username.required">Заполните поле!</div>
                </div>
                <div class="form__item" :class="{'error_form__item': $v.mail.$error }">
                  <input
                    class="input form-control"
                    type="email"
                    placeholder="e-mail"
                    v-model="mail"
                    :class="{ 'error-border': $v.mail.$error }"
                    @change="$v.mail.$touch()"
                  >
                  <div class="error" v-if="!$v.mail.required">Заполните поле!</div>
                  <div class="error" v-if="!$v.mail.email">Email введен не корректно!</div>
                </div>
                <div class="form__item" :class="{'error_form__item': $v.phone.$error }">
                  <input
                    class="input form-control"
                    type="tel"
                    placeholder="Телефон"
                    v-model="phone"
                    :class="{ 'error-border': $v.phone.$error }"
                    @change="$v.phone.$touch()"
                  >
                  <div class="error" v-if="!$v.phone.required">Заполните поле!</div>
                  <div class="error" v-if="!$v.phone.numeric">Телефон введен не корректно!</div>
                </div>
                <div class="form__item" :class="{'error_form__item': $v.password.$error }">
                  <input
                    class="input form-control"
                    type="password"
                    placeholder="Пароль"
                    v-model="password"
                    :class="{ 'error-border': $v.password.$error }"
                    @change="$v.password.$touch()"
                  >
                  <div class="error" v-if="!$v.password.required">Заполните поле!</div>
                  <div
                    class="error"
                    v-if="!$v.password.minLength"
                  >Пароль должен быть не менее {{ $v.password.$params.minLength.min }} букв.</div>
                </div>
                <div class="form__item" :class="{'error_form__item': $v.repeatPassword.$error }">
                  <input
                    class="input form-control"
                    type="password"
                    placeholder="Подтвердить пароль"
                    v-model="repeatPassword"
                    :class="{ 'error-border': $v.repeatPassword.$error }"
                    @change="$v.repeatPassword.$touch()"
                  >
                  <div
                    class="error"
                    v-if="!$v.repeatPassword.sameAsPassword"
                  >Пароли не совпадают</div>
                </div>
                <div class="buttons-list">
                    <button type="submit" class="form__btn form__btn_registration"
                            :disabled="submitStatus === 'PENDING'"
                    >
                      Зарегистрироваться
                    </button>
                </div>
                <div class="buttons-list_info">
                  <p class="typo__p" v-if="submitStatus === 'OK'">Спасибо за регистрацию! Наши менеджеры свяжуться с вами.</p>
                  <p class="typo__p" v-if="submitStatus === 'ERROR'">Пожалуйста, заполните форму правильно.</p>
                  <p class="typo__p" v-if="submitStatus === 'PENDING'">Отправка...</p>
                </div>
                <div class="buttons-list_info">
                  <span>do you have account?
                    <router-link :to="`/login`">
                        enter here
                    </router-link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { required, sameAs, minLength, email, numeric } from "vuelidate/lib/validators";

export default {
  name: "Registration",
  data() {
    return {
      error: false,
      username: "",
      mail: "",
      phone: "",
      password: "",
      repeatPassword: "",
      errors: {},
      submitStatus: null
    };
  },
  validations: {
    username:{
      required
    },
    phone:{
      required,
      numeric
    },
    mail: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(3)
    },
    repeatPassword: {
      sameAsPassword: sameAs("password")
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        console.log("submit!");
        const axios = require("axios");
        const user = {
          fio: this.username,
          phone: this.phone,
          email: this.mail,
          password: this.password
        };
        axios
          .post("http://test1.iti.dp.ua/api/auth/register/", user)
          .then(response => {
            console.log(response);
            console.log(response.data.status);
            if (response.data.status === "Success") {
              //this.$router.push("/");
              // do your submit logic here
              this.submitStatus = "PENDING";
              setTimeout(() => {
                this.submitStatus = "OK";
              }, 1000);
            }
          });
        
      }
    },
    registerUser() {
      const axios = require("axios");
      const user = {
        fio: this.username,
        phone: this.phone,
        email: this.mail,
        password: this.password
      };
      axios
        .post("http://test1.iti.dp.ua/api/auth/register/", user)
        .then(response => {
          console.log(response);
          console.log(response.data.status);
          if (response.data.status === "Success") {
            this.$router.push("/");
          }
        });
    }
  },
  created: function() {
    //this.getAllPosts()
  }
};
</script>

<style lang="sass" scoped>
.form__item
  .error
    display: none
    
    color: red
    
  &.error_form__item
    .error
      position: absolute
      display: block
  
.input
  &.error-border
    
    border: 1px solid red

</style>
