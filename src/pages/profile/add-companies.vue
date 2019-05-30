<template>
  <section class="section section_registration">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-12 col-md-8 col-12">
          <div class="form-block">
            <div class="title title_form">Добавить компанию</div>
            <div class="subtitle">Заполните все поля обязательные поля</div>

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
                      class="input form-control"
                      type="number"
                      placeholder="Код ЕРДПОУ"
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
                    <label>{{useRealAdress}} Использовать физический адрес</label>
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
                      v-model="newCompany.company.mfo"
                    >
                  </div>
                  <div class="form__item">
                    <input
                      :disabled="isDisabledBank"
                      class="input form-control"
                      type="text"
                      placeholder="Наименование банка"
                      v-model="newCompany.company.bank_uuid"
                    >
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
                <div class="col-md-6">
                  <div class="form__item">
                    <input
                      class="input form-control"
                      type="text"
                      placeholder="ФИО"
                      v-model="newCompany.company.contacts.fio"
                    >
                  </div>
                  <div class="form__item">
                    <input
                      class="input form-control"
                      type="tel"
                      placeholder="Телефон 1"
                      v-model="newCompany.company.phone1"
                    >
                  </div>
                  <!-- <div class="form__item">
                    <input
                      class="input form-control"
                      type="tel"
                      placeholder="Телефон 2"
                      v-model="newCompany.company.phone2"
                    >
                  </div> -->
                  <div class="buttons-list">
                    <button type="submit" class="form__btn form__btn_registration">Сохранить</button>
                  </div>
                </div>
                <div class="col-md-6"></div>
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
          contacts: {
            fio: null,
            phone1: null,
            skype: null
          },
          bank_account: null,
          bank_uuid: null,
          inn: null,
          vat: null,
          vat_number: null
        },
        //mfo: null
      },
      useRealAdress: false
    };
  },
  methods: {
    addCompany() {
      const axios = require("axios");

      axios
        .post("http://test1.iti.dp.ua/api/person/company/", this.newCompany)
        .then(response => {
          console.log(response);
          console.log(response.data.status);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    useAddress(){
      if(this.useRealAdress === true){
        this.newCompany.company.delivery_address = this.newCompany.company.real_address
      }
    }
  },
  computed: {
    isDisabledEdrpou() {
      if (this.newCompany.company.vat === true) {
        return false;
      } else {
        return true;
      }
    },
    isDisabledBank() {
      if (this.newCompany.mfo) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style scoped>
</style>

