<template>
  <section class="section section_registration">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-12 col-md-8 col-12">
            <div class="form-block">
              <div class="title title_form">Заявка на техкарту</div>
        
              <form class="form" action="#" v-if="boxInfo">
                <div class="row">
                  <div class="col-md-3">
                    <div class="form__item">
                      <input
                        class="input form-control"
                        type="text"
                        placeholder="Название"
                        v-model="newCard.product.name"
                      >
                    </div>
                    <div class="form__item">
                      <input
                        class="input form-control"
                        type="text"
                        placeholder="Длина"
                        v-model="newCard.product.length"
                      >
                    </div>
                    <div class="form__item">
                      <input
                        class="input form-control"
                        type="text"
                        placeholder="Ширина"
                        v-model="newCard.product.width"
                      >
                    </div>
                    <div class="form__item">
                      <input
                        class="input form-control"
                        type="text"
                        placeholder="Высота"
                        v-model="newCard.product.height"
                      >
                    </div>

                  </div>
                  <div class="col-md-3">
                    <div class="form__item">
                      <select v-model="newCard.product.cardboard_uuid" placeholder="" class="select">
                        <option value="">Марка картона</option>
                        <option 
                          v-for="item in boxInfo.cardboard"
                          v-bind:key="item.uuid"
                          v-bind:value="item.uuid"
                          >
                          {{item.name}}
                        </option>
                      </select>
                    </div>

                    <div class="form__item">
                      <select v-model="newCard.product.bumps_uuid" placeholder="" class="select">
                        <option value="">Марка гофры</option>
                        <option 
                          v-for="item in boxInfo.bumps"
                          v-bind:key="item.uuid"
                          v-bind:value="item.uuid"
                          >
                          {{item.name}}
                        </option>
                      </select>
                    </div>

                    <div class="form__item">
                      <select v-model="newCard.product.cardboard_color_uuid" placeholder="" class="select">
                        <option value="">Цвет картона</option>
                        <option 
                          v-for="item in boxInfo.cardboard_colors"
                          v-bind:key="item.uuid"
                          v-bind:value="item.uuid"
                          >
                          {{item.name}}
                        </option>
                      </select>
                    </div>

                    
                  </div>
                  <div class="col-md-4">
                    <div class="form__item">
                      <!-- <v-select :options="options" label="title">
                        
                      </v-select> -->
                      <select v-model="newCard.product.standart_uuid" class="select">
                        <option value="">Номер шаблона по ГОСТу</option>
                        <option 
                          v-for="item in boxInfo.boxes_standarts"
                          v-bind:key="item.uuid"
                          v-bind:value="item.uuid"
                        >
                          {{item.name}}
                        </option>
                      </select>
                      <button type="button" class="btn btn-primary" @click="showModal = true">
                        Посмотреть шаблон
                      </button>
                    </div>
                    <form id="uploadForm" name="uploadForm" method='post' enctype="multipart/form-data">
                      <input type="hidden" v-bind:value="uuidProduct" name="product">
                      
                      <label class="label-file" for="logo" id="logo-text">Прикрепить логотип</label>
                      <input class="input-file" type="file" id="logo" name="logo" v-on:change="alertFilenameLogo">
                      
                      <label class="label-file" for="template" id="template-text">Прикрепить чертеж</label>
                      <input class="input-file" type="file" id="template" name="template"  v-on:change="alertFilenameTemplate">
                    </form>
                    <div class="form__item">
                      
                    </div>
                  </div>
                </div>
                
              </form>
              <div class="buttons-list">
                <input type=button class="form__btn form__btn_registration" value=Сохранить @click="uploadCardInfo">
              </div>
          
            </div>
          </div>
        </div>
        
      </div>
      <div class="modal" :class="{ show: showModal}" v-show="showModal" @close="showModal = false" v-if="boxInfo">
        <div class="modal-background" @click="showModal = false"></div>
        <div 
          class="content"
          v-for="item in boxInfo.boxes_standarts"
          v-bind:key="item.uuid"
          v-if="newCard.product.standart_uuid == item.uuid"
        >
          <img v-bind:src="item.template_image">        
        </div>
    </div>
    
  </section>
  

</template>

<script>


export default {
  name: "card",

  data() {
    return {
      //options: [],
      newCard:{
        person: localStorage.person_uuid,
        product:{
          length: '',
          width: '',
          height: '',
          box_color: '',
          standart_uuid: '',
          cardboard_uuid: '',
          cardboard_color_uuid: '',
          bumps_uuid: '',
          name: '',
          
        },
      },
      showModal: false
    }
  },
  methods: {
    async uploadCardInfo(){
      await this.$store.dispatch('addNewCard', { newCard: this.newCard });
      
      if(this.uuidProduct != 0){
        let data = new FormData(document.getElementById('uploadForm'))
        var imageLogo = document.querySelector('#logo')
        var imageTemplate = document.querySelector('#template')
        console.log(imageLogo.files[0])
        console.log(imageTemplate.files[0])
        data.append('logo', imageLogo.files[0])
        data.append('template', imageTemplate.files[0])
        this.$store.dispatch('addImages', { data: data });  
        this.newCard.product.name = "";
        this.newCard.product.length = "";
        this.newCard.product.height = "";
        this.newCard.product.width = "";
        this.newCard.product.cardboard_color_uuid = "";
        this.newCard.product.box_color = "";
        this.newCard.product.standart_uuid = "";
        this.newCard.product.cardboard_uuid = "";
        this.newCard.product.bumps_uuid = "";
      } else{
        console.log("uuid_product is absent")
      }   
    },
    alertFilenameLogo() {
      var thefile = document.getElementById('logo');
      document.getElementById('logo-text').innerHTML =  thefile.value; 
    },
    alertFilenameTemplate() {
      var thefile = document.getElementById('template');
      document.getElementById('template-text').innerHTML =  thefile.value; 
    }
  },
  mounted() {
    this.$store.dispatch('getBoxInfo');   
    
  },
  computed: {
    options(){
      var options= [];
      for(var item of this.boxInfo.boxes_standarts){
        options.push(item.name)
      }
      return options
    },
    boxInfo() {
      return this.$store.getters.boxInfo;
    },
    uuidProduct() {
      return this.$store.getters.uuidProduct;
    },
  } 
};
</script>

<style scoped>

.modal.show{
  display: block
}
  .modal-background{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7)
  }
  .modal .content{
    position: absolute;
    width: 70%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
  .buttons-list{
    width: 245px;
  }
</style>
