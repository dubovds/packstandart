<template>
  <div id="app">
    <Navigation :auth='auth'></Navigation>
    <div class="content-wrapper">
      <router-view :auth.sync='auth'></router-view>
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
  },
  data(){
    return{
        auth: false
    }
  },
  computed: {
    // auth(){
    //   return false ;
    // }
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