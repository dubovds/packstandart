<template>
  <section class="section section_registration">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-12 col-md-8 col-12">
          <div class="form-block">
            <div class="title title_form">Изменить компанию</div>
         
            <form class="form" action="#" @submit.prevent="saveCompany" v-if="companyInfo">
             
                <div class="row">
                  <div class="col-md-6">
                    <div class="form__item">
                      <input
                        class="input form-control"
                        type="text"
                        placeholder="Короткое название"
                        v-model="companyInfo.short_name"
                      >
                    </div>
                    <div class="form__item">
                      <input
                        class="input form-control"
                        type="text"
                        placeholder="Полное название"
                        v-model="companyInfo.full_name"
                      >
                    </div>
                    <div class="form__item">
                      <input
                        
                        class="input form-control"
                        type="number"
                        placeholder="Код ЕРДПОУ"
                        v-model="companyInfo.edrpou"
                      >
                    </div>
                    <div class="form__item">
                      <input
                        class
                        type="checkbox"
                        value="Плательщик НДС"
                        v-model="companyInfo.vat"
                      >
                      <label>Плательщик НДС</label>
                    </div>
                    <div class="form__item">
                      <input
                        
                        class="input input_nds form-control"
                        type="number"
                        placeholder="номер свидетельства плательщика НДС"
                        v-model="companyInfo.vat_number"
                      >
                    </div>
                    <div class="form__item">
                      <input
                        class="input form-control"
                        type="number"
                        placeholder="ИНН"
                        v-model="companyInfo.inn"
                      >
                    </div>
                    <div class="form__item">
                      <input
                        class="input form-control"
                        type="text"
                        placeholder="Юридический адрес"
                        v-model="companyInfo.jur_address"
                      >
                    </div>
                    <div class="form__item">
                      <input
                        class="input form-control"
                        type="text"
                        placeholder="Физический адрес"
                        v-model="companyInfo.real_address"
                      >
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form__item">
                      <input
                        class="input form-control"
                        type="text"
                        placeholder="Адрес доставки по умолчанию"
                        v-model="companyInfo.delivery_address"
                      >
                    </div>

                    
                    <div class="form__item">
                      <input
                        class="input form-control"
                        type="number"
                        placeholder="Номер банковского счета"
                        v-model="companyInfo.bank_account"
                      >
                    </div>
                    <div class="form__item">
                      <input
                        class="input form-control"
                        type="number"
                        placeholder="Код МФО банка"
                        v-model="companyInfo.mfo"
                        
                      >
                    </div>
                    <!-- <div class="form__item">
                      <div class="input form-control">{{ arrayMfo.bank_name }}</div>
                    </div> -->
                    <div class="form__item">
                      <input
                        class="input form-control"
                        type="text"
                        placeholder="ФИО руководителя"
                        v-model="companyInfo.director"
                      >
                    </div>
                  </div>
                </div>
                <div class="title title_form">Контактные лица</div>
                <div class="row" >
                  <div class="col-md-6" v-for="item in companyInfo.contacts" :key="item.id">
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
                      <input
                        class="input form-control"
                        type="text"
                        placeholder="viber"
                        v-model="item.viber"
                        
                      >
                    </div>
                    <div class="form__item">
                      <input
                        class="input form-control"
                        type="text"
                        placeholder="telegram"
                        v-model="item.telegram"
                        
                      >
                    </div>
                    <div class="form__item">
                      <input
                        class="input form-control"
                        type="text"
                        placeholder="whatsapp"
                        v-model="item.whatsapp"
                        
                      >
                    </div>
                    <div class="form__item">
                      <input
                        class="input form-control"
                        type="text"
                        placeholder="skype"
                        v-model="item.skype"
                        
                      >
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="btn" v-on:click="addContactPerson">Добавить контакт</div>
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
  name: "editCompany",

  data() {
    return {
      short_name: null,
      id: this.$route.params.id,
      person_uuid: localStorage.person_uuid,
     
    };
  },
  created(){
    this.$store.dispatch('getCompany', {id: this.id, person_uuid: this.person_uuid})
  },
  methods: {
    addContactPerson() {
      this.companyInfo.company.contacts.push({
        id: this.nextContact++,
        fio: "",
        phone1: "",
        viber: "",
        telegram: "",
        whatsapp: "",
        skype: ""
      });
    },
    saveCompany() {
      this.$store.dispatch('updateCompany', { company: this.companyInfo, $router: this.$router });
      //this.$store.dispatch('saveChangesCompany', { companyInfo: this.companyInfo, $router: this.$router });
    },
  },
  computed: {
    companyInfo() {
      return this.$store.getters.companyInfo;
    },
    isDisabledEdrpou() {
      if (this.companyInfo.vat === true) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style scoped>
.input:disabled {
  display: none;
}
.input_nds:disabled {
  display: block !important;
}
</style>

