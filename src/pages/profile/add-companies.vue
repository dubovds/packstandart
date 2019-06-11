<template>
<section class="section section_registration">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-12 col-md-8 col-12">
          <div class="form-block">
            <div class="title title_form">Добавить компанию</div>
            <div class="subtitle">Заполните все обязательные поля</div>    
             
            <form class="form" action="#" @submit.prevent="addCompany">
              <div class="row">
                <div class="col-md-6">
                  <div class="form__item">
                    <input
                      class="input form-control"
                      type="text"
                      placeholder="Короткое название"
                      v-model="newCompany.company.short_name"
                    >
                  </div>
                  <div class="form__item">
                    <input
                      class="input form-control"
                      type="text"
                      placeholder="Полное название"
                      v-model="newCompany.company.full_name"
                    >
                  </div>
                  <div class="form__item">
                    <input
                      class="input form-control"
                      type="number"
                      placeholder="Код ЕРДПОУ"
                      v-model="newCompany.company.edrpou"
                    >
                  </div>
                  <div class="form__item">
                    <input
                      class
                      type="checkbox"
                      value="Плательщик НДС"
                      v-model="newCompany.company.vat"
                    >
                    <label>Плательщик НДС</label>
                  </div>
                  <div class="form__item">
                    <input
                      :disabled="isDisabledEdrpou"
                      class="input input_nds form-control"
                      type="number"
                      placeholder="номер свидетельства плательщика НДС"
                      v-model="newCompany.company.vat_number"
                    >
                  </div>
                  <div class="form__item">
                    <input
                      class="input form-control"
                      type="number"
                      placeholder="ИНН"
                      v-model="newCompany.company.inn"
                    >
                  </div>
                  <div class="form__item">
                    <input
                      class="input form-control"
                      type="text"
                      placeholder="Юридический адрес"
                      v-model="newCompany.company.jur_address"
                    >
                  </div>
                  <div class="form__item">
                    <input
                      class="input form-control"
                      type="text"
                      placeholder="Физический адрес"
                      v-model="newCompany.company.real_address"
                    >
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form__item">
                    <input
                      class="input form-control"
                      type="text"
                      placeholder="Адрес доставки по умолчанию"
                      v-model="newCompany.company.delivery_address"
                    >
                  </div>

                  <div class="form__item">
                    <input class type="checkbox" 
                            v-model="useRealAdress"
                            v-on:change="useAddress">
                    <label> Использовать физический адрес</label>
                  </div>
                  <div class="form__item">
                    <input
                      class="input form-control"
                      type="number"
                      placeholder="Номер банковского счета"
                      v-model="newCompany.company.bank_account"
                    >
                  </div>
                  <div class="form__item">
                    <input
                      class="input form-control"
                      type="number"
                      placeholder="Код МФО банка"
                      v-model="mfo"
                      v-on:change="getMfo"
                    >
                  </div>
                  <div class="form__item" >  
                    <div class="input form-control">
                      {{ mfoInfo.bank_name }}
                    </div>
                  </div>
                  <div class="form__item">
                    <input
                      class="input form-control"
                      type="text"
                      placeholder="ФИО руководителя"
                      v-model="newCompany.company.director"
                    >
                  </div>
                </div>
              </div>
              <div class="title title_form">Контактные лица</div>
              <div class="row">
                <div class="col-md-6" 
                    v-for="item in newCompany.company.contacts"
                    :key="item.id">
                  <div class="form__item">
                    <input
                      class="input form-control"
                      type="text"
                      placeholder="ФИО"
                      v-model="item.fio"
                    >
                  </div>
                  <div class="form__item">
                    <input
                      class="input form-control"
                      type="tel"
                      placeholder="Телефон 1"
                      v-model="item.phone1"
                    >
                  </div>
                  <div class="form__item">
                    <input
                      class="input form-control"
                      type="tel"
                      placeholder="Телефон 2"
                      v-model="item.phone2"
                    >
                  </div>
                  <div class="form__item">
                    <span>
                      <input class type="checkbox" 
                            id="viber"
                            v-model="newCompany.viber"
                            >
                      <label for="viber"> Viber</label>
                    </span>
                    <span>
                      <input class type="checkbox" 
                            id="telegram"
                            v-model="newCompany.telegram"
                            >
                      <label for="telegram"> Telegram</label>
                    </span>
                    <span>
                      <input class type="checkbox" 
                            id="whatsapp"
                            v-model="newCompany.whatsapp"
                            >
                      <label for="whatsapp"> Whatsapp</label>
                    </span>
                    <span>
                      <input class type="checkbox" 
                            id="skype"
                            v-model="newCompany.skype"
                            >
                      <label for="skype"> skype</label>
                    </span>
                  </div>
                  <div class="form__item">
                    <input
                      class="input form-control"
                      type="text"
                      placeholder="viber"
                      v-model="item.viber"
                      :disabled="isDisabledViber"
                    >
                  </div>
                  <div class="form__item">
                    <input
                      class="input form-control"
                      type="text"
                      placeholder="telegram"
                      v-model="item.telegram"
                      :disabled="isDisabledTelegram"
                    >
                  </div>
                  <div class="form__item">
                    <input
                      class="input form-control"
                      type="text"
                      placeholder="whatsapp"
                      v-model="item.whatsapp"
                      :disabled="isDisabledWhatsapp"
                    >
                  </div>
                  <div class="form__item">
                    <input
                      class="input form-control"
                      type="text"
                      placeholder="skype"
                      v-model="item.skype"
                       :disabled="isDisabledSkype"
                    >
                  </div>
                  
                </div>
                <div class="col-md-6">
                  <div class="btn" v-on:click="addContactPerson">
                    Добавить контакт
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
  name: "addCompanies",

  data() {
    return {
      newCompany: {
        person_uuid: localStorage.person_uuid,
        company: {
          short_name: null,
          full_name: null,
          edrpou: null,
          jur_address: null,
          real_address: null,
          delivery_address: null,
          director: null,
          bank_account: null,
          bank_uuid: null,
          inn: null,
          vat: null,
          vat_number: null,
          contacts: [ ],
        },
        // todo: rename to isViberFieldEnabled, etc.
        viber: null,
        telegram: null,
        whatsapp: null,
        skype: null,
        
      },
      mfo: null,
      useRealAdress: false,
      arrayMfo: [],
      fio: null,
      
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
      if(this.mfo.length > "5" && this.mfo.length<"7"){
        this.$store.dispatch('getMfo', {mfo: this.mfo});
        this.newCompany.company.bank_uuid = this.mfoInfo.uuid
      } 
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
      if (this.newCompany.viber){
        return false
      } else {
        return true
      } 
    },
    
    isDisabledTelegram(){
      if (this.newCompany.telegram){
        return false
      } else {
        return true
      } 
    },
    isDisabledWhatsapp(){
      if (this.newCompany.whatsapp){
        return false
      } else {
        return true
      } 
    },
    isDisabledSkype(){
      if (this.newCompany.skype){
        return false
      } else {
        return true
      } 
    },
    mfoInfo() {
      return this.$store.getters.mfoInfo;
    }
  },
      
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

