<template>
  <section class="section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-12 col-md-11 col-12">
          <div class="form-block">
            <div class="title title_form">Оформить заказ</div>
            <div class="form__item">
              <select v-model="newOrder.order.company_uuid" class="select">
                <option value>Выбрать компанию</option>
                <option
                  v-for="(item) in allCompaniesInfo"
                  :key="item.uuid"
                  :value="item.uuid"
                >{{item.short_name}}</option>
              </select>
            </div>

            <div class="boxInfo__block">
              <div class="boxInfo__item" v-for="(item, index) in selected" v-bind:key="item.uuid">
                <div class="row align-items-center">
                  <div class="col-sm-2">
                    <img src="@/assets/images/box.png" alt />
                  </div>
                  <div class="col-sm-3">
                    <div class="boxInfo__name">{{item.name}}</div>
                  </div>
                  <div class="col-sm-2">
                    <div class="boxInfo__size">{{ item.width }}x{{ item.length}}x{{ item.height}}</div>
                  </div>
                  <div class="col-sm-4">
                    <input type="number" v-model="item.product_quantity" />
                    <span>шт</span>
                  </div>
                  <div class="col-sm-1">
                    <div class="del" v-on:click="delSelected(index)">
                      <img src="@/assets/images/del.png" alt />
                    </div>
                  </div>
                </div>
              </div>
              <div class="boxInfo__add-button-block" @click="show = !show">
                <div class="button button_add">Добавить коробку</div>
                <ul v-bind:class="{open: show}" class="boxInfo__add-list">
                  <li v-for="item in allBoxes" v-bind:key="item.uuid" v-on:click="checkBox(item)">
                    <input type="hidden" v-bind:value="item.uuid" />
                    <input type="hidden" v-bind:value="item.name" />
                    <input type="hidden" v-bind:value="item.width" />
                    <input type="hidden" v-bind:value="item.length" />
                    <input type="hidden" v-bind:value="item.height" />
                    {{item.name}}
                  </li>
                </ul>
              </div>
              <button v-on:click="addNewOrder" value class="button button_order">Оформить заказ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "checkout",

  data() {
    return {
      quantity: "",
      selected: [],
      show: false,
      product_quantity: "",
      newOrder: {
        person: localStorage.person_uuid,
        order: {
          company_uuid: null,
          order_details: []
        }
      }
    };
  },
  methods: {
    checkBox: function(item) {
      this.selected.push({
        s_product_uuid: item.uuid,
        name: item.name,
        width: item.width,
        length: item.length,
        height: item.height
      });
    },
    async addNewOrder() {
      for (var item of this.selected) {
        this.newOrder.order.order_details.push({
          product_uuid: item.s_product_uuid,
          quantity: item.product_quantity
        });
      }

      await this.$store.dispatch("addOrder", { newOrder: this.newOrder });
      this.selected = [];
      this.newOrder.order.order_details = [];
    },
    delSelected: function(index) {
      this.selected.splice(index, 1);
      this.newOrder.order.order_details.splice(index, 1);
    }
  },
  mounted() {
    this.$store.dispatch("getAllBoxes");
    this.$store.dispatch("getAllCompanies", {
      person_uuid: this.uuidPerson
    });
  },
  computed: {
    allBoxes() {
      return this.$store.getters.allBoxes;
    },
    allCompaniesInfo() {
      return this.$store.getters.allCompaniesInfo;
    },
    uuidPerson() {
      return this.$store.getters.uuidPerson;
    }
  }
};
</script>

<style scoped>
</style>
