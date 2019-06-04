<template>
<section class="section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-7 col-md-8 col-12">
          <div class="form-block">
            <div class="title title_form">Личные данные</div>

            <form class="form" action="#" @submit.prevent="">
              
              <div class="row">
                <div class="col-12" 
                   >
                  <div class="form__item">
                    <input
                      class="input form-control"
                      type="text"
                      placeholder="ФИО"
                      v-model="fio"
                    >
                  </div>
                  <div class="form__item">
                    <input
                      class="input form-control"
                      type="tel"
                      placeholder="Телефон 1"
                      v-model="phone1"
                    >
                  </div>
                  <div class="form__item">
                    <input
                      class="input form-control"
                      type="tel"
                      placeholder="Телефон 2"
                      v-model="phone2"
                    >
                  </div>
                  <div class="form__item">
                    <span>
                      <input class type="checkbox" 
                            id="viber"
                            v-model="checkViber"
                            >
                      <label for="viber"> Viber</label>
                    </span>
                    <span>
                      <input class type="checkbox" 
                            id="telegram"
                            v-model="checkTelegram"
                            >
                      <label for="telegram"> Telegram</label>
                    </span>
                    <span>
                      <input class type="checkbox" 
                            id="whatsapp"
                            v-model="checkWhatsapp"
                            >
                      <label for="whatsapp"> Whatsapp</label>
                    </span>
                    <span>
                      <input class type="checkbox" 
                            id="skype"
                            v-model="checkSkype"
                            >
                      <label for="skype"> skype</label>
                    </span>
                  </div>
                  <div class="form__item">
                    <input
                      class="input form-control"
                      type="text"
                      placeholder="viber"
                      v-model="viber"
                      :disabled="isDisabledViber"
                    >
                  </div>
                  <div class="form__item">
                    <input
                      class="input form-control"
                      type="text"
                      placeholder="telegram"
                      v-model="telegram"
                      :disabled="isDisabledTelegram"
                    >
                  </div>
                  <div class="form__item">
                    <input
                      class="input form-control"
                      type="text"
                      placeholder="whatsapp"
                      v-model="whatsapp"
                      :disabled="isDisabledWhatsapp"
                    >
                  </div>
                  <div class="form__item">
                    <input
                      class="input form-control"
                      type="text"
                      placeholder="skype"
                      v-model="skype"
                       :disabled="isDisabledSkype"
                    >
                  </div>
                  
                </div>
              </div>
              <div class="row">
                  <div class="buttons-list">
                    <button type="submit" class="form__btn form__btn_registration">Сохранить</button>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>    
  </section>

</template>

<script>
export default {
  name: "editProfile",

  data() {
    return {
     
      fio: null,
      phone1: null,
      phone2: null,
      checkViber: null,
      checkTelegram: null,
      checkWhatsapp: null,
      checkSkype: null,
      viber: null,
      telegram: null,
      whatsapp: null,
      skype: null,
      nextContact: 0
    };
  },
  methods: {
    addContactPerson(){
      this.newCompany.company.contacts.push({
        id: this.nextContact++,
        fio: '', 
        phone1: '',
        viber: '',
        telegram: '',
        whatsapp: '',
        skype: ''
      })
    },

    getMfo(){
      const axios = require("axios");
      if(this.mfo.length > "5" && this.mfo.length<"7"){
        axios
          .get("http://test1.iti.dp.ua/api/bank/?mfo=" + this.mfo)
          .then(response => {
            (this.arrayMfo = response.data);
            this.newCompany.company.bank_uuid = this.arrayMfo.uuid
        })
        
      } 
    },
    
    getCompany(){
      const axios = require("axios");
       axios
          .get("http://test1.iti.dp.ua/api/bank/?mfo=" + this.mfo)
          .then(response => {
            (this.arrayMfo = response.data);
            this.newCompany.company.bank_uuid = this.arrayMfo.uuid
        })
    },
  
    addCompany() {
      this.$store.dispatch('addNewCompany', { newCompany: this.newCompany, $router: this.$router });
    },
    useAddress(){
      if(this.useRealAdress === true){
        this.newCompany.company.delivery_address = this.newCompany.company.real_address
      }
    }
  },
  computed: {
    isDisabledEdrpou(){
      if (this.newCompany.company.vat === true){
        return false
      } else {
        return true
      } 
    },
    isDisabledViber(){
      if (this.checkViber){
        return false
      } else {
        return true
      } 
    },
    
    isDisabledTelegram(){
      if (this.checkTelegram){
        return false
      } else {
        return true
      } 
    },
    isDisabledWhatsapp(){
      if (this.checkWhatsapp){
        return false
      } else {
        return true
      } 
    },
    isDisabledSkype(){
      if (this.checkSkype){
        return false
      } else {
        return true
      } 
    }
  }    
};
</script>

<style scoped>
.input:disabled{
  display: none
}
.input_nds:disabled{
  display: block !important
}
</style>

