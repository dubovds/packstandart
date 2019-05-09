<template>
  <section class="section section_product">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="title">
            К тому же мы сотрудничаем с:
          </div>
        </div>
      </div>
      <div class="row client hidden-mobile">
          <div class="col-md-3">
            <div class="client__item">
              <img slass="client__logo" src="../assets/images/partner-logo.png" alt="">
            </div>
          </div>
          <div class="col-md-3">
            <div class="client__item">
              <img slass="client__logo" src="../assets/images/partner-logo.png" alt="">
            </div>
          </div>
          <div class="col-md-3">
            <div class="client__item">
              <img slass="client__logo" src="../assets/images/partner-logo.png" alt="">
            </div>
          </div>
          <div class="col-md-3">
            <div class="client__item">
              <img class="client__logo" src="../assets/images/partner-logo.png" alt="">
            </div>
          </div>
        </div>

      <div class="show-mobile">
        <carousel
                :perPageCustom="[[320, 1], [768, 2]]"
                :paginationEnabled="false"
                :navigationEnabled="true"
                >
        <slide>
          <div class="product-slider__item">
            <img class="product-slider__image" src="../assets/images/partner-logo.png" alt="">
          </div>
        </slide>
        <slide>
          <div class="product-slider__item">
            <img class="product-slider__image" src="../assets/images/partner-logo.png" alt="">
          </div>
        </slide>
        <slide>
          <div class="product-slider__item">
            <img class="product-slider__image" src="../assets/images/partner-logo.png" alt="">
          </div>
        </slide>
        <slide>
          <div class="product-slider__item">
            <img class="product-slider__image" src="../assets/images/partner-logo.png" alt="">
          </div>
        </slide>
      </carousel>
      </div>

    </div>
  </section>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';

  export default {
    name: 'Slider-client',
    components: {
      Carousel,
      Slide
    }
  }
</script>