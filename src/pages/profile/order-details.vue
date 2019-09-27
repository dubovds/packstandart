<template>
  <section class="section section_registration">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-12 col-md-8 col-12">
          <div class="form-block" v-if="orderInfo">
            <div class="title title_form">Заказ № {{ orderInfo.order_number }}</div>
            <div class="order-details__item">
              <strong>Компания:</strong>
              {{orderInfo.company.short_name}}
            </div>
            <div class="order-details__date-status">
              <div class="order-details__item">
                <strong>Дата оформления:</strong>
                {{ orderInfo.order_date}}
              </div>
              <div
                class="order-details__item"
                v-bind:class="{ 
                  green: orderInfo.status === 'new', 
                  red: orderInfo.status === 'closed',
                  confirm: orderInfo.status === 'confirm', 
                }"
              >
                <strong>Статус:</strong>
                {{ orderInfo.status}}
              </div>
            </div>
            <div class="boxInfo__block">
              <div
                class="boxInfo__item"
                v-for="item in orderInfo.order_details"
                v-bind:key="item.uuid"
              >
                <div class="row align-items-center">
                  <div class="col-sm-2">
                    <img src="@/assets/images/box.png" alt />
                  </div>
                  <div class="col-sm-3">
                    <div class="boxInfo__name">{{ item.product.name }}</div>
                  </div>
                  <div class="col-sm-2">
                    <div
                      class="boxInfo__size"
                    >{{ item.product.width }}x{{ item.product.length}}x{{ item.product.height}}</div>
                  </div>
                  <div class="col-sm-2">
                    <div class="boxInfo__quantity">{{ item.quantity}} шт</div>
                  </div>
                  <div class="col-sm-2">
                    <div class="boxInfo__price">
                      <strong>Цена:</strong>
                      {{ item.price}}
                    </div>
                    <div class="order-details__sum">
                      <strong>Сумма:</strong>
                      {{item.quantity * item.price}}
                    </div>
                  </div>
                  <!-- <div class="col-sm-5">
                    <button class="button button_brown" v-if="item.submited">В архив</button>
                  </div>-->
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="order-details__block">
                  <strong>Сумма без НДС:</strong>
                  {{totalPrice}}
                  <strong>грн</strong>
                </div>
                <div class="order-details__block">
                  <strong>НДС:</strong>
                  {{totalNds}}
                  <strong>грн</strong>
                </div>
                <div class="order-details__block">
                  <strong>Сумма с НДС:</strong>
                  {{totalPriceNds}}
                  <strong>грн</strong>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="order-details__block">
                  <strong>Ожидаемая дата выполнения:</strong>
                  {{orderInfo.estimated_date}}
                </div>
                <button
                  class="button button_registration button_hidden"
                  v-bind:class="{show: orderInfo.status === 'confirm'}"
                >Подтвердить заказ</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <!-- По каждой коробке отдельный блок -->
          <!-- Дата размещения -->
          <!-- номер заказа -->
          <!-- Имя коробки -->
          <!-- Количество коробок -->
          <!-- Цена
          сумма = количество на цену-->
          <!-- под всем этим три блока -->
          <!-- сумма без НДС: либо сумма всех сумм, либо amount_total_val / 1.2 -->
          <!-- сумма НДС: сумма без НДС/5 (округлить до второго знака после запятой) -->
          <!-- всего с НДС: сумма без НДС + сумма НДС -->
          <!-- следующий блок -->
          <!-- ожидаемая дата выполнения estimate_data -->
          <!-- статус заказа -->
          <!-- если статус заказа "Подтвердить" показываем кнопку с подтверждение м заказа. -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "orderDetails",

  data() {
    return {
      test: false,
      id: this.$route.params.id,
      person_uuid: localStorage.person_uuid,
      boxPrice: null
    };
  },
  created() {
    this.$store.dispatch("getOrderDetails", {
      id: this.id,
      person_uuid: this.person_uuid
    });
  },
  methods: {},
  computed: {
    orderInfo() {
      return this.$store.getters.orderInfo;
    },
    totalPrice() {
      var totalPrice = 0;
      for (var i = 0; i < this.orderInfo.order_details.length; i++) {
        totalPrice =
          totalPrice +
          this.orderInfo.order_details[i].quantity *
            this.orderInfo.order_details[i].price;
      }
      return totalPrice;
    },
    totalNds() {
      return (this.totalPrice / 5).toFixed(2);
    },
    totalPriceNds() {
      return +this.totalNds + this.totalPrice;
    }
  }
};
</script>

<style scoped>
</style>

