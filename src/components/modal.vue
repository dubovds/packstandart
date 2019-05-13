<template>
  <b-modal id="orderModal" centered>
                
          <div class="modal-body">
            Для того, чтобы сделать заказ Вам нужно
            войти или зарегистрироваться
          </div>
    <template slot="modal-footer">
      <div class="button button_order button_order_modal">
        <a href="/login">
          Войти
        </a>
      </div>
      <div class="button button_order button_order_modal" data-toggle="modal" data-target="#registrationModal">
        <a href="/reg">
          Зарегистрироваться
        </a>
      </div>
    </template>

    </b-modal>
</template>

<script>
  export default {
    name: 'Modal'
  }
</script>

<style scoped>
.button a{
  color: #fff;
  text-decoration: none;
}
</style>

