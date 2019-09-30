<template>
  <section class="section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-12 col-md-8 col-12">
          <div class="form-block">
            <div class="title title_form">Архив изделий</div>
            <div class="boxInfo__block">
              <div
                class="boxInfo__item"
                v-for="item in archiveBoxesForPerson"
                v-bind:key="item.uuid"
              >
                <div class="row align-items-center">
                  <div class="col-sm-2">
                    <img src="@/assets/images/box.png" alt />
                  </div>
                  <div class="col-sm-4">
                    <div class="boxInfo__name">{{ item.name }}</div>
                  </div>
                  <div class="col-sm-2">
                    <div class="boxInfo__size">{{ item.width }}x{{ item.length}}x{{ item.height}}</div>
                  </div>
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
  name: "archive",

  data() {
    return {};
  },
  computed: {
    archiveBoxesForPerson() {
      return this.$store.getters.archiveBoxesForPerson;
    },
    uuidPerson() {
      return this.$store.getters.uuidPerson;
    }
  },
  mounted() {
    this.$store.dispatch("getArchiveBoxes", {
      person_uuid: this.uuidPerson
    });
  }
};
</script>

<style scoped>
</style>
