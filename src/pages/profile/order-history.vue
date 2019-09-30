<template>
  <section class="section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-12 col-md-11 col-12">
          <div class="form-block">
            <div class="title title_form">История заказов</div>
            <div class="order-history">
              <div class="order-history__item" v-for="item in orderHistory" v-bind:key="item.uuid">
                <div class="order-history__block">
                  <input type="hidden" v-bind:value="item.uuid" />
                  <img class="order-history__icon" src="@/assets/images/order-icon.png" alt />
                  <div class="order-history__number">Заказ № {{ item.order_number}}</div>
                  <div class="order-history__date">{{item.order_date}}</div>
                  <div class="order-history__company-name">Компания: {{ item.company.short_name }}</div>
                </div>

                <div class="order-history__estimated-date">
                  <span>Предполагаемая дата исполнения:</span>
                  {{item.estimated_date}}
                </div>
                <!-- <div class="order-history__quantity">
                  <span>Товар в заказе:</span> 5 шт
                </div>-->
                <div class="order-history__price">
                  <span>Общая сумма:</span>
                  {{item.amount_total_vat}}
                </div>
                <!-- TODO: add styles for this button -->
                <router-link v-bind:to="'/profile/order-details/' + item.uuid" class>Детали заказа</router-link>
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
  methods: {},
  mounted() {
    this.$store.dispatch("getOrders", {
      person_uuid: this.uuidPerson
    });
  },
  computed: {
    orderHistory() {
      return this.$store.getters.orderHistory;
    },
    uuidPerson() {
      return this.$store.getters.uuidPerson;
    }
  }
};
</script>

<style scoped>
</style>
