<template>
  <div id="app">
    <Navigation></Navigation>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
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
  #app{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>