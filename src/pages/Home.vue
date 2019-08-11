<template>
  <div class="wrapper">
    <section class="section section_intro" v-if="textContent">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-md-8">
            <div class="text-block">       
              <div class="title">
                Завод ПакСтандарт 
              </div>
              <div class="text-block__content">
                
                <p>
                  {{textContent.main_description}}
                </p>

                

              </div>
              <div class="button button_order" @click="makeOrder" >
                заказать
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Slider></Slider>

    <section class="section section_advantage">
      <div class="container">
        <div class="row">
          <div class="col-xl-7 offset-md-5">
            <div class="text-block">
              <div class="title">
                Почему мы?
              </div>
              <div class="text-block__content">
                <ul class="text-block__list" v-for="item in textContent.why_we" v-bind:key="item.index">
                  <li class="text-block__item">
                    {{ item.li}}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SliderClient></SliderClient>

    <section class="section section_guarantee">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-md-8">
            <div class="text-block">
              <div class="title">
                Наши гарантии
              </div>
              <div class="text-block__content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>

                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <div class="title title_noline">
              Вы можете оформить заказ прямо сейчас!
            </div>
          </div>
          <div class="col-md-3">
            <div class="button button_order button_order_nm"
                 @click="makeOrder"                 
            >
              заказать
            </div>
          </div>
        </div>
      </div>
    </section>

    <Modal></Modal>
  </div>

</template>


<script>
  import Slider from '@/components/Slider.vue'
  import SliderClient from '@/components/Client-slider.vue'
  import Modal from '@/components/modal.vue'

  export default {
    name: 'Home',
    components: {
      Slider,
      SliderClient,
      Modal
    },
    data() {
      return {
        
      }
    },
    methods:{
      makeOrder(){
        if(this.auth){
          this.$router.replace('/profile/checkout')
        } else{
          this.$bvModal.show('orderModal')
        }
      }
    },
    mounted() {
      this.$store.dispatch('getTextContent');   
    },
    computed: {
      auth() {
        return this.$store.getters.auth;
      },
      textContent() {
      return this.$store.getters.textContent;
    },
    },
  }
</script>

<style>

</style>