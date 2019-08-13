<template>
  <section class="section">
    
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-12 col-md-8 col-12">
          <div class="form-block">
            <div class="title title_form">История заказов</div>  

            <div class="order-history">
              <div class="order-history__item" v-for="item in orderHistory" v-bind:key="item.uuid">
                <div class="order-history__block">
                  <img class="order-history__icon" src="@/assets/images/order-icon.png" alt="">
                  <div class="order-history__number">
                    Заказ № 132345
                  </div>
                  <div class="order-history__date">
                    {{item.order_date}}
                  </div>
                </div>
                
                <div class="order-history__estimated-date">
                  <span>Предполагаемая дата исполнения:</span> {{item.estimated_date}}
                </div>
                <div class="order-history__quantity">
                  <span>Товар в заказе:</span> 5 шт
                </div>
                <div class="order-history__price">
                  <span>Цена:</span> {{item.amount_total}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "orderHistory",

  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch('getOrders');   
    
  },
  computed: {
    orderHistory() {
      return this.$store.getters.orderHistory;
    },
  }
};
</script>

<style scoped>
</style>
