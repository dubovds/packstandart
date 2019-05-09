<template>
  <section class="section section_product">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="title">
            Наша продукция
          </div>
        </div>
      </div>

      <carousel
                :perPageCustom="[[320, 1], [768, 2], [1024, 3]]"
                :paginationEnabled="false"
                :navigationEnabled="true"
                >
        <slide>
          <div class="product-slider__item">
            <img class="product-slider__image" src="../assets/images/pic-1.jpg" alt="">
          </div>
        </slide>
        <slide>
          <div class="product-slider__item">
            <img class="product-slider__image" src="../assets/images/pic-2.jpg" alt="">
          </div>
        </slide>
        <slide>
          <div class="product-slider__item">
            <img class="product-slider__image" src="../assets/images/pic-3.jpg" alt="">
          </div>
        </slide>
        <slide>
          <div class="product-slider__item">
            <img class="product-slider__image" src="../assets/images/pic-1.jpg" alt="">
          </div>
        </slide>
      </carousel>

      <div class="row justify-content-md-center">
        <div class="col-xl-8">
          <div class="text-block">
            <div class="text-block__content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';

  export default {
    name: 'Slider',
    components: {
      Carousel,
      Slide
    }
  }
</script>