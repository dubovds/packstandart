<template>
  <b-modal id="orderModal" ref="orderModal" centered>
    <div class="modal-body">
      Для того, чтобы сделать заказ Вам нужно
      войти или зарегистрироваться
    </div>
    <template slot="modal-footer">
      <div class="button button_order button_order_modal">
        <router-link :to="'/login'">Войти</router-link>
      </div>
      <div
        class="button button_order button_order_modal"
        data-toggle="modal"
        data-target="#registrationModal"
      >
        <router-link :to="'/reg'">Зарегистрироваться</router-link>
      </div>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "Modal"
};
</script>

<style scoped>
.button a {
  color: #fff;
  text-decoration: none;
}
</style>

