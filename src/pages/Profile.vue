<template>
  <section class="section section_profile profile">
    <div class="container-fluid">
      <div class="row no-gutter">
        <div class="col-md-4">
          <NavigationProfile></NavigationProfile>
        </div>
        <div class="col-md-8">
          <div class="profile__content-section">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import NavigationProfile from '@/components/Navigation-profile.vue'

  export default{
    name: "profile",
    components:{
      NavigationProfile  
    },
    data(){
      return{}
    }
  }
</script>