<template>
  <section class="section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-12 col-md-8 col-12">
          <div class="form-block">
            <div class="title title_form">Справочик изделий</div>
            <div class="boxInfo__block">
              <div class="boxInfo__item" v-for="item in boxesForPerson" v-bind:key="item.uuid">
                <div class="row align-items-center">
                  <div class="col-sm-2">
                    <img src="@/assets/images/box.png" alt />
                  </div>
                  <div class="col-sm-3">
                    <input type="hidden" v-bind:value="item.uuid" />
                    <div class="boxInfo__name">{{ item.name }}</div>
                    <div class="boxInfo__submit">
                      Техкарта
                      <span class="text-success" v-if="item.submited">согласована</span>
                      <span class="text-danger" v-else>не согласована</span>
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="boxInfo__size">{{ item.width }}x{{ item.length}}x{{ item.height}}</div>
                  </div>
                  <div class="col-sm-5">
                    <button class="button button_brown" v-if="item.submited">В архив</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <button class="button button_registration">
                  <router-link :to="'/profile/card'">Оставить заявку на новую техкарту</router-link>
                </button>
              </div>
              <div class="col-6">
                <button class="button button_registration">
                  <router-link :to="'/profile/checkout'">Перейти к оформлению заказа</router-link>
                </button>
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
  name: "catalog",

  data() {
    return {};
  },
  methods: {},
  computed: {
    boxesForPerson() {
      return this.$store.getters.boxesForPerson;
    },
    uuidPerson() {
      return this.$store.getters.uuidPerson;
    }
  },
  mounted() {
    this.$store.dispatch("getPersonBoxes", { person_uuid: this.uuidPerson });
  }
};
</script>

<style scoped>
</style>
