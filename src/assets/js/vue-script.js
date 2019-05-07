var app = new Vue({
  el: '#app',
  data: {
    noReg: true,
    error: false,
    user:{
      name: '',
      mail: 'test@test.com',
      phone: '123456',
      password: 'qwe',
      repeatPassword: 'qwe'
    }
  },

  methods: {
    registerUser() {
      if (this.user.password !== this.user.repeatPassword) {
        this.error = true;
      } else{
        console.log('теперь я притворяюсь, что сделал ещё кое-что...');
        this.noReg = false
      }
    }
  }
})