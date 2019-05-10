<template>
  <div class="modal fade" id="orderModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
      :class="{ show: modalShow }"
  >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Для того, чтобы сделать заказ Вам нужно
            войти или зарегистрироваться
          </div>
          <div class="modal-footer">
            <div class="button button_order button_order_modal">
              Войти
            </div>
            <div class="button button_order button_order_modal" data-toggle="modal" data-target="#registrationModal">
              Зарегистрироваться
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Modal',
    

    props: ['modalShow']

  }
</script>
