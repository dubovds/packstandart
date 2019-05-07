<template>
  <div id="app">
    <Navigation></Navigation>

    <router-view></router-view>

    <Footer></Footer>
  </div>
</template>

<script>
  import Navigation from './components/Navigation.vue'
  import Footer from './components/Footer.vue'


export default {
  name: 'app',
  components: {
    Navigation,
    Footer
  }
}
</script>

<style>

</style>